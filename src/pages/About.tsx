import React from 'react';
import { Award, Network, Code, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pl-16">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">
          About <span className="text-cyan-500">Me</span>
        </h1>
        
        <div className="space-y-12">
          <section className="prose prose-invert max-w-none">
            <p className="text-gray-400 text-lg leading-relaxed">
              With over 8 years of experience in network engineering, I've dedicated my career to building 
              and optimizing network infrastructure for enterprises. My passion lies in combining traditional 
              networking principles with modern automation and cloud technologies.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Network className="text-cyan-500" size={24} />,
                title: "Network Architecture",
                description: "Designing scalable and resilient network solutions for enterprise environments."
              },
              {
                icon: <Code className="text-cyan-500" size={24} />,
                title: "Automation",
                description: "Creating efficient automation workflows using Python, Ansible, and other tools."
              },
              {
                icon: <Globe className="text-cyan-500" size={24} />,
                title: "Cloud Networking",
                description: "Implementing hybrid cloud solutions across AWS, Azure, and on-premise infrastructure."
              },
              {
                icon: <Award className="text-cyan-500" size={24} />,
                title: "Certifications",
                description: "CCIE, AWS Solutions Architect, Azure Network Engineer"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Professional Journey</h2>
            <div className="space-y-6">
              {[
                {
                  year: "2020 - Present",
                  role: "Senior Network Engineer",
                  company: "TechCorp Global",
                  description: "Leading network automation initiatives and cloud transformation projects."
                },
                {
                  year: "2017 - 2020",
                  role: "Network Engineer",
                  company: "CloudNet Solutions",
                  description: "Implemented SD-WAN solutions and managed enterprise network infrastructure."
                },
                {
                  year: "2015 - 2017",
                  role: "Junior Network Engineer",
                  company: "NetworX Inc",
                  description: "Supported network operations and learned enterprise networking fundamentals."
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cyan-500 before:rounded-full">
                  <div className="text-sm text-cyan-500 mb-1">{item.year}</div>
                  <h3 className="font-semibold mb-1">{item.role} · {item.company}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}