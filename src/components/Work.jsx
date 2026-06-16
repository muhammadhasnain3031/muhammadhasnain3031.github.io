import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";

const projects = [
  {
    title: "MediCare Pro — Multi-Tenant Hospital SaaS",
    desc: "An enterprise-grade Multi-Tenant Hospital Management System with 8 specialized roles (RBAC). Features AI-assisted prescriptions using Groq AI, an AI Drug Interaction Checker, and real-time WebRTC video consultations.",
    tags: ["Next.js 15", "TypeScript", "Groq AI", "WebRTC", "MongoDB"],
    liveLink: "https://medicare-pro-green.vercel.app/",
  },
  {
    title: "SmileCare — Premium Dental Center Platform",
    desc: "A production-ready clinic application featuring 17 statically generated specialty pages with dynamic pricing tiers, advanced JSON-LD medical SEO structures, and custom SVG data architectures.",
    tags: ["Next.js 14", "TypeScript", "Zod", "Tailwind CSS", "SEO"],
    liveLink: "https://smilecare-dental-three.vercel.app/",
  },
  {
    title: "Sultan Elite — Full-Stack MERN E-Commerce",
    desc: "A high-performance online shopping platform with full customer lifecycles, a heavy Admin Dashboard for order management, real-time inventory metrics, and Cloudinary-integrated multi-image processing.",
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    liveLink: "https://mern-ecommerce-platform-fui5.vercel.app/",
  },
  {
    title: "Social AI Engine Platform",
    desc: "An automated modern SaaS platform for instant social media content creation workflows and AI-driven communication funnels, built with fluid interface mechanics for high-speed inference.",
    tags: ["React", "AI Integration", "Tailwind CSS", "SaaS UI"],
    liveLink: "https://social-ai-frontend-xi.vercel.app/",
  },
  {
    title: "Omni AI Chatbot Hub",
    desc: "A clean, low-latency conversational environment engineered for continuous LLM token streaming responses and custom contextual interaction frameworks with optimal visual responsiveness.",
    tags: ["React", "API Streaming", "Tailwind CSS", "UI/UX"],
    liveLink: "https://ai-chatbot-frontend-ten-woad.vercel.app/",
  },
];

export default function Work() {
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <PageWrapper className="min-h-screen bg-[#f8fafc] pt-32 pb-24 px-6 md:px-12 font-sans">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center text-[11px] font-extrabold tracking-widest uppercase text-[#185FA5] bg-[#E6F1FB] border border-sky-100/80 rounded-full px-5 py-2 mb-5">
          Production Portfolio
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black text-[#0a0f1e] leading-tight tracking-tight mb-4">
          Deployed <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] to-[#d4af37]">Architectures.</span>
        </motion.h2>
      </div>

      <motion.div variants={container} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ y: -6, scale: 1.015 }}
            className="group bg-white p-8 rounded-3xl border border-[#e2e8f0] hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(24,95,165,0.08)] flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-5">
                <h3 className="text-xl font-bold text-[#0a0f1e] group-hover:text-[#185FA5] transition-colors leading-snug">{project.title}</h3>
                <a href={project.liveLink} target="_blank" rel="noreferrer" aria-label="Open live site" className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-[#E6F1FB] text-[#185FA5] hover:bg-[#185FA5] hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <p className="text-[#64748b] text-sm leading-relaxed mb-8">{project.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-extrabold uppercase tracking-wider text-[#185FA5] bg-[#E6F1FB] px-3 py-1.5 rounded-lg">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Live demo CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 text-center">
        <a href="https://muhammadhasnain3031-github-io.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-[#0a0f1e] text-[#f5d061] font-black text-sm rounded-2xl transition-all hover:scale-[1.03] shadow-lg">
          View Full Portfolio
        </a>
      </motion.div>
    </PageWrapper>
  );
}