
import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start space-x-4 animate-fade-in mb-6">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-200 p-1">
        <img 
          src="/lovable-uploads/9c9f161d-1b9e-4232-985e-1ed0b7568d59.png" 
          alt="KIU Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="bg-white rounded-3xl rounded-tl-lg p-6 shadow-md border border-gray-100 max-w-24">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};
