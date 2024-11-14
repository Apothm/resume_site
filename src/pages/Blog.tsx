import React from 'react';
import BlogCard from '../components/BlogCard';

const blogPosts = [
  {
    id: '1',
    title: 'The Future of SD-WAN: Beyond Basic Networking',
    excerpt: 'Exploring how SD-WAN is evolving with AI and machine learning integration for smarter network management.',
    date: 'Mar 15, 2024',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Automating Network Security: A Practical Guide',
    excerpt: 'Learn how to implement network security automation using modern tools and best practices.',
    date: 'Mar 10, 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Cloud Networking: Bridging On-Premise and Cloud',
    excerpt: 'A deep dive into hybrid cloud networking architectures and implementation strategies.',
    date: 'Mar 5, 2024',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pl-16">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">
            Technical <span className="text-cyan-500">Blog</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}