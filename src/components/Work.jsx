import React from "react";

export default function Work() {
  const projects = [
    {
      title: "MediCare Pro — Multi-Tenant Hospital SaaS",
      desc: "An enterprise-grade Multi-Tenant Hospital Management System with 8 specialized roles (RBAC). Features include AI-assisted prescriptions using Groq AI (LLaMA 3.3), an AI Drug Interaction Checker with 4 severity levels, and real-time WebRTC peer-to-peer video consultations.",
      tags: ["Next.js 15", "TypeScript", "Groq AI", "WebRTC", "MongoDB"],
      liveLink: "https://medicare-pro-green.vercel.app/",
    },
    {
      title: "SmileCare — Premium Dental Center Platform",
      desc: "A production-ready clinic application featuring 17 statically generated medical specialty pages with dynamic pricing tiers. Includes advanced JSON-LD medical SEO structures, a 3-step appointment booking validation pipeline via React Hook Form & Zod, and custom SVG data architectures.",
      tags: ["Next.js 14", "TypeScript", "Zod", "Tailwind CSS", "SEO"],
      liveLink: "https://smilecare-dental-three.vercel.app/",
    },
    {
      title: "Sultan Elite — Full-Stack MERN E-Commerce",
      desc: "A high-performance online shopping platform featuring full customer lifecycles (wishlists, dynamic carts, advanced search/filtering). Packed with a heavy Admin Dashboard for order management, real-time inventory stock metrics, and Cloudinary-integrated multi-image file processing.",
      tags: ["React 19", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
      liveLink: "https://mern-ecommerce-platform-fui5.vercel.app/",
    },
    {
      title: "Social AI Engine Platform",
      desc: "An automated modern SaaS platform tailored for instant social media content creation workflows and AI-driven automated communication funnels. Built with fluid interface mechanics to offer high-speed inference processing.",
      tags: ["React", "AI Integration", "Tailwind CSS", "SaaS UI"],
      liveLink: "https://social-ai-frontend-xi.vercel.app/",
    },
    {
      title: "Omni AI Chatbot Hub",
      desc: "A clean, low-latency conversational user environment engineered for continuous LLM token streaming responses and custom contextual interaction frameworks, delivering optimal visual responsiveness.",
      tags: ["React Engine", "API Streaming", "Tailwind CSS", "UI/UX"],
      liveLink: "https://ai-chatbot-frontend-ten-woad.vercel.app/",
    }
  ];

  return (
    <>
      {/* Pure Premium Cascade Micro-Animations */}
      <style>{`
        @keyframes workFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-work {
          animation: workFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      <div className="min-h-screen bg-[#f8fafc] pt-32 pb-16 px-6 md:px-12 font-sans">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-work">
          <div className="inline-flex items-center text-[11px] font-extrabold tracking-widest uppercase text-[#185FA5] bg-[#E6F1FB] border border-sky-100/80 rounded-full px-5 py-2 mb-5">
            Case Studies
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight tracking-tight mb-4">
            Production Work & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] to-sky-500">
              Deployed Architectures.
            </span>
          </h2>
          <p className="text-[#64748b] text-base md:text-lg">
            Real-world decentralized platforms, full-stack ecosystems, and smart AI integrations.
          </p>
        </div>

        {/* Dynamic Project Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-work" style={{ animationDelay: '0.1s' }}>
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-8 rounded-3xl border border-[#e2e8f0] hover:border-sky-300 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(24,95,165,0.06)] flex flex-col justify-between"
            >
              <div>
                {/* Header elements inside card */}
                <div className="flex justify-between items-start gap-4 mb-5">
                  <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#185FA5] transition-colors duration-200 leading-snug">
                    {project.title}
                  </h3>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-[#E6F1FB] flex items-center justify-center text-slate-400 group-hover:text-[#185FA5] font-semibold transition-all duration-300 shadow-sm"
                  >
                    ↗
                  </a>
                </div>
                
                <p className="text-[#64748b] text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>
              </div>

              {/* Badges Layout Flow */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-50">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[10px] font-extrabold uppercase tracking-wider text-[#185FA5] bg-[#E6F1FB] px-3 py-1.5 rounded-lg border border-sky-100/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}