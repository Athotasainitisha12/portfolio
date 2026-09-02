import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Cpu, CheckCircle, AlertTriangle, Layers, Code } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { profile } from '../data/portfolioData';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-4xl bg-[#0b0e17] border border-cyan-500/40 rounded-3xl shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden my-8"
      >
        
        {/* Modal Header with Project Picture Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.imageGradient} relative border-b border-white/10 overflow-hidden min-h-[220px] flex flex-col justify-end`}>
          
          {/* Real Project Picture Background */}
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40 pointer-events-none"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e17] via-[#0b0e17]/85 to-transparent pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-all z-20 backdrop-blur-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold uppercase tracking-wider backdrop-blur-md">
              {project.category} CASE STUDY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 relative z-10">
            <a
              href={project.github && project.github !== '[ADD_GITHUB_URL]' ? project.github : profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 text-slate-200 hover:text-cyan-400 hover:border-cyan-400 text-xs font-mono transition-all backdrop-blur-md"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>View Repository on GitHub</span>
            </a>

            {project.demo && project.demo !== '[ADD_DEMO_URL]' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-black text-xs font-mono font-bold hover:bg-cyan-400 transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-white/10 bg-[#0d111d] px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 text-xs font-mono font-semibold transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            01 // Overview & Features
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-3 text-xs font-mono font-semibold transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            02 // Architecture & Tech
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`px-4 py-3 text-xs font-mono font-semibold transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'results'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            03 // Challenges & Results
          </button>
        </div>

        {/* Modal Tab Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto text-slate-200 text-sm">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* How AI / Algorithm Works */}
              {project.howAiWorks && (
                <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                    <Cpu className="w-4 h-4" />
                    <span>HOW THE AI ALGORITHM WORKS</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                    {project.howAiWorks}
                  </p>
                </div>
              )}

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>PROBLEM STATEMENT</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
                    <CheckCircle className="w-4 h-4" />
                    <span>PROPOSED SOLUTION</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Key Technical Capabilities</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                      <span className="text-cyan-400 font-bold font-mono">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Architecture Diagram Flow */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-cyan-500/30 space-y-3 font-mono">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                  <Layers className="w-4 h-4" />
                  <span>SYSTEM ARCHITECTURE FLOW</span>
                </div>
                <div className="p-4 rounded-xl bg-[#04060a] border border-white/10 text-cyan-300 text-xs sm:text-sm leading-relaxed overflow-x-auto">
                  <code>{project.architecture}</code>
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-purple-400" />
                  <span>Technology Stack</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-6">
              {/* Technical Challenges */}
              <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>ENGINEERING CHALLENGES OVERCOME</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              {/* Quantifiable Results */}
              <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                  <CheckCircle className="w-4 h-4" />
                  <span>IMPACT & FINAL DELIVERABLE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.results}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0d111d] border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            ATHOTA SAI NITISHA // {project.id}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white text-xs font-mono font-bold"
          >
            Close Case Study
          </button>
        </div>

      </motion.div>

    </div>
  );
};

export default ProjectModal;
