import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 md:mb-12">
          <h2 className="text-sm md:text-base font-semibold tracking-wide uppercase text-text-secondary">
            Louisiana Innovation Labs
          </h2>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-tighten text-text-primary">
          Enough thinking. Start building.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-text-secondary font-light max-w-3xl mx-auto">
          The deployment engine for Louisiana's industrial and economic future.
        </p>
      </div>
    </section>
  );
};
