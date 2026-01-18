import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-tighten">
          Enough thinking. Start building.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
          The deployment engine for Louisiana's industrial and economic future.
        </p>
      </div>
    </section>
  );
};
