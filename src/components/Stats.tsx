import React from 'react';

export function Stats() {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-indigo-400">500+</p>
            <p className="text-gray-400">Hackers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-400">$25K</p>
            <p className="text-gray-400">in Prizes</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-400">48</p>
            <p className="text-gray-400">Hours</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-400">50+</p>
            <p className="text-gray-400">Workshops</p>
          </div>
        </div>
      </div>
    </section>
  );
}