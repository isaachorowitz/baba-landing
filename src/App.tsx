import React from 'react';
import { Brain, MessageSquare, Users, Sparkles } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { GenderContextSelector } from './components/GenderSelector/GenderContextSelector';
import { CallToAction } from './components/sections/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0B1F] text-white overflow-x-hidden">
      <Toaster position="top-center" />
      
      <main className="container mx-auto px-4 py-12 space-y-24">
        <Hero />
        
        <Features />

        <GenderContextSelector />

        <CallToAction />
      </main>
    </div>
  );
}

export default App;