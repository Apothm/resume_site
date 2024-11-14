import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export default function BlogCard({ id, title, excerpt, date, readTime, image }: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`} className="block group">
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <span>·</span>
            <span>{readTime} read</span>
          </div>
          <h3 className="text-xl font-bold text-cyan-500 mb-2 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}