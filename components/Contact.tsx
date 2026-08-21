import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Let's Connect</h2>
        <p className="text-slate-400 mb-8">
          Have an engineering project, collaboration, or question? Feel free to reach out.
        </p>

        <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-3 text-slate-300">
            <Mail className="w-5 h-5 text-blue-400" />
            <a href="mailto:your-email@example.com" className="hover:underline text-sm font-medium">
              your-email@example.com
            </a>
          </div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
}