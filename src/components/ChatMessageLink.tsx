
import React from "react";
import { LinkItem } from "./chatMessageUtils";

interface ChatMessageLinkProps {
  link: LinkItem;
  label?: string;
  onLinkClick: (url: string, e?: React.MouseEvent) => void;
  className?: string;
}

/** Renders an inline clickable link with consistent styling */
export const ChatMessageLink: React.FC<ChatMessageLinkProps> = ({
  link,
  label,
  onLinkClick,
  className,
}) => (
  <a
    href={link.url}
    onClick={(e) => onLinkClick(link.url, e)}
    className={className || "text-blue-600 underline hover:text-blue-800 cursor-pointer break-all font-medium"}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label || link.text || link.url}
  </a>
);
