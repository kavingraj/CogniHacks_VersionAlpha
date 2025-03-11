import React from 'react';
import { ChevronRight, Github } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          CogniHacks 2025
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          48 Hours of Innovation, Coding, and Creation
        </p>
        <p className="text-lg mb-8 text-gray-400">March 15-17, 2025 • Virtual & In-Person</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full font-semibold transition flex items-center">
            Apply Now <ChevronRight className="ml-2 w-5 h-5" />
          </button>
          <button className="border border-indigo-600 hover:bg-indigo-600/20 px-8 py-3 rounded-full font-semibold transition flex items-center">
            <Github className="mr-2 w-5 h-5" /> GitHub
          </button>
        </div>
      </div>
    </section>
  );
}