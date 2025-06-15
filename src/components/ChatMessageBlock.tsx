
import React from "react";
import { LinkItem, getUrlForLabel } from "./chatMessageUtils";
import { ChatMessageLink } from "./ChatMessageLink";

interface ChatMessageBlockProps {
  block: string;
  nodeIdx: number;
  links?: LinkItem[];
  onLinkClick: (url: string, e?: React.MouseEvent) => void;
  inlineLinkUrls: Set<string>;
}

/**
 * Renders a single block of text, converting 👉 [label], 👉 url, and plain urls to clickable links.
 */
export const ChatMessageBlock: React.FC<ChatMessageBlockProps> = ({
  block,
  nodeIdx,
  links,
  onLinkClick,
  inlineLinkUrls,
}) => {
  const arrowLabelPattern = /(👉)\s*\[([^\]]+)\]/g;
  const arrowLinkPattern = /(👉)\s*(https?:\/\/[^\s\]]+)/g;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let idx = 0;

  // 👉 [label]
  while ((match = arrowLabelPattern.exec(block)) !== null) {
    if (match.index > lastIndex) {
      const before = block.substring(lastIndex, match.index);
      before.split(urlRegex).forEach((chunk) => {
        if (urlRegex.test(chunk)) {
          // Plain URL
          parts.push(
            <ChatMessageLink
              key={`url-arlabel-pre-${nodeIdx}-${idx++}`}
              link={{ url: chunk, text: chunk }}
              onLinkClick={onLinkClick}
            />
          );
        } else if (chunk) {
          parts.push(chunk);
        }
      });
    }

    // [label] part
    const arrow = match[1];
    const label = match[2];
    const foundLink = getUrlForLabel(label, links);

    if (foundLink) {
      inlineLinkUrls?.add(foundLink.url);
      parts.push(
        <span key={`arrow-label-link-${nodeIdx}-${match.index}`}>
          <span className="font-semibold select-none" aria-label="link">{arrow}</span>
          <ChatMessageLink
            link={foundLink}
            label={label}
            onLinkClick={onLinkClick}
            className="ml-1 text-blue-600 underline hover:text-blue-800 cursor-pointer break-all font-medium"
          />
        </span>
      );
    } else {
      // Show as plain text
      parts.push(
        <span key={`arrow-label-nolink-${nodeIdx}-${match.index}`}>
          <span className="font-semibold select-none" aria-label="link">{arrow}</span>
          <span className="ml-1">{label}</span>
        </span>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  // 👉 url
  let restText = block.substring(lastIndex);
  lastIndex = 0;
  while ((match = arrowLinkPattern.exec(restText)) !== null) {
    if (match.index > lastIndex) {
      const before = restText.substring(lastIndex, match.index);
      before.split(urlRegex).forEach((chunk) => {
        if (urlRegex.test(chunk)) {
          parts.push(
            <ChatMessageLink
              key={`url-arrowurl-pre-${nodeIdx}-${idx++}`}
              link={{ url: chunk, text: chunk }}
              onLinkClick={onLinkClick}
            />
          );
        } else if (chunk) {
          parts.push(chunk);
        }
      });
    }
    const url = match[2];
    parts.push(
      <span key={`arrow-link-${nodeIdx}-${match.index}`}>
        <span className="font-semibold select-none" aria-label="link">{match[1]}</span>
        <ChatMessageLink
          link={{ url, text: url }}
          onLinkClick={onLinkClick}
          className="ml-1 text-blue-600 underline hover:text-blue-800 cursor-pointer break-all font-medium"
        />
      </span>
    );
    lastIndex = match.index + match[0].length;
  }

  // Any plain URLs left
  if (lastIndex < restText.length) {
    const rest = restText.substring(lastIndex);
    rest.split(urlRegex).forEach((chunk) => {
      if (urlRegex.test(chunk)) {
        parts.push(
          <ChatMessageLink
            key={`url-remainder-${nodeIdx}-${idx++}`}
            link={{ url: chunk, text: chunk }}
            onLinkClick={onLinkClick}
          />
        );
      } else if (chunk) {
        parts.push(chunk);
      }
    });
  }

  return (
    <div
      className="mb-3"
      style={{
        lineHeight: 1.75,
        fontWeight: /^[A-Za-z ]+?:/.test(block) ? 500 : 400,
      }}
    >
      {parts}
    </div>
  );
};
