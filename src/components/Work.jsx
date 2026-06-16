import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";

const projects = [
  { title: "MediCare Pro — Multi-Tenant Hospital SaaS", desc: "An enterprise-grade Multi-Tenant Hospital Management System with 8 specialized roles (RBAC). Features AI-assisted prescriptions using Groq AI, an AI Drug Interaction Checker, and real-time WebRTC video consultations.", tags: ["Next.js 15", "TypeScript", "Groq AI", "WebRTC", "MongoDB"], liveLink: "https://medicare-pro-green.vercel.app/" },
  { title: "SmileCare — Premium Dental Center Platform", desc: "A production-ready clinic application featuring 17 statically generated specialty pages with dynamic pricing tiers, advanced JSON-LD medical SEO structures, and custom SVG data architectures.", tags: ["Next.js 14", "TypeScript", "Zod", "Tailwind CSS", "SEO"], liveLink: "https://smilecare-dental-three.vercel.app/" },
  { title: "Sultan Elite — Full-Stack MERN E-Commerce", desc: "A high-performance online shopping platform with full customer lifecycles, a heavy Admin Dashboard for order management, real-time inventory metrics, and Cloudinary-integrated multi-image processing.", tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"], liveLink: "https://mern-ecommerce-platform-fui5.vercel.app/" },
  { title: "Social AI Engine Platform", desc: "An automated modern SaaS platform for instant social media content creation workflows and AI-driven communication funnels, built with fluid interface mechanics for high-speed inference.", tags: ["React", "AI Integration", "Tailwind CSS", "SaaS UI"], liveLink: "https://social-ai-frontend-xi.vercel.app/" },
  { title: "Omni AI Chatbot Hub", desc: "A clean, low-latency conversational environment engineered for continuous LLM token streaming responses and custom contextual interaction frameworks with optimal visual responsiveness.", tags: ["React", "API Streaming", "Tailwind CSS", "UI/UX"], liveLink: "https://ai-chatbot-frontend-ten-woad.vercel.app/" },
];

export default function Work() {
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } } };
  const item = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <PageWrapper className="min-h-screen bg-gradient-to-b from-[#0b1437] via-[#0a1230] to-[#070b1f] pt-32 pb-24 px-6 md:px-12 font-sans relative overflow-hidden">
      <div className="absolute top-[8%] right-[5%] w-[400px] h-[400px] bg-cyan-500/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[8%] w-[350px] h-[350px] bg-[#2563eb]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="inline-flex items-center text-[11px] font-extrabold tracking-widest uppercase text-[#f5d061] bg-white/5 border border-cyan-300/20 rounded-full px-5 py-2 mb-5">Production Portfolio</motion.div>
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
          Deployed <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#f5d061]">Architectures.</span>
        </motion.h2>
      </div>

      <motion.div variants={container} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {projects.map((project, idx) => (
          <motion.div key={idx} variants={item} whileHover={{ y: -6, scale: 1.015 }} className="group bg-[#0b1437]/80 backdrop-blur p-8 rounded-3xl border border-cyan-300/15 hover:border-[#f5d061]/40 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(34,211,238,0.1)] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start gap-4 mb-5">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">{project.title}</h3>
                <a href={project.liveLink} target="_blank" rel="noreferrer" aria-label="Open live site" className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-300/20 hover:bg-cyan-500 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">{project.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-cyan-300/10">
              {project.tags.map((tag) => (<span key={tag} className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-300/20 px-3 py-1.5 rounded-lg">{tag}</span>))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 text-center relative z-10">
        <a href="https://muhammadhasnain3031-github-io.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#f5d061] to-[#e0b93c] text-[#0b1437] font-black text-sm rounded-2xl transition-all hover:scale-[1.03] shadow-lg shadow-[#f5d061]/20">View Full Portfolio</a>
      </motion.div>
    </PageWrapper>
  );
}