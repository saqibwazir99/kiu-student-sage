
import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start space-x-3 animate-fade-in">
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-green-200 p-1">
        <img 
          src="/lovable-uploads/9c9f161d-1b9e-4232-985e-1ed0b7568d59.png" 
          alt="KIU Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm border border-green-100">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};
