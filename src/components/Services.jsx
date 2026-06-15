import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Premium Custom Inline SVGs to guarantee zero compilation or third-party import crashes
const IconCode = () => (
  <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const IconSaaS = () => (
  <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const IconAI = () => (
  <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const IconUI = () => (
  <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M4 13h16" />
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

export default function Services() {
  const servicesList = [
    {
      title: "Full-Stack Web Apps",
      description: "Building production-ready applications using Next.js 15, TypeScript, and the robust MERN Stack with optimized performance parameters.",
      icon: <IconCode />,
      tag: "Next.js 15 & MERN",
      features: [
        "Server-Side Rendering & Streaming Layouts",
        "Type-Safe API Interchanges via TypeScript",
        "Advanced Reactive State Orchestration",
        "Highly Restructured Aggregations in MongoDB"
      ]
    },
    {
      title: "SaaS & WebRTC Architecture",
      description: "Designing scalable Software-as-a-Service platforms integrated with secure multi-tenant structures and real-time audio/video networks.",
      icon: <IconSaaS />,
      tag: "Real-Time & Scale",
      features: [
        "Isolated Tenant Data Security Pipelines",
        "Ultra-Low Latency SFU/MCU WebRTC Streams",
        "Granular Role-Based Access Guards (RBAC)",
        "Automated Edge Billing Systems Hooks"
      ]
    },
    {
      title: "AI Integration & Automation",
      description: "Embedding smart custom workflows, large language model interfaces, and lightning-fast pipelines powered by high-performance engines.",
      icon: <IconAI />,
      tag: "Groq & LLMs",
      features: [
        "Sub-Second Inference Pipelines using Groq",
        "Context-Aware Autonomous LLM Agents",
        "Vector Databases & Semantic Embeddings",
        "Intelligent Log Analysis & Extraction"
      ]
    },
    {
      title: "Responsive UI/UX Development",
      description: "Crafting beautiful, pixel-perfect, and ultra-responsive custom design systems utilizing utility-first modern styling strategies.",
      icon: <IconUI />,
      tag: "Tailwind CSS",
      features: [
        "Fluid Breakpoint Frameworks for All Screens",
        "Hardware-Accelerated Interaction Flows",
        "Highly Modular Atomic Component Structuring",
        "Perfect Core Web Vitals Optimization Scores"
      ]
    },
    {
      title: "Bug Fixing & Code Operations",
      description: "Deep debugging and resolution of runtime anomalies across the React, Next.js, and Node.js environments alongside architecture deployment hotfixes.",
      icon: <IconBug />,
      tag: "MERN & Deployment Fixes",
      features: [
        "Next.js Hybrid Hydration & Route Recovery",
        "Node.js Memory Leak Trace & API Tuning",
        "Vercel, AWS, & Heroku Cloud Pipeline Fixes",
        "State Splitting & Sync Dependency Patches"
      ]
    },
    {
      title: "Figma to React / Next.js",
      description: "Converting high-fidelity UI vector prototypes into completely interactive, optimized, clean, and pixel-perfect production codebases.",
      icon: <IconFigma />,
      tag: "Design System To Code",
      features: [
        "Pixel-Perfect Translation down to Layout Units",
        "Atomic React Reusable Component Compilation",
        "Fluid Micro-Animations via Tailwind & Motion",
        "Accessible Semantic Structured DOM Schemas"
      ]
    }
  ];

  // Framer Motion Animation Pipelines
  const pageContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 }
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
      {/* Header Layout */}
      <motion.div variants={headerFade} className="text-center max-w-3xl mb-20">
        <div className="inline-flex items-center text-[11px] font-extrabold tracking-widest uppercase text-[#185FA5] bg-[#E6F1FB] border border-sky-100/80 rounded-full px-5 py-2.5 mb-6 shadow-sm">
          🌟 What I Offer
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0f172a] leading-tight tracking-tight mb-6">
          Premium Services for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] to-sky-500">
            Modern Tech Solutions.
          </span>
        </h1>
        <p className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
          I design, architect, and deploy robust full-stack applications with elegant visual layouts and pristine execution mechanics.
        </p>
      </motion.div>

      {/* Grid Architecture (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {servicesList.map((service, index) => (
          <motion.div 
            key={index} 
            variants={cardReveal}
            whileHover={{ y: -6, scale: 1.015, borderColor: "#bae6fd" }}
            className="group bg-white border border-[#e2e8f0] p-8 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_22px_50px_rgba(24,95,165,0.07)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Soft decorative light blue pattern behind icons */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-[2.5rem]" />

            <div>
              {/* Header Blocks inside card */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#E6F1FB] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#185FA5] transition-all duration-300 shadow-sm">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <span className="text-[10px] font-black tracking-wider text-[#185FA5] bg-sky-50/80 px-3.5 py-1.5 rounded-xl border border-sky-100/50 uppercase">
                  {service.tag}
                </span>
              </div>

              {/* Title & Core Copy */}
              <h3 className="text-xl md:text-2xl font-black text-[#0f172a] mb-3 group-hover:text-[#185FA5] transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6 font-medium">
                {service.description}
              </p>

              {/* Detailed Feature Checkmarks Section */}
              <div className="border-t border-slate-100/70 pt-5 mt-5">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-xs font-bold text-slate-600 group-hover:text-slate-700 transition-colors">
                      <span className="flex-shrink-0 w-5 h-5 rounded-lg bg-sky-50 flex items-center justify-center mr-3 border border-sky-100/40 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Micro Interaction Indicator */}
            <div className="flex items-center text-xs font-extrabold text-[#185FA5] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 mt-8 pt-2">
              Learn More Integration Rules <span className="ml-2 font-sans">➔</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Substantial Bottom CTA Node with Premium Interaction Scaling */}
      <motion.div 
        variants={headerFade}
        className="mt-20 text-center relative z-10"
      >
        <p className="text-sm text-slate-500 font-bold tracking-wide mb-5 uppercase">
          Have a highly custom architectural layout requirement?
        </p>
        <motion.div
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="inline-block"
        >
          <Link 
            to="/Contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-[#185FA5] hover:bg-[#0c447c] text-white font-black text-sm rounded-2xl transition-colors shadow-lg shadow-[#185FA5]/20 hover:shadow-2xl hover:shadow-[#185FA5]/30"
          >
            Let's Architect A Custom Solution
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}