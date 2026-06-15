import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MediCare Pro — Multi-Tenant Hospital SaaS",
    desc: "An enterprise-grade Multi-Tenant Hospital Management System with 8 specialized roles (RBAC). Features include AI-assisted prescriptions using Groq AI, an AI Drug Interaction Checker, and real-time WebRTC peer-to-peer video consultations.",
    tags: ["Next.js 15", "TypeScript", "Groq AI", "WebRTC", "MongoDB"],
    liveLink: "https://medicare-pro-green.vercel.app/",
    codeLink: "https://github.com/muhammadhasnain3031/medicare-pro" 
  },
  {
    title: "SmileCare — Premium Dental Center Platform",
    desc: "A production-ready clinic application featuring 17 statically generated medical specialty pages with dynamic pricing tiers. Includes advanced JSON-LD medical SEO structures and custom SVG data architectures.",
    tags: ["Next.js 14", "TypeScript", "Zod", "Tailwind CSS", "SEO"],
    liveLink: "https://smilecare-dental-three.vercel.app/",
    codeLink: "https://github.com/muhammadhasnain3031/smilecare"
  },
  {
    title: "Sultan Elite — Full-Stack MERN E-Commerce",
    desc: "A high-performance online shopping platform featuring full customer lifecycles. Packed with a heavy Admin Dashboard for order management, real-time inventory stock metrics, and Cloudinary-integrated multi-image file processing.",
    tags: ["React 19", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    liveLink: "https://mern-ecommerce-platform-fui5.vercel.app/",
    codeLink: "https://github.com/muhammadhasnain3031/mern-ecommerce"
  },
  {
    title: "Social AI Engine Platform",
    desc: "An automated modern SaaS platform tailored for instant social media content creation workflows and AI-driven automated communication funnels. Built with fluid interface mechanics to offer high-speed inference processing.",
    tags: ["React", "AI Integration", "Tailwind CSS", "SaaS UI"],
    liveLink: "https://social-ai-frontend-xi.vercel.app/",
    codeLink: "https://github.com/muhammadhasnain3031/social-ai"
  },
  {
    title: "Omni AI Chatbot Hub",
    desc: "A clean, low-latency conversational user environment engineered for continuous LLM token streaming responses and custom contextual interaction frameworks, delivering optimal visual responsiveness.",
    tags: ["React Engine", "API Streaming", "Tailwind CSS", "UI/UX"],
    liveLink: "https://ai-chatbot-frontend-ten-woad.vercel.app/",
    codeLink: "https://github.com/muhammadhasnain3031/omni-ai"
  }
];

export default function Work() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={container}
      className="min-h-screen bg-[#f8fafc] pt-32 pb-24 px-6 md:px-12 font-sans"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div variants={item} className="inline-flex items-center text-[11px] font-extrabold tracking-widest uppercase text-[#185FA5] bg-[#E6F1FB] border border-sky-100/80 rounded-full px-5 py-2 mb-5">
          Production Portfolio
        </motion.div>
        <motion.h2 variants={item} className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight tracking-tight mb-4">
          Deployed <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] to-sky-500">
            Architectures.
          </span>
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            className="group bg-white p-8 rounded-3xl border border-[#e2e8f0] hover:border-sky-300 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(24,95,165,0.06)] flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-5">
                <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#185FA5] transition-colors leading-snug">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a href={project.codeLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0f172a] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#185FA5] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
              </div>
              <p className="text-[#64748b] text-sm leading-relaxed mb-8">{project.desc}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-extrabold uppercase tracking-wider text-[#185FA5] bg-[#E6F1FB] px-3 py-1.5 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}