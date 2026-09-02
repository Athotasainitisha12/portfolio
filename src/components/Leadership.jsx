import React from 'react';
import { leadership } from '../data/portfolioData';
import { Megaphone, Mic, FileSpreadsheet, UserCheck, Shield, Crown, Sparkles } from 'lucide-react';

const iconMap = {
  Megaphone, Mic, FileSpreadsheet, UserCheck
};

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 relative z-10 border-t border-white/5 bg-[#060810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">
            07 / LEADERSHIP & COMMUNICATION
          </span>
          <div className="h-px bg-cyan-500/20 flex-1" />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Executive Leadership & <span className="text-cyan-400">Public Speaking</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Driving organizational communication, brand visibility, and team management at Toastmasters International.
          </p>
        </div>

        {/* Leadership Dashboard Container */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 relative overflow-hidden space-y-8">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Crown className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {leadership.organization}
                  </h3>
                  <p className="text-xs font-mono text-cyan-300">{leadership.clubTitle}</p>
                </div>
              </div>
            </div>

            {/* Role Badges */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                CURRENT: {leadership.currentRole}
              </span>
              {leadership.previousRoles.map((prev, idx) => (
                <span key={idx} className="px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400">
                  FORMER: {prev}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            {leadership.summary}
          </p>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.responsibilities.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Shield;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/40 transition-all space-y-3"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Toastmasters Motto Quote */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>"WHERE LEADERS ARE MADE"</span>
            <span className="text-cyan-400 font-bold">TOASTMASTERS INTERNATIONAL</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Leadership;
