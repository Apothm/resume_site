import React from 'react';
import { Network, Home, FolderGit2, Download, Linkedin, User, BookOpen, Cloud } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 h-screen w-16 bg-gray-900 border-r border-cyan-500/20 flex flex-col items-center py-8 gap-8">
      <div className="text-cyan-500">
        <Network size={28} />
      </div>
      <div className="flex flex-col gap-4">
        <NavItem icon={<Home size={20} />} to="/" active={location.pathname === '/'} />
        <NavItem icon={<User size={20} />} to="/about" active={location.pathname === '/about'} />
        <NavItem icon={<FolderGit2 size={20} />} to="/projects" active={location.pathname === '/projects'} />
        <NavItem icon={<BookOpen size={20} />} to="/blog" active={location.pathname === '/blog'} />
      </div>
      <div className="mt-auto flex flex-col gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
           className="p-3 text-gray-400 hover:text-cyan-500 hover:bg-cyan-500/10 rounded-xl transition-all">
          <Linkedin size={20} />
        </a>
        <a href="https://bsky.app" target="_blank" rel="noopener noreferrer" 
           className="p-3 text-gray-400 hover:text-cyan-500 hover:bg-cyan-500/10 rounded-xl transition-all">
          <Cloud size={20} />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
           className="p-3 text-gray-400 hover:text-cyan-500 hover:bg-cyan-500/10 rounded-xl transition-all">
          <Download size={20} />
        </a>
      </div>
    </nav>
  );
}

function NavItem({ icon, to, active }: { icon: React.ReactNode; to: string; active: boolean }) {
  return (
    <Link to={to} className={`p-3 rounded-xl transition-all ${active ? 'text-cyan-500 bg-cyan-500/10' : 'text-gray-400 hover:text-cyan-500 hover:bg-cyan-500/10'}`}>
      {icon}
    </Link>
  );
}