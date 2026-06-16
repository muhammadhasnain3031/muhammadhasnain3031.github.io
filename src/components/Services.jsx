import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";

const IconCode = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>);
const IconSaaS = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>);
const IconAI = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>);
const IconUI = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M4 13h16" /></svg>);
const IconBug = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.03V3m0 3.75V6m0 12.75h.008v.008H12v-.008zM9.75 6.112A4.5 4.5 0 1114.25 12h-4.5V6.112zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const IconFigma = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.783-.22-1.128zM9.53 16.122a3 3 0 004.22 0l.004-.004a3 3 0 000-4.222 3 3 0 00-4.224 0M12 3a4.5 4.5 0 00-4.5 4.5v4.5H12V3z" /></svg>);

export default function Services() {
  const servicesList = [
    { title: "Full-Stack Web Apps", description: "Building production-ready applications using Next.js 15, TypeScript, and the robust MERN Stack with optimized performance.", icon: <IconCode />, tag: "Next.js 15 & MERN", features: ["Server-Side Rendering & Streaming Layouts", "Type-Safe API Interchanges via TypeScript", "Advanced Reactive State Orchestration", "Optimized MongoDB Aggregations"] },
    { title: "SaaS & WebRTC Architecture", description: "Designing scalable SaaS platforms with secure multi-tenant structures and real-time audio/video networks.", icon: <IconSaaS />, tag: "Real-Time & Scale", features: ["Isolated Tenant Data Security", "Low-Latency WebRTC Streams", "Role-Based Access Guards (RBAC)", "Automated Billing Hooks"] },
    { title: "AI Integration & Automation", description: "Embedding smart workflows, LLM interfaces, and lightning-fast pipelines powered by high-performance engines.", icon: <IconAI />, tag: "Groq & LLMs", features: ["Sub-Second Inference using Groq", "Context-Aware LLM Agents", "Vector Databases & Embeddings", "Intelligent Log Analysis"] },
    { title: "Responsive UI/UX Development", description: "Crafting beautiful, pixel-perfect, ultra-responsive custom design systems with modern styling strategies.", icon: <IconUI />, tag: "Tailwind CSS", features: ["Fluid Breakpoint Frameworks", "Hardware-Accelerated Interactions", "Modular Atomic Components", "Perfect Core Web Vitals"] },
    { title: "Bug Fixing & Code Operations", description: "Deep debugging and resolution of runtime anomalies across React, Next.js, and Node.js environments.", icon: <IconBug />, tag: "MERN & Deployment", features: ["Next.js Hydration & Route Recovery", "Node.js Memory Leak Tracing", "Vercel, AWS & Cloud Pipeline Fixes", "State Sync Dependency Patches"] },
    { title: "Figma to React / Next.js", description: "Converting high-fidelity UI prototypes into interactive, optimized, pixel-perfect production codebases.", icon: <IconFigma />, tag: "Design To Code", features: ["Pixel-Perfect Translation", "Atomic Reusable Components", "Fluid Micro-Animations", "Accessible Semantic DOM"] },
  ];

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const cardReveal = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <PageWrapper className="min-h-screen bg-[#f8fafc] pt-36 pb-24 px-6 md:px-12 flex flex-col items-center font-sans overflow-hidden selection:bg-[#185FA5] selection:text-white">
      <motion.div initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mb-20">
        <div className="inline-flex items-center text-[11px] font-extrabold tracking-widest uppercase text-[#d4af37] bg-[#0a0f1e] border border-white/10 rounded-full px-5 py-2.5 mb-6 shadow-sm">
          What I Offer
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0a0f1e] leading-tight tracking-tight mb-6">
          Premium Services for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] to-[#d4af37]">Modern Tech Solutions.</span>
        </h1>
        <p className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
          I design, architect, and deploy robust full-stack applications with elegant visual layouts and pristine execution.
        </p>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {servicesList.map((service, index) => (
          <motion.div key={index} variants={cardReveal} whileHover={{ y: -6, scale: 1.015 }} className="group bg-white border border-[#e2e8f0] p-8 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_22px_50px_rgba(24,95,165,0.08)] hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f5d061]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-[2.5rem]" />
            <div>
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#E6F1FB] text-[#185FA5] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#185FA5] group-hover:text-white transition-all duration-300 shadow-sm">
                  {service.icon}
                </div>
                <span className="text-[10px] font-black tracking-wider text-[#185FA5] bg-sky-50/80 px-3.5 py-1.5 rounded-xl border border-sky-100/50 uppercase">{service.tag}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#0a0f1e] mb-3 group-hover:text-[#185FA5] transition-colors duration-200">{service.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6 font-medium">{service.description}</p>
              <div className="border-t border-slate-100/70 pt-5 mt-5">
                <ul className="space-y-3">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start text-xs font-bold text-slate-600">
                      <span className="flex-shrink-0 w-5 h-5 rounded-lg bg-sky-50 flex items-center justify-center mr-3 border border-sky-100/40 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      </span>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 text-center relative z-10">
        <p className="text-sm text-slate-500 font-bold tracking-wide mb-5 uppercase">Have a custom architectural requirement?</p>
        <Link to="/Contact" className="inline-flex items-center justify-center px-10 py-5 bg-[#185FA5] hover:bg-[#0c447c] text-white font-black text-sm rounded-2xl transition-all hover:scale-[1.03] shadow-lg shadow-[#185FA5]/20">
          Let's Architect A Custom Solution
        </Link>
      </motion.div>
    </PageWrapper>
  );
}