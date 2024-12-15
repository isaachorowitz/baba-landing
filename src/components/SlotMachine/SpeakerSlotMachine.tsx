import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SlotDisplay } from './components/SlotDisplay';
import { HebrewExample } from './components/HebrewExample';
import { scenarios } from './types';
import { useSlotMachine } from './hooks/useSlotMachine';

export function SpeakerSlotMachine() {
  const { currentScenario, isSpinning, isVisible } = useSlotMachine(scenarios);

  const fromSpeakers = [...new Set(scenarios.map(s => s.from))];
  const toSpeakers = [...new Set(scenarios.map(s => s.to))];

  const fromIndex = fromSpeakers.indexOf(currentScenario.from);
  const toIndex = toSpeakers.indexOf(currentScenario.to);

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          Smart Context Detection
        </h3>
        <p className="text-gray-400">Watch our AI adapt to different conversation scenarios</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-center items-center gap-6">
          <div className="w-48">
            <SlotDisplay 
              label="Speaker"
              items={fromSpeakers}
              currentIndex={fromIndex}
              isSpinning={isSpinning}
            />
          </div>
          <ArrowRight className="text-purple-400 w-6 h-6 mt-6" />
          <div className="w-48">
            <SlotDisplay 
              label="Listener"
              items={toSpeakers}
              currentIndex={toIndex}
              isSpinning={isSpinning}
            />
          </div>
        </div>

        <HebrewExample 
          example={currentScenario.example}
          translation={currentScenario.translation}
          isSpinning={isSpinning}
          isVisible={isVisible}
        />
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Our AI automatically detects and adjusts to the speaker and listener context
        </p>
      </div>
    </div>
  );
}