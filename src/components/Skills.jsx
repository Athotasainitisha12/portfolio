import React from 'react';
import { technicalMatrix } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { 
  Layout, Palette, Coffee, FileCode, Brain, Wand2, 
  Binary, Table, PieChart, BarChart3, Terminal, GitBranch, Cpu
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const iconMap = {
  Layout, Palette, Coffee, FileCode, Brain, Wand2, 
  Binary, Table, PieChart, BarChart3, Terminal, GitBranch,
  GithubIcon
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5 bg-[#060810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">
            02 / TECHNICAL MATRIX
          </span>
          <div className="h-px bg-cyan-500/20 flex-1" />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TECHNICAL <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">MATRIX</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            A developer control panel showcasing core engineering stacks across Programming, AI & ML, Data Science, and Developer Tools.
          </p>
        </div>

        {/* Matrix Group Categories */}
        <div className="space-y-10">
          {technicalMatrix.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-4">
              
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="text-sm font-mono font-bold tracking-wider text-cyan-300 uppercase">
                  {group.category}
                </h3>
                <div className="h-px bg-white/10 flex-1" />
              </div>

              {/* Cards Grid for Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.items.map((item, itemIdx) => {
                  const IconComp = iconMap[item.icon] || Cpu;

                  return (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: itemIdx * 0.05 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group relative glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:bg-slate-900/80 hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.25)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
                    >
                      {/* Subtle hover background glow */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all duration-500 pointer-events-none" />

                      <div className="space-y-3 relative z-10">
                        {/* Top Icon & Tag */}
                        <div className="flex items-center justify-between">
                          <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-cyan-400 group-hover:border-cyan-400/40 group-hover:scale-110 transition-all duration-300">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                            {item.categoryTag}
                          </span>
                        </div>

                        {/* Name */}
                        <div>
                          <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-500 block">
                            {group.category}
                          </span>
                        </div>

                        {/* Description Reveal */}
                        <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed pt-1 border-t border-white/5">
                          {item.description}
                        </p>
                      </div>

                      {/* Control Panel Status Indicator */}
                      <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-white/5 relative z-10">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>READY</span>
                        </span>
                        <span className="text-cyan-400/70 font-bold group-hover:translate-x-1 transition-transform">
                          ◉ {item.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
