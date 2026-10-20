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
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', boxSizing: 'border-box', overflowX: 'hidden' }}>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .shell {
          width: 100%;
          max-width: 1140px;
          margin: 0 auto;
          padding: 16px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .nav-links-desktop {
          display: none;
        }
        .nav-btn-contact-desktop {
          display: none;
        }
        .hero-layout {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin: 20px 0;
          width: 100%;
        }
        .hero-heading {
          font-size: 2.2rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .hero-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 20px;
        }
        .action-btns {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }
        .action-btns > * {
          width: 100%;
          text-align: center;
          justify-content: center;
        }
        .showcase-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .showcase-img {
          width: 100%;
          max-width: 440px;
          height: auto;
          display: block;
          border-radius: 16px;
          object-fit: contain;
        }
        .cards-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
          margin: 16px 0;
        }

        /* DESKTOP (Screen width > 768px) */
        @media (min-width: 769px) {
          .shell {
            padding: 24px 32px;
          }
          .nav-links-desktop {
            display: flex;
            align-items: center;
            gap: 24px;
          }
          .nav-btn-contact-desktop {
            display: inline-block;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .hero-layout {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            align-items: center;
            gap: 40px;
            margin: 36px 0;
          }
          .hero-heading {
            font-size: 3.8rem;
          }
          .hero-desc {
            font-size: 16px;
          }
          .action-btns {
            flex-direction: row;
            width: auto;
          }
          .action-btns > * {
            width: auto;
          }
          .cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }
        }
      `}</style>

      <div className="shell">
        
        {/* 1. HEADER */}
        <header style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid #e2e8f0' }}>
          
          {/* Status Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 12px', borderRadius: '9999px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '9999px', backgroundColor: '#10b981', display: 'inline-block' }}></span>
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#047857' }}>Available for Work</span>
          </div>

          {/* Navigation Items */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            
            <nav className="nav-links-desktop">
              <button onClick={() => openModal('about')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>About Me</button>
              <button onClick={() => openModal('projects')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Projects</button>
              <button onClick={() => openModal('skills')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Skills</button>
              <button onClick={() => openModal('credentials')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Certifications</button>
            </nav>

            <button
              onClick={() => openModal('contact')}
              className="nav-btn-contact-desktop"
              style={{ padding: '8px 20px', fontSize: '13px', fontWeight: '700', borderRadius: '9999px', background: 'linear-gradient(135deg, #2563eb, #4f46e5)', color: '#ffffff', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(37,99,235,0.25)' }}
            >
              Contact
            </button>

            {/* Profile Picture */}
            <div style={{ width: '38px', height: '38px', minWidth: '38px', maxWidth: '38px', minHeight: '38px', maxHeight: '38px', borderRadius: '9999px', border: '2px solid #ffffff', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
              <img
                src="/profile.jpg"
                alt="Zabi Ullah"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '9999px', display: 'block' }}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{ padding: '6px', borderRadius: '8px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X style={{ width: '18px', height: '18px', color: '#334155' }} /> : <Menu style={{ width: '18px', height: '18px', color: '#334155' }} />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{ width: '100%', padding: '14px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '8px', margin: '10px 0' }}>
            <button onClick={() => openModal('about')} style={{ textAlign: 'left', padding: '10px 12px', fontSize: '14px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>About Me</button>
            <button onClick={() => openModal('projects')} style={{ textAlign: 'left', padding: '10px 12px', fontSize: '14px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>Projects</button>
            <button onClick={() => openModal('skills')} style={{ textAlign: 'left', padding: '10px 12px', fontSize: '14px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>Skills</button>
            <button onClick={() => openModal('credentials')} style={{ textAlign: 'left', padding: '10px 12px', fontSize: '14px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>Certifications</button>
            <button onClick={() => openModal('contact')} style={{ textAlign: 'center', padding: '12px', fontSize: '14px', fontWeight: '700', color: '#ffffff', backgroundColor: '#2563eb', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>Contact Me</button>
          </div>
        )}

        {/* 2. HERO */}
        <section className="hero-layout">
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ color: '#2563eb', fontWeight: '800', fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
              COMPUTER SYSTEMS ENGINEER
            </div>

            <h1 className="hero-heading">
              Zabi Ullah
            </h1>
            
            <div style={{ width: '40px', height: '4px', backgroundColor: '#2563eb', borderRadius: '9999px', marginBottom: '14px' }}></div>

            <p className="hero-desc">
              Specializing in backend development with <strong style={{ color: '#0f172a' }}>Python &amp; C++</strong>, database management, high-concurrency systems, and advanced AI/ML diagnostic applications.
            </p>

            {/* Focus Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', fontSize: '11px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }}>
                <Terminal style={{ width: '12px', height: '12px' }} /> Python &amp; C++ Backend
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', fontSize: '11px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#faf5ff', color: '#7e22ce', border: '1px solid #e9d5ff' }}>
                <BrainCircuit style={{ width: '12px', height: '12px' }} /> AI / ML Systems
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', fontSize: '11px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
                <GraduationCap style={{ width: '12px', height: '12px' }} /> BUETK
              </span>
            </div>

            {/* CTAs */}
            <div className="action-btns">
              <button
                onClick={() => openModal('projects')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: '700', fontSize: '14px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}
              >
                View All 4 Projects <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
              <a
                href="/CV_Zabi Ullah.pdf"
                download="Zabi_Ullah_CV.pdf"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', backgroundColor: '#ffffff', border: '1.5px solid #cbd5e1', color: '#334155', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}
              >
                Download CV <Download style={{ width: '16px', height: '16px', color: '#64748b' }} />
              </a>
            </div>
          </div>

          <div className="showcase-container">
            <img
              src="/showcase.png"
              alt="Workspace overview"
              className="showcase-img"
            />
          </div>

        </section>

        {/* 3. BOTTOM CARDS */}
        <section className="cards-grid">
          
          <button
            onClick={() => openModal('skills')}
            style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Code2 style={{ width: '20px', height: '20px' }} />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Tech Stack</h3>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#2563eb', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Languages &amp; Tools</p>
              <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                Python, C++, SQL, TensorFlow, PyTorch, Web3, DLD, Git, and Databases.
              </p>
            </div>
            <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: '800', color: '#2563eb' }}>
              Explore Skills →
            </div>
          </button>

          <button
            onClick={() => openModal('projects')}
            style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#fdf2f8', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <FolderGit2 style={{ width: '20px', height: '20px' }} />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Projects (4)</h3>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#db2777', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Applied Systems</p>
              <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                Crypto Sniper Bot, AI Pneumonia Detection, Parking DLD, and Echo AI.
              </p>
            </div>
            <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: '800', color: '#db2777' }}>
              View All 4 Projects →
            </div>
          </button>

          <button
            onClick={() => openModal('credentials')}
            style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Award style={{ width: '20px', height: '20px' }} />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Credentials</h3>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#059669', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Education &amp; Training</p>
              <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                BUETK Engineering Degree, ISPR, Arch Tech, Code Alpha &amp; Top Performer Generative AI.
              </p>
            </div>
            <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: '800', color: '#059669' }}>
              View Credentials &amp; History →
            </div>
          </button>

        </section>

        {/* 4. FOOTER */}
        <footer style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
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
          <div style={{ position: 'fixed', inset: 0, zIndex: 999, backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '640px', backgroundColor: '#ffffff', borderRadius: '20px', padding: '22px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid #e2e8f0', maxHeight: '88vh', overflowY: 'auto' }}>
              
              <button
                onClick={() => setActiveModal(null)}
                style={{ position: 'absolute', top: '16px', right: '16px', padding: '7px', borderRadius: '9999px', backgroundColor: '#f1f5f9', border: 'none', color: '#475569', cursor: 'pointer' }}
              >
                <X style={{ width: '18px', height: '18px' }} />
              </button>

              {activeModal === 'projects' && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <FolderGit2 style={{ width: '20px', height: '20px', color: '#db2777' }} />
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', margin: 0 }}>Applied Technical Projects (4)</h2>
                  </div>
                  <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>Verified engineering implementations from my CV[cite: 1].</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    
                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontWeight: '800', fontSize: '14px', color: '#0f172a', margin: 0 }}>High-Frequency Crypto Sniper Bot</h3>
                        <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#dbeafe', color: '#1e40af' }}>Sub-50ms</span>
                      </div>
                      <ul style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: '0 0 8px 0', paddingLeft: '16px' }}>
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

                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontWeight: '800', fontSize: '14px', color: '#0f172a', margin: 0 }}>AI-Based Pneumonia Detection</h3>
                        <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#d1fae5', color: '#065f46' }}>97.2% Accuracy</span>
                      </div>
                      <ul style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: '0 0 8px 0', paddingLeft: '16px' }}>
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

                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontWeight: '800', fontSize: '14px', color: '#0f172a', margin: 0 }}>Automatic Car Parking System</h3>
                        <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#fef3c7', color: '#92400e' }}>Hardware DLD</span>
                      </div>
                      <ul style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: '0 0 8px 0', paddingLeft: '16px' }}>
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

                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontWeight: '800', fontSize: '14px', color: '#0f172a', margin: 0 }}>Echo AI: Multimodal TTS &amp; Voice Cloning</h3>
                        <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#f3e8ff', color: '#7e22ce' }}>Mobile App</span>
                      </div>
                      <ul style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: '0 0 8px 0', paddingLeft: '16px' }}>
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

              {activeModal === 'skills' && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Code2 style={{ width: '20px', height: '20px', color: '#2563eb' }} />
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', margin: 0 }}>Technical Proficiency</h2>
                  </div>
                  <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>Toolsets and core competencies[cite: 1].</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
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

              {activeModal === 'credentials' && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Award style={{ width: '20px', height: '20px', color: '#059669' }} />
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', margin: 0 }}>Education &amp; Experience</h2>
                  </div>
                  <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>Academic track record and certifications[cite: 1].</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }}>
                      <h3 style={{ fontSize: '11px', fontWeight: '900', color: '#064e3b', textTransform: 'uppercase', marginBottom: '4px' }}>Education</h3>
                      <strong style={{ fontSize: '13px', color: '#064e3b' }}>B.E. Computer Systems Engineering</strong>
                      <p style={{ fontSize: '12px', color: '#065f46', margin: '2px 0 6px 0' }}>Balochistan University of Engineering &amp; Technology, Khuzdar (2022–2025)[cite: 1]</p>
                      <div style={{ borderTop: '1px solid #bbf7d0', paddingTop: '6px' }}>
                        <p style={{ fontSize: '12px', color: '#047857', margin: 0 }}>Intermediate (Govt Boys Degree College Nushki) &amp; Matriculation[cite: 1]</p>
                      </div>
                    </div>

                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <h3 style={{ fontSize: '11px', fontWeight: '900', color: '#0f172a', textTransform: 'uppercase', marginBottom: '6px' }}>Training &amp; Certifications</h3>
                      <ul style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: 0, paddingLeft: '16px' }}>
                        <li><strong>Generative AI Application Developer:</strong> Pak Angels &amp; UETIANS Lahore (NCEAC-HEC Certified) • <em>Top Performer Award</em>[cite: 1].</li>
                        <li><strong>DGskills:</strong> WordPress &amp; Freelancing Certification[cite: 1].</li>
                        <li><strong>NFTP:</strong> Graphic Designing Course[cite: 1].</li>
                        <li><strong>Social Welfare Computer Center:</strong> 6-Month Computer Basics[cite: 1].</li>
                      </ul>
                    </div>

                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <h3 style={{ fontSize: '11px', fontWeight: '900', color: '#0f172a', textTransform: 'uppercase', marginBottom: '6px' }}>Internships</h3>
                      <ul style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: 0, paddingLeft: '16px' }}>
                        <li><strong>ISPR (Aug 2025):</strong> Strategic communication &amp; institutional frameworks[cite: 1].</li>
                        <li><strong>Arch Technologies:</strong> AI/ML predictive models using TensorFlow[cite: 1].</li>
                        <li><strong>Code Alpha:</strong> Python development &amp; Git version control[cite: 1].</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === 'about' && (
                <div>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', marginBottom: '4px' }}>About Me</h2>
                  <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '14px' }}>Professional summary.</p>
                  <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0', color: '#334155', fontSize: '13px', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '8px' }}>
                      Driven and accomplished <strong>Computer Systems Engineer</strong> specializing in backend development, low-latency architectures, and high-concurrency systems[cite: 1].
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      I build reliable solutions with <strong>Python and C++</strong>, database management, and computer networking principles[cite: 1].
                    </p>
                    <p style={{ margin: 0 }}>
                      My work includes developing high-frequency crypto trading bots with sub-50ms execution and deep CNN healthcare models reaching 97.2% diagnostic accuracy[cite: 1].
                    </p>
                  </div>
                </div>
              )}

              {activeModal === 'contact' && (
                <div>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', marginBottom: '4px' }}>Contact Information</h2>
                  <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '14px' }}>Direct contact details for technical roles and inquiries.</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <a href="mailto:zbadini788@Gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', borderRadius: '10px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', textDecoration: 'none', color: '#1e40af', fontWeight: '700', fontSize: '13px' }}>
                      <Mail style={{ width: '16px', height: '16px' }} /> zbadini788@Gmail.com[cite: 1]
                    </a>
                    <a href="tel:+923493233604" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', borderRadius: '10px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', textDecoration: 'none', color: '#065f46', fontWeight: '700', fontSize: '13px' }}>
                      <Phone style={{ width: '16px', height: '16px' }} /> +92 349 3233604[cite: 1]
                    </a>
                    <a href="https://www.linkedin.com/in/zabi-ullah-1969b3393" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', borderRadius: '10px', backgroundColor: '#f8fafc', border: '1.5px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontWeight: '700', fontSize: '13px' }}>
                      <Linkedin style={{ width: '16px', height: '16px' }} /> linkedin.com/in/zabi-ullah-1969b3393[cite: 1]
                    </a>
                    <a href="https://github.com/Zabiullah788" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', borderRadius: '10px', backgroundColor: '#f8fafc', border: '1.5px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontWeight: '700', fontSize: '13px' }}>
                      <Github style={{ width: '16px', height: '16px' }} /> github.com/Zabiullah788[cite: 1]
                    </a>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', borderRadius: '10px', backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0', color: '#475569', fontSize: '12px', fontWeight: '600' }}>
                      <MapPin style={{ width: '16px', height: '16px' }} /> Kili Sahibzada Nushki, Balochistan, Pakistan[cite: 1]
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}