
import React from 'react';
import { User, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  buttons?: Array<{ text: string; action: string }>;
  links?: Array<{ text: string; url: string; icon?: string }>;
}

interface ChatMessageProps {
  message: Message;
  language: 'en' | 'ur';
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, language }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleLinkClick = (url: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    console.log('Link clicked:', url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Helper: Find a suitable link by (partial) label matching actual message text 
  const findLinkForLabel = (label: string, links: NonNullable<Message["links"]>) => {
    // Try direct match, or "Faculty of Life Sciences" in the link.text
    return (
      links.find(
        (l) =>
          l.text &&
          (l.text.toLowerCase().includes(label.toLowerCase()) ||
            label.toLowerCase().includes(l.text.toLowerCase()))
      ) || links[0] // fallback: just return first link for robustness
    );
  };

  // Enhanced function to render text, handling:
  //  1. [some text]: 👉 [link]  (placeholder that we resolve using links)
  //  2. 👉 immediately followed by a url or [url]
  //  3. detected hyperlinks
  //  4. gracefully handle ordinary plain text
  const renderTextWithLinks = (text: string) => {
    if (message.isBot && message.links && message.links.length > 0) {
      // Replace each "Label: 👉 [link]" or "Label 👉 [link]" with Button for matching link
      // Also support just "👉 [link]" on line
      const facultyLinkRegex = /([^\n:]+):?\s*👉\s*\[link\]/gi;

      let parts: React.ReactNode[] = [];
      let lastIdx = 0;
      let match;
      let idx = 0;
      while ((match = facultyLinkRegex.exec(text)) !== null) {
        const before = text.slice(lastIdx, match.index);
        if (before) parts.push(before);

        // Match[1] is the faculty label e.g. "Faculty of Life Sciences"
        const label = match[1].trim();
        const foundLink = findLinkForLabel(label, message.links);
        if (foundLink) {
          parts.push(
            <Button
              key={`inline-faculty-link-${idx++}`}
              variant="outline"
              size="sm"
              onClick={(e) => handleLinkClick(foundLink.url, e)}
              className="ml-2 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 text-sm font-medium transition-all duration-200 hover:scale-105 shadow-sm cursor-pointer inline-flex items-center px-3 gap-1"
              type="button"
              style={{ verticalAlign: 'middle' }}
            >
              {foundLink.icon === 'file' && <FileText className="h-4 w-4 mr-1" />}
              {foundLink.icon === 'external' && <ExternalLink className="h-4 w-4 mr-1" />}
              <span>{foundLink.text}</span>
            </Button>
          );
        } else {
          // fallback: just show placeholder text
          parts.push(" [link]");
        }
        lastIdx = facultyLinkRegex.lastIndex;
      }
      if (lastIdx < text.length) {
        parts.push(text.slice(lastIdx));
      }

      // Now, for the rest of the text, do standard link rendering. (Some duplication from before, but this is for clarity.)
      return parts.map((part, i) =>
        typeof part === "string"
          ? renderLinksInPlainText(part, i)
          : part
      );
    } else {
      // No special [link] handling needed, just render normally.
      return renderLinksInPlainText(text, 0);
    }
  };

  // Helper: For any plain text, render detected "arrow+url" and ordinary urls as links
  const renderLinksInPlainText = (text: string, nodeIdx: number) => {
    const arrowLinkPattern = /(👉)\s*(?:\[)?(https?:\/\/[^\]\s]+)(?:\])?/g;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts: React.ReactNode[] = [];

    let lastIndex = 0;
    let match;
    let idx = 0;

    // For every "👉 [url]" or "👉 url"
    while ((match = arrowLinkPattern.exec(text)) !== null) {
      if (match.index > lastIndex) {
        // Handle regular links in the text before the "👉"
        const beforeText = text.substring(lastIndex, match.index);
        beforeText.split(urlRegex).forEach((chunk, i) => {
          if (urlRegex.test(chunk)) {
            parts.push(
              <a
                key={`url-pre-${nodeIdx}-${idx++}`}
                href={chunk}
                onClick={(e) => handleLinkClick(chunk, e)}
                className="text-blue-600 underline hover:text-blue-800 cursor-pointer break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {chunk}
              </a>
            );
          } else if (chunk) {
            parts.push(chunk);
          }
        });
      }

      // Push hand arrow and link together
      const url = match[2];
      parts.push(
        <span key={`arrow-link-${nodeIdx}-${match.index}`}>
          <span className="font-semibold select-none" aria-label="link">{match[1]}</span>
          <a
            href={url}
            onClick={(e) => handleLinkClick(url, e)}
            className="ml-1 text-blue-600 underline hover:text-blue-800 cursor-pointer break-all font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            {url}
          </a>
        </span>
      );
      lastIndex = match.index + match[0].length;
    }

    // Any remaining text after the last arrow+link
    if (lastIndex < text.length) {
      const rest = text.substring(lastIndex);
      rest.split(urlRegex).forEach((chunk, i) => {
        if (urlRegex.test(chunk)) {
          parts.push(
            <a
              key={`url-post-${nodeIdx}-${idx++}`}
              href={chunk}
              onClick={(e) => handleLinkClick(chunk, e)}
              className="text-blue-600 underline hover:text-blue-800 cursor-pointer break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {chunk}
            </a>
          );
        } else if (chunk) {
          parts.push(chunk);
        }
      });
    }

    return parts;
  };

  // More attractive, well-indented lists (bullets, numbers, with gap before and between items)
  const renderStyledMessageContent = (text: string) => (
    <div
      className="text-gray-800 leading-relaxed text-base whitespace-pre-wrap font-medium font-sans"
      dir={language === 'ur' ? 'rtl' : 'ltr'}
      style={{
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <style>{`
        .chat-bubble-content ul, .chat-bubble-content ol {
          padding-left: 2em !important;
          margin-top: 1.4em !important;
          margin-bottom: 0.7em !important;
        }
        .chat-bubble-content ul {
          list-style-type: disc !important;
          list-style-position: outside !important;
        }
        .chat-bubble-content ol {
          list-style-type: decimal !important;
          list-style-position: outside !important;
        }
        .chat-bubble-content li {
          margin-bottom: 0.75em !important;
          padding-left: 0.20em;
        }
      `}</style>
      <span className="chat-bubble-content">
        {renderTextWithLinks(text)}
      </span>
    </div>
  );

  if (message.isBot) {
    return (
      <div className="flex items-start space-x-4 animate-fade-in mb-6">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-200 p-1">
          <img 
            src="/lovable-uploads/9c9f161d-1b9e-4232-985e-1ed0b7568d59.png" 
            alt="KIU Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 space-y-3 max-w-4xl">
          <div className="bg-gradient-to-br from-green-100 via-green-50 to-white rounded-3xl rounded-tl-lg p-6 shadow-md border border-green-100 hover:shadow-lg transition-shadow duration-200 font-sans">
            {renderStyledMessageContent(message.text)}
          </div>
          {message.links && message.links.length > 0 && (
            <div className="space-y-2 ml-2">
              {message.links.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleLinkClick(link.url);
                  }}
                  className="border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 text-sm font-medium transition-all duration-200 hover:scale-105 shadow-sm cursor-pointer inline-flex items-center px-3 gap-1"
                  type="button"
                >
                  {link.icon === 'file' && <FileText className="h-4 w-4 mr-1" />}
                  {link.icon === 'external' && <ExternalLink className="h-4 w-4 mr-1" />}
                  <span className="align-middle">{link.text}</span>
                </Button>
              ))}
            </div>
          )}
          <p className="text-xs text-gray-400 ml-2 font-medium">{formatTime(message.timestamp)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start space-x-4 justify-end animate-fade-in mb-6">
      <div className="flex-1 space-y-2 max-w-3xl">
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-3xl rounded-tr-lg p-6 shadow-md ml-16 hover:shadow-lg transition-shadow duration-200 font-sans">
          {renderStyledMessageContent(message.text)}
        </div>
        <p className="text-xs text-gray-400 text-right mr-2 font-medium">{formatTime(message.timestamp)}</p>
      </div>
      <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-gray-200">
        <User className="h-5 w-5 text-white" />
      </div>
    </div>
  );
};
