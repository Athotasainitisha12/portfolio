import React, { useState, useRef, useEffect } from 'react';
import { projects, profile } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const categories = ['ALL', 'AI', 'DATA'];

/* Interactive Floating Glass Project Card with 3D Tilt & Project Picture Banner */
const GlassProjectCard = ({ project, index, onSelectProject }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY });
    setLightPos({ x: percentX, y: percentY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setLightPos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
      style={{
        perspective: 1000,
      }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isTouchDevice ? 'none' : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className="group relative h-full glass-panel rounded-3xl overflow-hidden flex flex-col justify-between border border-cyan-500/20 hover:border-cyan-400/60 shadow-xl hover:shadow-[0_20px_50px_-15px_rgba(0,240,255,0.25)] transition-all duration-300 backdrop-blur-xl bg-slate-900/60"
      >
        {/* Dynamic Cursor Light Reflection Spotlight */}
        {!isTouchDevice && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle 240px at ${lightPos.x}% ${lightPos.y}%, rgba(0, 240, 255, 0.14), transparent 80%)`,
            }}
          />
        )}

        {/* Card Header Thumbnail Graphic with Project Picture */}
        <div className={`h-52 bg-gradient-to-br ${project.imageGradient} p-6 relative flex flex-col justify-between border-b border-white/10 overflow-hidden`}>
          
          {/* Real Project Picture */}
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 pointer-events-none"
            />
          )}

          {/* Vignette Gradient & Cyber Grid Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-[#080b14]/60 to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

          {/* Top Project Number & Category Badge */}
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-400/50 text-cyan-300 font-bold tracking-wider shadow-md backdrop-blur-md">
              {project.projectNumber} / {project.category}
            </span>
            {project.featured && (
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-purple-500/40 text-purple-200 border border-purple-400/50 flex items-center gap-1 font-semibold backdrop-blur-md shadow-md">
                <Sparkles className="w-3 h-3 text-purple-300" />
                FEATURED
              </span>
            )}
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors drop-shadow-lg">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-5 relative z-10">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <motion.span
                key={idx}
                whileHover={{ y: -2, scale: 1.05 }}
                className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-[11px] font-mono text-slate-300 group-hover:border-cyan-500/40 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
            <button
              onClick={() => onSelectProject(project)}
              className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-400 text-xs font-mono font-bold transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={project.github || profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 border border-white/15 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-all text-xs font-mono font-bold"
              title="View on GitHub"
              aria-label="View on GitHub"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GitHub ↗</span>
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const Projects = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5 bg-[#04060a]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">
            04 / FEATURED PROJECTS (EXACTLY 3)
          </span>
          <div className="h-px bg-cyan-500/20 flex-1" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              FEATURED <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">PROJECTS</span>
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Intelligent Game AI, Rule-Based Natural Language Processing, and Data Science ML workflows.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 relative ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_15px_rgba(0,240,255,0.25)] font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Animated Responsive Grid (3 on Desktop, 2 on Tablet, 1 on Mobile) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <GlassProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelectProject={onSelectProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
