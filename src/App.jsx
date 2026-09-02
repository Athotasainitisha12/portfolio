import React, { useState } from 'react';
import CanvasBackground from './components/CanvasBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Education from './components/Education';
import GitHubAnalytics from './components/GitHubAnalytics';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#04060a] text-slate-100 relative selection:bg-cyan-500 selection:text-black">
      {/* Dynamic Background Particle & Grid Overlay */}
      <CanvasBackground />
      
      {/* Custom Glowing Futuristic Pointer Cursor */}
      <CustomCursor />

      {/* Main Glass Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Page Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Journey />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Certifications />
        <Achievements />
        <Leadership />
        <Education />
        <GitHubAnalytics />
        <ResumeSection
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
          onOpen={() => setResumeOpen(true)}
        />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
