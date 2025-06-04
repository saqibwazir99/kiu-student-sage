
import React, { useRef } from 'react';
import { Send, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onHumanSupport: () => void;
  language: 'en' | 'ur';
}

export const ChatInput: React.FC<ChatInputProps> = ({
  inputValue,
  onInputChange,
  onSendMessage,
  onHumanSupport,
  language,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <div className="flex space-x-2">
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={
            language === 'en' 
              ? "Type your message..." 
              : "اپنا پیغام ٹائپ کریں..."
          }
          className="flex-1 border-green-200 focus:border-green-500 focus:ring-green-500"
          dir={language === 'ur' ? 'rtl' : 'ltr'}
        />
        <Button
          onClick={onSendMessage}
          disabled={!inputValue.trim()}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-2 flex items-center justify-center space-x-4 text-xs text-gray-500">
        <button 
          className="flex items-center space-x-1 hover:text-green-600 transition-colors"
          onClick={onHumanSupport}
        >
          <Phone className="h-3 w-3" />
          <span>{language === 'en' ? 'Human Support' : 'انسانی مدد'}</span>
        </button>
        <span>•</span>
        <span>{language === 'en' ? 'Powered by KIU AI' : 'KIU AI کی طرف سے'}</span>
      </div>
    </div>
  );
};
