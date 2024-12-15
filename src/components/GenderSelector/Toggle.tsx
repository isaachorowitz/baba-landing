import React from 'react';
import { User } from 'lucide-react';
import { SpeakerType } from '../../types';

interface ToggleProps {
  value: SpeakerType;
  onChange: (value: SpeakerType) => void;
}

export function Toggle({ value, onChange }: ToggleProps) {
  return (
    <div className="flex items-center gap-4 p-2 bg-white/5 rounded-lg">
      <button
        onClick={() => onChange('Male')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
          value === 'Male'
            ? 'bg-purple-500/20 text-purple-300'
            : 'text-gray-400 hover:text-purple-300'
        }`}
      >
        <User className="w-5 h-5" />
        Male
      </button>
      <button
        onClick={() => onChange('Female')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
          value === 'Female'
            ? 'bg-purple-500/20 text-purple-300'
            : 'text-gray-400 hover:text-purple-300'
        }`}
      >
        <User className="w-5 h-5" />
        Female
      </button>
    </div>
  );
}