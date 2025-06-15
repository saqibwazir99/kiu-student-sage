import React from 'react';
import { User, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatMessageContent } from './ChatMessageContent';
import { ChatInlineLinkButton } from './ChatInlineLinkButton';

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

  // Track which links are rendered inline so we never show them twice.
  const inlineLinkUrls = new Set<string>();

  if (message.isBot) {
    // We'll use ChatMessageContent (which will also add links to inlineLinkUrls)
    const linksNotUsedInline = (message.links || []).filter(
      (link) => !inlineLinkUrls.has(link.url)
    );

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
            <ChatMessageContent
              message={message}
              language={language}
              onLinkClick={handleLinkClick}
              inlineLinkUrls={inlineLinkUrls}
            />
          </div>
          {linksNotUsedInline.length > 0 && (
            <div className="space-y-2 ml-2">
              {linksNotUsedInline.map((link, index) => (
                <ChatInlineLinkButton
                  key={index}
                  text={link.text}
                  url={link.url}
                  icon={link.icon}
                  onClick={handleLinkClick}
                />
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
          <ChatMessageContent
            message={message}
            language={language}
            onLinkClick={handleLinkClick}
            inlineLinkUrls={inlineLinkUrls}
          />
        </div>
        <p className="text-xs text-gray-400 text-right mr-2 font-medium">{formatTime(message.timestamp)}</p>
      </div>
      <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-gray-200">
        <User className="h-5 w-5 text-white" />
      </div>
    </div>
  );
};
