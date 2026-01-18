import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="border-b border-accent-teal/20 backdrop-blur-sm bg-primary-navy/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="text-lg md:text-xl font-bold tracking-tight">
            Louisiana Innovation Labs
          </div>
          <button className="px-4 py-2 md:px-6 md:py-2.5 bg-accent-teal text-primary-navy font-semibold rounded-sm hover:bg-accent-teal/90 transition-all duration-200 hover:scale-105 border border-accent-teal hover:shadow-lg hover:shadow-accent-teal/50">
            Contact Orchestrator
          </button>
        </div>
      </div>
    </header>
  );
};
