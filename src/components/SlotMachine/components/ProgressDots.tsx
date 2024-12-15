import React from 'react';

interface ProgressDotsProps {
  total: number;
  current: number;
}

export function ProgressDots({ total, current }: ProgressDotsProps) {
  return (
    <div className="flex gap-2 justify-center mt-4">
      {Array.from({ length: total }, (_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === current ? 'bg-purple-400 scale-125' : 'bg-purple-400/30'
          }`}
        />
      ))}
    </div>
  );
}