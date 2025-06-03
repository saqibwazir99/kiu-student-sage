
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

  const handleLinkClick = (url: string) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      console.log(`Action: ${url}`);
    }
  };

  if (message.isBot) {
    return (
      <div className="flex items-start space-x-3 animate-fade-in">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-green-200">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=32&h=32&fit=crop&crop=center" 
            alt="KIU Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm border border-green-100">
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap" dir={language === 'ur' ? 'rtl' : 'ltr'}>
              {message.text}
            </p>
          </div>
          
          {message.links && message.links.length > 0 && (
            <div className="space-y-2">
              {message.links.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleLinkClick(link.url)}
                  className="border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 text-sm"
                >
                  {link.icon === 'file' && <FileText className="h-3 w-3 mr-1" />}
                  {link.icon === 'external' && <ExternalLink className="h-3 w-3 mr-1" />}
                  {link.text}
                </Button>
              ))}
            </div>
          )}
          
          <p className="text-xs text-gray-500 ml-1">{formatTime(message.timestamp)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start space-x-3 justify-end animate-fade-in">
      <div className="flex-1 space-y-1">
        <div className="bg-green-600 text-white rounded-2xl rounded-tr-md p-3 shadow-sm ml-12">
          <p className="leading-relaxed" dir={language === 'ur' ? 'rtl' : 'ltr'}>
            {message.text}
          </p>
        </div>
        <p className="text-xs text-gray-500 text-right mr-1">{formatTime(message.timestamp)}</p>
      </div>
      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
        <User className="h-4 w-4 text-white" />
      </div>
    </div>
  );
};
