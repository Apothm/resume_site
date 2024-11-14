import React from 'react';
import { Github, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pl-16">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-cyan-500">Bryan Muncy</span>
              <br />Network Engineer
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Architecting robust network solutions and building the infrastructure of tomorrow. 
              Specialized in SD-WAN, network automation, and cloud networking.
            </p>
            <div className="flex gap-4">
              <a href="mailto:alex@example.com" 
                 className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-gray-900 rounded-lg hover:bg-cyan-400 transition-colors">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800" 
              alt="Alex Chen"
              className="relative rounded-2xl w-full max-w-md mx-auto border-2 border-cyan-500/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}