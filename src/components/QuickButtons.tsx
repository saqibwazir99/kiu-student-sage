
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuickButtonsProps {
  buttons: Array<{ text: string; action: string }>;
  onButtonClick: (action: string) => void;
  language: 'en' | 'ur';
}

export const QuickButtons: React.FC<QuickButtonsProps> = ({ buttons, onButtonClick, language }) => {
  return (
    <div className="flex flex-wrap gap-3 mt-4 ml-14 mb-2">
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          onClick={() => onButtonClick(button.action)}
          className="border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 text-sm font-medium transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md rounded-full px-4 py-2"
          dir={language === 'ur' ? 'rtl' : 'ltr'}
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
};
