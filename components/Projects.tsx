import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Visionary Studio OS',
    description: 'An automated web tool providing script-to-image prompt engineering workflows using AI model pipelines.',
    tags: ['Python', 'FastAPI', 'Gradio', 'AI APIs'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Echo AI Multimodal Service',
    description: 'A hybrid cloud backend server designed for multimodal text-to-speech routing and speech synthesis.',
    tags: ['Python', 'FastAPI', 'REST API', 'Cloud'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'MFA Authentication Prototype',
    description: 'Secure, local multi-factor authentication web platform with modular credential verification.',
    tags: ['Python', 'Flask', 'Security', 'Jinja2'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Featured Projects</h2>
      <p className="text-slate-400 mb-10">Selected technical engineering and development work.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-slate-400">
                  <a href={project.githubUrl} className="hover:text-white transition-colors" title="GitHub Repository">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={project.liveUrl} className="hover:text-white transition-colors" title="Live Preview">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 text-xs font-medium rounded bg-blue-500/10 text-blue-400 border border-blue-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}