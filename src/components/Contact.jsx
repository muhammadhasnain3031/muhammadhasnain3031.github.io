"use client";
import { useState } from 'react';

export default function Contact() {
  const [charsLeft, setCharsLeft] = useState(400);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  // Client-side quick validation helper
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name || data.name.trim().length < 3) {
      newErrors.name = "Please enter your full name (min 3 chars).";
    }
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!data.phone || data.phone.trim().length < 8) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!data.message || data.message.trim().length < 10) {
      newErrors.message = "Please write a brief description of your project.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setStatus('loading');

    const form = e.target;
    const rawData = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      type: form.type.value,
      message: form.message.value,
    };

    const formErrors = validateForm(rawData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setStatus('idle');
      return;
    }

    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mnjywaja", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setCharsLeft(400);
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-12 flex items-center justify-center font-sans selection:bg-blue-500/20">
      
      {/* Injecting CSS safely into Next.js */}
      <style>{`
        @keyframes customSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes customFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slide-up {
          animation: customSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-fade-in {
          animation: customFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      {/* Main Card with fixed animation class */}
      <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 md:p-12 w-full max-w-[620px] shadow-sm transition-all duration-300 hover:shadow-md animate-slide-up">
        
        {/* Top Feature Availability Badge */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#185FA5] bg-[#E6F1FB] border border-[#85B7EB] rounded-full px-4 py-1.5 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9E75]"></span>
            </span>
            Available for new projects
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-[1.1] tracking-tight mb-3">
            Let's build<br /><span className="text-[#185FA5]">something great.</span>
          </h1>
          <p className="text-[#64748b] text-sm md:text-base leading-relaxed">
            Fill out the project inquiry form below, and I will get back to your query within 24 hours.
          </p>
        </div>

        <div className="h-[1px] bg-[#e2e8f0] mb-8"></div>

        {/* Global Notifications Alert box */}
        {status === 'success' && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium rounded-xl animate-fade-in">
            Thank you! Your message has been sent successfully. I'll get back to you very soon.
          </div>
        )}
        {status === 'error' && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm font-medium rounded-xl animate-fade-in">
            Oops! Something went wrong while submitting. Please try again or connect via direct channels.
          </div>
        )}

        {/* Dynamic Project Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Full Name</label>
              <input name="name" type="text" placeholder="Muhammad Ali" className={`w-full p-3.5 bg-[#f8fafc] border ${errors.name ? 'border-rose-400 focus:ring-rose-200' : 'border-[#cbd5e1] focus:ring-[#B5D4F4]'} rounded-xl text-sm text-[#0f172a] outline-none transition-all focus:border-[#185FA5] focus:ring-4 focus:bg-white`} />
              {errors.name && <span className="text-xs text-rose-500 font-medium">{errors.name}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Phone Number</label>
              <input name="phone" type="tel" placeholder="+92 300 0000000" className={`w-full p-3.5 bg-[#f8fafc] border ${errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-[#cbd5e1] focus:ring-[#B5D4F4]'} rounded-xl text-sm text-[#0f172a] outline-none transition-all focus:border-[#185FA5] focus:ring-4 focus:bg-white`} />
              {errors.phone && <span className="text-xs text-rose-500 font-medium">{errors.phone}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Email Address</label>
            <input name="email" type="email" placeholder="you@company.com" className={`w-full p-3.5 bg-[#f8fafc] border ${errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-[#cbd5e1] focus:ring-[#B5D4F4]'} rounded-xl text-sm text-[#0f172a] outline-none transition-all focus:border-[#185FA5] focus:ring-4 focus:bg-white`} />
            {errors.email && <span className="text-xs text-rose-500 font-medium">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Project Architecture Type</label>
            <select name="type" className="w-full p-3.5 bg-[#f8fafc] border border-[#cbd5e1] rounded-xl text-sm text-[#0f172a] outline-none transition-all focus:border-[#185FA5] focus:ring-4 focus:ring-[#B5D4F4] focus:bg-white cursor-pointer">
              <option>Full-stack web app (MERN)</option>
              <option>Next.js 15 / TypeScript Architecture</option>
              <option>AI Integration (Groq / OpenAI API)</option>
              <option>SaaS Platform & WebRTC Implementation</option>
              <option>E-commerce Deployment</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Message Details</label>
            <textarea 
              name="message" 
              maxLength={400}
              onChange={(e) => setCharsLeft(400 - e.target.value.length)}
              placeholder="Describe your project specification, features, required timeline, and approximate budget allocation…" 
              className={`w-full p-3.5 bg-[#f8fafc] border ${errors.message ? 'border-rose-400 focus:ring-rose-200' : 'border-[#cbd5e1] focus:ring-[#B5D4F4]'} rounded-xl text-sm text-[#0f172a] h-32 resize-none outline-none transition-all focus:border-[#185FA5] focus:ring-4 focus:bg-white`}
            ></textarea>
            <div className="flex justify-between items-center mt-1">
              {errors.message ? <span className="text-xs text-rose-500 font-medium">{errors.message}</span> : <div></div>}
              <span className="text-[11px] text-[#94a3b8] font-medium tracking-wide">{charsLeft} characters remaining</span>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading'} 
            className={`w-full py-4 rounded-xl text-[15px] font-bold flex items-center justify-center gap-2.5 transition-all duration-200 ${
              status === 'success' 
                ? 'bg-[#1DBF73] text-white cursor-default' 
                : 'bg-[#185FA5] text-white hover:bg-[#0C447C] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]'
            } disabled:opacity-60 disabled:pointer-events-none shadow-md shadow-slate-100`}
          >
            {status === 'loading' && (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            )}
            {status === 'loading' && "Sending inquiry..."}
            {status === 'success' && "Inquiry Sent Successfully! ✓"}
            {status === 'idle' && "Send message"}
            {status === 'error' && "Submission Failed! Try Again"}
          </button>
        </form>

        {/* Segment Separator */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-[1px] bg-[#e2e8f0]"></div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94a3b8]">or connect instantly via</span>
          <div className="flex-1 h-[1px] bg-[#e2e8f0]"></div>
        </div>

        {/* 2x2 Genuine Professional Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          
          {/* WhatsApp */}
          <a href="https://wa.me/923000253031" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-2xl bg-[#f8fafc] hover:border-[#25D366] hover:bg-white transition-all duration-250 group">
            <div className="w-10 h-10 rounded-xl bg-[#EAFCEF] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
              <svg width="20" height="20" fill="#25D366" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163A11.927 11.927 0 010 12.017C0 5.396 5.373 0 11.988 0a11.915 11.915 0 018.476 3.513 11.97 11.97 0 013.504 8.482c-.003 6.624-5.377 12.019-11.99 12.019a11.95 11.95 0 01-5.72-1.457L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#0f172a] group-hover:text-[#1E9E49] transition-colors">WhatsApp</div>
              <div className="text-[11px] text-[#94a3b8] font-medium tracking-wide">+92 300 0253031</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/muhammad-hasnain-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-2xl bg-[#f8fafc] hover:border-[#0077B5] hover:bg-white transition-all duration-250 group">
            <div className="w-10 h-10 rounded-xl bg-[#E6F4FC] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
              <svg width="18" height="18" fill="#0077B5" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#0f172a] group-hover:text-[#005582] transition-colors">LinkedIn</div>
              <div className="text-[11px] text-[#94a3b8] font-medium tracking-wide">muhammad-hasnain-dev</div>
            </div>
          </a>

          {/* Upwork */}
          <a href="https://www.upwork.com/freelancers/~01b39032bda8d8e806" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-2xl bg-[#f8fafc] hover:border-[#14A800] hover:bg-white transition-all duration-250 group">
            <div className="w-10 h-10 rounded-xl bg-[#EEFCEB] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
              <svg width="20" height="20" fill="#14A800" viewBox="0 0 24 24">
                <path d="M18.561 2.314c-2.339 0-4.237 1.89-4.237 4.23v3.488c-1.18-.84-2.42-1.99-3.235-3.08h-.002V6.544c0-2.34-1.89-4.23-4.23-4.23-2.341 0-4.23 1.89-4.23 4.23v4.618c0 3.863 3.142 7.005 7.005 7.005.806 0 1.577-.14 2.302-.387l.456 2.385c.231 1.21.991 2.22 2.031 2.72.48.23 1.01.35 1.55.35 2.11 0 3.892-1.54 4.192-3.64l.942-6.551c.64.44 1.34.68 2.06.68 1.952 0 3.542-1.59 3.542-3.542V6.544c0-2.34-1.898-4.23-4.238-4.23zm-11.693 8.85c0 1.53-.19 2.17-.67 2.65-.48.48-1.13.67-2.65.67V6.544c0-.68.23-1.11.67-1.55.44-.44.87-.67 1.55-.67.68 0 1.11.23 1.55.67.44.44.67.87.67 1.55v4.621zm10.745 3.327c-.06.4-.23.75-.54 1.02-.31.27-.72.39-1.12.35-.4-.04-.75-.24-1.02-.55-.22-.26-.37-.58-.45-.92l.745-5.182c.24.17.51.3.8.37.28.08.58.09.86.04l-.27 3.87z" />
              </svg>
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#0f172a] group-hover:text-[#0F7C00] transition-colors">Upwork</div>
              <div className="text-[11px] text-[#94a3b8] font-medium tracking-wide">Freelance Profile</div>
            </div>
          </a>

          {/* Fiverr */}
          <a href="https://www.fiverr.com/s/LdwzEE0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-2xl bg-[#f8fafc] hover:border-[#1DBF73] hover:bg-white transition-all duration-250 group">
            <div className="w-10 h-10 rounded-xl bg-[#ECFAF3] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
              <svg width="34" height="34" fill="#1DBF73" viewBox="0 0 24 24">
                <path d="M16.2 6.3h-2.1v2.1h2.1V6.3z M16.2 9.9h-2.1v7.8h2.1V9.9z M12 6.3H9.9v3.6H8.1V6.3H6v9.9h2.1v-4.2h1.8v4.2H12V6.3z M19.2 9.9h-1.5V8.4h1.5v1.5z M19.2 11.4h-1.5v6.3h1.5v-6.3z" />
              </svg>
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#0f172a] group-hover:text-[#159358] transition-colors">Fiverr</div>
              <div className="text-[11px] text-[#94a3b8] font-medium tracking-wide">Explore Gigs</div>
            </div>
          </a>

        </div>

      </div>
    </div>
  );
}