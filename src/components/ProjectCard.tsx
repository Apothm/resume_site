import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export default function ProjectCard({ title, description, technologies, image }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all group">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-cyan-500 mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-cyan-500/10 text-cyan-500 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}