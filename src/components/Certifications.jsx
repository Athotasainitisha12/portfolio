import React, { useState } from 'react';
import { certifications } from '../data/portfolioData';
import { Award, ShieldCheck, ExternalLink, Calendar, X, Sparkles } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative z-10 border-t border-white/5 bg-[#060810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">
            05 / CERTIFICATIONS & CREDENTIALS
          </span>
          <div className="h-px bg-cyan-500/20 flex-1" />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Industry <span className="text-cyan-400">Credentials</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Verified programs in Large Language Models, Generative AI, Quantum Fundamentals, and Infosys Springboard Pragati Path.
          </p>
        </div>

        {/* Credential Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group glass-panel-interactive p-6 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between space-y-4"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.accent} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity`} />

              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-white/10">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                    {cert.issuer}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3 relative z-10">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-md bg-slate-900 text-[10px] font-mono text-slate-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono pt-1">
                  <span className="text-slate-500 text-[10px]">
                    ID: {cert.credentialId}
                  </span>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Certificate Preview */}
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-lg bg-[#0b0e17] border border-cyan-400/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-400">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase">OFFICIAL CERTIFICATION VERIFICATION</span>
                  <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                  <p className="text-xs text-slate-400">Issued by {selectedCert.issuer} ({selectedCert.date})</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2 text-xs font-mono text-slate-300">
                <div><span className="text-slate-500">Recipient:</span> <strong className="text-cyan-300">ATHOTA SAI NITISHA</strong></div>
                <div><span className="text-slate-500">Credential ID:</span> <span className="text-white">{selectedCert.credentialId}</span></div>
                <div><span className="text-slate-500">Status:</span> <span className="text-emerald-400 font-bold">VERIFIED & ACTIVE</span></div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedCert.description}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-bold font-mono text-xs hover:bg-cyan-400 transition-all"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certifications;
