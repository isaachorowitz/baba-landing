import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SPEAKER_TYPES, LISTENER_TYPES, scenarios } from '../../types';
import { ArrowSelect } from './ArrowSelect';
import { TranslationDisplay } from './TranslationDisplay';

export function GenderContextSelector() {
  const [speaker, setSpeaker] = useState(SPEAKER_TYPES.MALE);
  const [listener, setListener] = useState(LISTENER_TYPES.MALE);

  const currentScenario = scenarios.find(
    (s) => s.from === speaker && s.to === listener
  ) || scenarios[0];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Try It Yourself
        </h3>
        <p className="text-gray-400 mt-2">
          Select different speaker and listener combinations to see how the translation changes
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr,auto,1fr] items-center gap-4 mb-6 sm:mb-8">
          <ArrowSelect
            label="Speaker"
            value={speaker}
            onChange={setSpeaker}
            options={Object.values(SPEAKER_TYPES)}
          />
          
          <div className="hidden sm:flex items-center justify-center mt-6">
            <ArrowRight className="w-6 h-6 text-purple-400" />
          </div>

          <ArrowSelect
            label="Listener"
            value={listener}
            onChange={setListener}
            options={Object.values(LISTENER_TYPES)}
          />
        </div>

        <TranslationDisplay scenario={currentScenario} />
      </div>
    </div>
  );
}