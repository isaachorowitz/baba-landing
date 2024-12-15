import React from 'react';
import type { ConversationScenario } from '../SlotMachine/types';

interface TranslationResultProps {
  scenario: ConversationScenario;
}

export function TranslationResult({ scenario }: TranslationResultProps) {
  return (
    <div className="bg-white/5 rounded-lg p-6 space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-purple-300">Hebrew</p>
        <p className="text-xl font-bold" dir="rtl">
          {scenario.example}
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-purple-300">English</p>
        <p className="text-xl font-bold">{scenario.translation}</p>
      </div>
    </div>
  );
}