import { useState, useEffect, useCallback } from 'react';
import { ConversationScenario } from '../types';
import { ANIMATION } from '../constants';

export function useTranslationCarousel(scenarios: ConversationScenario[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const nextScenario = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % scenarios.length);
      setIsTransitioning(false);
    }, ANIMATION.FADE_DURATION);
  }, [scenarios.length]);

  const previousScenario = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + scenarios.length) % scenarios.length);
      setIsTransitioning(false);
    }, ANIMATION.FADE_DURATION);
  }, [scenarios.length]);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(nextScenario, ANIMATION.SPIN_INTERVAL);
    return () => clearInterval(interval);
  }, [nextScenario, isAutoPlay]);

  return {
    currentScenario: scenarios[currentIndex],
    isTransitioning,
    progress: currentIndex / scenarios.length,
    nextScenario,
    previousScenario,
    isAutoPlay,
    setIsAutoPlay,
    currentIndex
  };
}