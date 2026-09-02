import React from 'react';
import { profile } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { SocialIconGroup } from './SocialIcons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#04060a] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Logo & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 font-mono text-cyan-400 font-bold text-xs flex items-center justify-center">
                {profile.monogram}
              </span>
              <span className="text-lg font-extrabold text-white tracking-wider">
                {profile.name}
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400/80 tracking-widest uppercase">
              AI • DATA • CODE • CREATIVITY
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Matrix</a>
            <a href="#journey" className="hover:text-cyan-400 transition-colors">Journey</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#leadership" className="hover:text-cyan-400 transition-colors">Leadership</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-4">
            <SocialIconGroup profile={profile} />

            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-md"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4 text-center sm:text-left">
          <div>
            © 2026 ATHOTA SAI NITISHA. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
