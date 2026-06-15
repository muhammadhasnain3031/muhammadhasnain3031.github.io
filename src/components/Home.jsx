import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// High-End Zero-Dependency Custom SVGs for Production
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
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const IconGithub = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const IconMail = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

export default function Home() {
  // Advanced Engineering Micro-Interaction Orchestration
  const pageContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
  };

  const fadeUpSkew = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  // Metrics parsed directly from CV values
  const executiveMetrics = [
    { label: "Production Deployments", val: "7+ Live" },
    { label: "SaaS Architecture", val: "Multi-Tenant" },
    { label: "AI Integration Nodes", val: "Groq / OpenAI" },
    { label: "Full Development Lifecycle", val: "End-To-End" }
  ];

  return (
    <motion.div 
      variants={pageContainer}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#f8fafc] font-sans pt-28 sm:pt-36 pb-12 overflow-x-hidden relative selection:bg-[#185FA5] selection:text-white"
    >
      {/* Visual Ambient Grid & Blur Systems */}
      <div className="absolute top-[-8%] right-[-5%] w-[280px] md:w-[600px] h-[280px] md:h-[600px] bg-gradient-to-bl from-sky-200/40 to-transparent blur-3xl rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[15%] left-[-8%] w-[220px] md:w-[500px] h-[220px] md:h-[500px] bg-gradient-to-tr from-blue-100/30 to-transparent blur-3xl rounded-full pointer-events-none z-0" />

      {/* Hero Execution Area */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Core Profile Copy Block */}
        <motion.div variants={fadeUpSkew} className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
          
          {/* Active Status Infrastructure Capsule */}
          <div className="inline-flex items-center px-4 py-2 bg-[#E6F1FB] rounded-full text-[#185FA5] font-black text-[10px] sm:text-[11px] uppercase tracking-widest border border-sky-100/70 shadow-xs max-w-full">
            <span className="relative flex h-2 w-2 mr-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#185FA5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#185FA5]"></span>
            </span>
            <span className="truncate">Available for Production Contracts</span>
          </div>
          
          {/* Main Structural Name Block */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#0f172a] leading-[0.95] tracking-tighter">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] via-sky-600 to-sky-400">
              Muhammad Hasnain
            </span>
          </h1>
          
          {/* Architectural Subtitle Block */}
          <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-700 tracking-tight">
            MERN Stack Developer & Full-Stack Web Architect
          </p>
          
          {/* Professional Summary Parsed from CV */}
          <p className="text-sm sm:text-base md:text-lg text-[#64748b] leading-relaxed max-w-xl font-medium">
            Hands-on engineer specializing in designing, building, and deploying production-grade full-stack web architectures. Experience spans across multi-tenant hospital SaaS configurations, real-time WebRTC infrastructure, and custom micro-inference AI system models.
          </p>

          {/* Interactive Call-To-Actions Row (Responsive Multi-Layout) */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 w-full sm:w-auto">
            <Link 
              to="/Work" 
              className="group flex items-center justify-center px-8 py-4 bg-[#185FA5] hover:bg-[#0c447c] text-white font-black text-sm rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#185FA5]/15 text-center"
            >
              Explore My Work
              <IconArrowRight />
            </Link>
            
            {/* Absolute Dynamic CV Download Button - Looks Clean & High-End */}
            <a 
              href="/Muhammad_Hasnain_CV.pdf" 
              download="Muhammad_Hasnain_CV.pdf"
              className="group flex items-center justify-center px-8 py-4 bg-white border border-[#e2e8f0] hover:border-sky-200 text-slate-700 hover:text-[#185FA5] font-black text-sm rounded-2xl transition-all shadow-xs hover:shadow-md text-center"
            >
              Download Resume
              <IconDownload />
            </a>
          </div>
        </motion.div>

        {/* Profile Mockup Frame Box */}
        <motion.div 
          variants={fadeUpSkew} 
          className="lg:col-span-5 flex justify-center lg:justify-end w-full relative group"
        >
          {/* Mathematical Fluid Geometry Wrapper */}
          <div className="w-full max-w-[270px] sm:max-w-[330px] aspect-[4/5] bg-white p-3 sm:p-4 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-500 border border-slate-100 relative z-10">
            <div className="w-full h-full rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden bg-slate-50 relative">
              <img 
                src="/profile.png" 
                alt="Muhammad Hasnain" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80";
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-[#185FA5]/5 blur-2xl rounded-full scale-75 group-hover:bg-[#185FA5]/10 transition-colors duration-500 z-0 pointer-events-none" />
        </motion.div>
      </section>

      {/* Production Analytics Dashboard Metrics Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-24 relative z-10">
        <motion.div variants={fadeUpSkew} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {executiveMetrics.map((item, i) => (
            <div 
              key={i} 
              className="p-5 sm:p-7 bg-white border border-[#e2e8f0] rounded-[1.8rem] sm:rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(24,95,165,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200"
            >
              <p className="text-[9px] sm:text-[10px] text-[#185FA5] font-black uppercase tracking-widest truncate">
                {item.label}
              </p>
              <h4 className="text-base sm:text-lg md:text-xl font-black mt-1 text-[#0f172a] tracking-tight whitespace-normal">
                {item.val}
              </h4>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Corporate Technical Footer Infrastructure */}
      <footer className="border-t border-[#e2e8f0] bg-white/70 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h4 className="text-xl font-black text-[#0f172a]">Muhammad Hasnain</h4>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">Sargodha, Punjab, Pakistan | +92 300 0253031</p>
          </div>
          
          {/* Connected Developer Network Nodes */}
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-6 text-slate-600 font-bold text-xs sm:text-sm">
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-slate-500 hover:text-[#185FA5] transition-colors group"
            >
              <IconLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/muhammadhasnain3031" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-slate-500 hover:text-[#0f172a] transition-colors group"
            >
              <IconGithub />
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:muhammadhasnain3031@gmail.com" 
              className="flex items-center gap-2 text-slate-500 hover:text-[#185FA5] transition-colors group"
            >
              <IconMail />
              <span>Email</span>
            </a>
            <span className="text-[#185FA5] bg-[#E6F1FB] border border-sky-100/50 px-3 py-1 rounded-lg text-[11px] font-black tracking-wide shrink-0">
              Sargodha, PK
            </span>
          </div>
        </div>
        
        <div className="border-t border-slate-100/80 py-4 text-center text-[10px] text-slate-400 font-medium">
          © 2026 Muhammad Hasnain. Crafted with performance optimized layouts.
        </div>
      </footer>
    </motion.div>
  );
}