import React, { useState } from 'react';
import { SPEAKER_TYPES, LISTENER_TYPES, scenarios } from '../SlotMachine/types';
import { GenderSelect } from './GenderSelect';
import { TranslationResult } from './TranslationResult';

export function GenderContextSelector() {
  const [speaker, setSpeaker] = useState(SPEAKER_TYPES.MALE);
  const [listener, setListener] = useState(LISTENER_TYPES.MALE);

  // Find the matching scenario based on current selections
  const currentScenario = scenarios.find(
    (s) => s.from === speaker && s.to === listener
  ) || scenarios[0];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Try It Yourself
        </h3>
        <p className="text-gray-400 mt-2">
          Select different speaker and listener combinations to see how the translation changes
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <GenderSelect
            label="Speaker"
            value={speaker}
            onChange={setSpeaker}
            options={Object.values(SPEAKER_TYPES)}
          />
          <GenderSelect
            label="Listener"
            value={listener}
            onChange={setListener}
            options={Object.values(LISTENER_TYPES)}
          />
        </div>

        <TranslationResult scenario={currentScenario} />
      </div>
    </div>
  );
}