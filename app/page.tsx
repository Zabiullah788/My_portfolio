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
    <main style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      
      {/* 1. TOP HEADER NAVIGATION */}
      <header style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #e2e8f0' }}>
        
        {/* Available For Work Pill */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 12px', borderRadius: '9999px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '9999px', backgroundColor: '#10b981', display: 'inline-block' }}></span>
          <span style={{ fontSize: '11px', fontWeight: '700', color: '#047857' }}>Available for Work</span>
        </div>

        {/* Navigation & Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => openModal('about')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>About Me</button>
            <button onClick={() => openModal('projects')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Projects</button>
            <button onClick={() => openModal('skills')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Skills</button>
            <button onClick={() => openModal('credentials')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Certifications</button>
          </nav>

          <button
            onClick={() => openModal('contact')}
            style={{ padding: '7px 18px', fontSize: '13px', fontWeight: '700', borderRadius: '9999px', background: 'linear-gradient(135deg, #2563eb, #4f46e5)', color: '#ffffff', border: 'none', cursor: 'pointer', boxShadow: '0 3px 10px rgba(37,99,235,0.2)' }}
            className="hidden sm:inline-block"
          >
            Contact
          </button>

          {/* Strictly Constrained Profile Avatar */}
          <div style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px', maxWidth: '40px', maxHeight: '40px', borderRadius: '9999px', border: '2px solid #ffffff', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/profile.jpg"
              alt="Zabi Ullah"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '9999px', display: 'block' }}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span style={{ position: 'absolute', bottom: '1px', right: '1px', width: '8px', height: '8px', backgroundColor: '#10b981', border: '1.5px solid #ffffff', borderRadius: '9999px' }}></span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            style={{ padding: '6px', borderRadius: '8px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X style={{ width: '18px', height: '18px', color: '#334155' }} /> : <Menu style={{ width: '18px', height: '18px', color: '#334155' }} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{ width: '100%', maxWidth: '1100px', margin: '10px auto', padding: '14px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }} className="md:hidden">
          <button onClick={() => openModal('about')} style={{ textAlign: 'left', padding: '8px 12px', fontSize: '13px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>About Me</button>
          <button onClick={() => openModal('projects')} style={{ textAlign: 'left', padding: '8px 12px', fontSize: '13px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>Projects</button>
          <button onClick={() => openModal('skills')} style={{ textAlign: 'left', padding: '8px 12px', fontSize: '13px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>Skills</button>
          <button onClick={() => openModal('credentials')} style={{ textAlign: 'left', padding: '8px 12px', fontSize: '13px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>Certifications</button>
          <button onClick={() => openModal('contact')} style={{ textAlign: 'center', padding: '10px', fontSize: '13px', fontWeight: '700', color: '#ffffff', backgroundColor: '#2563eb', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>Contact Me</button>
        </div>
      )}

      {/* 2. HERO SHOWCASE */}
      <section style={{ width: '100%', maxWidth: '1100px', margin: '24px auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
        
        {/* Left Column: Bio Details */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          
          <div style={{ color: '#2563eb', fontWeight: '800', fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '10px' }}>
            COMPUTER SYSTEMS ENGINEER
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: '1.05', color: '#0f172a', margin: '0 0 10px 0' }}>
            Zabi Ullah
          </h1>
          
          <div style={{ width: '40px', height: '5px', backgroundColor: '#2563eb', borderRadius: '9999px', marginBottom: '16px' }}></div>

          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.65', fontWeight: '500', maxWidth: '480px', margin: '0 0 20px 0' }}>
            Specializing in backend development with <strong style={{ color: '#0f172a' }}>Python &amp; C++</strong>, database management, high-concurrency systems, and advanced AI/ML diagnostic applications[cite: 1].
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', fontSize: '11px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }}>
              <Terminal style={{ width: '12px', height: '12px' }} /> Python &amp; C++ Backend[cite: 1]
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', fontSize: '11px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#faf5ff', color: '#7e22ce', border: '1px solid #e9d5ff' }}>
              <BrainCircuit style={{ width: '12px', height: '12px' }} /> AI / ML Systems[cite: 1]
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', fontSize: '11px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              <GraduationCap style={{ width: '12px', height: '12px' }} /> BUETK[cite: 1]
            </span>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', width: '100%' }}>
            <button
              onClick={() => openModal('projects')}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '11px 22px', borderRadius: '12px', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: '700', fontSize: '13px', border: 'none', cursor: 'pointer', boxShadow: '0 6px 16px -3px rgba(37,99,235,0.35)' }}
            >
              View All 4 Projects <ArrowRight style={{ width: '15px', height: '15px' }} />
            </button>
            <a
              href="/CV_Zabi Ullah.pdf"
              download="Zabi_Ullah_CV.pdf"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '11px 22px', borderRadius: '12px', backgroundColor: '#ffffff', border: '1.5px solid #cbd5e1', color: '#334155', fontWeight: '700', fontSize: '13px', textDecoration: 'none' }}
            >
              Download CV <Download style={{ width: '15px', height: '15px', color: '#64748b' }} />
            </a>
          </div>

        </div>

        {/* Right Column: Properly Constrained Showcase Frame */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px', boxSizing: 'border-box' }}>
          <div style={{ width: '100%', maxWidth: '440px', maxHeight: '310px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', boxShadow: '0 10px 25px -10px rgba(0,0,0,0.06)' }}>
            <img
              src="/showcase.png"
              alt="Workspace Overview"
              style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'contain', display: 'block' }}
            />
          </div>
        </div>

      </section>

      {/* 3. THREE FEATURE CARDS */}
      <section style={{ width: '100%', maxWidth: '1100px', margin: '16px auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
        
        {/* Card 1: Tech Stack */}
        <button
          onClick={() => openModal('skills')}
          style={{ padding: '20px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Code2 style={{ width: '20px', height: '20px' }} />
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Tech Stack</h3>
            <p style={{ fontSize: '11px', fontWeight: '800', color: '#2563eb', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Languages &amp; Tools</p>
            <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
              Python, C++, SQL, TensorFlow, PyTorch, Web3, DLD, Git, and Databases[cite: 1].
            </p>
          </div>
          <div style={{ marginTop: '16px', fontSize: '12px', fontWeight: '800', color: '#2563eb' }}>
            Explore Skills →
          </div>
        </button>

        {/* Card 2: Projects */}
        <button
          onClick={() => openModal('projects')}
          style={{ padding: '20px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#fdf2f8', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <FolderGit2 style={{ width: '20px', height: '20px' }} />
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Projects (4)</h3>
            <p style={{ fontSize: '11px', fontWeight: '800', color: '#db2777', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Applied Systems</p>
            <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
              Crypto Sniper Bot, AI Pneumonia Detection, Parking DLD, and Echo AI[cite: 1].
            </p>
          </div>
          <div style={{ marginTop: '16px', fontSize: '12px', fontWeight: '800', color: '#db2777' }}>
            View All 4 Projects →
          </div>
        </button>

        {/* Card 3: Credentials */}
        <button
          onClick={() => openModal('credentials')}
          style={{ padding: '20px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Award style={{ width: '20px', height: '20px' }} />
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Credentials</h3>
            <p style={{ fontSize: '11px', fontWeight: '800', color: '#059669', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Education &amp; Training</p>
            <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
              BUETK Engineering Degree, ISPR, Arch Tech, Code Alpha &amp; Top Performer Generative AI[cite: 1].
            </p>
          </div>
          <div style={{ marginTop: '16px', fontSize: '12px', fontWeight: '800', color: '#059669' }}>
            View Credentials &amp; History →
          </div>
        </button>

      </section>

      {/* 4. FOOTER */}
      <footer style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a href="https://github.com/Zabiullah788" target="_blank" rel="noreferrer" style={{ width: '34px', height: '34px', borderRadius: '9999px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155', textDecoration: 'none' }}>
            <Github style={{ width: '16px', height: '16px' }} />
          </a>
          <a href="https://www.linkedin.com/in/zabi-ullah-1969b3393" target="_blank" rel="noreferrer" style={{ width: '34px', height: '34px', borderRadius: '9999px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a66c2', textDecoration: 'none' }}>
            <Linkedin style={{ width: '16px', height: '16px' }} />
          </a>
          <a href="mailto:zbadini788@Gmail.com" style={{ width: '34px', height: '34px', borderRadius: '9999px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48', textDecoration: 'none' }}>
            <Mail style={{ width: '16px', height: '16px' }} />
          </a>
        </div>
        <p style={{ fontSize: '11px', fontWeight: '600', color: '#94a3b8', margin: 0 }}>
          © {new Date().getFullYear()} Zabi Ullah • Computer Systems Engineer
        </p>
      </footer>

      {/* 5. POPUP WINDOWS */}
      {activeModal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 999, backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '640px', backgroundColor: '#ffffff', borderRadius: '20px', padding: '24px 28px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid #e2e8f0', maxHeight: '88vh', overflowY: 'auto' }}>
            
            <button
              onClick={() => setActiveModal(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', padding: '7px', borderRadius: '9999px', backgroundColor: '#f1f5f9', border: 'none', color: '#475569', cursor: 'pointer' }}
            >
              <X style={{ width: '18px', height: '18px' }} />
            </button>

            {/* MODAL 1: PROJECTS */}
            {activeModal === 'projects' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <FolderGit2 style={{ width: '20px', height: '20px', color: '#db2777' }} />
                  <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', margin: 0 }}>Applied Technical Projects (4)</h2>
                </div>
                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '18px' }}>Verified engineering implementations from my CV[cite: 1].</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  
                  {/* Project 1 */}
                  <div style={{ padding: '14px 16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <h3 style={{ fontWeight: '800', fontSize: '14px', color: '#0f172a', margin: 0 }}>High-Frequency Crypto Sniper Bot</h3>
                      <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#dbeafe', color: '#1e40af' }}>Sub-50ms</span>
                    </div>
                    <ul style={{ fontSize: '12px', color: '#475569', lineHeight: '1.55', margin: '0 0 8px 0', paddingLeft: '16px' }}>
                      <li>Engineered low-latency bot utilizing Python and Web3 to execute memecoin trades on Ethereum[cite: 1].</li>
                      <li>Achieved sub-50ms execution speed by optimizing connection protocols and transactional overhead[cite: 1].</li>
                      <li>Designed an indexed data schema for trade logging using Database Management principles[cite: 1].</li>
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {['Python', 'Web3', 'Ethereum', 'High-Concurrency'].map(t => (
                        <span key={t} style={{ padding: '2px 7px', fontSize: '10px', fontWeight: '700', borderRadius: '5px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div style={{ padding: '14px 16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <h3 style={{ fontWeight: '800', fontSize: '14px', color: '#0f172a', margin: 0 }}>AI-Based Pneumonia Detection</h3>
                      <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#d1fae5', color: '#065f46' }}>97.2% Accuracy</span>
                    </div>
                    <ul style={{ fontSize: '12px', color: '#475569', lineHeight: '1.55', margin: '0 0 8px 0', paddingLeft: '16px' }}>
                      <li>Trained a deep CNN in TensorFlow/PyTorch classifying chest X-ray images for diagnosis[cite: 1].</li>
                      <li>Conducted data preprocessing and augmentation with NumPy and Pandas[cite: 1].</li>
                      <li>Integrated the trained model into a functional API prototype for real-time inference[cite: 1].</li>
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {['TensorFlow', 'PyTorch', 'CNN', 'NumPy', 'Pandas'].map(t => (
                        <span key={t} style={{ padding: '2px 7px', fontSize: '10px', fontWeight: '700', borderRadius: '5px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div style={{ padding: '14px 16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <h3 style={{ fontWeight: '800', fontSize: '14px', color: '#0f172a', margin: 0 }}>Automatic Car Parking System</h3>
                      <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#fef3c7', color: '#92400e' }}>Hardware DLD</span>
                    </div>
                    <ul style={{ fontSize: '12px', color: '#475569', lineHeight: '1.55', margin: '0 0 8px 0', paddingLeft: '16px' }}>
                      <li>Designed full control logic using Digital Logic Design (DLD) and C for microcontrollers[cite: 1].</li>
                      <li>Programmed real-time sensor processing and autonomous vehicle space allocation[cite: 1].</li>
                      <li>Verified state machine simulation for dependable load execution[cite: 1].</li>
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {['C', 'Microcontrollers', 'DLD', 'Hardware'].map(t => (
                        <span key={t} style={{ padding: '2px 7px', fontSize: '10px', fontWeight: '700', borderRadius: '5px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Project 4 */}
                  <div style={{ padding: '14px 16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <h3 style={{ fontWeight: '800', fontSize: '14px', color: '#0f172a', margin: 0 }}>Echo AI: Multimodal TTS &amp; Voice Cloning</h3>
                      <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#f3e8ff', color: '#7e22ce' }}>Mobile App</span>
                    </div>
                    <ul style={{ fontSize: '12px', color: '#475569', lineHeight: '1.55', margin: '0 0 8px 0', paddingLeft: '16px' }}>
                      <li>Engineered speech synthesis combining API integration with cloud inference[cite: 1].</li>
                      <li>Architected backend with Gemini API and custom Hugging Face model deployment[cite: 1].</li>
                      <li>Implemented multilingual voice cloning technology with low-latency orchestration[cite: 1].</li>
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {['Gemini API', 'Hugging Face', 'FastAPI', 'Python'].map(t => (
                        <span key={t} style={{ padding: '2px 7px', fontSize: '10px', fontWeight: '700', borderRadius: '5px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* MODAL 2: SKILLS */}
            {activeModal === 'skills' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Code2 style={{ width: '20px', height: '20px', color: '#2563eb' }} />
                  <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', margin: 0 }}>Technical Proficiency</h2>
                </div>
                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '18px' }}>Toolsets and core competencies[cite: 1].</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                  <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontWeight: '800', color: '#1e40af', fontSize: '11px', textTransform: 'uppercase', marginBottom: '8px' }}>Languages &amp; Core</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {['Python', 'C++', 'C (Microcontrollers)', 'SQL', 'Web3 / Solidity'].map((skill) => (
                        <span key={skill} style={{ padding: '4px 8px', fontSize: '11px', fontWeight: '700', borderRadius: '6px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b' }}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontWeight: '800', color: '#7e22ce', fontSize: '11px', textTransform: 'uppercase', marginBottom: '8px' }}>AI / ML &amp; Data Science</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {['TensorFlow', 'PyTorch', 'scikit-learn', 'NumPy', 'Pandas', 'CNNs', 'LLMs'].map((skill) => (
                        <span key={skill} style={{ padding: '4px 8px', fontSize: '11px', fontWeight: '700', borderRadius: '6px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b' }}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontWeight: '800', color: '#047857', fontSize: '11px', textTransform: 'uppercase', marginBottom: '8px' }}>Systems &amp; Architecture</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {['Database Management', 'Computer Networking', 'DLD', 'Git Version Control'].map((skill) => (
                        <span key={skill} style={{ padding: '4px 8px', fontSize: '11px', fontWeight: '700', borderRadius: '6px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b' }}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontWeight: '800', color: '#b45309', fontSize: '11px', textTransform: 'uppercase', marginBottom: '8px' }}>Spoken Languages</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {['Brahui (Native)', 'Balochi (Native)', 'Urdu (Fluent)', 'English (Fluent)'].map((skill) => (
                        <span key={skill} style={{ padding: '4px 8px', fontSize: '11px', fontWeight: '700', borderRadius: '6px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b' }}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODAL 3: CREDENTIALS */}
            {activeModal === 'credentials' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Award style={{ width: '20px', height: '20px', color: '#059669' }} />
                  <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', margin: 0 }}>Education &amp; Experience</h2>
                </div>
                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '18px' }}>Academic track record and certifications[cite: 1].</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ padding: '14px 16px', borderRadius: '14px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: '900', color: '#064e3b', textTransform: 'uppercase', marginBottom: '6px' }}>Education</h3>
                    <div style={{ marginBottom: '8px' }}>
                      <strong style={{ fontSize: '13px', color: '#064e3b' }}>B.E. Computer Systems Engineering</strong>
                      <p style={{ fontSize: '12px', color: '#065f46', margin: '2px 0' }}>Balochistan University of Engineering &amp; Technology, Khuzdar (2022–2025)[cite: 1]</p>
                    </div>
                    <div style={{ borderTop: '1px solid #bbf7d0', paddingTop: '6px' }}>
                      <p style={{ fontSize: '12px', color: '#047857', margin: 0 }}>Intermediate (Govt Boys Degree College Nushki) &amp; Matriculation[cite: 1]</p>
                    </div>
                  </div>

                  <div style={{ padding: '14px 16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: '900', color: '#0f172a', textTransform: 'uppercase', marginBottom: '6px' }}>Training &amp; Certifications</h3>
                    <ul style={{ fontSize: '12px', color: '#475569', lineHeight: '1.6', margin: 0, paddingLeft: '16px' }}>
                      <li><strong>Generative AI Application Developer:</strong> Pak Angels &amp; UETIANS Lahore (NCEAC-HEC Certified) • <em>Top Performer Award</em>[cite: 1].</li>
                      <li><strong>DGskills:</strong> WordPress &amp; Freelancing Certification[cite: 1].</li>
                      <li><strong>NFTP:</strong> Graphic Designing Course[cite: 1].</li>
                      <li><strong>Social Welfare Computer Center:</strong> 6-Month Computer Basics[cite: 1].</li>
                    </ul>
                  </div>

                  <div style={{ padding: '14px 16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: '900', color: '#0f172a', textTransform: 'uppercase', marginBottom: '6px' }}>Internships</h3>
                    <ul style={{ fontSize: '12px', color: '#475569', lineHeight: '1.6', margin: 0, paddingLeft: '16px' }}>
                      <li><strong>ISPR (Aug 2025):</strong> Strategic communication &amp; institutional frameworks[cite: 1].</li>
                      <li><strong>Arch Technologies:</strong> AI/ML predictive models using TensorFlow[cite: 1].</li>
                      <li><strong>Code Alpha:</strong> Python development &amp; Git version control[cite: 1].</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* MODAL 4: ABOUT ME */}
            {activeModal === 'about' && (
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', marginBottom: '4px' }}>About Me</h2>
                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '14px' }}>Professional summary.</p>
                <div style={{ padding: '16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0', color: '#334155', fontSize: '13px', lineHeight: '1.7' }}>
                  <p style={{ marginBottom: '10px' }}>
                    Driven and accomplished <strong>Computer Systems Engineer</strong> specializing in backend development, low-latency architectures, and high-concurrency systems[cite: 1].
                  </p>
                  <p style={{ marginBottom: '10px' }}>
                    I build reliable solutions with <strong>Python and C++</strong>, database management, and computer networking principles[cite: 1].
                  </p>
                  <p style={{ margin: 0 }}>
                    My work includes developing high-frequency crypto trading bots with sub-50ms execution and deep CNN healthcare models reaching 97.2% diagnostic accuracy[cite: 1].
                  </p>
                </div>
              </div>
            )}

            {/* MODAL 5: CONTACT */}
            {activeModal === 'contact' && (
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', marginBottom: '4px' }}>Contact Information</h2>
                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>Direct contact details for technical roles and inquiries.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="mailto:zbadini788@Gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '12px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', textDecoration: 'none', color: '#1e40af', fontWeight: '700', fontSize: '13px' }}>
                    <Mail style={{ width: '16px', height: '16px' }} /> zbadini788@Gmail.com[cite: 1]
                  </a>
                  <a href="tel:+923493233604" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '12px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', textDecoration: 'none', color: '#065f46', fontWeight: '700', fontSize: '13px' }}>
                    <Phone style={{ width: '16px', height: '16px' }} /> +92 349 3233604[cite: 1]
                  </a>
                  <a href="https://www.linkedin.com/in/zabi-ullah-1969b3393" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1.5px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontWeight: '700', fontSize: '13px' }}>
                    <Linkedin style={{ width: '16px', height: '16px', color: '#0a66c2' }} /> linkedin.com/in/zabi-ullah-1969b3393[cite: 1]
                  </a>
                  <a href="https://github.com/Zabiullah788" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1.5px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontWeight: '700', fontSize: '13px' }}>
                    <Github style={{ width: '16px', height: '16px', color: '#24292e' }} /> github.com/Zabiullah788[cite: 1]
                  </a>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0', color: '#475569', fontSize: '12px', fontWeight: '600' }}>
                    <MapPin style={{ width: '16px', height: '16px' }} /> Kili Sahibzada Nushki, Balochistan, Pakistan[cite: 1]
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