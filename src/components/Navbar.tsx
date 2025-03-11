import React from 'react';
import { Brain } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-black/20 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-indigo-400" />
            <span className="text-xl font-bold">CogniHacks 2025</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
            <a href="#schedule" className="hover:text-indigo-400 transition">Schedule</a>
            <a href="#prizes" className="hover:text-indigo-400 transition">Prizes</a>
            <a href="#faq" className="hover:text-indigo-400 transition">FAQ</a>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full font-semibold transition">
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
}