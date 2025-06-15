import React from "react";
import { ChatInlineLinkButton } from "./ChatInlineLinkButton";
import { ChatMessageBlock } from "./ChatMessageBlock";
import { splitBulletBlocks } from "./chatMessageUtils";

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
  // The new renderer: visually separates blocks with spacing
  const renderTextWithSpacing = (text: string) => {
    const blocks = splitBulletBlocks(text);
    return blocks.map((block, idx) => (
      <ChatMessageBlock
        key={idx}
        block={block}
        nodeIdx={idx}
        links={message.links}
        onLinkClick={onLinkClick}
        inlineLinkUrls={inlineLinkUrls}
      />
    ));
  };

  return (
    <div
      className="text-gray-800 leading-relaxed text-base whitespace-pre-wrap font-medium font-sans"
      dir={language === "ur" ? "rtl" : "ltr"}
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>
        {`
        .chat-bubble-content p { margin-bottom: 1em !important; }
        .chat-bubble-content ul,
        .chat-bubble-content ol {
          padding-left: 2em !important;
          margin-top: 1.4em !important;
          margin-bottom: 1em !important;
        }
        .chat-bubble-content ul { list-style-type: disc !important; list-style-position: outside !important; }
        .chat-bubble-content ol { list-style-type: decimal !important; list-style-position: outside !important; }
        .chat-bubble-content li { margin-bottom: 0.75em !important; padding-left: 0.20em; }
        .chat-bubble-content li + li { margin-top: 0.5em !important; }
        .chat-bubble-content h1,
        .chat-bubble-content h2,
        .chat-bubble-content h3,
        .chat-bubble-content h4 {
          margin-top: 1em !important;
          margin-bottom: 0.75em !important;
          font-weight: 700;
        }
        .chat-bubble-content * + ul,
        .chat-bubble-content * + ol { margin-top: 1em !important; }
        .chat-bubble-content ul + *,
        .chat-bubble-content ol + * { margin-top: 1em !important; }
        .chat-bubble-content p + p { margin-top: 0.5em !important; }
        .chat-bubble-content h1 + p,
        .chat-bubble-content h2 + p,
        .chat-bubble-content h3 + p,
        .chat-bubble-content h4 + p { margin-top: 0.5em !important; }
        `}
      </style>
      <span className="chat-bubble-content">
        {renderTextWithSpacing(message.text)}
      </span>
    </div>
  );
};
