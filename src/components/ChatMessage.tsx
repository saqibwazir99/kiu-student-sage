
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

  // Function to render text with hyperlinks
  const renderTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            onClick={(e) => handleLinkClick(part, e)}
            className="text-blue-600 underline hover:text-blue-800 cursor-pointer break-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  // Helper to wrap message text in a div that gives better list styling
  const renderStyledMessageContent = (text: string) => (
    <div
      // This class applies to the text content, controlling fonts, color, and also targetting <ul>, <li>, <ol> inside
      className="text-gray-800 leading-relaxed text-base whitespace-pre-wrap font-medium font-sans"
      dir={language === 'ur' ? 'rtl' : 'ltr'}
      // Styling for bullets/numbers in list
      style={{
        // fallback in case Inter isn't loaded
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <style>{`
        .chat-bubble-content ul, .chat-bubble-content ol {
          padding-left: 1.35em;
          margin-top: 0.15em;
          margin-bottom: 0.3em;
        }
        .chat-bubble-content li {
          margin-bottom: 0.18em;
          padding-left: 0.2em;
        }
        .chat-bubble-content ul {
          list-style-position: outside !important;
        }
      `}</style>
      {/* add a wrapper class for styling */}
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
            {/* font-sans uses Inter if loaded */}
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
                  {/* icon comes JUST before text with little to no extra gap */}
                  {link.icon === 'file' && <FileText className="h-4 w-4 mr-1" />}
                  {link.icon === 'external' && <ExternalLink className="h-4 w-4 mr-1" />}
                  {/* Place link text right after icon, minimal spacing */}
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
          {/* Make sure user messages can have list styling too */}
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

