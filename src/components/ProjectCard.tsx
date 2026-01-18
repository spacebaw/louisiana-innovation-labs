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
      return 'bg-blue-500/20 text-blue-300 border-blue-400/30';
    case 'Commercialization Studios':
      return 'bg-green-500/20 text-green-300 border-green-400/30';
    case 'Workforce & Talent':
      return 'bg-purple-500/20 text-purple-300 border-purple-400/30';
    default:
      return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-gradient-to-br from-background-slate/40 to-primary-navy/60 backdrop-blur-md border border-accent-teal/20 rounded-lg p-6 cursor-pointer hover:border-accent-teal/60 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent-teal/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold group-hover:text-accent-teal transition-colors duration-200">
            {project.name}
          </h3>
          <ArrowRight className="w-5 h-5 text-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${getEngineColor(project.engine)}`}>
          {project.engine}
        </div>
        <p className="text-sm text-gray-400">
          <span className="font-semibold text-gray-300">Primary Partner:</span> {project.primaryPartner}
        </p>
      </div>
    </div>
  );
};
