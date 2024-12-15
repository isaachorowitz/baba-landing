import React, { useEffect, useState } from 'react';
import { SlotItem } from './SlotItem';

interface SlotColumnProps {
  items: string[];
  interval: number;
  startDelay: number;
}

export function SlotColumn({ items, interval, startDelay }: SlotColumnProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, interval);

      return () => clearInterval(intervalId);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [interval, items.length, startDelay]);

  return (
    <div className="flex flex-col gap-2 items-center text-xl font-semibold min-w-32">
      {items.map((item, index) => (
        <SlotItem key={item} text={item} isActive={index === currentIndex} />
      ))}
    </div>
  );
}