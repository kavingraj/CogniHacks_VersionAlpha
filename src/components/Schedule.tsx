import React from 'react';
import { Calendar } from 'lucide-react';

export function Schedule() {
  return (
    <section id="schedule" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Event Schedule</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-start space-x-4">
            <Calendar className="w-6 h-6 text-indigo-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Day 1 - March 15</h3>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li>9:00 AM - Check-in & Registration</li>
                <li>10:00 AM - Opening Ceremony</li>
                <li>11:00 AM - Team Formation</li>
                <li>12:00 PM - Hacking Begins</li>
                <li>2:00 PM - Workshop: AI/ML Fundamentals</li>
                <li>4:00 PM - Workshop: Web3 Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}