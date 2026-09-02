import React from 'react';
import { achievements } from '../data/portfolioData';
import { Trophy, Star, Users, CheckCircle, Sparkles, Flag } from 'lucide-react';

const Achievements = () => {
  const featured = achievements.find(a => a.featured) || achievements[0];
  const others = achievements.filter(a => !a.featured);

  return (
    <section id="achievements" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">
            06 / HACKATHON & COMMUNITY ACHIEVEMENTS
          </span>
          <div className="h-px bg-cyan-500/20 flex-1" />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Leadership & Hackathon <span className="text-cyan-400">Milestones</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Key accomplishments in event organization, competitive technical forums, and peer mentoring.
          </p>
        </div>

        {/* Featured Achievement Prominent Spotlight Card */}
        {featured && (
          <div className="relative group glass-panel-interactive p-8 sm:p-10 rounded-3xl border-2 border-cyan-500/40 shadow-[0_0_40px_rgba(0,240,255,0.15)] mb-8 overflow-hidden">
            
            {/* Background Cyber Grid Spotlight */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              {/* Badge Header */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-xs font-mono font-bold tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <Trophy className="w-4 h-4 text-cyan-400" />
                  <span>{featured.badge}</span>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-white/10">
                  {featured.date} // {featured.organization}
                </span>
              </div>

              {/* Title & Role */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  {featured.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-mono text-cyan-300">
                  <span>ROLE:</span>
                  <span className="px-3 py-0.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-white font-bold">
                    {featured.role}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
                {featured.description}
              </p>

              {/* Responsibilities List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Organizer Responsibilities & Execution:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {featured.highlights.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Other Achievements Cards */}
        {others.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((ach) => (
              <div
                key={ach.id}
                className="glass-panel-interactive p-6 rounded-3xl border border-white/10 relative space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 font-bold uppercase">
                    {ach.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {ach.date}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  {ach.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <Star className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Achievements;
