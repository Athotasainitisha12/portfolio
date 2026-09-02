import React from 'react';
import { profile, aboutCards } from '../data/portfolioData';
import { BrainCircuit, Code2, Sparkles, Users, CheckCircle2, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const iconMap = {
  BrainCircuit: BrainCircuit,
  Code2: Code2,
  Sparkles: Sparkles,
  Users: Users,
};

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">
            01 / ABOUT
          </span>
          <div className="h-px bg-cyan-500/20 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Bio */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Architecting <span className="text-cyan-400">Intelligent Systems</span> with Technical Passion & Vision
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a <strong className="text-white font-semibold">{profile.currentRole}</strong> at{' '}
                <span className="text-cyan-300">{profile.college}</span>. My core engineering focus centers around Artificial Intelligence, Data Science, modern web software, and emerging technology frameworks.
              </p>
              <p>
                I specialize in turning raw concepts, unstructured datasets, and theoretical algorithms into functional software applications—ranging from RAG (Retrieval-Augmented Generation) assistants to real-time computer vision interfaces.
              </p>
              <p>
                Beyond code, I am deeply involved in public speaking, executive team leadership at Toastmasters, and technical event organization. I believe that technical capability combined with effective communication creates high-impact solutions.
              </p>
            </div>

            {/* Quick Key Attributes */}
            <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>3rd Year B.Tech CS (AI&DS)</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>RAG & Generative AI</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-pink-400" />
                <span>Toastmasters VP PR</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Hackathon Organizer</span>
              </div>
            </div>

            {/* Professional Profiles Quick Links */}
            <div className="p-4 rounded-2xl glass-panel border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Official Profiles:</span>
              <div className="flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 text-xs font-mono transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 text-xs font-mono transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column — 4 Futuristic Information Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {aboutCards.map((card) => {
              const IconComponent = iconMap[card.icon] || Sparkles;
              return (
                <div
                  key={card.id}
                  className="group glass-panel-interactive p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${card.accent} opacity-10 blur-xl group-hover:opacity-30 transition-opacity`} />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-cyan-400/70 font-bold">
                        {card.id}
                      </span>
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {card.title}
                    </h3>
                    
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                    <span>EXPLORE CAPABILITIES</span>
                    <span>➔</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
