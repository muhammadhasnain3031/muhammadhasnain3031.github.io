import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";

const IconDownload = () => (
  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);
const IconArrowRight = () => (
  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);
const IconLinkedin = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const IconMail = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
);

export default function Home() {
  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: (i = 0) => ({ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
  };

  const executiveMetrics = [
    { label: "Production Deployments", val: "7+ Live" },
    { label: "SaaS Architecture", val: "Multi-Tenant" },
    { label: "AI Integration", val: "Groq / OpenAI" },
    { label: "Development Lifecycle", val: "End-To-End" },
  ];

  const journeyTimeline = [
    { title: "Freelance Full-Stack Developer", organization: "Fiverr & Upwork", duration: "Jan 2025 - Present", description: "Designing, building, and deploying production-grade MERN stack applications for global clients. Specializing in secure dashboards, JWT authentication, and full product lifecycles." },
    { title: "MERN Stack Development Certification", organization: "PNY Trainings, Sargodha", duration: "2025 - 2026", description: "Professional training program specializing in MongoDB, Express.js, React, Node.js, enterprise REST APIs, and deployment pipelines." },
    { title: "Bachelor of Arts (B.A.)", organization: "University of Sargodha", duration: "Graduated 2021", description: "Formal graduation degree establishing critical thinking, research foundation, and analytical capabilities." },
  ];

  return (
    <PageWrapper className="min-h-screen bg-[#070b1f] font-sans overflow-x-hidden relative selection:bg-cyan-500 selection:text-white">
      {/* ===== PREMIUM DARK HERO (indigo + cyan + gold) ===== */}
      <section className="relative bg-gradient-to-b from-[#0b1437] via-[#0a1230] to-[#070b1f] pt-32 sm:pt-44 pb-28 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-10%] right-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-bl from-cyan-500/30 to-transparent blur-3xl rounded-full pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[-10%] left-[0%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-gradient-to-tr from-[#2563eb]/30 to-transparent blur-3xl rounded-full pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[30%] left-[40%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-gradient-to-tr from-[#f5d061]/15 to-transparent blur-3xl rounded-full pointer-events-none" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#7dd3fc 1px, transparent 1px), linear-gradient(90deg, #7dd3fc 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur rounded-full text-[#f5d061] font-black text-[10px] sm:text-[11px] uppercase tracking-widest border border-cyan-300/20">
              <span className="relative flex h-2 w-2 mr-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f5d061] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f5d061]"></span>
              </span>
              <span className="truncate">Available for Production Contracts</span>
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-[#f5d061]">Muhammad Hasnain</span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-lg sm:text-xl md:text-2xl font-black text-slate-200 tracking-tight">
              MERN Stack Developer & Full-Stack Web Architect
            </motion.p>

            <motion.p variants={fadeUp} custom={3} className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed max-w-xl font-medium">
              Hands-on engineer specializing in designing, building, and deploying production-grade full-stack web architectures — from multi-tenant hospital SaaS platforms to real-time WebRTC and custom AI integrations.
            </motion.p>

            <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 w-full sm:w-auto">
              <Link to="/Work" className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#2563eb] to-cyan-500 hover:from-[#1d4ed8] hover:to-cyan-400 text-white font-black text-sm rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cyan-500/30 text-center">
                Explore My Work <IconArrowRight />
              </Link>
              <a href="/Muhammad_Hasnain_CV.pdf" download className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#f5d061] to-[#e0b93c] text-[#0b1437] font-black text-sm rounded-2xl transition-all hover:scale-[1.02] shadow-lg shadow-[#f5d061]/20 text-center">
                Download Resume <IconDownload />
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="lg:col-span-5 flex justify-center lg:justify-end w-full relative group">
            <div className="w-full max-w-[270px] sm:max-w-[330px] aspect-[4/5] bg-white/5 backdrop-blur p-3 sm:p-4 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-500 border border-cyan-300/30 relative z-10">
              <div className="w-full h-full rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden bg-slate-800 relative">
                <img src="/profile.png" alt="Muhammad Hasnain" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"; }} />
              </div>
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#f5d061] border-4 border-[#0b1437]" />
            </div>
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full scale-75 group-hover:bg-[#f5d061]/10 transition-colors duration-500 z-0 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ===== METRICS (overlapping) ===== */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-20 -mt-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {executiveMetrics.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="p-5 sm:p-7 bg-[#0b1437] border border-cyan-300/15 rounded-[1.8rem] sm:rounded-[2rem] shadow-[0_10px_40px_rgba(7,11,31,0.5)] hover:border-[#f5d061]/40 transition-all duration-300 hover:-translate-y-1 group">
              <p className="text-[9px] sm:text-[10px] text-cyan-400 font-black uppercase tracking-widest truncate">{item.label}</p>
              <h4 className="text-base sm:text-lg md:text-xl font-black mt-1 text-white tracking-tight group-hover:text-[#f5d061] transition-colors">{item.val}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== JOURNEY ===== */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-4 space-y-3">
            <div className="text-[10px] sm:text-[11px] text-cyan-400 font-black uppercase tracking-widest">Background & Verification</div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Professional <br className="hidden lg:block" /> Journey<span className="text-[#f5d061]">.</span></h3>
            <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-sm leading-relaxed">A comprehensive history of professional technical training, freelance execution, and academic foundation.</p>
          </motion.div>
          <div className="lg:col-span-8 relative border-l-2 border-cyan-300/20 ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-10">
            {journeyTimeline.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12, duration: 0.6 }} className="relative group">
                <div className="absolute left-[-31px] sm:left-[-39px] top-1.5 w-4 h-4 rounded-full bg-[#0b1437] border-4 border-cyan-500 group-hover:border-[#f5d061] group-hover:bg-[#f5d061] transition-all duration-300" />
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                    <h4 className="text-base sm:text-lg font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                    <span className="text-[10px] sm:text-[11px] font-black text-cyan-300 bg-cyan-500/10 border border-cyan-300/20 px-2.5 py-1 rounded-md tracking-wide shrink-0 w-max">{item.duration}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-300">{item.organization}</p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium max-w-2xl">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-cyan-300/10 bg-[#0b1437] relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h4 className="text-xl font-black text-white">Muhammad Hasnain<span className="text-[#f5d061]">.</span></h4>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">Sargodha, Punjab, Pakistan | +92 300 0253031</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-6 font-bold text-xs sm:text-sm">
            <a href="https://www.linkedin.com/in/muhammad-hasnain-dev" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-[#f5d061] transition-colors"><IconLinkedin /><span>LinkedIn</span></a>
            <a href="mailto:muhammadhasnain3031@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-[#f5d061] transition-colors"><IconMail /><span>Email</span></a>
            <span className="text-[#0b1437] bg-[#f5d061] px-3 py-1 rounded-lg text-[11px] font-black tracking-wide shrink-0">Sargodha, PK</span>
          </div>
        </div>
        <div className="border-t border-cyan-300/10 py-4 text-center text-[10px] text-slate-500 font-medium">© 2026 Muhammad Hasnain. Crafted with performance-optimized layouts.</div>
      </footer>
    </PageWrapper>
  );
}