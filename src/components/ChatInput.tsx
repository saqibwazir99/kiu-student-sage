
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
    <div className="p-6 bg-white border-t border-gray-100 rounded-b-2xl">
      <div className="flex space-x-3">
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={
            language === 'en' 
              ? "Ask me anything about KIU..." 
              : "KIU کے بارے میں کچھ بھی پوچھیں..."
          }
          className="flex-1 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-full px-6 py-3 text-base shadow-sm"
          dir={language === 'ur' ? 'rtl' : 'ltr'}
        />
        <Button
          onClick={onSendMessage}
          disabled={!inputValue.trim()}
          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
      <div className="mt-3 flex items-center justify-center space-x-6 text-xs text-gray-500">
        <button 
          className="flex items-center space-x-2 hover:text-green-600 transition-colors font-medium"
          onClick={onHumanSupport}
        >
          <Phone className="h-4 w-4" />
          <span>{language === 'en' ? 'Contact Support' : 'سپورٹ سے رابطہ'}</span>
        </button>
        <span className="text-gray-300">•</span>
        <span className="font-medium">{language === 'en' ? 'Powered by KIU AI' : 'KIU AI کی طرف سے'}</span>
      </div>
    </div>
  );
};
