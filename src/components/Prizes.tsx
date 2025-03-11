import React from 'react';
import { Trophy } from 'lucide-react';

export function Prizes() {
  return (
    <section id="prizes" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Prizes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-yellow-500/20 to-transparent p-8 rounded-2xl backdrop-blur-sm border border-yellow-500/20">
            <Trophy className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">First Place</h3>
            <p className="text-3xl font-bold text-yellow-400 mb-4">$10,000</p>
            <ul className="text-gray-400 space-y-2">
              <li>• Premium Developer Tools</li>
              <li>• Internship Opportunities</li>
              <li>• Mentorship Program</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}