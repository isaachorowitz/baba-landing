import React from 'react';

interface SlotItemProps {
  text: string;
  isActive: boolean;
}

export function SlotItem({ text, isActive }: SlotItemProps) {
  return (
    <div
      className={`transition-all duration-500 ${
        isActive ? 'text-purple-400 scale-110' : 'text-gray-500 scale-100'
      }`}
    >
      {text}
    </div>
  );
}