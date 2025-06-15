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
 * - Shows all content as plain text, including `[link]` placeholders,
 *   to ensure faculty links are *not* rendered inline.
 * - Highlights arrow+url or plain url as before for convenience.
 */
export const ChatMessageContent: React.FC<Props> = ({
  message,
  language,
  onLinkClick,
  inlineLinkUrls,
}) => {
  // No longer replace [link] with buttons. Just render text and highlight URLs/arrows.

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

  // Only highlight links within the plain text, do not replace [link] blocks anywhere
  const renderTextOnly = (text: string) => {
    return renderLinksInPlainText(text, 0);
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
        /* New: add gap between list items (margin-bottom) */
        .chat-bubble-content li + li {
          margin-top: 0.5em !important;
        }
      `}</style>
      <span className="chat-bubble-content">
        {renderTextOnly(message.text)}
      </span>
    </div>
  );
};
