import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-6">
      <div className="max-w-5xl mx-auto h-14 rounded-full glass-panel px-6 flex items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-tight text-slate-900">
          Zabi<span className="text-blue-600">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-sm"
        >
          Get In Touch
        </a>
      </div>
    </header>
  );
}