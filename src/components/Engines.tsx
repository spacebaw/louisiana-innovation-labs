import React from 'react';
import { ShieldCheck, Factory, Users } from 'lucide-react';
import { EngineCard } from './EngineCard';

export const Engines: React.FC = () => {
  const engines = [
    {
      title: 'Innovation Sandboxes',
      icon: ShieldCheck,
      focus: 'De-risking technology via regulatory, technical, and physical access.',
    },
    {
      title: 'Commercialization Studios',
      icon: Factory,
      focus: 'Partner-led factories for spin-outs and wealth creation.',
    },
    {
      title: 'Workforce & Talent',
      icon: Users,
      focus: 'Scaling human capacity for the $40B+ hyperscale economy.',
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {engines.map((engine) => (
            <EngineCard
              key={engine.title}
              title={engine.title}
              icon={engine.icon}
              focus={engine.focus}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
