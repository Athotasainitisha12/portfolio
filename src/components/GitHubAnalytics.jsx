import React from 'react';
import { profile } from '../data/portfolioData';
import { ExternalLink, ArrowRight, Code2, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { motion } from 'framer-motion';

const GitHubAnalytics = () => {
  return (
    <section id="analytics" className="py-24 relative z-10 border-t border-white/5 bg-[#060810]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">
            09 / GITHUB DEVELOPER PROFILE
          </span>
          <div className="h-px bg-cyan-500/20 flex-1" />
        </div>

        {/* Futuristic Glassmorphism GitHub Developer Panel */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-3xl glass-panel border border-cyan-500/30 hover:border-cyan-400/60 p-8 sm:p-12 overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)] bg-slate-900/60 backdrop-blur-xl group"
        >
          {/* Cybernetic Grid & Glowing Background Overlay */}
          <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-all duration-500 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: GitHub Branding & Info */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <GithubIcon className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold tracking-widest uppercase block">
                    GITHUB DEVELOPER PROFILE
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    @Athotasainitisha12
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {profile.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl leading-relaxed">
                  Explore my open-source repositories, AI & Data Science projects, algorithm implementations, and continuous coding journey on GitHub.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold font-mono text-sm shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                  <span>Visit GitHub</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>

                <div className="px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>github.com/Athotasainitisha12</span>
                </div>
              </div>

            </div>

            {/* Right Column: IDE Code Window Graphic */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-[#080b14] border border-white/15 p-5 font-mono text-xs text-slate-300 space-y-3 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] text-cyan-400">github_profile.json</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-slate-300">
                  <div><span className="text-purple-400">"user"</span>: <span className="text-emerald-300">"Athotasainitisha12"</span>,</div>
                  <div><span className="text-purple-400">"developer"</span>: <span className="text-cyan-300">"{profile.name}"</span>,</div>
                  <div><span className="text-purple-400">"focus"</span>: <span className="text-blue-300">"AI, ML & Data Science"</span>,</div>
                  <div><span className="text-purple-400">"url"</span>: <span className="text-cyan-300">"https://github.com/Athotasainitisha12"</span></div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="text-emerald-400">✓ Verified Account</span>
                  <span>Public Profile</span>
                </div>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default GitHubAnalytics;
