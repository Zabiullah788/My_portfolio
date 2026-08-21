import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh] flex items-center justify-center">
      <div className="w-full glass-panel rounded-3xl p-8 sm:p-14 text-center sm:text-left flex flex-col items-center sm:items-start relative overflow-hidden">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-badge text-slate-700 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Computer Systems Engineer
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.15] mb-6">
          Engineering High-Scale <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Software Architectures.
          </span>
        </h1>

        {/* Subtitle / Bio */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
          I design and build production-grade web systems, native mobile applications, and high-performance backends focused on performance, modularity, and clean system logic.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/80 border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-all"
          >
            <Download className="w-4 h-4 text-slate-500" /> Download CV
          </a>
        </div>

      </div>
    </section>
  );
}