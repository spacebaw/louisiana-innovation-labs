import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface EngineCardProps {
  title: string;
  icon: LucideIcon;
  focus: string;
  onClick: () => void;
  isExpanded: boolean;
}

export const EngineCard: React.FC<EngineCardProps> = ({ title, icon: Icon, focus, onClick, isExpanded }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative bg-white border rounded-lg p-6 md:p-8 transition-all duration-300 cursor-pointer ${
        isExpanded
          ? 'border-primary-blue shadow-lg bg-primary-blue/5'
          : 'border-gray-200 hover:border-primary-blue hover:shadow-lg'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 flex justify-center">
            <Icon className="w-12 h-12 md:w-16 md:h-16 text-primary-blue" strokeWidth={1.5} />
          </div>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-primary-blue flex-shrink-0" />
          ) : (
            <ChevronDown className="w-6 h-6 text-text-secondary group-hover:text-primary-blue flex-shrink-0" />
          )}
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-center text-text-primary">{title}</h3>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed text-center">
          <span className="font-semibold text-text-primary">Focus:</span> {focus}
        </p>
      </div>
    </div>
  );
};
