import React from 'react';
import { WaitlistForm } from '../WaitlistForm';

export function Hero() {
  return (
    <section className="text-center max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Perfect Hebrew, Perfect Context
        </span>
      </h1>
      
      <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
        Transform your conversations with translations that understand who's speaking and who's listening. 
        Baba brings you gender-smart Hebrew that flows naturally.
      </p>

      <div className="max-w-xl mx-auto">
        <WaitlistForm />
      </div>
    </section>
  );
}