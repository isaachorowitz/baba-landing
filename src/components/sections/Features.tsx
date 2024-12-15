import React from 'react';
import { Brain, MessageSquare, Users } from 'lucide-react';
import { FeatureCard } from '../FeatureCard';

const features = [
  {
    icon: MessageSquare,
    title: "Speaks Your Language, Your Way",
    description: "Male speaking to females? Female addressing a mixed group? Group conversations? Every translation adapts to your specific situation."
  },
  {
    icon: Brain,
    title: "Powered by Smart AI",
    description: "Gone are the days of awkward translations. Our advanced AI understands the nuances of Hebrew gender and social context, delivering translations that sound like a native speaker."
  },
  {
    icon: Users,
    title: "Social Intelligence Built-In",
    description: "Whether you're chatting with friends in Tel Aviv or meeting your Israeli in-laws, Baba ensures you're speaking Hebrew the way locals do."
  }
];

export function Features() {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Makes Baba Different?</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}