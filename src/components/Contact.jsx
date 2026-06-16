import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "./PageWrapper";

export default function Contact() {
  const [charsLeft, setCharsLeft] = useState(400);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [agreed, setAgreed] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const validateForm = (data) => {
    const e = {};
    if (!data.name || data.name.trim().length < 3) e.name = "Please enter your full name (min 3 chars).";
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) e.email = "Please enter a valid email address.";
    if (!data.phone || data.phone.trim().length < 8) e.phone = "Please enter a valid phone number.";
    if (!data.message || data.message.trim().length < 10) e.message = "Please write a brief description of your project.";
    if (!agreed) e.privacy = "Please accept the privacy policy to continue.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setStatus("loading");
    const form = e.target;
    const rawData = { name: form.name.value, phone: form.phone.value, email: form.email.value, type: form.type.value, message: form.message.value };
    const formErrors = validateForm(rawData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setStatus("idle");
      return;
    }
    const formData = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/mnjywaja", { method: "POST", body: formData, headers: { Accept: "application/json" } });
      if (response.ok) {
        setStatus("success");
        form.reset();
        setCharsLeft(400);
        setAgreed(false);
        setTimeout(() => setStatus("idle"), 6000);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const inputBase = "w-full p-3.5 bg-[#f8fafc] border rounded-xl text-sm text-[#0a0f1e] outline-none transition-all focus:ring-4 focus:bg-white";
  const ok = "border-[#cbd5e1] focus:border-[#185FA5] focus:ring-[#B5D4F4]";
  const bad = "border-rose-400 focus:ring-rose-200";

  return (
    <PageWrapper className="min-h-screen bg-[#f8fafc] p-4 md:p-12 pt-28 md:pt-32 flex items-center justify-center font-sans selection:bg-blue-500/20">
      <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 md:p-12 w-full max-w-[620px] shadow-sm">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#d4af37] bg-[#0a0f1e] border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f5d061] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f5d061]"></span>
            </span>
            Available for new projects
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a0f1e] leading-[1.1] tracking-tight mb-3">
            Let's build<br /><span className="text-[#185FA5]">something great<span className="text-[#d4af37]">.</span></span>
          </h1>
          <p className="text-[#64748b] text-sm md:text-base leading-relaxed">Fill out the project inquiry form below, and I'll get back to you within 24 hours.</p>
        </div>

        <div className="h-[1px] bg-[#e2e8f0] mb-8"></div>

        <AnimatePresence>
          {status === "success" && (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium rounded-xl">
              Thank you! Your message has been sent successfully. I'll get back to you very soon.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm font-medium rounded-xl">
              Oops! Something went wrong. Please try again or connect via direct channels.
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Full Name</label>
              <input name="name" type="text" placeholder="Muhammad Ali" className={`${inputBase} ${errors.name ? bad : ok}`} />
              {errors.name && <span className="text-xs text-rose-500 font-medium">{errors.name}</span>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Phone Number</label>
              <input name="phone" type="tel" placeholder="+92 300 0000000" className={`${inputBase} ${errors.phone ? bad : ok}`} />
              {errors.phone && <span className="text-xs text-rose-500 font-medium">{errors.phone}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Email Address</label>
            <input name="email" type="email" placeholder="you@company.com" className={`${inputBase} ${errors.email ? bad : ok}`} />
            {errors.email && <span className="text-xs text-rose-500 font-medium">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Project Type</label>
            <select name="type" className={`${inputBase} ${ok} cursor-pointer`}>
              <option>Full-stack web app (MERN)</option>
              <option>Next.js 15 / TypeScript Architecture</option>
              <option>AI Integration (Groq / OpenAI API)</option>
              <option>SaaS Platform & WebRTC Implementation</option>
              <option>E-commerce Deployment</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Message Details</label>
            <textarea name="message" maxLength={400} onChange={(e) => setCharsLeft(400 - e.target.value.length)} placeholder="Describe your project specification, features, timeline, and approximate budget…" className={`${inputBase} ${errors.message ? bad : ok} h-32 resize-none`}></textarea>
            <div className="flex justify-between items-center mt-1">
              {errors.message ? <span className="text-xs text-rose-500 font-medium">{errors.message}</span> : <div></div>}
              <span className="text-[11px] text-[#94a3b8] font-medium tracking-wide">{charsLeft} characters remaining</span>
            </div>
          </div>

          {/* Privacy checkbox */}
          <div className="flex flex-col gap-1.5">
            <label className="flex items-start gap-3 cursor-pointer group">
              <button
                type="button"
                onClick={() => setAgreed(!agreed)}
                className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all flex-shrink-0 ${agreed ? "bg-[#185FA5] border-[#185FA5]" : "border-slate-300 group-hover:border-[#185FA5]"}`}
                aria-label="Accept privacy policy"
              >
                {agreed && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                )}
              </button>
              <span className="text-xs text-slate-600 font-medium leading-relaxed">
                I agree to the{" "}
                <button type="button" onClick={() => setShowPrivacy(true)} className="text-[#185FA5] font-bold underline underline-offset-2 hover:text-[#d4af37] transition-colors">
                  Privacy Policy
                </button>{" "}
                and consent to my details being used to respond to my inquiry.
              </span>
            </label>
            {errors.privacy && <span className="text-xs text-rose-500 font-medium ml-8">{errors.privacy}</span>}
          </div>

          <button type="submit" disabled={status === "loading"} className={`w-full py-4 rounded-xl text-[15px] font-bold flex items-center justify-center gap-2.5 transition-all duration-200 ${status === "success" ? "bg-emerald-500 text-white cursor-default" : "bg-[#185FA5] text-white hover:bg-[#0C447C] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"} disabled:opacity-60 disabled:pointer-events-none shadow-md shadow-slate-100`}>
            {status === "loading" && <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>}
            {status === "loading" && "Sending inquiry..."}
            {status === "success" && "Inquiry Sent Successfully ✓"}
            {status === "idle" && "Send message"}
            {status === "error" && "Submission Failed — Try Again"}
          </button>
        </form>

        {/* Channels */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-[1px] bg-[#e2e8f0]"></div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94a3b8]">or connect instantly via</span>
          <div className="flex-1 h-[1px] bg-[#e2e8f0]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <a href="https://wa.me/923000253031" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-2xl bg-[#f8fafc] hover:border-[#25D366] hover:bg-white transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#EAFCEF] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <svg width="20" height="20" fill="#25D366" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163A11.927 11.927 0 010 12.017C0 5.396 5.373 0 11.988 0a11.915 11.915 0 018.476 3.513 11.97 11.97 0 013.504 8.482c-.003 6.624-5.377 12.019-11.99 12.019a11.95 11.95 0 01-5.72-1.457L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
            </div>
            <div><div className="text-[14px] font-bold text-[#0a0f1e]">WhatsApp</div><div className="text-[11px] text-[#94a3b8] font-medium">+92 300 0253031</div></div>
          </a>

          <a href="https://linkedin.com/in/muhammad-hasnain-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-2xl bg-[#f8fafc] hover:border-[#0077B5] hover:bg-white transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#E6F4FC] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <svg width="18" height="18" fill="#0077B5" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </div>
            <div><div className="text-[14px] font-bold text-[#0a0f1e]">LinkedIn</div><div className="text-[11px] text-[#94a3b8] font-medium">muhammad-hasnain-dev</div></div>
          </a>

          <a href="https://www.upwork.com/freelancers/~01b39032bda8d8e806" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-2xl bg-[#f8fafc] hover:border-[#14A800] hover:bg-white transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#EEFCEB] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <svg width="20" height="20" fill="#14A800" viewBox="0 0 24 24"><path d="M18.561 2.314c-2.339 0-4.237 1.89-4.237 4.23v3.488c-1.18-.84-2.42-1.99-3.235-3.08h-.002V6.544c0-2.34-1.89-4.23-4.23-4.23-2.341 0-4.23 1.89-4.23 4.23v4.618c0 3.863 3.142 7.005 7.005 7.005.806 0 1.577-.14 2.302-.387l.456 2.385c.231 1.21.991 2.22 2.031 2.72.48.23 1.01.35 1.55.35 2.11 0 3.892-1.54 4.192-3.64l.942-6.551c.64.44 1.34.68 2.06.68 1.952 0 3.542-1.59 3.542-3.542V6.544c0-2.34-1.898-4.23-4.238-4.23z" /></svg>
            </div>
            <div><div className="text-[14px] font-bold text-[#0a0f1e]">Upwork</div><div className="text-[11px] text-[#94a3b8] font-medium">Freelance Profile</div></div>
          </a>

          <a href="https://www.fiverr.com/s/LdwzEE0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-2xl bg-[#f8fafc] hover:border-[#1DBF73] hover:bg-white transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#ECFAF3] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <svg width="34" height="34" fill="#1DBF73" viewBox="0 0 24 24"><path d="M16.2 6.3h-2.1v2.1h2.1V6.3z M16.2 9.9h-2.1v7.8h2.1V9.9z M12 6.3H9.9v3.6H8.1V6.3H6v9.9h2.1v-4.2h1.8v4.2H12V6.3z M19.2 9.9h-1.5V8.4h1.5v1.5z M19.2 11.4h-1.5v6.3h1.5v-6.3z" /></svg>
            </div>
            <div><div className="text-[14px] font-bold text-[#0a0f1e]">Fiverr</div><div className="text-[11px] text-[#94a3b8] font-medium">Explore Gigs</div></div>
          </a>
        </div>
      </div>

      {/* Privacy Modal */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShowPrivacy(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0a0f1e]/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-black text-[#0a0f1e]">Privacy Policy</h3>
                <button onClick={() => setShowPrivacy(false)} aria-label="Close" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" /></svg>
                </button>
              </div>
              <div className="space-y-3 text-xs text-slate-600 leading-relaxed font-medium max-h-[50vh] overflow-y-auto">
                <p>Your privacy matters. Here's how your information is handled when you contact me through this form:</p>
                <p><span className="font-bold text-[#0a0f1e]">What I collect:</span> Your name, email, phone number, project type, and message. These are submitted only when you send the form.</p>
                <p><span className="font-bold text-[#0a0f1e]">How it's used:</span> Solely to respond to your inquiry and discuss your project. I never sell or share your details with third parties.</p>
                <p><span className="font-bold text-[#0a0f1e]">Storage:</span> Submissions are processed through Formspree and reach me by email. They're kept only as long as needed to handle your request.</p>
                <p><span className="font-bold text-[#0a0f1e]">Your control:</span> You can ask me to delete your information at any time by emailing muhammadhasnain3031@gmail.com.</p>
              </div>
              <button
                onClick={() => { setAgreed(true); setShowPrivacy(false); }}
                className="mt-6 w-full py-3 rounded-xl bg-[#185FA5] text-white font-bold text-sm hover:bg-[#0c447c] transition-colors"
              >
                Accept & Continue
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}