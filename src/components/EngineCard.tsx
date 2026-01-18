import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface EngineCardProps {
  title: string;
  icon: LucideIcon;
  focus: string;
}

export const EngineCard: React.FC<EngineCardProps> = ({ title, icon: Icon, focus }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg p-6 md:p-8 hover:border-primary-blue transition-all duration-300 hover:shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <Icon className="w-12 h-12 md:w-16 md:h-16 text-primary-blue" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-center text-text-primary">{title}</h3>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed text-center">
          <span className="font-semibold text-text-primary">Focus:</span> {focus}
        </p>
      </div>
    </div>
  );
};
