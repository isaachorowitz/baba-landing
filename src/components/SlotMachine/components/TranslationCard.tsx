import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { ConversationScenario } from '../types';
import { GenderIcon } from './GenderIcon';

interface TranslationCardProps {
  scenario: ConversationScenario;
  isTransitioning: boolean;
}

export function TranslationCard({ scenario, isTransitioning }: TranslationCardProps) {
  return (
    <div
      className={`transition-all duration-500 ${
        isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
      }`}
    >
      <div className="flex items-center justify-center gap-4 text-lg font-semibold mb-6">
        <div className="flex items-center gap-2">
          <GenderIcon type={scenario.from} isActive={true} />
          <span className="text-purple-400">{scenario.from}</span>
        </div>
        <ArrowRightIcon className="w-5 h-5 text-purple-300" />
        <div className="flex items-center gap-2">
          <GenderIcon type={scenario.to} isActive={true} />
          <span className="text-purple-400">{scenario.to}</span>
        </div>
      </div>

      <div className="bg-white/5 rounded-lg p-6 space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-purple-300">Hebrew</p>
          <p className="text-xl font-bold" dir="rtl">{scenario.example}</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-purple-300">English</p>
          <p className="text-xl font-bold">{scenario.translation}</p>
        </div>
      </div>
    </div>
  );
}