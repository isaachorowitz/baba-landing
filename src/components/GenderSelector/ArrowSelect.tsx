import React from 'react';
import { ChevronLeft, ChevronRight, User, Users } from 'lucide-react';

interface ArrowSelectProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  label: string;
}

export function ArrowSelect({ value, options, onChange, label }: ArrowSelectProps) {
  const currentIndex = options.indexOf(value);

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + options.length) % options.length;
    onChange(options[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % options.length;
    onChange(options[newIndex]);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-purple-300">{label}</label>
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Previous option"
        >
          <ChevronLeft className="w-5 h-5 text-purple-300" />
        </button>

        <div className="flex-1 flex items-center justify-center gap-2 p-3 bg-white/5 rounded-lg border border-purple-500/20">
          {value.includes('Group') ? (
            <Users className="w-5 h-5 text-purple-300" />
          ) : (
            <User className="w-5 h-5 text-purple-300" />
          )}
          <span className="text-purple-300 font-medium">{value}</span>
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Next option"
        >
          <ChevronRight className="w-5 h-5 text-purple-300" />
        </button>
      </div>
    </div>
  );
}