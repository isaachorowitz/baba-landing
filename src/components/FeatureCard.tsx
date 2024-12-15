import React from 'react';

interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform duration-300 border border-purple-500/20">
      <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-white w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}