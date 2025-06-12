
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
      <div className="flex items-start space-x-4 animate-fade-in mb-6">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-200 p-1">
          <img 
            src="/lovable-uploads/9c9f161d-1b9e-4232-985e-1ed0b7568d59.png" 
            alt="KIU Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 space-y-3 max-w-4xl">
          <div className="bg-white rounded-3xl rounded-tl-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
            <p className="text-gray-800 leading-relaxed text-base whitespace-pre-wrap font-medium" dir={language === 'ur' ? 'rtl' : 'ltr'}>
              {message.text}
            </p>
          </div>
          
          {message.links && message.links.length > 0 && (
            <div className="space-y-2 ml-2">
              {message.links.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleLinkClick(link.url)}
                  className="border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 text-sm font-medium transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  {link.icon === 'file' && <FileText className="h-4 w-4 mr-2" />}
                  {link.icon === 'external' && <ExternalLink className="h-4 w-4 mr-2" />}
                  {link.text}
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
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-3xl rounded-tr-lg p-6 shadow-md ml-16 hover:shadow-lg transition-shadow duration-200">
          <p className="leading-relaxed text-base font-medium" dir={language === 'ur' ? 'rtl' : 'ltr'}>
            {message.text}
          </p>
        </div>
        <p className="text-xs text-gray-400 text-right mr-2 font-medium">{formatTime(message.timestamp)}</p>
      </div>
      <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-gray-200">
        <User className="h-5 w-5 text-white" />
      </div>
    </div>
  );
};
