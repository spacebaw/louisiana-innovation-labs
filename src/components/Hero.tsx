import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-tighten text-text-primary leading-tight">
          Louisiana Innovation Labs
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-text-secondary font-light max-w-3xl mx-auto">
          The deployment engine for Louisiana's industrial and economic future.
        </p>
      </div>
    </section>
  );
};
