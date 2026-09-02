import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, Code2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">
            05 / EXPERIENCE & INTERNSHIPS
          </span>
          <div className="h-px bg-cyan-500/20 flex-1" />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Practical Engineering <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Hands-on junior developer internship contributions, backend API orchestrations, and web software development.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="glass-panel-interactive p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <Briefcase className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role} <span className="text-cyan-400">@ {exp.company}</span>
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-cyan-300/80 pt-1 pl-11">
                    PROJECT: <strong className="text-white">{exp.projectTitle}</strong>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.location}</span>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Main Content & Highlights */}
              <div className="pt-6 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Technical Deliverables:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="pt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
