import React from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { scenarios } from './types';
import { useTranslationCarousel } from './hooks/useTranslationCarousel';
import { TranslationCard } from './components/TranslationCard';
import { ProgressDots } from './components/ProgressDots';

export function ConversationCarousel() {
  const {
    currentScenario,
    isTransitioning,
    nextScenario,
    previousScenario,
    isAutoPlay,
    setIsAutoPlay,
    currentIndex
  } = useTranslationCarousel(scenarios);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Smart Context Detection
        </h3>
        <p className="text-gray-400 mt-2">
          Watch how translations adapt to different conversation scenarios
        </p>
      </div>

      <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8">
        <TranslationCard 
          scenario={currentScenario} 
          isTransitioning={isTransitioning} 
        />
        
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={previousScenario}
            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            aria-label="Previous scenario"
          >
            <ChevronLeft className="w-6 h-6 text-purple-400" />
          </button>
          
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            aria-label={isAutoPlay ? "Pause" : "Play"}
          >
            {isAutoPlay ? (
              <Pause className="w-6 h-6 text-purple-400" />
            ) : (
              <Play className="w-6 h-6 text-purple-400" />
            )}
          </button>
          
          <button
            onClick={nextScenario}
            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            aria-label="Next scenario"
          >
            <ChevronRight className="w-6 h-6 text-purple-400" />
          </button>
        </div>

        <ProgressDots 
          total={scenarios.length} 
          current={currentIndex} 
        />
      </div>
    </div>
  );
}