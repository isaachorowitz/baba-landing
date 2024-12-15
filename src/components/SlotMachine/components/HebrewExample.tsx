import React from 'react';

interface HebrewExampleProps {
  example: string;
  translation: string;
  isSpinning: boolean;
  isVisible?: boolean;
}

export function HebrewExample({ 
  example, 
  translation, 
  isSpinning,
  isVisible = true 
}: HebrewExampleProps) {
  return (
    <div 
      className={`text-center transition-all duration-400 ease-in-out
        ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
    >
      <div className="bg-white/5 rounded-lg p-4 mt-4 space-y-4">
        <div>
          <p className="text-lg font-semibold text-purple-300 mb-2">Hebrew:</p>
          <p className="text-xl font-bold text-white" dir="rtl">
            {example}
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold text-purple-300 mb-2">English:</p>
          <p className="text-xl font-bold text-white">
            {translation}
          </p>
        </div>
      </div>
    </div>
  );
}