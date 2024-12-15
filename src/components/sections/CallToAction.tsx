import React from 'react';
import { WaitlistForm } from '../WaitlistForm';

export function CallToAction() {
  return (
    <section className="text-center max-w-4xl mx-auto space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold">
        Be Part of the Revolution
      </h2>
      
      <p className="text-xl text-gray-300">
        Join thousands of future Baba users who are tired of generic translations. 
        Get early access and special perks when we launch.
      </p>

      <div className="max-w-xl mx-auto">
        <WaitlistForm />
      </div>

      <p className="text-2xl font-semibold text-purple-400">
        התראות בקרוב! (See you soon!)
      </p>
    </section>
  );
}