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
  Terminal
} from 'lucide-react';

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: '24px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      
      {/* 1. TOP HEADER NAVIGATION */}
      <header style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '20px' }}>
        
        {/* Available For Work Pill */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', backgroundColor: '#ecfdf5', border: '1.5px solid #a7f3d0' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#10b981', display: 'inline-block' }}></span>
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#047857' }}>Available for Work</span>
        </div>

        {/* Center Nav Links & Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button onClick={() => setActiveModal('about')} style={{ background: 'none', border: 'none', fontSize: '14px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>About Me</button>
            <button onClick={() => setActiveModal('projects')} style={{ background: 'none', border: 'none', fontSize: '14px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Projects</button>
            <button onClick={() => setActiveModal('skills')} style={{ background: 'none', border: 'none', fontSize: '14px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Skills</button>
            <button onClick={() => setActiveModal('credentials')} style={{ background: 'none', border: 'none', fontSize: '14px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Certifications</button>
          </nav>

          <button
            onClick={() => setActiveModal('contact')}
            style={{ padding: '8px 24px', fontSize: '14px', fontWeight: '700', borderRadius: '9999px', background: 'linear-gradient(135deg, #2563eb, #4f46e5)', color: '#ffffff', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(37,99,235,0.25)' }}
          >
            Contact
          </button>

          {/* Profile Picture */}
          <div style={{ position: 'relative', width: '44px', height: '44px', minWidth: '44px', borderRadius: '9999px', border: '2px solid #ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <img
              src="/profile.jpg"
              alt="Zabi Ullah"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span style={{ position: 'absolute', bottom: '1px', right: '1px', width: '10px', height: '10px', backgroundColor: '#10b981', border: '2px solid #ffffff', borderRadius: '9999px' }}></span>
          </div>
        </div>
      </header>

      {/* 2. HERO SHOWCASE (2-COLUMN GRID) */}
      <section style={{ width: '100%', maxWidth: '1200px', margin: '20px auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '48px', alignItems: 'center' }}>
        
        {/* Left Side: Bio & Text */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          
          {/* Subtitle Text */}
          <div style={{ color: '#2563eb', fontWeight: '800', fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>
            COMPUTER SYSTEMS ENGINEER
          </div>

          {/* Large Name */}
          <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: '1.05', color: '#0f172a', margin: '0 0 10px 0' }}>
            Zabi Ullah
          </h1>
          
          {/* Blue Accent Bar */}
          <div style={{ width: '48px', height: '6px', backgroundColor: '#2563eb', borderRadius: '9999px', marginBottom: '20px' }}></div>

          {/* Description */}
          <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.7', fontWeight: '500', maxWidth: '520px', margin: '0 0 24px 0' }}>
            Specializing in backend development with <strong style={{ color: '#0f172a' }}>Python &amp; C++</strong>, database management, high-concurrency systems, and advanced AI/ML diagnostic applications.
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', fontSize: '12px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }}>
              <Terminal style={{ width: '13px', height: '13px' }} /> Python &amp; C++ Backend
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', fontSize: '12px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#faf5ff', color: '#7e22ce', border: '1px solid #e9d5ff' }}>
              <BrainCircuit style={{ width: '13px', height: '13px' }} /> AI / ML Systems
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', fontSize: '12px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              <GraduationCap style={{ width: '13px', height: '13px' }} /> BUETK
            </span>
          </div>

          {/* Main Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={() => setActiveModal('projects')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: '700', fontSize: '14px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 20px -4px rgba(37,99,235,0.35)' }}
            >
              View All 4 Projects <ArrowRight style={{ width: '16px', height: '16px' }} />
            </button>
            <a
              href="/CV_Zabi Ullah.pdf"
              download="Zabi_Ullah_CV.pdf"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', backgroundColor: '#ffffff', border: '1.5px solid #cbd5e1', color: '#334155', fontWeight: '700', fontSize: '14px', textDecoration: 'none', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}
            >
              Download CV <Download style={{ width: '16px', height: '16px', color: '#64748b' }} />
            </a>
          </div>

        </div>

        {/* Right Side: Showcase Image Container */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/showcase.png"
            alt="Development Environment"
            style={{ width: '100%', maxWidth: '540px', height: 'auto', borderRadius: '24px', display: 'block', objectFit: 'contain' }}
          />
        </div>

      </section>

      {/* 3. THREE BOTTOM FEATURE CARDS */}
      <section style={{ width: '100%', maxWidth: '1200px', margin: '10px auto 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        
        {/* Card 1: Tech Stack */}
        <button
          onClick={() => setActiveModal('skills')}
          style={{ padding: '24px', borderRadius: '20px', backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Code2 style={{ width: '24px', height: '24px' }} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Tech Stack</h3>
            <p style={{ fontSize: '11px', fontWeight: '800', color: '#2563eb', textTransform: 'uppercase', margin: '0 0 8px 0' }}>Languages &amp; Tools</p>
            <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
              Python, C++, SQL, TensorFlow, PyTorch, Web3, DLD, Git, and Databases.
            </p>
          </div>
          <div style={{ marginTop: '20px', fontSize: '12px', fontWeight: '800', color: '#2563eb' }}>
            Explore Skills →
          </div>
        </button>

        {/* Card 2: Projects */}
        <button
          onClick={() => setActiveModal('projects')}
          style={{ padding: '24px', borderRadius: '20px', backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: '#fdf2f8', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <FolderGit2 style={{ width: '24px', height: '24px' }} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Projects (4)</h3>
            <p style={{ fontSize: '11px', fontWeight: '800', color: '#db2777', textTransform: 'uppercase', margin: '0 0 8px 0' }}>Applied Systems</p>
            <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
              Crypto Sniper Bot, AI Pneumonia Detection, Parking DLD, and Echo AI.
            </p>
          </div>
          <div style={{ marginTop: '20px', fontSize: '12px', fontWeight: '800', color: '#db2777' }}>
            View All 4 Projects →
          </div>
        </button>

        {/* Card 3: Credentials */}
        <button
          onClick={() => setActiveModal('credentials')}
          style={{ padding: '24px', borderRadius: '20px', backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Award style={{ width: '24px', height: '24px' }} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Credentials</h3>
            <p style={{ fontSize: '11px', fontWeight: '800', color: '#059669', textTransform: 'uppercase', margin: '0 0 8px 0' }}>Education &amp; Training</p>
            <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
              BUETK Engineering Degree, ISPR, Arch Tech, Code Alpha &amp; Top Performer Generative AI.
            </p>
          </div>
          <div style={{ marginTop: '20px', fontSize: '12px', fontWeight: '800', color: '#059669' }}>
            View Credentials &amp; History →
          </div>
        </button>

      </section>

      {/* 4. FOOTER */}
      <footer style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="https://github.com/Zabiullah788" target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '9999px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155', textDecoration: 'none' }}>
            <Github style={{ width: '18px', height: '18px' }} />
          </a>
          <a href="https://www.linkedin.com/in/zabi-ullah-1969b3393" target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '9999px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a66c2', textDecoration: 'none' }}>
            <Linkedin style={{ width: '18px', height: '18px' }} />
          </a>
          <a href="mailto:zbadini788@Gmail.com" style={{ width: '36px', height: '36px', borderRadius: '9999px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48', textDecoration: 'none' }}>
            <Mail style={{ width: '18px', height: '18px' }} />
          </a>
        </div>
        <p style={{ fontSize: '12px', fontWeight: '600', color: '#94a3b8', margin: 0 }}>
          © {new Date().getFullYear()} Zabi Ullah • Computer Systems Engineer
        </p>
      </footer>

      {/* 5. POPUP WINDOWS */}
      {activeModal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 999, backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '720px', backgroundColor: '#ffffff', borderRadius: '24px', padding: '32px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1.5px solid #e2e8f0', maxHeight: '88vh', overflowY: 'auto' }}>
            
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', padding: '8px', borderRadius: '9999px', backgroundColor: '#f1f5f9', border: 'none', color: '#475569', cursor: 'pointer' }}
            >
              <X style={{ width: '20px', height: '20px' }} />
            </button>

            {/* MODAL 1: PROJECTS */}
            {activeModal === 'projects' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <FolderGit2 style={{ width: '24px', height: '24px', color: '#db2777' }} />
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0f172a' }}>Applied Technical Projects (4)</h2>
                </div>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '22px' }}>Complete portfolio of verified engineering implementations.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  
                  {/* Project 1 */}
                  <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <div>
                        <span style={{ fontSize: '11px', fontWeight: '800', color: '#1e40af', textTransform: 'uppercase' }}>1. Final Year Project</span>
                        <h3 style={{ fontWeight: '800', fontSize: '16px', color: '#0f172a', marginTop: '2px' }}>High-Frequency Crypto Sniper Bot Development</h3>
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '6px', backgroundColor: '#dbeafe', color: '#1e40af' }}>Sub-50ms Execution</span>
                    </div>
                    <ul style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: '0 0 10px 0', paddingLeft: '18px' }}>
                      <li>Engineered a low-latency algorithmic trading bot utilizing Python and Web3 to monitor memecoin transactions and execute trades on Ethereum.</li>
                      <li>Achieved sub-50ms trade execution speed by optimizing connection protocols and minimizing transactional overhead.</li>
                      <li>Designed a secure, indexed data schema to log trade history, market feeds, and performance metrics using efficient Database Management principles.</li>
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['Python', 'Web3', 'Ethereum', 'Algorithmic Trading', 'Database Management', 'High-Concurrency'].map(t => (
                        <span key={t} style={{ padding: '3px 8px', fontSize: '11px', fontWeight: '700', borderRadius: '6px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <div>
                        <span style={{ fontSize: '11px', fontWeight: '800', color: '#047857', textTransform: 'uppercase' }}>2. Healthcare AI / ML</span>
                        <h3 style={{ fontWeight: '800', fontSize: '16px', color: '#0f172a', marginTop: '2px' }}>AI-Based Pneumonia Detection for Doctor's Assistance</h3>
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '6px', backgroundColor: '#d1fae5', color: '#065f46' }}>97.2% Accuracy</span>
                    </div>
                    <ul style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: '0 0 10px 0', paddingLeft: '18px' }}>
                      <li>Developed and trained a deep Convolutional Neural Network (CNN) using TensorFlow and PyTorch to classify X-ray images for pneumonia diagnosis.</li>
                      <li>Achieved 97.2% validation accuracy, improving diagnostic support in simulated clinical workflows.</li>
                      <li>Conducted data preprocessing and augmentation with NumPy/Pandas and integrated model into a functional API prototype for real-time inference.</li>
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['TensorFlow', 'PyTorch', 'CNN', 'NumPy', 'Pandas', 'Medical AI API'].map(t => (
                        <span key={t} style={{ padding: '3px 8px', fontSize: '11px', fontWeight: '700', borderRadius: '6px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <div>
                        <span style={{ fontSize: '11px', fontWeight: '800', color: '#b45309', textTransform: 'uppercase' }}>3. Hardware &amp; Embedded (DLD)</span>
                        <h3 style={{ fontWeight: '800', fontSize: '16px', color: '#0f172a', marginTop: '2px' }}>Automatic Car Parking System Implementation</h3>
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '6px', backgroundColor: '#fef3c7', color: '#92400e' }}>Hardware DLD</span>
                    </div>
                    <ul style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: '0 0 10px 0', paddingLeft: '18px' }}>
                      <li>Designed and implemented complete control logic for an automated parking garage using Digital Logic Design (DLD) and C for microcontrollers.</li>
                      <li>Programmed the system to process real-time sensor inputs, direct vehicle flow, and optimize space allocation autonomously.</li>
                      <li>Simulated and verified the core state machine, ensuring reliable, error-free operation under heavy load.</li>
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['C', 'Microcontrollers', 'Digital Logic Design', 'Hardware Simulation', 'State Machines'].map(t => (
                        <span key={t} style={{ padding: '3px 8px', fontSize: '11px', fontWeight: '700', borderRadius: '6px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Project 4 */}
                  <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <div>
                        <span style={{ fontSize: '11px', fontWeight: '800', color: '#7e22ce', textTransform: 'uppercase' }}>4. Mobile &amp; Multimodal Speech</span>
                        <h3 style={{ fontWeight: '800', fontSize: '16px', color: '#0f172a', marginTop: '2px' }}>Echo AI: Advanced Multimodal TTS &amp; Voice Cloning System</h3>
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '6px', backgroundColor: '#f3e8ff', color: '#7e22ce' }}>Mobile App</span>
                    </div>
                    <ul style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: '0 0 10px 0', paddingLeft: '18px' }}>
                      <li>Engineered a dual-engine speech synthesis platform combining API integration with decentralized cloud-based inference.</li>
                      <li>Architected a hybrid backend utilizing the Gemini API for text-to-speech alongside a custom Hugging Face server deployment.</li>
                      <li>Implemented voice cloning technology replicating vocal nuances across English and multiple other languages with low-latency orchestration.</li>
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['Gemini API', 'Hugging Face', 'Voice Cloning', 'Python', 'FastAPI', 'Cloud Inference'].map(t => (
                        <span key={t} style={{ padding: '3px 8px', fontSize: '11px', fontWeight: '700', borderRadius: '6px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* MODAL 2: SKILLS */}
            {activeModal === 'skills' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Code2 style={{ width: '24px', height: '24px', color: '#2563eb' }} />
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0f172a' }}>Technical Proficiency</h2>
                </div>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '22px' }}>Comprehensive toolsets and programming skills.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                  
                  <div style={{ padding: '16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontWeight: '800', color: '#1e40af', fontSize: '13px', marginBottom: '10px', textTransform: 'uppercase' }}>Languages &amp; Core</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['Python', 'C++', 'C (Microcontrollers)', 'SQL', 'Web3 / Solidity'].map((skill) => (
                        <span key={skill} style={{ padding: '5px 10px', fontSize: '12px', fontWeight: '700', borderRadius: '8px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b' }}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontWeight: '800', color: '#7e22ce', fontSize: '13px', marginBottom: '10px', textTransform: 'uppercase' }}>AI / ML &amp; Data Science</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['TensorFlow', 'PyTorch', 'scikit-learn', 'NumPy', 'Pandas', 'CNN Architectures', 'LLM Implementation'].map((skill) => (
                        <span key={skill} style={{ padding: '5px 10px', fontSize: '12px', fontWeight: '700', borderRadius: '8px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b' }}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontWeight: '800', color: '#047857', fontSize: '13px', marginBottom: '10px', textTransform: 'uppercase' }}>Systems &amp; Architecture</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['Database Management', 'Computer Networking', 'Digital Logic Design (DLD)', 'Microcontroller Programming', 'Git Version Control'].map((skill) => (
                        <span key={skill} style={{ padding: '5px 10px', fontSize: '12px', fontWeight: '700', borderRadius: '8px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b' }}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontWeight: '800', color: '#b45309', fontSize: '13px', marginBottom: '10px', textTransform: 'uppercase' }}>Spoken Languages</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['Brahui (Native)', 'Balochi (Native)', 'Urdu (Fluent)', 'English (Fluent)'].map((skill) => (
                        <span key={skill} style={{ padding: '5px 10px', fontSize: '12px', fontWeight: '700', borderRadius: '8px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b' }}>{skill}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* MODAL 3: CREDENTIALS */}
            {activeModal === 'credentials' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Award style={{ width: '24px', height: '24px', color: '#059669' }} />
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0f172a' }}>Education, Certifications &amp; Experience</h2>
                </div>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '22px' }}>Academic credentials, formal certifications, and internships.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  
                  {/* Education Timeline */}
                  <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#ecfdf5', border: '1.5px solid #a7f3d0' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#064e3b', textTransform: 'uppercase', marginBottom: '10px' }}>Education History</h3>
                    
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong style={{ fontSize: '14px', color: '#064e3b' }}>B.E. Computer Systems Engineering</strong>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#047857' }}>March 2022 – Dec 2025</span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#065f46', margin: '2px 0' }}>Balochistan University of Engineering &amp; Technology, Khuzdar</p>
                      <p style={{ fontSize: '12px', fontWeight: '800', color: '#047857', margin: '2px 0' }}>Final Project: Crypto Sniper Bot for Meme Coins</p>
                    </div>

                    <div style={{ borderTop: '1px solid #bbf7d0', paddingTop: '8px', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '13px', fontWeight: '700', color: '#064e3b' }}>Intermediate • Govt Boys Degree College Nushki</span>
                        <span style={{ fontSize: '12px', color: '#047857' }}>Aug 2019 – Aug 2021 (764/1100)</span>
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid #bbf7d0', paddingTop: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '13px', fontWeight: '700', color: '#064e3b' }}>Matriculation • Govt Boys High Secondary School Sharif Khan Nushki</span>
                        <span style={{ fontSize: '12px', color: '#047857' }}>May 2017 – Apr 2019 (755/1100)</span>
                      </div>
                    </div>
                  </div>

                  {/* Certified Training & Honors */}
                  <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#0f172a', textTransform: 'uppercase', marginBottom: '10px' }}>Online Training &amp; Certifications</h3>
                    <ul style={{ fontSize: '13px', color: '#475569', lineHeight: '1.7', margin: 0, paddingLeft: '18px' }}>
                      <li><strong>Generative AI Application Developer (Nov–Dec 2025):</strong> Pak Angels &amp; UETIANS Lahore. NCEAC-HEC certified 40-day intensive track. Awarded <em>Top Performer Award</em>.</li>
                      <li><strong>WordPress &amp; Freelancing Course (July 2023 – Oct 2023):</strong> DGskills certification in digital marketing and client workflows.</li>
                      <li><strong>Graphic Designing Course (June 2022 – Nov 2022):</strong> National Freelance Training Program (NFTP).</li>
                      <li><strong>Computer Basics (6 Months) (Aug 2020 – Jan 2021):</strong> Social Welfare Computer Center Nushki.</li>
                    </ul>
                  </div>

                  {/* Internships */}
                  <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#0f172a', textTransform: 'uppercase', marginBottom: '10px' }}>Internships</h3>
                    <ul style={{ fontSize: '13px', color: '#475569', lineHeight: '1.7', margin: 0, paddingLeft: '18px' }}>
                      <li><strong>Summer Internship Program | ISPR (August 2025):</strong> Strategic communication, national governance, institutional frameworks, and media relations.</li>
                      <li><strong>Virtual AI/ML Internship | Arch Technologies:</strong> End-to-end ML model development, validation, and feature engineering using TensorFlow/scikit-learn.</li>
                      <li><strong>Python Development Internship | Code Alpha:</strong> Backend scripting, automation of data handling, and Git version control collaboration.</li>
                    </ul>
                  </div>

                  {/* Leadership & Services */}
                  <div style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#eff6ff', border: '1.5px solid #bfdbfe' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#1e40af', textTransform: 'uppercase', marginBottom: '8px' }}>Leadership, Scouting &amp; Outreach</h3>
                    <p style={{ fontSize: '13px', color: '#1e3a8a', lineHeight: '1.6', margin: 0 }}>
                      • <strong>Scouting &amp; Wilderness Training:</strong> Expeditions in Quetta &amp; Ziarat (3 instances) covering emergency preparedness, survival, and team leadership.<br />
                      • <strong>Community Outreach:</strong> Active participation in Prime Minister Green Youth Program and student welfare organizations.
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* MODAL 4: ABOUT ME */}
            {activeModal === 'about' && (
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '6px' }}>About Me</h2>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>Professional profile and focus areas.</p>
                <div style={{ padding: '20px', borderRadius: '16px', backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0', color: '#334155', fontSize: '14px', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '14px' }}>
                    Driven and highly accomplished <strong>Computer Systems Engineer</strong> seeking an immediate role where I can transition my strong academic background into high-impact practical solutions.
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    I specialize in backend development, leveraging <strong>C++ and Python</strong>, with deep applied knowledge in Database Management, Computer Networking, and high-concurrency systems.
                  </p>
                  <p>
                    My experience includes developing specialized systems such as a high-frequency Crypto Sniper Bot (sub-50ms execution speed) and advanced AI/ML diagnostic applications (97.2% validation accuracy), demonstrating a commitment to delivering fast, functional, and data-efficient results.
                  </p>
                </div>
              </div>
            )}

            {/* MODAL 5: CONTACT */}
            {activeModal === 'contact' && (
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '6px' }}>Contact Information</h2>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>Direct contact details for employment and project inquiries.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="mailto:zbadini788@Gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px', borderRadius: '14px', backgroundColor: '#eff6ff', border: '1.5px solid #bfdbfe', textDecoration: 'none', color: '#1e40af', fontWeight: '700', fontSize: '14px' }}>
                    <Mail style={{ width: '20px', height: '20px', color: '#2563eb' }} /> zbadini788@Gmail.com
                  </a>
                  <a href="tel:+923493233604" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px', borderRadius: '14px', backgroundColor: '#ecfdf5', border: '1.5px solid #a7f3d0', textDecoration: 'none', color: '#065f46', fontWeight: '700', fontSize: '14px' }}>
                    <Phone style={{ width: '20px', height: '20px', color: '#059669' }} /> +92 349 3233604
                  </a>
                  <a href="https://www.linkedin.com/in/zabi-ullah-1969b3393" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1.5px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontWeight: '700', fontSize: '14px' }}>
                    <Linkedin style={{ width: '20px', height: '20px', color: '#0a66c2' }} /> linkedin.com/in/zabi-ullah-1969b3393
                  </a>
                  <a href="https://github.com/Zabiullah788" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1.5px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontWeight: '700', fontSize: '14px' }}>
                    <Github style={{ width: '20px', height: '20px', color: '#24292e' }} /> github.com/Zabiullah788
                  </a>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0', color: '#475569', fontSize: '13px', fontWeight: '600' }}>
                    <MapPin style={{ width: '20px', height: '20px', color: '#64748b' }} /> Kili Sahibzada Nushki, Balochistan, Pakistan
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