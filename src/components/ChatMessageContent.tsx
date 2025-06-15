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
  // Improved: Split text on single line breaks that appear to start new bullets
  // and render each as a separate <div> for better spacing if not using Markdown.

  // This function processes the text to separate "bullet" styles, e.g. lines that start
  // with "•", "-", "1." etc., or a capitalized label followed by colon.
  function splitBulletBlocks(text: string) {
    const lines = text.split('\n');
    const blocks: string[] = [];
    let current = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Detect "bullet" or "item" - starts with number., dash, or ALL CAPS/LABEL:
      const isListItem = /^(\d+\.\s+|-\s+|•\s+|[A-Za-z ]+?:)/.test(line);

      if (isListItem && current) {
        blocks.push(current.trim());
        current = line;
      } else if (isListItem) {
        current = line;
      } else if (line === '') {
        if (current) blocks.push(current.trim());
        current = '';
      } else {
        // Append to previous line
        current += (current ? ' ' : '') + line;
      }
    }
    if (current) blocks.push(current.trim());
    return blocks;
  }

  // Only highlight links within the plain text
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

  // The new renderer: visually separates blocks with spacing
  const renderTextWithSpacing = (text: string) => {
    const blocks = splitBulletBlocks(text);
    return blocks.map((block, idx) => (
      <div
        key={idx}
        className="mb-3"
        style={{
          lineHeight: 1.75,
          fontWeight: /^[A-Za-z ]+?:/.test(block) ? 500 : 400,
        }}
      >
        {renderLinksInPlainText(block, idx)}
      </div>
    ));
  };

  return (
    <div
      className="text-gray-800 leading-relaxed text-base whitespace-pre-wrap font-medium font-sans"
      dir={language === "ur" ? "rtl" : "ltr"}
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        .chat-bubble-content p {
          margin-bottom: 1em !important;
        }
        .chat-bubble-content ul,
        .chat-bubble-content ol {
          padding-left: 2em !important;
          margin-top: 1.4em !important;
          margin-bottom: 1em !important;
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
        .chat-bubble-content li + li {
          margin-top: 0.5em !important;
        }
        .chat-bubble-content h1,
        .chat-bubble-content h2,
        .chat-bubble-content h3,
        .chat-bubble-content h4 {
          margin-top: 1em !important;
          margin-bottom: 0.75em !important;
          font-weight: 700;
        }
        /* Gap before/after list relative to text/blocks */
        .chat-bubble-content * + ul,
        .chat-bubble-content * + ol {
          margin-top: 1em !important;
        }
        .chat-bubble-content ul + *,
        .chat-bubble-content ol + * {
          margin-top: 1em !important;
        }
        /* Extra: reduce run-together look if parser outputs multiple p or headings in succession */
        .chat-bubble-content p + p {
          margin-top: 0.5em !important;
        }
        .chat-bubble-content h1 + p,
        .chat-bubble-content h2 + p,
        .chat-bubble-content h3 + p,
        .chat-bubble-content h4 + p {
          margin-top: 0.5em !important;
        }
      `}</style>
      <span className="chat-bubble-content">
        {renderTextWithSpacing(message.text)}
      </span>
    </div>
  );
};
