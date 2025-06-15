
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

interface ChatInlineLinkButtonProps {
  text: string;
  url: string;
  icon?: string;
  onClick?: (url: string, e?: React.MouseEvent) => void;
}

export const ChatInlineLinkButton: React.FC<ChatInlineLinkButtonProps> = ({
  text,
  url,
  icon,
  onClick,
}) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick?.(url, e);
      }}
      className="ml-2 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 text-sm font-medium transition-all duration-200 hover:scale-105 shadow-sm cursor-pointer inline-flex items-center px-3 gap-1"
      type="button"
      style={{ verticalAlign: "middle" }}
    >
      {icon === "file" && <FileText className="h-4 w-4 mr-1" />}
      {icon === "external" && <ExternalLink className="h-4 w-4 mr-1" />}
      <span>{text}</span>
    </Button>
  );
};
