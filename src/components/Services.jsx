import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const servicesList = [
    {
      title: "Full-Stack Web Apps",
      description: "Building production-ready applications using Next.js 15, TypeScript, and the robust MERN Stack with optimized performance.",
      icon: (
        <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      tag: "Next.js 15 & MERN"
    },
    {
      title: "SaaS & WebRTC Architecture",
      description: "Designing scalable Software-as-a-Service platforms integrated with real-time video/audio communication capabilities.",
      icon: (
        <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      tag: "Real-Time & Scale"
    },
    {
      title: "AI Integration & Automation",
      description: "Embedding smart AI functionalities, LLMs, and lightning-fast inference pipelines using Groq AI and OpenAI APIs.",
      icon: (
        <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      tag: "Groq & LLMs"
    },
    {
      title: "Responsive UI/UX Development",
      description: "Crafting beautiful, pixel-perfect, and ultra-responsive custom landing pages and frontends utilizing Tailwind CSS.",
      icon: (
        <svg className="w-6 h-6 text-[#185FA5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M4 13h16" />
        </svg>
      ),
      tag: "Tailwind CSS"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes pageFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-page {
          animation: pageFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      <div className="min-h-screen bg-[#f8fafc] pt-32 pb-16 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mb-16 animate-page">
          <div className="inline-flex items-center text-[11px] font-extrabold tracking-widest uppercase text-[#185FA5] bg-[#E6F1FB] border border-sky-100/80 rounded-full px-5 py-2 mb-5">
            What I Offer
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight tracking-tight mb-6">
            Premium Services for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] to-sky-500">
              Modern Tech Solutions.
            </span>
          </h1>
          <p className="text-[#64748b] text-base md:text-lg leading-relaxed">
            I design, architect, and deploy robust full-stack applications with elegant visual design and seamless custom features.
          </p>
        </div>

        {/* Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl animate-page" style={{ animationDelay: '0.1s' }}>
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white border border-[#e2e8f0] hover:border-sky-200 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(24,95,165,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header elements inside card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6F1FB] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-bold text-[#185FA5] bg-sky-50 px-3 py-1 rounded-md">
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#185FA5] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#64748b] text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Decorative Subtle Arrow Indicator */}
              <div className="flex items-center text-xs font-bold text-[#185FA5] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                Learn More <span className="ml-1">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center animate-page" style={{ animationDelay: '0.2s' }}>
          <p className="text-sm text-slate-500 font-medium mb-4">Have a highly tailored architecture requirement?</p>
          <Link 
            to="/Contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#185FA5] hover:bg-[#0c447c] text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-[#185FA5]/10 hover:shadow-xl hover:shadow-[#185FA5]/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            Let's build a custom solution
          </Link>
        </div>

      </div>
    </>
  );
}