import React, { useEffect } from 'react';
import type { Project } from '../types';
import { X, ExternalLink } from 'lucide-react';

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Active':
      return 'bg-green-500/20 text-green-300 border-green-400/50';
    case 'Pilot':
      return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/50';
    case 'In Design':
      return 'bg-blue-500/20 text-blue-300 border-blue-400/50';
    default:
      return 'bg-gray-500/20 text-gray-300 border-gray-400/50';
  }
};

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project, isOpen, onClose }) => {
  // Close drawer on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[600px] bg-gradient-to-br from-primary-navy via-background-slate to-primary-navy border-l-2 border-accent-teal/40 z-50 transform transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-accent-teal">{project.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-accent-teal/10 rounded-lg transition-colors duration-200"
              aria-label="Close drawer"
            >
              <X className="w-6 h-6 text-accent-teal" />
            </button>
          </div>

          {/* Status Badge */}
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(project.status)}`}>
              Status: {project.status}
            </span>
          </div>

          {/* Project Brief */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-accent-teal">Project Brief</h3>
            <p className="text-gray-300 leading-relaxed">{project.brief}</p>
          </div>

          {/* Master Orchestrator Partners */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-accent-teal">Master Orchestrator Partners</h3>
            <div className="space-y-2">
              {project.partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-background-slate/40 backdrop-blur-md border border-accent-teal/20 rounded-lg p-3 hover:border-accent-teal/40 transition-colors duration-200"
                >
                  <p className="text-gray-200 font-medium">{partner}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engine Tag */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-accent-teal">Engine</h3>
            <p className="text-gray-300">{project.engine}</p>
          </div>

          {/* Strategic Deep-Dive Button */}
          <button className="w-full bg-accent-teal text-primary-navy font-bold py-4 rounded-lg hover:bg-accent-teal/90 transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-accent-teal/30">
            Strategic Deep-Dive
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};
