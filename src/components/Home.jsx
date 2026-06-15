import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// High-End Custom SVGs for absolute zero-dependency compatibility
const IconArrowRight = () => (
  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const IconLinkedin = () => (
  <svg className="w-5 h-5 transition-colors" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const IconMail = () => (
  <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

export default function Home() {
  // Master Orchestration Animations
  const pageContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.05 } }
  };

  const fadeUpSkew = {
    hidden: { y: 45, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
  };

  const statsList = [
    { label: "Architecture", val: "Multi-Tenant" },
    { label: "Core AI", val: "Groq / LLMs" },
    { label: "Frontend", val: "Next.js 15" },
    { label: "Cloud Node", val: "Vercel / AWS" }
  ];

  return (
    <motion.div 
      variants={pageContainer}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#f8fafc] font-sans pt-28 sm:pt-36 pb-12 overflow-x-hidden relative selection:bg-[#185FA5] selection:text-white"
    >
      {/* High-Level Ambient Glowing Orbs (Responsive blur vectors behind the layout) */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-bl from-sky-200/40 to-transparent blur-3xl rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-gradient-to-tr from-blue-100/30 to-transparent blur-3xl rounded-full pointer-events-none z-0" />

      {/* Hero Core Content */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Text Block - Occupies 7 Columns on Desktop */}
        <motion.div variants={fadeUpSkew} className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
          
          {/* Active Status Badge */}
          <div className="inline-flex items-center px-4 sm:px-5 py-2 bg-[#E6F1FB] rounded-full text-[#185FA5] font-black text-[10px] sm:text-[11px] uppercase tracking-widest border border-sky-100/60 shadow-xs max-w-full">
            <span className="relative flex h-2 w-2 mr-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#185FA5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#185FA5]"></span>
            </span>
            <span className="truncate">Available for Elite Contracts</span>
          </div>
          
          {/* Main Fluid Typography Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#0f172a] leading-[0.95] tracking-tighter">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] via-sky-600 to-sky-400">
              Muhammad Hasnain
            </span>
          </h1>
          
          {/* Subheading Identity */}
          <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-700 tracking-tight">
            Lead Architect & Full-Stack Developer
          </p>
          
          {/* Main Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-[#64748b] leading-relaxed max-w-xl font-medium">
            Full-Stack Engineer specialized in Next.js 15, MERN Stack, and micro-inference AI integrations. Building high-performance SaaS platforms with flawless execution.
          </p>

          {/* Action Call-To-Action Layout (Responsive Stack/Row) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
            <Link 
              to="/Work" 
              className="group flex items-center justify-center px-8 py-4.5 bg-[#185FA5] hover:bg-[#0c447c] text-white font-black text-sm rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-[#185FA5]/15 text-center"
            >
              Explore My Work
              <IconArrowRight />
            </Link>
            <Link 
              to="/Contact" 
              className="flex items-center justify-center px-8 py-4.5 bg-white border border-[#e2e8f0] hover:border-sky-200 text-slate-700 hover:text-[#185FA5] font-black text-sm rounded-2xl transition-all shadow-xs hover:shadow-md text-center"
            >
              Let's Build Your Project
            </Link>
          </div>
        </motion.div>

        {/* Profile Image Node - Occupies 5 Columns on Desktop */}
        <motion.div 
          variants={fadeUpSkew} 
          className="lg:col-span-5 flex justify-center lg:justify-end w-full relative group"
        >
          {/* Fluid Sizing Box: Stays responsive on small mobiles without clipping */}
          <div className="w-full max-w-[280px] sm:max-w-[340px] aspect-[4/5] bg-white p-3 sm:p-4 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-500 border border-slate-100 relative z-10">
            <div className="w-full h-full rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden bg-slate-50">
              <img 
                src="/profile.png" 
                alt="Muhammad Hasnain" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"; // Fallback placeholder if file not present
                }}
              />
            </div>
          </div>
          {/* Soft background shadow glow specifically tailored behind the frame */}
          <div className="absolute inset-0 bg-[#185FA5]/5 blur-2xl rounded-full scale-75 group-hover:bg-[#185FA5]/10 transition-colors duration-500 z-0 pointer-events-none" />
        </motion.div>
      </section>

      {/* Stats Section Architecture */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-20 sm:py-28 relative z-10">
        {/* Dynamic Responsive Columns Grid (2 on mobile/tablet, 4 on desktop) */}
        <motion.div variants={fadeUpSkew} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsList.map((item, i) => (
            <div 
              key={i} 
              className="p-5 sm:p-8 bg-white border border-[#e2e8f0] rounded-[1.8rem] sm:rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(24,95,165,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-200"
            >
              <p className="text-[9px] sm:text-[10px] text-[#185FA5] font-black uppercase tracking-widest truncate">
                {item.label}
              </p>
              <h4 className="text-lg sm:text-xl md:text-2xl font-black mt-2 text-[#0f172a] truncate">
                {item.val}
              </h4>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Premium Footer System */}
      <footer className="border-t border-[#e2e8f0] bg-white/70 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h4 className="text-xl font-black text-[#0f172a]">Muhammad Hasnain</h4>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">Software Architect & Full-Stack Developer</p>
          </div>
          
          {/* Action Links & Location Vectors */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-slate-600 font-bold text-xs sm:text-sm">
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
              href="mailto:your@email.com" 
              className="flex items-center gap-2 text-slate-500 hover:text-[#185FA5] transition-colors group"
            >
              <IconMail />
              <span>Email</span>
            </a>
            <span className="text-[#185FA5] bg-[#E6F1FB] border border-sky-100/50 px-3 py-1 rounded-lg text-[11px] font-black tracking-wide">
              Sargodha, PK
            </span>
          </div>
        </div>
        
        {/* Micro Copyright Row */}
        <div className="border-t border-slate-100 py-4 text-center text-[10px] text-slate-400 font-medium">
          © 2026 Muhammad Hasnain. All architectural execution metrics reserved.
        </div>
      </footer>
    </motion.div>
  );
}