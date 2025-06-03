
import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start space-x-3 animate-fade-in">
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-green-200">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=32&h=32&fit=crop&crop=center" 
          alt="KIU Logo" 
          className="w-full h-full object-cover"
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
