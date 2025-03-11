import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Schedule } from './components/Schedule';
import { Prizes } from './components/Prizes';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Schedule />
      <Prizes />
      <Footer />
    </div>
  );
}

export default App;