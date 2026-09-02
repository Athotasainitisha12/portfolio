import React, { useState } from 'react';
import { profile } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    // Construct exact mailto URL dynamically from form fields
    const subject = formData.subject.trim() || 'Portfolio Contact';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open user's default email application natively
    window.location.href = mailtoUrl;
    setStatus('success');
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 bg-[#04060a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">
            11 / GET IN TOUCH
          </span>
          <div className="h-px bg-cyan-500/20 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Connect & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Build Something <span className="text-cyan-400">Intelligent.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether it's an exciting project, internship opportunity, technical collaboration, hackathon team-up, or simply a conversation about AI & technology—I'd love to connect.
            </p>

            {/* Direct Email Launcher Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">DEFAULT MAIL APP LAUNCHER</span>
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Send email"
                    className="text-base font-mono font-bold text-cyan-300 hover:underline flex items-center gap-2"
                  >
                    <span>{profile.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Prominent LinkedIn CTA Button */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 font-mono text-sm font-bold shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all group"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-5 h-5 text-cyan-400" />
                <span>Connect on LinkedIn</span>
              </div>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-panel border border-white/10 flex items-center gap-3 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 text-slate-400 group-hover:text-cyan-400">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs">
                  <strong className="block text-white">GitHub</strong>
                  <span className="text-slate-500">View Repos</span>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-panel border border-white/10 flex items-center gap-3 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 text-slate-400 group-hover:text-cyan-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs">
                  <strong className="block text-white">LinkedIn Profile</strong>
                  <span className="text-slate-500">View Profile</span>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Location: {profile.location} ({profile.college})</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-cyan-500/30 relative">
              
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>

              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Opening Default Mail App...</h4>
                  <p className="text-xs text-slate-300 font-mono">
                    Thank you, {formData.name}. Your default mail application has been launched with your pre-filled message details.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 text-xs font-mono hover:text-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase">Your Name *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-xs font-mono transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase">Your Email *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-xs font-mono transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono text-slate-400 uppercase">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Portfolio Contact"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-xs font-mono transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-slate-400 uppercase">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I would like to contact you."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-xs font-mono transition-all"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all"
                  >
                    <span>Launch Mail Application</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
