
import React from 'react';
import { RotateCcw, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  language: 'en' | 'ur';
  onLanguageChange: () => void;
  onRestart: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  language,
  onLanguageChange,
  onRestart,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
          <img 
            src="/lovable-uploads/9c9f161d-1b9e-4232-985e-1ed0b7568d59.png" 
            alt="KIU Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="font-semibold">KIU Assistant</h3>
          <p className="text-sm text-green-100">
            {language === 'en' ? 'Online • Ready to help' : 'آن لائن • مدد کے لیے تیار'}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onLanguageChange}
          className="text-white hover:bg-white hover:bg-opacity-20"
        >
          <Globe className="h-4 w-4 mr-1" />
          {language === 'en' ? 'اردو' : 'English'}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRestart}
          className="text-white hover:bg-white hover:bg-opacity-20"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
