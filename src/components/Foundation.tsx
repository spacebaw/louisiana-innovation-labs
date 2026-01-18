import React from 'react';
import { Database, Shield, TrendingUp } from 'lucide-react';

export const Foundation: React.FC = () => {
  const sections = [
    {
      icon: Database,
      title: 'Data Commons',
    },
    {
      icon: Shield,
      title: 'Trust Layer',
    },
    {
      icon: TrendingUp,
      title: 'Growth Fund',
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border-t-2 border-b-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="py-6 md:py-8">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 md:mb-8 tracking-tight text-text-primary">
              Trust & Capital Foundation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="px-6 md:px-8 py-4 md:py-0 flex flex-col items-center justify-center group hover:bg-gray-50 transition-colors duration-300"
                >
                  <section.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-blue mb-3 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <h3 className="text-lg md:text-xl font-semibold text-center text-text-primary">{section.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
