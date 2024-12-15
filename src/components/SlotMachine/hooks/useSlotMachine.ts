import { useState, useEffect } from 'react';
import { ANIMATION } from '../constants';
import { ConversationScenario } from '../types';

export function useSlotMachine(scenarios: ConversationScenario[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start the transition
      setIsVisible(false);
      setIsSpinning(true);

      // Wait for fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % scenarios.length);
        
        // Wait for slot machine animation
        setTimeout(() => {
          setIsSpinning(false);
          setIsVisible(true);
        }, ANIMATION.SPIN_DURATION);
      }, ANIMATION.FADE_DURATION);
    }, ANIMATION.SPIN_INTERVAL);

    return () => clearInterval(interval);
  }, [scenarios.length]);

  return {
    currentScenario: scenarios[currentIndex],
    isSpinning,
    isVisible
  };
}