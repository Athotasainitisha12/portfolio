import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, BookOpen, Calendar, Building2, CheckCircle2 } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">
            08 / EDUCATION
          </span>
          <div className="h-px bg-cyan-500/20 flex-1" />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic <span className="text-cyan-400">Background</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Undergraduate technical studies specializing in Artificial Intelligence and Data Science.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="glass-panel-interactive p-8 rounded-3xl border border-white/10 relative overflow-hidden space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {education.degree}
                  </h3>
                  <p className="text-sm font-mono text-cyan-300 font-semibold">
                    {education.branch}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-slate-200">
                <Building2 className="w-3.5 h-3.5 text-purple-400" />
                <span>{education.institution}</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold">
                {education.status}
              </span>
            </div>
          </div>

          {/* Relevant Coursework Grid */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Core Specialization Coursework:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {education.coursework.map((course, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 text-xs font-mono text-slate-500 flex items-center justify-between">
            <span>AFFILIATION: {education.affiliation}</span>
            <span>EXPECTED GRADUATION: {education.expectedGraduation}</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
