import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// System prompt: keeps the agent grounded to real facts about Muhammad,
// so it never invents projects, numbers, or claims on his behalf.
const SYSTEM_PROMPT = `You are the AI assistant embedded on Muhammad Hasnain's portfolio site, speaking to recruiters and visitors on his behalf. Answer only using the facts below. Be concise (2-4 sentences), honest, and direct — never invent projects, numbers, or experience beyond this.

ABOUT MUHAMMAD:
- MERN Stack & Next.js developer, Backend AI Engineering focus, based in Sargodha, Punjab, Pakistan.
- 7+ independently deployed full-stack projects.
- Balances a government technical role (Junior Technician, Grade 9, Health & Population Welfare Dept, Punjab, since 2021) with freelance development (Fiverr/Upwork, since Jan 2025) and open-source contribution.

KEY PROJECTS:
- MediCare Pro: multi-tenant hospital SaaS, Next.js/TypeScript/MongoDB, 8 role-based dashboards, Groq AI for prescription support and a role-aware chatbot, WebRTC telemedicine, Twilio notifications.
- SmileCare: Next.js dental clinic platform, 17 specialty pages, dynamic pricing, JSON-LD medical SEO.
- Sultan Elite / MERN E-Commerce: full MERN shopping platform, admin dashboard, Cloudinary multi-image processing, Redux Toolkit.
- Social AI Engine Platform: SaaS for automated social content creation and AI-driven communication workflows.
- Omni AI Chatbot Hub: low-latency conversational UI built for streaming LLM token responses.
- a2-tasks-api: Dockerized Node.js/Express/PostgreSQL task API with a Groq summarization endpoint and async PDF report generation — built for the FlyRank AI Internship.
- Open source: merged PR to EGC (LLM orchestration engine) adding OpenRouter model routing, plus Arabic/Hindi README translations.

SKILLS: Node.js, Express, REST APIs, JWT auth, Socket.io, Docker, MongoDB, PostgreSQL, Groq AI API, OpenAI API, Cloudinary, Twilio, React, Next.js, TypeScript, Tailwind CSS, Redux Toolkit.

EDUCATION: MERN Stack training, PNY Trainings Sargodha (2025-2026). B.A., University of Sargodha (2021).

CONTACT: muhammadhusnain3031@gmail.com, linkedin.com/in/muhammad-hasnain-dev, github.com/muhammadhasnain3031, WhatsApp +92 300 0253031.

If asked something outside these facts (availability, rates, salary expectations), say you don't have that info and point them to the Contact page or email.`;

export default function ChatAgent() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, loading]);

  const openPanel = () => {
    setOpen(true);
    if (messages.length === 0) {
      setMessages([{ role: "assistant", content: "Hi — I'm Muhammad's assistant. Ask me about his projects, stack, or experience." }]);
    }
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ system: SYSTEM_PROMPT, messages: next.slice(-10) }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((m) => [...m, { role: "assistant", content: "Sorry, I couldn't reach the agent right now — email muhammadhusnain3031@gmail.com directly." }]);
      }
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Connection issue — try again in a moment." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={openPanel}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI assistant"
        className="fixed bottom-5 right-5 z-[95] flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#f5d061] to-[#e0b93c] text-[#0b1437] font-black text-sm shadow-lg shadow-[#f5d061]/30 hover:shadow-xl transition-shadow"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0b1437] opacity-60"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0b1437]"></span>
        </span>
        Ask my AI agent
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-5 z-[95] w-[92vw] max-w-[360px] h-[460px] max-h-[70vh] bg-[#0b1437]/95 backdrop-blur-2xl border border-cyan-300/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-cyan-300/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold text-slate-300 tracking-wide">hasnain-agent · groq</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-[#f5d061] hover:bg-white/5 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" /></svg>
              </button>
            </div>

            <div ref={logRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${m.role === "user" ? "ml-auto bg-gradient-to-r from-[#2563eb] to-cyan-500 text-white rounded-br-sm" : "bg-white/5 border border-cyan-300/10 text-slate-200 rounded-bl-sm"}`}>
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="max-w-[70%] px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-white/5 border border-cyan-300/10 text-slate-400 text-xs font-medium">
                  thinking...
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 p-3 border-t border-cyan-300/10">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about a project or stack..."
                className="flex-1 bg-white/5 border border-cyan-300/15 rounded-xl px-3.5 py-2.5 text-[13px] text-white placeholder:text-slate-500 outline-none focus:border-cyan-400 transition-colors"
              />
              <button
                onClick={send}
                disabled={loading}
                aria-label="Send"
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#f5d061] to-[#e0b93c] text-[#0b1437] disabled:opacity-50 transition-opacity"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
