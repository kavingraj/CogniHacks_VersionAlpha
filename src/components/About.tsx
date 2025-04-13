import React from 'react';
import { Laptop, Code, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">What is CogniHacks?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
            <Laptop className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Get involved in emerging BCI Technology</h3>
            <p className="text-gray-400">
              Create better 
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
            <Code className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Build & Create</h3>
            <p className="text-gray-400">
              Transform your ideas into reality with cutting-edge technology and tools.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
            <Users className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Connect & Network</h3>
            <p className="text-gray-400">
              Meet fellow hackers, mentors, and sponsors from around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}