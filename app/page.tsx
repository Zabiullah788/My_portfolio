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
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'system-ui, -apple-system, sans-serif', boxSizing: 'border-box', overflowX: 'hidden' }}>
      
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .page-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 16px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .hero-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          margin: 20px 0;
        }
        .hero-h1 {
          font-size: 2.2rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .hero-sub {
          font-size: 15px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 20px;
        }
        .btn-wrapper {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }
        .btn-wrapper > * {
          width: 100%;
          justify-content: center;
          text-align: center;
        }
        .showcase-area {
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
        }
        .showcase-area img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 16px;
        }
        .cards-container {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
          margin: 16px 0;
        }
        .desktop-nav {
          display: none;
        }
        .desktop-contact-btn {
          display: none;
        }

        @media (min-width: 769px) {
          .page-shell {
            padding: 24px 32px;
          }
          .hero-grid {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            align-items: center;
            gap: 40px;
            margin: 36px 0;
          }
          .hero-h1 {
            font-size: 3.6rem;
          }
          .hero-sub {
            font-size: 16px;
          }
          .btn-wrapper {
            flex-direction: row;
            width: auto;
          }
          .btn-wrapper > * {
            width: auto;
          }
          .cards-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }
          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .desktop-contact-btn {
            display: inline-block;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>

      <div className="page-shell">
        
        {/* Header */}
        <header style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#10b981', display: 'inline-block' }}></span>
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#047857' }}>Available for Work</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <nav className="desktop-nav">
              <button onClick={() => openModal('about')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>About Me</button>
              <button onClick={() => openModal('projects')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Projects</button>
              <button onClick={() => openModal('skills')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Skills</button>
              <button onClick={() => openModal('credentials')} style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>Certifications</button>
            </nav>

            <button
              onClick={() => openModal('contact')}
              className="desktop-contact-btn"
              style={{ padding: '8px 20px', fontSize: '13px', fontWeight: '700', borderRadius: '9999px', background: 'linear-gradient(135deg, #2563eb, #4f46e5)', color: '#ffffff', border: 'none', cursor: 'pointer' }}
            >
              Contact
            </button>

            {/* Profile Avatar */}
            <div style={{ width: '38px', height: '38px', minWidth: '38px', maxWidth: '38px', minHeight: '38px', maxHeight: '38px', borderRadius: '9999px', border: '2px solid #ffffff', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', overflow: 'hidden', flexShrink: 0 }}>
              <img
                src="/profile.jpg"
                alt="Zabi Ullah"
                style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '9999px', display: 'block' }}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{ padding: '6px', borderRadius: '8px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X style={{ width: '18px', height: '18px', color: '#334155' }} /> : <Menu style={{ width: '18px', height: '18px', color: '#334155' }} />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div style={{ width: '100%', padding: '14px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '8px', margin: '10px 0' }}>
            <button onClick={() => openModal('about')} style={{ textAlign: 'left', padding: '10px', fontSize: '14px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>About Me</button>
            <button onClick={() => openModal('projects')} style={{ textAlign: 'left', padding: '10px', fontSize: '14px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>Projects</button>
            <button onClick={() => openModal('skills')} style={{ textAlign: 'left', padding: '10px', fontSize: '14px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>Skills</button>
            <button onClick={() => openModal('credentials')} style={{ textAlign: 'left', padding: '10px', fontSize: '14px', fontWeight: '600', color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}>Certifications</button>
            <button onClick={() => openModal('contact')} style={{ textAlign: 'center', padding: '12px', fontSize: '14px', fontWeight: '700', color: '#ffffff', backgroundColor: '#2563eb', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>Contact Me</button>
          </div>
        )}

        {/* Hero Area */}
        <section className="hero-grid">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ color: '#2563eb', fontWeight: '800', fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
              COMPUTER SYSTEMS ENGINEER
            </div>

            <h1 className="hero-h1">Zabi Ullah</h1>
            <div style={{ width: '40px', height: '4px', backgroundColor: '#2563eb', borderRadius: '9999px', marginBottom: '14px' }}></div>

            <p className="hero-sub">
              Specializing in backend development with <strong style={{ color: '#0f172a' }}>Python &amp; C++</strong>, database management, high-concurrency systems, and advanced AI/ML diagnostic applications[cite: 1].
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 12px', fontSize: '11px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }}>
                <Terminal style={{ width: '12px', height: '12px' }} /> Python &amp; C++ Backend[cite: 1]
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 12px', fontSize: '11px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#faf5ff', color: '#7e22ce', border: '1px solid #e9d5ff' }}>
                <BrainCircuit style={{ width: '12px', height: '12px' }} /> AI / ML Systems[cite: 1]
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 12px', fontSize: '11px', fontWeight: '700', borderRadius: '9999px', backgroundColor: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
                <GraduationCap style={{ width: '12px', height: '12px' }} /> BUETK[cite: 1]
              </span>
            </div>

            <div className="btn-wrapper">
              <button
                onClick={() => openModal('projects')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: '700', fontSize: '14px', border: 'none', cursor: 'pointer' }}
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

          <div className="showcase-area">
            <img src="/showcase.png" alt="Development Environment" />
          </div>
        </section>

        {/* Feature Cards */}
        <section className="cards-container">
          <button
            onClick={() => openModal('skills')}
            style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Code2 style={{ width: '20px', height: '20px' }} />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Tech Stack</h3>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#2563eb', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Languages &amp; Tools</p>
              <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                Python, C++, SQL, TensorFlow, PyTorch, Web3, DLD, Git, and Databases[cite: 1].
              </p>
            </div>
            <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: '800', color: '#2563eb' }}>Explore Skills →</div>
          </button>

          <button
            onClick={() => openModal('projects')}
            style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#fdf2f8', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <FolderGit2 style={{ width: '20px', height: '20px' }} />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Projects (4)</h3>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#db2777', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Applied Systems</p>
              <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                Crypto Sniper Bot, AI Pneumonia Detection, Parking DLD, and Echo AI[cite: 1].
              </p>
            </div>
            <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: '800', color: '#db2777' }}>View All 4 Projects →</div>
          </button>

          <button
            onClick={() => openModal('credentials')}
            style={{ padding: '18px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Award style={{ width: '20px', height: '20px' }} />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 2px 0' }}>Credentials</h3>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#059669', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Education &amp; Training</p>
              <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                BUETK Engineering Degree, ISPR, Arch Tech, Code Alpha &amp; Top Performer Generative AI[cite: 1].
              </p>
            </div>
            <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: '800', color: '#059669' }}>View Credentials →</div>
          </button>
        </section>

        {/* Footer */}
        <footer style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a href="https://github.com/Zabiullah788" target="_blank" rel="noreferrer" style={{ width: '34px', height: '34px', borderRadius: '9999px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155' }}>
              <Github style={{ width: '16px', height: '16px' }} />
            </a>
            <a href="https://www.linkedin.com/in/zabi-ullah-1969b3393" target="_blank" rel="noreferrer" style={{ width: '34px', height: '34px', borderRadius: '9999px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a66c2' }}>
              <Linkedin style={{ width: '16px', height: '16px' }} />
            </a>
            <a href="mailto:zbadini788@Gmail.com" style={{ width: '34px', height: '34px', borderRadius: '9999px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48' }}>
              <Mail style={{ width: '16px', height: '16px' }} />
            </a>
          </div>
          <p style={{ fontSize: '11px', fontWeight: '600', color: '#94a3b8', margin: 0 }}>
            © {new Date().getFullYear()} Zabi Ullah • Computer Systems Engineer
          </p>
        </footer>

        {/* Modal Window */}
        {activeModal && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 999, backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '640px', backgroundColor: '#ffffff', borderRadius: '20px', padding: '22px', border: '1px solid #e2e8f0', maxHeight: '88vh', overflowY: 'auto' }}>
              
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
                  <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>Verified implementations from CV[cite: 1].</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontWeight: '800', fontSize: '14px', color: '#0f172a', margin: 0 }}>High-Frequency Crypto Sniper Bot</h3>
                        <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#dbeafe', color: '#1e40af' }}>Sub-50ms</span>
                      </div>
                      <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: '0 0 6px 0' }}>
                        Low-latency algorithmic trading bot utilizing Python and Web3 on Ethereum[cite: 1].
                      </p>
                    </div>

                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontWeight: '800', fontSize: '14px', color: '#0f172a', margin: 0 }}>AI-Based Pneumonia Detection</h3>
                        <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#d1fae5', color: '#065f46' }}>97.2% Accuracy</span>
                      </div>
                      <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: '0 0 6px 0' }}>
                        Deep CNN in TensorFlow/PyTorch classifying chest X-ray images for diagnosis[cite: 1].
                      </p>
                    </div>

                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontWeight: '800', fontSize: '14px', color: '#0f172a', margin: 0 }}>Automatic Car Parking System</h3>
                        <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#fef3c7', color: '#92400e' }}>Hardware DLD</span>
                      </div>
                      <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: '0 0 6px 0' }}>
                        Control logic using Digital Logic Design (DLD) and C for microcontrollers[cite: 1].
                      </p>
                    </div>

                    <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontWeight: '800', fontSize: '14px', color: '#0f172a', margin: 0 }}>Echo AI: Multimodal TTS &amp; Voice Cloning</h3>
                        <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 7px', borderRadius: '5px', backgroundColor: '#f3e8ff', color: '#7e22ce' }}>Mobile App</span>
                      </div>
                      <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: '0 0 6px 0' }}>
                        Speech synthesis combining Gemini API routing with decentralized cloud inference[cite: 1].
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === 'skills' && (
                <div>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>Skills &amp; Languages</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['Python', 'C++', 'SQL', 'TensorFlow', 'PyTorch', 'Web3', 'FastAPI', 'Linux', 'Git', 'Brahui', 'Balochi', 'Urdu', 'English'].map(s => (
                      <span key={s} style={{ padding: '5px 12px', fontSize: '12px', fontWeight: '700', borderRadius: '6px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af' }}>{s}</span>
                    ))}
                  </div>
                </div>
              )}

              {activeModal === 'credentials' && (
                <div>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>Education &amp; Experience</h2>
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

              {activeModal === 'about' && (
                <div>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>About Me</h2>
                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#334155' }}>
                    Driven Computer Systems Engineer specializing in backend development, low-latency architectures, and high-concurrency systems using Python and C++[cite: 1].
                  </p>
                </div>
              )}

              {activeModal === 'contact' && (
                <div>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>Get In Touch</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <a href="mailto:zbadini788@Gmail.com" style={{ padding: '10px 14px', borderRadius: '10px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af', fontWeight: '700', textDecoration: 'none', fontSize: '13px' }}>
                      Email: zbadini788@Gmail.com[cite: 1]
                    </a>
                    <a href="tel:+923493233604" style={{ padding: '10px 14px', borderRadius: '10px', backgroundColor: '#ecfdf5', border: '1.5px solid #a7f3d0', color: '#065f46', fontWeight: '700', textDecoration: 'none', fontSize: '13px' }}>
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