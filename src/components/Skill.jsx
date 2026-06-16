import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";

const IconFrontend = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25M19.5 3H4.5A1.5 1.5 0 003 4.5v10.5A1.5 1.5 0 004.5 16.5h15a1.5 1.5 0 001.5-1.5V4.5A1.5 1.5 0 0019.5 3z" /></svg>);
const IconBackend = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V3.75a3 3 0 013-3h13.5a3 3 0 013 3v7.5a3 3 0 01-3 3M5.25 14.25v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5" /></svg>);
const IconSaaS = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>);
const IconBug = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.03V3m0 3.75V6m0 12.75h.008v.008H12v-.008zM9.75 6.112A4.5 4.5 0 1114.25 12h-4.5V6.112zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const IconFigma = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.783-.22-1.128zM9.53 16.122a3 3 0 004.22 0l.004-.004a3 3 0 000-4.222 3 3 0 00-4.224 0M12 3a4.5 4.5 0 00-4.5 4.5v4.5H12V3z" /></svg>);
const IconLogic = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>);

export default function Skill() {
  const skillCategories = [
    { category: "Frontend Architecture", description: "Crafting performant, type-safe, pixel-perfect user interfaces using modern layouts.", icon: <IconFrontend />, skills: [{ name: "Next.js 15", level: "Expert" }, { name: "TypeScript", level: "Advanced" }, { name: "React.js", level: "Expert" }, { name: "Tailwind CSS", level: "Expert" }] },
    { category: "Backend & Databases", description: "Building scalable, secure RESTful APIs and optimizing data structures.", icon: <IconBackend />, skills: [{ name: "Node.js", level: "Advanced" }, { name: "Express.js", level: "Expert" }, { name: "MongoDB", level: "Advanced" }, { name: "RESTful APIs", level: "Expert" }] },
    { category: "Next-Gen & SaaS", description: "Integrating AI runtimes and real-time mesh communications.", icon: <IconSaaS />, skills: [{ name: "Groq / OpenAI", level: "Advanced" }, { name: "WebRTC Video", level: "Intermediate" }, { name: "Multi-Tenant SaaS", level: "Advanced" }, { name: "Redux / Zustand", level: "Advanced" }] },
    { category: "Bug Fixing & Ops", description: "Deep debugging of runtime errors, hydration issues, and deployment crashes.", icon: <IconBug />, skills: [{ name: "Hydration Fixes", level: "Expert" }, { name: "API Debugging", level: "Expert" }, { name: "Memory Leaks", level: "Advanced" }, { name: "Vercel / AWS Ops", level: "Advanced" }] },
    { category: "Figma to React", description: "Translating vector mockups into high-fidelity, interaction-accurate UI systems.", icon: <IconFigma />, skills: [{ name: "Pixel-Perfect", level: "Expert" }, { name: "Atomic Framework", level: "Expert" }, { name: "Responsive Units", level: "Expert" }, { name: "Motion Prototyping", level: "Advanced" }] },
    { category: "Problem Solving", description: "Applying deep programmatic structures and algorithmic efficiency patterns.", icon: <IconLogic />, skills: [{ name: "Data Structures", level: "Advanced" }, { name: "Algorithm Design", level: "Advanced" }, { name: "System Design", level: "Expert" }, { name: "Performance Audits", level: "Expert" }] },
  ];

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } } };
  const cardReveal = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };

  const levelStyle = (level) => level === "Expert" ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20" : level === "Advanced" ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/20" : "bg-[#f5d061]/15 text-[#f5d061] border border-[#f5d061]/20";

  return (
    <PageWrapper className="min-h-screen bg-gradient-to-b from-[#0b1437] via-[#0a1230] to-[#070b1f] pt-36 pb-24 px-6 md:px-12 flex flex-col items-center font-sans overflow-hidden selection:bg-cyan-500 selection:text-white relative">
      <div className="absolute top-[5%] left-[8%] w-[400px] h-[400px] bg-cyan-500/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-[#2563eb]/15 blur-3xl rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="text-center max-w-3xl mb-20 relative z-10">
        <div className="inline-flex items-center text-[11px] font-extrabold tracking-widest uppercase text-[#f5d061] bg-white/5 border border-cyan-300/20 rounded-full px-5 py-2.5 mb-6">My Technical Arsenal</div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
          Tech Stack & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#f5d061]">Expertise Capabilities.</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">A comprehensive engineering map of frameworks, custom design implementations, and runtime diagnostics.</p>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl relative z-10">
        {skillCategories.map((cat, index) => (
          <motion.div key={index} variants={cardReveal} whileHover={{ y: -6, scale: 1.015 }} className="group bg-[#0b1437]/80 backdrop-blur border border-cyan-300/15 p-8 rounded-[2.5rem] hover:border-[#f5d061]/40 hover:shadow-[0_22px_50px_rgba(34,211,238,0.1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-[2.5rem]" />
            <div>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-[#2563eb] group-hover:text-white transition-all duration-300 border border-cyan-300/20">{cat.icon}</div>
              </div>
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">{cat.category}</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 font-medium">{cat.description}</p>
              <div className="h-[1px] bg-cyan-300/10 mb-6"></div>
              <div className="flex flex-col gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group/item flex items-center justify-between gap-4 px-4 py-3 rounded-xl border border-cyan-300/10 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-300/30 w-full transition-all duration-200">
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3 transition-transform group-hover/item:scale-125"></span>
                      <span className="text-sm font-bold text-slate-200 group-hover/item:text-cyan-300 transition-colors">{skill.name}</span>
                    </div>
                    <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-md ${levelStyle(skill.level)}`}>{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 text-center max-w-xl border-t border-cyan-300/10 pt-10 relative z-10">
        <p className="text-xs font-bold text-[#f5d061] uppercase tracking-widest mb-2">Core Philosophy</p>
        <p className="text-sm text-slate-300 italic leading-relaxed font-medium">"Writing clean, modular code and implementing scalable system design is not just a practice — it's a commitment to efficiency."</p>
      </motion.div>
    </PageWrapper>
  );
}