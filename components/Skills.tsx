import React from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'SQL'],
  },
  {
    title: 'Frontend & Mobile',
    skills: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'HTML5/CSS3'],
  },
  {
    title: 'Backend & Frameworks',
    skills: ['FastAPI', 'Flask', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Tools & Systems',
    skills: ['Git & GitHub', 'Linux', 'Docker', 'SQLite / PostgreSQL', 'Hugging Face'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Technical Proficiency</h2>
      <p className="text-slate-400 mb-10">Technologies and tools I use to bring ideas to life.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}