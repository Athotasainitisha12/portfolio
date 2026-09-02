import React from 'react';
import { timeline } from '../data/portfolioData';
import { Code, Brain, Rocket, Target, Sparkles } from 'lucide-react';

const iconMap = {
  Code, Brain, Rocket, Target
};

const Journey = () => {
  return (
    <section id="journey" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">
            03 / DEVELOPER JOURNEY
          </span>
          <div className="h-px bg-cyan-500/20 flex-1" />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Evolution & <span className="text-cyan-400">Milestones</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            A chronological timeline of technical exploration, projects built, leadership roles, and future engineering goals.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          {timeline.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <div key={index} className="relative group">
                
                {/* Timeline Pulsing Node */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#080a12] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:bg-cyan-500 group-hover:shadow-[0_0_15px_#00f0ff] transition-all">
                  <span className="w-2 h-2 rounded-full bg-cyan-300" />
                </div>

                {/* Left Year Indicator (Visible on MD screens) */}
                <div className="hidden md:block absolute -left-36 top-1 font-mono text-sm font-extrabold text-cyan-400 w-24 text-right">
                  {item.year}
                </div>

                {/* Main Content Box */}
                <div className="glass-panel-interactive p-6 rounded-2xl border border-white/10 relative">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="md:hidden font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Journey;
