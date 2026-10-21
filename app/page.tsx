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
  Menu,
  ChevronRight
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
        body {
          background-color: #f8fafc;
          overflow-x: hidden;
        }
        .container-shell {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: 16px 20px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* HEADER */
        .header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid #e2e8f0;
          width: 100%;
        }
        .desktop-nav {
          display: none;
        }
        .contact-pill-desktop {
          display: none;
        }

        /* HERO CARD */
        .hero-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 24px 20px;
          margin: 20px 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.04);
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }
        .hero-name {
          font-size: 2.4rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.05;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .hero-summary {
          font-size: 14px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 18px;
        }
        .badge-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }
        .action-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }
        .action-container > * {
          width: 100%;
          text-align: center;
          justify-content: center;
        }

        /* COMPACT WORKSPACE IMAGE */
        .showcase-frame {
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
          border-radius: 18px;
          overflow: hidden;
          background: linear-gradient(135deg, #eff6ff 0%, #f1f5f9 100%);
          border: 1px solid #e2e8f0;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .showcase-frame img {
          width: 100%;
          height: auto;
          max-height: 190px;
          object-fit: contain;
          display: block;
        }

        /* FEATURE CARDS ROW */
        .card-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          width: 100%;
          margin-bottom: 20px;
        }

        /* DESKTOP MEDIA QUERIES (> 768px) */
        @media (min-width: 769px) {
          .container-shell {
            padding: 24px 32px;
          }
          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 24px;
          }
          .contact-pill-desktop {
            display: inline-block;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .hero-card {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            align-items: center;
            padding: 36px 40px;
            gap: 36px;
            margin: 28px 0;
          }
          .hero-name {
            font-size: 3.6rem;
          }
          .hero-summary {
            font-size: 16px;
          }
          .action-container {
            flex-direction: row;
            width: auto;
          }
          .action-container > * {
            width: auto;
          }
          .showcase-frame {
            max-width: 420px;
            padding: 16px;
          }
          .showcase-frame img {
            max-height: 260px;
          }
          .card-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }
        }
      `}</style>

      <div className="container-shell">
        
        {/* 1. TOP HEADER NAVIGATION */}
        <header className="header-bar">
          
          {/* Status Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 12px', borderRadius: '9999px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '9999px', backgroundColor: '#10b981', display: 'inline-block' }}></span>
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#047857' }}>Available for Work</span>
          </div>

          {/* Right Header Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            
            <nav className="desktop-nav">
              <button onClick={() => openModal('about')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>About Me</button>
              <button onClick={() => openModal('projects')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Projects</button>
              <button onClick={() => openModal('skills')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Skills</button>
              <button onClick={() => openModal('credentials')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Certifications</button>
            </nav>

            <button
              onClick={() => openModal('contact')}
              className="contact-pill-desktop"
              style={{ padding: '8px 20px', fontSize: '13px', fontWeight: '700', borderRadius: '9999px', background: 'linear-gradient(135deg, #2563eb, #4f46e5)', color: '#ffffff', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(37,99,235,0.25)' }}
            >
              Contact
            </button>

            {/* Avatar Photo */}
            <div style={{ width: '38px', height: '38px', minWidth: '38px', maxWidth: '38px', minHeight: '38px', maxHeight: '38px', borderRadius: '9999px', border: '2px solid #ffffff', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
              <img
                src="/profile.jpg"
                alt="Zabi Ullah"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{ padding: '6px', borderRadius: '8px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X style={{ width: '18px', height: '18px', color: '#334155' }} /> : <Menu style={{ width: '18px', height: '18px', color: '#334155' }} />}
            </button>
          </div>
        </header>

        {/* Mobile Slideout Menu */}
        {mobileMenuOpen && (
          <div style={{ width: '100%', padding: '14px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '6px', margin: '10px 0' }}>
            <button onClick={() => openModal('about')} style={{ textAlign: 'left', padding: '10px 12px', fontSize: '13px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>About Me</button>
            <button onClick={() => openModal('projects')} style={{ textAlign: 'left', padding: '10px 12px', fontSize: '13px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>Projects</button>
            <button onClick={() => openModal('skills')} style={{ textAlign: 'left', padding: '10px 12px', fontSize: '13px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>Skills</button>
            <button onClick={() => openModal('credentials')} style={{ textAlign: 'left', padding: '10px 12px', fontSize: '13px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>Certifications</button>
            <button onClick={() => openModal('contact')} style={{ textAlign: 'center', padding: '12px', fontSize: '13px', fontWeight: '700', color: '#ffffff', backgroundColor: '#2563eb', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>Contact Me</button>
          </div>
        )}

        {/* 2. HERO SHOWCASE CARD */}
        <section className="hero-card">
          
          {/* Bio Column */}
          <div className="hero-content">
            <div style={{ color: '#2563eb', fontWeight: '800', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
              COMPUTER SYSTEMS ENGINEER
            </div>

            <h1 className="hero-name">
              Zabi Ullah
            </h1>

            <div style={{ width: '36px', height: '4px', backgroundColor: '#2563eb', borderRadius: '9999px', marginBottom: '14px' }}></div>

            <p className="hero-summary">
              Specializing in backend development with <strong style={{ color: '#0f172a' }}>Python &amp; C++</strong>, database management, high-concurrency systems, and advanced AI/ML diagnostic applications[cite: 1].
            </p>

            {/* Badges */}
            <div className="badge-list">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', fontSize: '11px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }}>
                <Terminal style={{ width: '12px', height: '12px' }} /> Python &amp; C++ Backend[cite: 1]
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', fontSize: '11px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#faf5ff', color: '#7e22ce', border: '1px solid #e9d5ff' }}>
                <BrainCircuit style={{ width: '12px', height: '12px' }} /> AI / ML Systems[cite: 1]
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', fontSize: '11px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
                <GraduationCap style={{ width: '12px', height: '12px' }} /> BUETK[cite: 1]
              </span>
            </div>

            {/* Buttons */}
            <div className="action-container">
              <button
                onClick={() => openModal('projects')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 22px', borderRadius: '12px', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: '700', fontSize: '13px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}
              >
                View All 4 Projects <ArrowRight style={{ width: '15px', height: '15px' }} />
              </button>
              <a
                href="/CV_Zabi Ullah.pdf"
                download="Zabi_Ullah_CV.pdf"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 22px', borderRadius: '12px', backgroundColor: '#ffffff', border: '1.5px solid #cbd5e1', color: '#334155', fontWeight: '700', fontSize: '13px', textDecoration: 'none' }}
              >
                Download CV <Download style={{ width: '15px', height: '15px', color: '#64748b' }} />
              </a>
            </div>
          </div>

          {/* Compact Workstation Frame */}
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="showcase-frame">
              <img
                src="/showcase.png"
                alt="Workspace Overview"
              />
            </div>
          </div>

        </section>

        {/* 3. BOTTOM CARDS */}
        <section className="card-row">
          
          <button
            onClick={() => openModal('skills')}
            style={{ padding: '18px 20px', borderRadius: '18px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Code2 style={{ width: '20px', height: '20px' }} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Tech Stack</h3>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#2563eb', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Languages &amp; Tools</p>
              <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                Python, C++, SQL, TensorFlow, PyTorch, Web3, DLD, Git, and Databases[cite: 1].
              </p>
            </div>
            <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: '800', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Explore Skills <ChevronRight style={{ width: '14px', height: '14px' }} />
            </div>
          </button>

          <button
            onClick={() => openModal('projects')}
            style={{ padding: '18px 20px', borderRadius: '18px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#fdf2f8', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <FolderGit2 style={{ width: '20px', height: '20px' }} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Projects (4)</h3>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#db2777', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Applied Systems</p>
              <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                Crypto Sniper Bot, AI Pneumonia Detection, Parking DLD, and Echo AI[cite: 1].
              </p>
            </div>
            <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: '800', color: '#db2777', display: 'flex', alignItems: 'center', gap: '4px' }}>
              View All 4 Projects <ChevronRight style={{ width: '14px', height: '14px' }} />
            </div>
          </button>

          <button
            onClick={() => openModal('credentials')}
            style={{ padding: '18px 20px', borderRadius: '18px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Award style={{ width: '20px', height: '20px' }} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Credentials</h3>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#059669', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Education &amp; Training</p>
              <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                BUETK Engineering Degree, ISPR, Arch Tech, Code Alpha &amp; Top Performer Generative AI[cite: 1].
              </p>
            </div>
            <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: '800', color: '#059669', display: 'flex', alignItems: 'center', gap: '4px' }}>
              View Credentials &amp; History <ChevronRight style={{ width: '14px', height: '14px' }} />
            </div>
          </button>

        </section>

        {/* 4. FOOTER */}
        <footer style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
            <div style={{ position: 'relative', width: '100%', maxWidth: '600px', backgroundColor: '#ffffff', borderRadius: '20px', padding: '22px', border: '1px solid #e2e8f0', maxHeight: '88vh', overflowY: 'auto' }}>
              
              <button
                onClick={() => setActiveModal(null)}
                style={{ position: 'absolute', top: '16px', right: '16px', padding: '6px', borderRadius: '9999px', backgroundColor: '#f1f5f9', border: 'none', color: '#475569', cursor: 'pointer' }}
              >
                <X style={{ width: '18px', height: '18px' }} />
              </button>

              {/* PROJECTS */}
              {activeModal === 'projects' && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <FolderGit2 style={{ width: '20px', height: '20px', color: '#db2777' }} />
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#0f172a', margin: 0 }}>Applied Technical Projects (4)</h2>
                  </div>
                  <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>Verified implementations from my CV[cite: 1].</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    
                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontWeight: '800', fontSize: '13px', color: '#0f172a', margin: 0 }}>High-Frequency Crypto Sniper Bot</h3>
                        <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#dbeafe', color: '#1e40af' }}>Sub-50ms</span>
                      </div>
                      <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: '0 0 6px 0' }}>
                        Low-latency algorithmic bot utilizing Python and Web3 on Ethereum[cite: 1].
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {['Python', 'Web3', 'Ethereum', 'High-Concurrency'].map(t => (
                          <span key={t} style={{ padding: '2px 6px', fontSize: '10px', fontWeight: '700', borderRadius: '4px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155' }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontWeight: '800', fontSize: '13px', color: '#0f172a', margin: 0 }}>AI-Based Pneumonia Detection</h3>
                        <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#d1fae5', color: '#065f46' }}>97.2% Accuracy</span>
                      </div>
                      <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: '0 0 6px 0' }}>
                        Deep CNN in TensorFlow/PyTorch classifying chest X-ray images for diagnosis[cite: 1].
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {['TensorFlow', 'PyTorch', 'CNN', 'NumPy', 'Pandas'].map(t => (
                          <span key={t} style={{ padding: '2px 6px', fontSize: '10px', fontWeight: '700', borderRadius: '4px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155' }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontWeight: '800', fontSize: '13px', color: '#0f172a', margin: 0 }}>Automatic Car Parking System</h3>
                        <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#fef3c7', color: '#92400e' }}>Hardware DLD</span>
                      </div>
                      <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: '0 0 6px 0' }}>
                        Control logic using Digital Logic Design (DLD) and C for microcontrollers[cite: 1].
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {['C', 'Microcontrollers', 'DLD', 'Hardware'].map(t => (
                          <span key={t} style={{ padding: '2px 6px', fontSize: '10px', fontWeight: '700', borderRadius: '4px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155' }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontWeight: '800', fontSize: '13px', color: '#0f172a', margin: 0 }}>Echo AI: Multimodal TTS &amp; Voice Cloning</h3>
                        <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#f3e8ff', color: '#7e22ce' }}>Mobile App</span>
                      </div>
                      <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: '0 0 6px 0' }}>
                        Speech synthesis combining Gemini API routing with decentralized cloud inference[cite: 1].
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {['Gemini API', 'Hugging Face', 'FastAPI', 'Python'].map(t => (
                          <span key={t} style={{ padding: '2px 6px', fontSize: '10px', fontWeight: '700', borderRadius: '4px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155' }}>{t}</span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* SKILLS */}
              {activeModal === 'skills' && (
                <div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>Technical Proficiency</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['Python', 'C++', 'SQL', 'TensorFlow', 'PyTorch', 'Web3', 'FastAPI', 'Linux', 'Git', 'Brahui', 'Balochi', 'Urdu', 'English'].map(s => (
                      <span key={s} style={{ padding: '5px 12px', fontSize: '12px', fontWeight: '700', borderRadius: '6px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af' }}>{s}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* CREDENTIALS */}
              {activeModal === 'credentials' && (
                <div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>Education &amp; Experience</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#334155' }}>
                    <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }}>
                      <strong>B.E. Computer Systems Engineering</strong>
                      <p style={{ margin: '2px 0 0 0', color: '#065f46' }}>Balochistan University of Engineering &amp; Technology, Khuzdar[cite: 1]</p>
                    </div>
                    <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <strong>Generative AI Application Developer (Top Performer)</strong>
                      <p style={{ margin: '2px 0 0 0', color: '#64748b' }}>Pak Angels &amp; UETIANS Lahore (NCEAC-HEC Certified)[cite: 1]</p>
                    </div>
                    <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <strong>Internships:</strong> ISPR Summer Internship, Arch Technologies (AI/ML), Code Alpha (Python)[cite: 1].
                    </div>
                  </div>
                </div>
              )}

              {/* ABOUT */}
              {activeModal === 'about' && (
                <div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>About Me</h2>
                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#334155' }}>
                    Driven Computer Systems Engineer specializing in backend development, low-latency architectures, and high-concurrency systems using Python and C++[cite: 1].
                  </p>
                </div>
              )}

              {/* CONTACT */}
              {activeModal === 'contact' && (
                <div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>Get In Touch</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <a href="mailto:zbadini788@Gmail.com" style={{ padding: '10px 14px', borderRadius: '10px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af', fontWeight: '700', textDecoration: 'none', fontSize: '13px' }}>
                      Email: zbadini788@Gmail.com[cite: 1]
                    </a>
                    <a href="tel:+923493233604" style={{ padding: '10px 14px', borderRadius: '10px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', color: '#065f46', fontWeight: '700', textDecoration: 'none', fontSize: '13px' }}>
                      Phone: +92 349 3233604[cite: 1]
                    </a>
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