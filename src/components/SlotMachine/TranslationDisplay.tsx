import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { ConversationScenario } from './types';

interface TranslationDisplayProps {
  scenario: ConversationScenario;
  className?: string;
}

export function TranslationDisplay({ scenario, className = '' }: TranslationDisplayProps) {
  return (
    <div className={`space-y-6 text-center ${className}`}>
      <div className="flex items-center justify-center gap-4 text-lg font-semibold">
        <span className="text-purple-400">{scenario.from}</span>
        <ArrowRightIcon className="w-5 h-5 text-purple-300" />
        <span className="text-purple-400">{scenario.to}</span>
      </div>
      
      <div className="bg-white/5 rounded-lg p-6 space-y-6">
        <div className="flex flex-col items-center">
          <p className="text-sm text-purple-300 mb-2">Hebrew</p>
          <p className="text-xl font-bold text-center w-full" dir="rtl">{scenario.example}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-purple-300 mb-2">English</p>
          <p className="text-xl font-bold text-center">{scenario.translation}</p>
        </div>
      </div>
    </div>
  );
}