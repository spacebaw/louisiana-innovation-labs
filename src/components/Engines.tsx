import React, { useState } from 'react';
import { ShieldCheck, Factory, Users } from 'lucide-react';
import { EngineCard } from './EngineCard';
import type { EngineType } from '../types';
import { projects } from '../data';
import { ProjectCard } from './ProjectCard';

interface EnginesProps {
  onProjectClick: (project: any) => void;
}

export const Engines: React.FC<EnginesProps> = ({ onProjectClick }) => {
  const [expandedEngine, setExpandedEngine] = useState<EngineType | null>(null);

  const engines = [
    {
      title: 'Innovation Sandboxes' as EngineType,
      icon: ShieldCheck,
      focus: 'De-risking technology via regulatory, technical, and physical access.',
    },
    {
      title: 'Commercialization Studios' as EngineType,
      icon: Factory,
      focus: 'Partner-led factories for spin-outs and wealth creation.',
    },
    {
      title: 'Workforce & Talent' as EngineType,
      icon: Users,
      focus: 'Scaling human capacity for the $40B+ hyperscale economy.',
    },
  ];

  const handleEngineClick = (engineTitle: EngineType) => {
    setExpandedEngine(expandedEngine === engineTitle ? null : engineTitle);
  };

  const getProjectsForEngine = (engineTitle: EngineType) => {
    return projects.filter(project => project.engine === engineTitle);
  };

  const engineProjects = expandedEngine ? getProjectsForEngine(expandedEngine) : [];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Horizontal layout for the 3 pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {engines.map((engine) => {
            const isExpanded = expandedEngine === engine.title;
            return (
              <EngineCard
                key={engine.title}
                title={engine.title}
                icon={engine.icon}
                focus={engine.focus}
                onClick={() => handleEngineClick(engine.title)}
                isExpanded={isExpanded}
              />
            );
          })}
        </div>

        {/* Dropdown projects appear vertically below all pillars */}
        {expandedEngine && (
          <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <h3 className="text-2xl font-bold mb-6 text-text-primary">{expandedEngine} Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engineProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => onProjectClick(project)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
