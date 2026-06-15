import React from "react";

export default function Skill() {
  const skillCategories = [
    {
      category: "Frontend Architecture",
      description: "Crafting highly performant, type-safe, and pixel-perfect user interfaces.",
      skills: [
        { name: "Next.js 15", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "React.js", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML5 / CSS3", level: "Expert" }
      ],
      bgColor: "bg-blue-50/50",
      borderColor: "border-blue-100"
    },
    {
      category: "Backend & Databases",
      description: "Building scalable, secure APIs and optimizing complex data flows.",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Expert" },
        { name: "MongoDB", level: "Advanced" },
        { name: "RESTful APIs", level: "Expert" }
      ],
      bgColor: "bg-sky-50/40",
      borderColor: "border-sky-100"
    },
    {
      category: "Next-Gen & SaaS Features",
      description: "Integrating smart artificial intelligence and real-time communication systems.",
      skills: [
        { name: "AI Integration (Groq / OpenAI)", level: "Advanced" },
        { name: "WebRTC Real-time Audio/Video", level: "Intermediate" },
        { name: "SaaS Architecture", level: "Advanced" },
        { name: "State Management (Redux/Zustand)", level: "Advanced" }
      ],
      bgColor: "bg-[#E6F1FB]/40",
      borderColor: "border-blue-200/60"
    }
  ];

  return (
    <>
      {/* Pure CSS Smooth Smooth Cascade Animations */}
      <style>{`
        @keyframes skillFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-skill {
          animation: skillFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      <div className="min-h-screen bg-[#f8fafc] pt-32 pb-16 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mb-16 animate-skill">
          <div className="inline-flex items-center text-[11px] font-extrabold tracking-widest uppercase text-[#185FA5] bg-[#E6F1FB] border border-sky-100/80 rounded-full px-5 py-2 mb-5">
            My Toolbox
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight tracking-tight mb-6">
            Technical Tech Stack & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] to-sky-500">
              Expertise Capabilities.
            </span>
          </h1>
          <p className="text-[#64748b] text-base md:text-lg leading-relaxed">
            A comprehensive overview of the frameworks, libraries, and advanced engineering concepts I specialize in.
          </p>
        </div>

        {/* Categories Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl animate-skill" style={{ animationDelay: '0.1s' }}>
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className={`bg-white border border-[#e2e8f0] hover:border-sky-300 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(24,95,165,0.05)] transition-all duration-300 flex flex-col`}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">{cat.category}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{cat.description}</p>
              </div>

              <div className="h-[1px] bg-slate-100 mb-6"></div>

              {/* Badges Flow Container */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className={`group flex items-center justify-between gap-4 px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-[#E6F1FB] hover:border-sky-200 w-full transition-all duration-200`}
                  >
                    <span className="text-sm font-bold text-slate-700 group-hover:text-[#185FA5] transition-colors">
                      {skill.name}
                    </span>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-md ${
                      skill.level === "Expert" ? "bg-emerald-50 text-emerald-700" :
                      skill.level === "Advanced" ? "bg-blue-50 text-[#185FA5]" : "bg-amber-50 text-amber-700"
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Quote */}
        <div className="mt-16 text-center animate-skill max-w-xl" style={{ animationDelay: '0.2s' }}>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Core Philosophy</p>
          <p className="text-sm text-slate-500 italic leading-relaxed">
            "Writing clean, modular code and implementing scalable system design is not just a practice—it's a commitment to efficiency."
          </p>
        </div>

      </div>
    </>
  );
}