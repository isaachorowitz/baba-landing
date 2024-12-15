import React from 'react';
import { User, Users } from 'lucide-react';

interface GenderSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export function GenderSelect({ label, value, onChange, options }: GenderSelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-purple-300">{label}</label>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition-all duration-300
              ${value === option
                ? 'bg-purple-500/20 border-purple-500 text-purple-300'
                : 'border-purple-500/20 hover:border-purple-500/50'
              }`}
          >
            {option.includes('Group') ? (
              <Users className="w-5 h-5" />
            ) : (
              <User className="w-5 h-5" />
            )}
            <span>{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}