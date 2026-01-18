import React from 'react';
import type { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const getEngineColor = (engine: string): string => {
  switch (engine) {
    case 'Innovation Sandboxes':
      return 'bg-blue-50 text-blue-600 border-blue-200';
    case 'Commercialization Studios':
      return 'bg-green-50 text-green-600 border-green-200';
    case 'Workforce & Talent':
      return 'bg-purple-50 text-purple-600 border-purple-200';
    default:
      return 'bg-gray-100 text-gray-600 border-gray-200';
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-primary-blue transition-all duration-300 hover:shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-blue transition-colors duration-200">
            {project.name}
          </h3>
          <ArrowRight className="w-5 h-5 text-primary-blue opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${getEngineColor(project.engine)}`}>
          {project.engine}
        </div>
        <p className="text-sm text-text-secondary">
          <span className="font-semibold text-text-primary">Primary Partner:</span> {project.primaryPartner}
        </p>
      </div>
    </div>
  );
};
