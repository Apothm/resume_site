import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectImage1 from '../assets/images/image3.jpg'
import projectImage2 from '../assets/images/image2.jpg'
import projectImage3 from '../assets/images/image1.jpg'

const projects = [
  {
    title: 'Enterprise SD-WAN Implementation',
    description: 'Led the deployment of SD-WAN solution across 50+ locations, improving network reliability and reducing costs by 30%.',
    technologies: ['Cisco SD-WAN', 'Python', 'AWS', 'Terraform'],
    image: projectImage1
  },
  {
    title: 'Network Automation Platform',
    description: 'Developed a custom automation platform for network configuration management and compliance monitoring.',
    technologies: ['Ansible', 'Python', 'Docker', 'GitLab CI'],
    image: projectImage2
  },
  {
    title: 'Cloud Network Architecture',
    description: 'Designed and implemented multi-region cloud network infrastructure supporting hybrid cloud operations.',
    technologies: ['AWS', 'Azure', 'Terraform', 'Kubernetes'],
    image: projectImage3
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