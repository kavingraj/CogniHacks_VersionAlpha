import React from 'react';
import { Brain, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/40 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Brain className="w-6 h-6 text-indigo-400" />
            <span className="font-bold">CogniHacks 2025</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>© 2025 CogniHacks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}