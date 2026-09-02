import React, { useState, useEffect } from 'react';
import { profile } from '../data/portfolioData';
import { Terminal, Mail, ArrowRight, Download, Sparkles, Quote, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon, SocialIconGroup } from './SocialIcons';
import nitishaImg from '../assets/nitisha.jpg';
import { motion } from 'framer-motion';

const Hero = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % profile.rotatingRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#04060a]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Text & Info */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span>{profile.name}</span>
              <span className="text-purple-400">❯</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                AI & Data Science <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,240,255,0.35)]">
                  Software Developer.
                </span>
              </h1>
            </div>

            {/* Subhead Description */}
            <p className="text-base sm:text-xl font-medium text-slate-300 max-w-2xl leading-relaxed">
              I specialize in Artificial Intelligence, Machine Learning, Data Science pipelines, and building intelligent web applications.
            </p>

            {/* Dynamic Rotating Roles */}
            <div className="h-10 flex items-center gap-2 font-mono text-sm sm:text-base text-cyan-400 bg-slate-900/80 px-4 py-2 rounded-2xl border border-white/10 w-fit backdrop-blur-md">
              <Terminal className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-slate-400">&gt;</span>
              <span className="text-slate-100 font-semibold">Specializing in:</span>
              <span className="key-role transition-all duration-500 font-bold underline decoration-cyan-400/50 decoration-2 underline-offset-4">
                {profile.rotatingRoles[currentRoleIndex]}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] hover:scale-[1.02] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-slate-900/80 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 text-sm font-semibold transition-all backdrop-blur-md"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-purple-600 text-white font-bold text-sm hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Bottom Hero Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
                <div className="text-2xl font-extrabold font-mono text-cyan-400">3+</div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-tight">Core AI Projects</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
                <div className="text-2xl font-extrabold font-mono text-purple-400">3rd Year</div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-tight">CS (AI & DS) KIET-W</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md col-span-2 sm:col-span-1">
                <div className="text-2xl font-extrabold font-mono text-emerald-400">VP PR</div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-tight">Toastmasters Leader</div>
              </div>
            </div>

          </div>

          {/* Right Column — Circular Orbital Portrait Visual (Reference Inspired Design) */}
          <div className="lg:col-span-5 flex items-center justify-center relative pt-8 lg:pt-0">
            <div className="relative flex items-center justify-center w-[340px] h-[340px] sm:w-[420px] sm:h-[420px]">
              
              {/* Concentric Orbital Glow Rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-pulse pointer-events-none" />
              <div className="absolute inset-4 rounded-full border border-cyan-400/30 pointer-events-none" />
              <div className="absolute inset-8 rounded-full border border-dashed border-cyan-500/20 animate-spin-slow pointer-events-none" />

              {/* Central Circular Avatar Photo */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-4 border-cyan-400/60 shadow-[0_0_60px_rgba(0,240,255,0.35)] bg-slate-950 flex items-center justify-center group"
              >
                <img
                  src={nitishaImg}
                  alt="ATHOTA SAI NITISHA"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060a]/60 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Orbiting Social Icon Badges (Positioned Around Circle) */}
              {/* GitHub Orbit Badge */}
              <motion.a
                whileHover={{ scale: 1.15 }}
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 left-6 z-20 p-3 rounded-full bg-slate-900/90 border border-cyan-400/50 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-cyan-500/20 backdrop-blur-md transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </motion.a>

              {/* LinkedIn Orbit Badge */}
              <motion.a
                whileHover={{ scale: 1.15 }}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-20 p-3 rounded-full bg-slate-900/90 border border-purple-500/50 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:bg-purple-500/20 backdrop-blur-md transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </motion.a>

              {/* Email Orbit Badge */}
              <motion.a
                whileHover={{ scale: 1.15 }}
                href={`mailto:${profile.email}`}
                className="absolute bottom-6 left-2 z-20 p-3 rounded-full bg-slate-900/90 border border-pink-500/50 text-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:bg-pink-500/20 backdrop-blur-md transition-all"
                title="Send Email"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>

              {/* Floating Quote & Status Card Overlapping Bottom Circle */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 right-0 z-30 max-w-xs p-4 rounded-2xl bg-slate-900/95 border border-cyan-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                    {profile.statusBadge}
                  </span>
                </div>
                <p className="text-xs text-slate-200 font-mono leading-tight italic">
                  "Turning complex AI algorithms & datasets into practical digital solutions."
                </p>
                <div className="text-[10px] font-mono text-slate-400 font-semibold">
                  — ATHOTA SAI NITISHA
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center gap-2 text-slate-500 font-mono text-[11px] tracking-widest uppercase">
          <span>SCROLL TO EXPLORE ↓</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
