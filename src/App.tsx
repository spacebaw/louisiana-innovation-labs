import { useState } from 'react';
import { Hero } from './components/Hero';
import { Engines } from './components/Engines';
import { Foundation } from './components/Foundation';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectDrawer } from './components/ProjectDrawer';
import { projects } from './data';
import type { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    // Delay clearing the project to allow the close animation to complete
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-surface">
      <Hero />
      <Engines />
      <Foundation />
      <ProjectGrid projects={projects} onProjectClick={handleProjectClick} />
      <ProjectDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </div>
  );
}

export default App;
