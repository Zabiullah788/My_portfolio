'use client';

import React, { useState } from 'react';
import { 
  Code2, 
  FolderGit2, 
  GraduationCap, 
  Mail, 
  X, 
  ArrowRight, 
  Download, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  BrainCircuit, 
  Award,
  Terminal,
  Menu
} from 'lucide-react';

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openModal = (id: string) => {
    setActiveModal(id);
    setMobileMenuOpen(false);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }} className="flex flex-col justify-between p-4 sm:p-8 md:p-12 box-border relative">
      
      {/* 1. TOP HEADER NAVIGATION */}
      <header className="w-full max-w-6xl mx-auto flex items-center justify-between pb-4 sm:pb-6 relative z-30">
        
        {/* Available For Work Pill */}
        <div style={{ backgroundColor: '#ecfdf5', borderColor: '#a7f3d0' }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border">
          <span style={{ backgroundColor: '#10b981' }} className="w-2 h-2 rounded-full inline-block"></span>
          <span style={{ color: '#047857' }} className="text-xs font-bold">Available for Work</span>
        </div>

        {/* Desktop Nav Links & Actions */}
        <div className="flex items-center gap-4 sm:gap-7">
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => openModal('about')} className="bg-transparent border-0 text-sm font-semibold text-slate-600 hover:text-blue-600 cursor-pointer transition-colors">About Me</button>
            <button onClick={() => openModal('projects')} className="bg-transparent border-0 text-sm font-semibold text-slate-600 hover:text-blue-600 cursor-pointer transition-colors">Projects</button>
            <button onClick={() => openModal('skills')} className="bg-transparent border-0 text-sm font-semibold text-slate-600 hover:text-blue-600 cursor-pointer transition-colors">Skills</button>
            <button onClick={() => openModal('credentials')} className="bg-transparent border-0 text-sm font-semibold text-slate-600 hover:text-blue-600 cursor-pointer transition-colors">Certifications</button>
          </nav>

          <button
            onClick={() => openModal('contact')}
            style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)', boxShadow: '0 4px 12px rgba(37,99,235,0.25)' }}
            className="hidden sm:inline-block px-5 py-2 text-sm font-bold rounded-full text-white border-0 cursor-pointer hover:opacity-95 transition-opacity"
          >
            Contact
          </button>

          {/* Profile Picture */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white shadow-sm overflow-hidden flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Zabi Ullah"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span style={{ backgroundColor: '#10b981' }} className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 border-2 border-white rounded-full"></span>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-700 cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full max-w-6xl mx-auto mb-6 p-4 rounded-2xl bg-white border border-slate-200 shadow-lg flex flex-col gap-3 z-30">
          <button onClick={() => openModal('about')} className="text-left py-2 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">About Me</button>
          <button onClick={() => openModal('projects')} className="text-left py-2 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Projects</button>
          <button onClick={() => openModal('skills')} className="text-left py-2 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Skills</button>
          <button onClick={() => openModal('credentials')} className="text-left py-2 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Certifications</button>
          <button onClick={() => openModal('contact')} className="w-full py-2.5 text-center text-sm font-bold text-white bg-blue-600 rounded-xl">Contact Me</button>
        </div>
      )}

      {/* 2. HERO SHOWCASE (RESPONSIVE GRID) */}
      <section className="w-full max-w-6xl mx-auto my-4 sm:my-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Bio & Text */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          <div style={{ color: '#2563eb' }} className="font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-3">
            COMPUTER SYSTEMS ENGINEER
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 leading-none mb-3">
            Zabi Ullah
          </h1>
          
          <div style={{ backgroundColor: '#2563eb' }} className="w-12 h-1.5 rounded-full mb-5"></div>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-xl mb-6">
            Specializing in backend development with <strong className="text-slate-900">Python &amp; C++</strong>, database management, high-concurrency systems, and advanced AI/ML diagnostic applications.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span style={{ backgroundColor: '#eff6ff', borderColor: '#bfdbfe', color: '#1e40af' }} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border">
              <Terminal className="w-3.5 h-3.5" /> Python &amp; C++ Backend
            </span>
            <span style={{ backgroundColor: '#faf5ff', borderColor: '#e9d5ff', color: '#7e22ce' }} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border">
              <BrainCircuit className="w-3.5 h-3.5" /> AI / ML Systems
            </span>
            <span style={{ backgroundColor: '#ecfdf5', borderColor: '#a7f3d0', color: '#047857' }} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border">
              <GraduationCap className="w-3.5 h-3.5" /> BUETK
            </span>
          </div>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => openModal('projects')}
              style={{ backgroundColor: '#2563eb', boxShadow: '0 8px 20px -4px rgba(37,99,235,0.35)' }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm border-0 cursor-pointer hover:bg-blue-700 transition-colors"
            >
              View All 4 Projects <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/CV_Zabi Ullah.pdf"
              download="Zabi_Ullah_CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-sm no-underline shadow-sm hover:bg-slate-50 transition-colors"
            >
              Download CV <Download className="w-4 h-4 text-slate-500" />
            </a>
          </div>

        </div>

        {/* Right Side: Showcase Image Container */}
        <div className="lg:col-span-6 w-full flex items-center justify-center">
          <img
            src="/showcase.png"
            alt="Development Environment"
            className="w-full max-w-md lg:max-w-xl h-auto rounded-2xl shadow-sm object-contain"
          />
        </div>

      </section>

      {/* 3. THREE BOTTOM FEATURE CARDS */}
      <section className="w-full max-w-6xl mx-auto my-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: Tech Stack */}
        <button
          onClick={() => openModal('skills')}
          className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div style={{ backgroundColor: '#eff6ff', color: '#2563eb' }} className="w-11 h-11 rounded-xl flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-0.5">Tech Stack</h3>
            <p style={{ color: '#2563eb' }} className="text-xs font-extrabold uppercase tracking-wide mb-2">Languages &amp; Tools</p>
            <p className="text-xs text-slate-500 leading-relaxed m-0">
              Python, C++, SQL, TensorFlow, PyTorch, Web3, DLD, Git, and Databases.
            </p>
          </div>
          <div style={{ color: '#2563eb' }} className="mt-5 text-xs font-extrabold">
            Explore Skills →
          </div>
        </button>

        {/* Card 2: Projects */}
        <button
          onClick={() => openModal('projects')}
          className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div style={{ backgroundColor: '#fdf2f8', color: '#db2777' }} className="w-11 h-11 rounded-xl flex items-center justify-center mb-4">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-0.5">Projects (4)</h3>
            <p style={{ color: '#db2777' }} className="text-xs font-extrabold uppercase tracking-wide mb-2">Applied Systems</p>
            <p className="text-xs text-slate-500 leading-relaxed m-0">
              Crypto Sniper Bot, AI Pneumonia Detection, Parking DLD, and Echo AI.
            </p>
          </div>
          <div style={{ color: '#db2777' }} className="mt-5 text-xs font-extrabold">
            View All 4 Projects →
          </div>
        </button>

        {/* Card 3: Credentials */}
        <button
          onClick={() => openModal('credentials')}
          className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div style={{ backgroundColor: '#ecfdf5', color: '#059669' }} className="w-11 h-11 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-0.5">Credentials</h3>
            <p style={{ color: '#059669' }} className="text-xs font-extrabold uppercase tracking-wide mb-2">Education &amp; Training</p>
            <p className="text-xs text-slate-500 leading-relaxed m-0">
              BUETK Engineering Degree, ISPR, Arch Tech, Code Alpha &amp; Top Performer Generative AI.
            </p>
          </div>
          <div style={{ color: '#059669' }} className="mt-5 text-xs font-extrabold">
            View Credentials &amp; History →
          </div>
        </button>

      </section>

      {/* 4. FOOTER */}
      <footer className="w-full max-w-6xl mx-auto flex flex-col items-center gap-3 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-4">
          <a href="https://github.com/Zabiullah788" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-700 no-underline shadow-sm hover:text-slate-900">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/zabi-ullah-1969b3393" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white border border-slate-300 flex items-center justify-center text-blue-600 no-underline shadow-sm hover:text-blue-700">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:zbadini788@Gmail.com" className="w-9 h-9 rounded-full bg-white border border-slate-300 flex items-center justify-center text-rose-600 no-underline shadow-sm hover:text-rose-700">
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <p className="text-xs font-semibold text-slate-400 m-0">
          © {new Date().getFullYear()} Zabi Ullah • Computer Systems Engineer
        </p>
      </footer>

      {/* 5. POPUP WINDOWS */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-slate-100 border-0 text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* MODAL 1: PROJECTS */}
            {activeModal === 'projects' && (
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <FolderGit2 className="w-6 h-6 text-pink-600" />
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">Applied Technical Projects (4)</h2>
                </div>
                <p className="text-xs text-slate-500 mb-5">Complete portfolio of verified engineering implementations.</p>

                <div className="flex flex-col gap-4">
                  {/* Project 1 */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                      <div>
                        <span className="text-[11px] font-extrabold text-blue-700 uppercase">1. Final Year Project</span>
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 mt-0.5">High-Frequency Crypto Sniper Bot Development</h3>
                      </div>
                      <span className="self-start text-[11px] font-bold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">Sub-50ms Execution</span>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0 mb-3 pl-4 list-disc space-y-1">
                      <li>Engineered a low-latency algorithmic trading bot utilizing Python and Web3 to monitor memecoin transactions and execute trades on Ethereum.</li>
                      <li>Achieved sub-50ms trade execution speed by optimizing connection protocols and minimizing transactional overhead.</li>
                      <li>Designed a secure, indexed data schema to log trade history, market feeds, and performance metrics using efficient Database Management principles.</li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'Web3', 'Ethereum', 'Algorithmic Trading', 'Database Management', 'High-Concurrency'].map(t => (
                        <span key={t} className="px-2 py-0.5 text-[11px] font-bold rounded bg-white border border-slate-300 text-slate-700">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                      <div>
                        <span className="text-[11px] font-extrabold text-emerald-700 uppercase">2. Healthcare AI / ML</span>
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 mt-0.5">AI-Based Pneumonia Detection for Doctor's Assistance</h3>
                      </div>
                      <span className="self-start text-[11px] font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">97.2% Accuracy</span>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0 mb-3 pl-4 list-disc space-y-1">
                      <li>Developed and trained a deep Convolutional Neural Network (CNN) using TensorFlow and PyTorch to classify X-ray images for pneumonia diagnosis.</li>
                      <li>Achieved 97.2% validation accuracy, improving diagnostic support in simulated clinical workflows.</li>
                      <li>Conducted data preprocessing and augmentation with NumPy/Pandas and integrated model into a functional API prototype for real-time inference.</li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {['TensorFlow', 'PyTorch', 'CNN', 'NumPy', 'Pandas', 'Medical AI API'].map(t => (
                        <span key={t} className="px-2 py-0.5 text-[11px] font-bold rounded bg-white border border-slate-300 text-slate-700">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                      <div>
                        <span className="text-[11px] font-extrabold text-amber-700 uppercase">3. Hardware &amp; Embedded (DLD)</span>
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 mt-0.5">Automatic Car Parking System Implementation</h3>
                      </div>
                      <span className="self-start text-[11px] font-bold px-2.5 py-0.5 rounded bg-amber-100 text-amber-800">Hardware DLD</span>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0 mb-3 pl-4 list-disc space-y-1">
                      <li>Designed and implemented complete control logic for an automated parking garage using Digital Logic Design (DLD) and C for microcontrollers.</li>
                      <li>Programmed the system to process real-time sensor inputs, direct vehicle flow, and optimize space allocation autonomously.</li>
                      <li>Simulated and verified the core state machine, ensuring reliable, error-free operation under heavy load.</li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {['C', 'Microcontrollers', 'Digital Logic Design', 'Hardware Simulation', 'State Machines'].map(t => (
                        <span key={t} className="px-2 py-0.5 text-[11px] font-bold rounded bg-white border border-slate-300 text-slate-700">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Project 4 */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                      <div>
                        <span className="text-[11px] font-extrabold text-purple-700 uppercase">4. Mobile &amp; Multimodal Speech</span>
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 mt-0.5">Echo AI: Advanced Multimodal TTS &amp; Voice Cloning System</h3>
                      </div>
                      <span className="self-start text-[11px] font-bold px-2.5 py-0.5 rounded bg-purple-100 text-purple-800">Mobile App</span>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0 mb-3 pl-4 list-disc space-y-1">
                      <li>Engineered a dual-engine speech synthesis platform combining API integration with decentralized cloud-based inference.</li>
                      <li>Architected a hybrid backend utilizing the Gemini API for text-to-speech alongside a custom Hugging Face server deployment.</li>
                      <li>Implemented voice cloning technology replicating vocal nuances across English and multiple other languages with low-latency orchestration.</li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {['Gemini API', 'Hugging Face', 'Voice Cloning', 'Python', 'FastAPI', 'Cloud Inference'].map(t => (
                        <span key={t} className="px-2 py-0.5 text-[11px] font-bold rounded bg-white border border-slate-300 text-slate-700">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODAL 2: SKILLS */}
            {activeModal === 'skills' && (
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Code2 className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">Technical Proficiency</h2>
                </div>
                <p className="text-xs text-slate-500 mb-5">Comprehensive toolsets and programming skills.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="font-bold text-blue-700 text-xs uppercase mb-2">Languages &amp; Core</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'C++', 'C (Microcontrollers)', 'SQL', 'Web3 / Solidity'].map((skill) => (
                        <span key={skill} className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white border border-slate-300 text-slate-800">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="font-bold text-purple-700 text-xs uppercase mb-2">AI / ML &amp; Data Science</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {['TensorFlow', 'PyTorch', 'scikit-learn', 'NumPy', 'Pandas', 'CNN Architectures', 'LLM Implementation'].map((skill) => (
                        <span key={skill} className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white border border-slate-300 text-slate-800">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="font-bold text-emerald-700 text-xs uppercase mb-2">Systems &amp; Architecture</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {['Database Management', 'Computer Networking', 'Digital Logic Design (DLD)', 'Microcontroller Programming', 'Git Version Control'].map((skill) => (
                        <span key={skill} className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white border border-slate-300 text-slate-800">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="font-bold text-amber-700 text-xs uppercase mb-2">Spoken Languages</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {['Brahui (Native)', 'Balochi (Native)', 'Urdu (Fluent)', 'English (Fluent)'].map((skill) => (
                        <span key={skill} className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white border border-slate-300 text-slate-800">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODAL 3: CREDENTIALS */}
            {activeModal === 'credentials' && (
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Award className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">Education &amp; Certifications</h2>
                </div>
                <p className="text-xs text-slate-500 mb-5">Academic credentials, formal certifications, and internships.</p>

                <div className="flex flex-col gap-3.5">
                  <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                    <h3 className="text-xs font-black text-emerald-900 uppercase mb-2">Education History</h3>
                    <div className="mb-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <strong className="text-sm text-emerald-950">B.E. Computer Systems Engineering</strong>
                        <span className="text-xs font-bold text-emerald-700">March 2022 – Dec 2025</span>
                      </div>
                      <p className="text-xs text-emerald-800 m-0 mt-0.5">Balochistan University of Engineering &amp; Technology, Khuzdar</p>
                    </div>
                    <div className="border-t border-emerald-200/80 pt-2 mb-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs">
                        <span className="font-semibold text-emerald-900">Intermediate • Govt Boys Degree College Nushki</span>
                        <span className="text-emerald-700">Aug 2019 – Aug 2021 (764/1100)</span>
                      </div>
                    </div>
                    <div className="border-t border-emerald-200/80 pt-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs">
                        <span className="font-semibold text-emerald-900">Matriculation • Govt Boys High Secondary School Sharif Khan Nushki</span>
                        <span className="text-emerald-700">May 2017 – Apr 2019 (755/1100)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="text-xs font-black text-slate-900 uppercase mb-2">Online Training &amp; Certifications</h3>
                    <ul className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0 pl-4 list-disc space-y-1">
                      <li><strong>Generative AI Application Developer (Nov–Dec 2025):</strong> Pak Angels &amp; UETIANS Lahore • NCEAC-HEC Certified • Awarded <em>Top Performer Award</em>.</li>
                      <li><strong>WordPress &amp; Freelancing Course (July 2023 – Oct 2023):</strong> DGskills certification.</li>
                      <li><strong>Graphic Designing Course (June 2022 – Nov 2022):</strong> National Freelance Training Program (NFTP).</li>
                      <li><strong>Computer Basics (6 Months) (Aug 2020 – Jan 2021):</strong> Social Welfare Computer Center Nushki.</li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="text-xs font-black text-slate-900 uppercase mb-2">Internships</h3>
                    <ul className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0 pl-4 list-disc space-y-1">
                      <li><strong>Summer Internship Program | ISPR (August 2025):</strong> Strategic communication &amp; national affairs.</li>
                      <li><strong>Virtual AI/ML Internship | Arch Technologies:</strong> End-to-end Machine Learning model creation with TensorFlow.</li>
                      <li><strong>Python Development Internship | Code Alpha:</strong> Backend scripting &amp; Git version control.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* MODAL 4: ABOUT ME */}
            {activeModal === 'about' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">About Me</h2>
                <p className="text-xs text-slate-500 mb-4">Professional profile and focus areas.</p>
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    Driven and highly accomplished <strong>Computer Systems Engineer</strong> seeking an immediate role where I can transition my strong academic background into practical solutions.
                  </p>
                  <p>
                    I specialize in backend development, leveraging <strong>C++ and Python</strong>, with deep applied knowledge in Database Management, Computer Networking, and high-concurrency systems.
                  </p>
                  <p>
                    My experience includes developing specialized systems such as a high-frequency Crypto Sniper Bot (sub-50ms execution speed) and advanced AI/ML diagnostic applications (97.2% validation accuracy), delivering fast, functional, and data-efficient results.
                  </p>
                </div>
              </div>
            )}

            {/* MODAL 5: CONTACT */}
            {activeModal === 'contact' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">Contact Information</h2>
                <p className="text-xs text-slate-500 mb-4">Direct contact details for employment and project inquiries.</p>

                <div className="flex flex-col gap-2.5">
                  <a href="mailto:zbadini788@Gmail.com" className="flex items-center gap-3 p-3.5 rounded-xl bg-blue-50 border border-blue-200 no-underline text-blue-900 font-bold text-xs sm:text-sm hover:bg-blue-100 transition-colors">
                    <Mail className="w-4 h-4 text-blue-600" /> zbadini788@Gmail.com
                  </a>
                  <a href="tel:+923493233604" className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 no-underline text-emerald-900 font-bold text-xs sm:text-sm hover:bg-emerald-100 transition-colors">
                    <Phone className="w-4 h-4 text-emerald-600" /> +92 349 3233604
                  </a>
                  <a href="https://www.linkedin.com/in/zabi-ullah-1969b3393" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 no-underline text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors">
                    <Linkedin className="w-4 h-4 text-blue-700" /> linkedin.com/in/zabi-ullah-1969b3393
                  </a>
                  <a href="https://github.com/Zabiullah788" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 no-underline text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors">
                    <Github className="w-4 h-4 text-slate-800" /> github.com/Zabiullah788
                  </a>
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 font-semibold text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-slate-500" /> Kili Sahibzada Nushki, Balochistan, Pakistan
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </main>
  );
}