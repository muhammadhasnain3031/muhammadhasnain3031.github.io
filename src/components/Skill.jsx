import React from "react";
import { motion } from "framer-motion";

// Premium Custom Inline SVGs to completely eliminate package import/resolution crashes
const IconFrontend = () => (
  <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25M19.5 3H4.5A1.5 1.5 0 003 4.5v10.5A1.5 1.5 0 004.5 16.5h15a1.5 1.5 0 001.5-1.5V4.5A1.5 1.5 0 0019.5 3z" />
  </svg>
);

const IconBackend = () => (
  <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V3.75a3 3 0 013-3h13.5a3 3 0 013 3v7.5a3 3 0 01-3 3mM5.25 14.25v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5m-9-4.5h.008v.008H9.75V9.75zm.008 9h.008v.008H9.75v-.008z" />
  </svg>
);

const IconSaaS = () => (
  <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const IconBug = () => (
  <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.03V3m0 3.75V6m0 12.75h.008v.008H12v-.008zM9.75 6.112A4.5 4.5 0 1114.25 12h-4.5V6.112zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconFigma = () => (
  <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.783-.22-1.128zM9.53 16.122a3 3 0 004.22 0l.004-.004a3 3 0 000-4.222 3 3 0 00-4.224 0M12 3a4.5 4.5 0 00-4.5 4.5v4.5H12V3z" />
  </svg>
);

const IconLogic = () => (
  <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);

export default function Skill() {
  const skillCategories = [
    {
      category: "Frontend Architecture",
      description: "Crafting highly performant, type-safe, and pixel-perfect user interfaces using modern layouts.",
      icon: <IconFrontend />,
      skills: [
        { name: "Next.js 15", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "React.js", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" }
      ]
    },
    {
      category: "Backend & Databases",
      description: "Building scalable, secure RESTful API nodes and optimizing dense unstructured data structures.",
      icon: <IconBackend />,
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Expert" },
        { name: "MongoDB", level: "Advanced" },
        { name: "RESTful APIs", level: "Expert" }
      ]
    },
    {
      category: "Next-Gen & SaaS Features",
      description: "Integrating smart artificial intelligence runtimes and real-time mesh communications.",
      icon: <IconSaaS />,
      skills: [
        { name: "Groq / OpenAI", level: "Advanced" },
        { name: "WebRTC Video", level: "Intermediate" },
        { name: "SaaS Multi-Tenant", level: "Advanced" },
        { name: "Redux / Zustand", level: "Advanced" }
      ]
    },
    {
      category: "Bug Fixing & Ops",
      description: "Deep debugging of runtime errors, hydration anomalies, and cloud deployment crashes.",
      icon: <IconBug />,
      skills: [
        { name: "Hydration Fixes", level: "Expert" },
        { name: "API Debugging", level: "Expert" },
        { name: "Memory Leaks", level: "Advanced" },
        { name: "Vercel / AWS Ops", level: "Advanced" }
      ]
    },
    {
      category: "Figma to React Conversion",
      description: "Translating vector mockups into high-fidelity, clean, and interaction-accurate UI systems.",
      icon: <IconFigma />,
      skills: [
        { name: "Pixel-Perfect", level: "Expert" },
        { name: "Atomic Framework", level: "Expert" },
        { name: "Responsive Units", level: "Expert" },
        { name: "Motion Prototyping", level: "Advanced" }
      ]
    },
    {
      category: "Problem Solving & Core",
      description: "Applying deep programmatic structures and algorithmic efficiency patterns to code execution.",
      icon: <IconLogic />,
      skills: [
        { name: "Data Structures", level: "Advanced" },
        { name: "Algorithm Design", level: "Advanced" },
        { name: "System Orchestration", level: "Expert" },
        { name: "Performance Audits", level: "Expert" }
      ]
    }
  ];

  // Elite Framer Motion Animation Pipelines
  const pageContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
  };

  const headerFade = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardReveal = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      variants={pageContainer}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#f8fafc] pt-36 pb-24 px-6 md:px-12 flex flex-col items-center font-sans overflow-hidden selection:bg-[#185FA5] selection:text-white"
    >
      {/* Premium Header Layout */}
      <motion.div variants={headerFade} className="text-center max-w-3xl mb-20">
        <div className="inline-flex items-center text-[11px] font-extrabold tracking-widest uppercase text-[#185FA5] bg-[#E6F1FB] border border-sky-100/80 rounded-full px-5 py-2.5 mb-6 shadow-sm">
          🌟 My Technical Arsenal
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0f172a] leading-tight tracking-tight mb-6">
          Technical Tech Stack & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] to-sky-500">
            Expertise Capabilities.
          </span>
        </h1>
        <p className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
          A comprehensive engineering map of frameworks, custom design implementations, and deep runtime diagnostics systems.
        </p>
      </motion.div>

      {/* Grid Architecture (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {skillCategories.map((cat, index) => (
          <motion.div 
            key={index} 
            variants={cardReveal}
            whileHover={{ y: -6, scale: 1.015, borderColor: "#bae6fd" }}
            className="group bg-white border border-[#e2e8f0] p-8 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_22px_50px_rgba(24,95,165,0.06)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Soft decorative light blue glow pattern behind cards */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-[2.5rem]" />

            <div>
              {/* Category Header Blocks */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#E6F1FB] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#185FA5] transition-all duration-300 shadow-sm">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {cat.icon}
                  </div>
                </div>
              </div>

              {/* Title & Core Copy */}
              <h3 className="text-xl font-black text-[#0f172a] mb-2 group-hover:text-[#185FA5] transition-colors duration-200">
                {cat.category}
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                {cat.description}
              </p>

              <div className="h-[1px] bg-slate-100/80 mb-6"></div>

              {/* Badges Flow Container */}
              <div className="flex flex-col gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="group/item flex items-center justify-between gap-4 px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-[#E6F1FB] hover:border-sky-200 w-full transition-all duration-200"
                  >
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5] mr-3 transition-transform group-hover/item:scale-125"></span>
                      <span className="text-sm font-bold text-slate-700 group-hover/item:text-[#185FA5] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-md shadow-2xs ${
                      skill.level === "Expert" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                      skill.level === "Advanced" ? "bg-blue-50 text-[#185FA5] border border-sky-100" : 
                      "bg-amber-50 text-amber-700 border border-amber-100"
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Engineering Philosophy Quote with Smooth Delayed Entry */}
      <motion.div 
        variants={headerFade}
        className="mt-20 text-center max-w-xl border-t border-slate-100 pt-10"
      >
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Core Philosophy</p>
        <p className="text-sm text-slate-500 italic leading-relaxed font-medium">
          "Writing clean, modular code and implementing scalable system design is not just a practice—it's a commitment to efficiency."
        </p>
      </motion.div>
    </motion.div>
  );
}