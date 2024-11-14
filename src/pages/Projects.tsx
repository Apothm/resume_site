import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Enterprise SD-WAN Implementation',
    description: 'Led the deployment of SD-WAN solution across 50+ locations, improving network reliability and reducing costs by 30%.',
    technologies: ['Cisco SD-WAN', 'Python', 'AWS', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Network Automation Platform',
    description: 'Developed a custom automation platform for network configuration management and compliance monitoring.',
    technologies: ['Ansible', 'Python', 'Docker', 'GitLab CI'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cloud Network Architecture',
    description: 'Designed and implemented multi-region cloud network infrastructure supporting hybrid cloud operations.',
    technologies: ['AWS', 'Azure', 'Terraform', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pl-16">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-cyan-500">Featured</span> Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}