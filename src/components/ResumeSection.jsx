import React from 'react';
import { profile } from '../data/portfolioData';
import { FileText, Download, Eye, X, Sparkles } from 'lucide-react';

const ResumeSection = ({ isOpen, onClose, onOpen }) => {
  return (
    <>
      {/* Resume CTA Section Banner */}
      <section id="resume" className="py-20 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative group glass-panel-interactive p-8 sm:p-12 rounded-3xl border border-cyan-500/40 overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.15)] text-center space-y-6">
            
            {/* Ambient Backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-mono text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>10 / RESUME & CURRICULUM VITAE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Want to Know More About <span className="text-cyan-400">My Journey?</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore my technical skills, software engineering project details, Toastmasters leadership roles, and academic performance in a comprehensive document.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpen}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <a
                href={profile.resume}
                download="ATHOTA_SAI_NITISHA_RESUME.pdf"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 text-sm font-semibold transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Modal Resume Viewer */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#0b0e17] border border-cyan-400/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl my-8">
            
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-400">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                <p className="text-xs font-mono text-cyan-300">{profile.headline}</p>
              </div>
            </div>

            {/* Resume Content Abstract */}
            <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-mono bg-slate-900/80 p-5 rounded-2xl border border-white/10 max-h-[60vh] overflow-y-auto">
              
              <div className="border-b border-white/10 pb-3">
                <strong className="text-cyan-400 block text-sm mb-1">SUMMARY & OBJECTIVE</strong>
                3rd Year B.Tech student in CS (AI & Data Science) at KIET-W with strong technical expertise in RAG architectures, Machine Learning, Python backend systems, and web apps. Passionate about software developer and AI engineering roles.
              </div>

              <div className="border-b border-white/10 pb-3">
                <strong className="text-cyan-400 block text-sm mb-1">EDUCATION</strong>
                B.Tech in CS (AI & Data Science) — KIET-W (2023 - 2027, 3rd Year Enrolled)
              </div>

              <div className="border-b border-white/10 pb-3">
                <strong className="text-cyan-400 block text-sm mb-1">FEATURED PROJECTS</strong>
                • AI Chatbot Web Application<br/>
                • Academic RAG Chatbot Assistant (Streamlit + Embeddings + LLM)<br/>
                • Codebase QA RAG Chatbot (LlamaIndex + FAISS + Python)<br/>
                • Gesture-Based Gaming Interface (OpenCV + MediaPipe + Pygame)
              </div>

              <div className="border-b border-white/10 pb-3">
                <strong className="text-cyan-400 block text-sm mb-1">LEADERSHIP & RESPONSIBILITIES</strong>
                • Vice President Public Relations (VP PR) — KW's Silver Tongue Toastmasters Club<br/>
                • Event Organizer — PromptWars × Work Wizards Vibe-Coding Hackathon at KIET
              </div>

              <div>
                <strong className="text-cyan-400 block text-sm mb-1">TECHNICAL MATRIX SKILLS</strong>
                HTML, CSS, Java, Python, Machine Learning, Generative AI, NumPy, Pandas, Seaborn, Matplotlib, VS Code, Git, GitHub.
              </div>

            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                EMAIL: <a href={`mailto:${profile.email}`} aria-label="Send email" className="text-cyan-400 hover:underline">{profile.email}</a>
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 text-xs font-mono hover:text-white border border-white/10"
                >
                  Close
                </button>
                <a
                  href={profile.resume}
                  download="ATHOTA_SAI_NITISHA_RESUME.pdf"
                  className="px-5 py-2 rounded-xl bg-cyan-500 text-black font-bold font-mono text-xs hover:bg-cyan-400 transition-all flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ResumeSection;
