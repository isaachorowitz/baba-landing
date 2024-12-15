import React from 'react';

interface SlotReelProps {
  items: string[];
  currentIndex: number;
}

export function SlotReel({ items, currentIndex }: SlotReelProps) {
  const position = -currentIndex * 100;

  return (
    <div className="h-16 overflow-hidden relative bg-white/5 rounded-lg">
      <div
        className="transition-transform duration-500 ease-in-out absolute w-full"
        style={{ transform: `translateY(${position}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="h-16 flex items-center justify-center text-xl font-bold p-4"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}