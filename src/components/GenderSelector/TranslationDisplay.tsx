import React from 'react';
import type { ConversationScenario } from '../../types';

interface TranslationDisplayProps {
  scenario: ConversationScenario;
}

export function TranslationDisplay({ scenario }: TranslationDisplayProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 rounded-lg p-4 sm:p-6 space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-purple-300">Hebrew</p>
          <p className="text-xl sm:text-2xl font-bold text-center" dir="rtl">
            {scenario.example}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-purple-300">English</p>
          <p className="text-xl sm:text-2xl font-bold text-center">
            {scenario.translation}
          </p>
        </div>
      </div>
    </div>
  );
}