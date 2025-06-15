
import React from "react";
import { ChatInlineLinkButton } from "./ChatInlineLinkButton";

interface LinkItem {
  text: string;
  url: string;
  icon?: string;
}
interface MessageLike {
  text: string;
  isBot: boolean;
  links?: LinkItem[];
}
interface Props {
  message: MessageLike;
  language: "en" | "ur";
  onLinkClick: (url: string, e?: React.MouseEvent) => void;
  inlineLinkUrls: Set<string>;
}

/**
 * - Replaces "Faculty of ...: 👉 [link]" (or similar) with buttons (and marks them as inline)
 * - Also highlights arrow+url or bare url
 * - For non-bot messages, just plain text/url detection
 */
export const ChatMessageContent: React.FC<Props> = ({
  message,
  language,
  onLinkClick,
  inlineLinkUrls,
}) => {
  // Helper for inline links
  const findLinkForLabel = (label: string, links: LinkItem[]) => {
    const found =
      links.find(
        (l) =>
          l.text &&
          (l.text.toLowerCase().includes(label.toLowerCase()) ||
            label.toLowerCase().includes(l.text.toLowerCase()))
      ) || links[0];
    if (found) inlineLinkUrls.add(found.url);
    return found;
  };

  // Parses content and replaces [link] placeholders with buttons for matching link
  const renderTextWithLinks = (text: string) => {
    // Match: e.g. "Faculty of Something: 👉 [link]"
    const facultyLinkRegex = /([^\n:]+):?\s*👉\s*\[link\]/gi;
    let parts: React.ReactNode[] = [];
    let lastIdx = 0;
    let match;
    let idx = 0;
    while (
      message.isBot &&
      message.links &&
      (match = facultyLinkRegex.exec(text)) !== null
    ) {
      const before = text.slice(lastIdx, match.index);
      if (before) parts.push(before);

      const label = match[1].trim();
      const foundLink = findLinkForLabel(label, message.links);
      if (foundLink) {
        parts.push(
          <ChatInlineLinkButton
            key={`inline-faculty-link-${idx++}`}
            text={foundLink.text}
            url={foundLink.url}
            icon={foundLink.icon}
            onClick={onLinkClick}
          />
        );
      } else {
        parts.push(" [link]");
      }
      lastIdx = facultyLinkRegex.lastIndex;
    }
    if (lastIdx < text.length) {
      parts.push(text.slice(lastIdx));
    }

    return parts.map((part, i) =>
      typeof part === "string"
        ? renderLinksInPlainText(part, i)
        : part
    );
  };

  // Highlights 👉 [url] and also plain urls
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
        // Regular urls in beforeText
        const beforeText = text.substring(lastIndex, match.index);
        beforeText.split(urlRegex).forEach((chunk, i) => {
          if (urlRegex.test(chunk)) {
            parts.push(
              <a
                key={`url-pre-${nodeIdx}-${idx++}`}
                href={chunk}
                onClick={(e) => onLinkClick(chunk, e)}
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
      // Arrow+url thing
      const url = match[2];
      parts.push(
        <span key={`arrow-link-${nodeIdx}-${match.index}`}>
          <span className="font-semibold select-none" aria-label="link">
            {match[1]}
          </span>
          <a
            href={url}
            onClick={(e) => onLinkClick(url, e)}
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

    if (lastIndex < text.length) {
      const rest = text.substring(lastIndex);
      rest.split(urlRegex).forEach((chunk, i) => {
        if (urlRegex.test(chunk)) {
          parts.push(
            <a
              key={`url-post-${nodeIdx}-${idx++}`}
              href={chunk}
              onClick={(e) => onLinkClick(chunk, e)}
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

  // Renders text, including styled lists
  return (
    <div
      className="text-gray-800 leading-relaxed text-base whitespace-pre-wrap font-medium font-sans"
      dir={language === "ur" ? "rtl" : "ltr"}
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
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
        {renderTextWithLinks(message.text)}
      </span>
    </div>
  );
};
