import React from 'react';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onProjectClick }) => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-text-primary">
          Project Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
