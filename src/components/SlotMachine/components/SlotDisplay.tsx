import React from 'react';
import { GenderIcon } from './GenderIcon';

interface SlotDisplayProps {
  label: string;
  items: string[];
  currentIndex: number;
  showIcons?: boolean;
  isSpinning?: boolean;
}

export function SlotDisplay({ 
  label, 
  items, 
  currentIndex, 
  showIcons = true,
  isSpinning = false
}: SlotDisplayProps) {
  const position = -currentIndex * 100;

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm text-purple-300">{label}</p>
      <div className="h-16 w-full overflow-hidden relative bg-white/5 rounded-lg border border-purple-500/20">
        <div
          className={`transition-all duration-800 ease-in-out absolute w-full
            ${isSpinning ? 'opacity-50' : 'opacity-100'}`}
          style={{ transform: `translateY(${position}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="h-16 flex items-center justify-center gap-2 text-xl font-bold p-4"
            >
              {showIcons && <GenderIcon type={item} isActive={index === currentIndex} />}
              <span className={index === currentIndex ? 'text-purple-400' : 'text-gray-500'}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}