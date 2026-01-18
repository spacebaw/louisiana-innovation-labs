import { useState } from 'react';
import { Hero } from './components/Hero';
import { Engines } from './components/Engines';
import { Foundation } from './components/Foundation';
import { ProjectDrawer } from './components/ProjectDrawer';
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
      <Engines onProjectClick={handleProjectClick} />
      <Foundation />
      <ProjectDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </div>
  );
}

export default App;
