import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Professional SVG Icons
const IconLinkedin = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const IconMail = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
const IconMap = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-sky-50 overflow-x-hidden pt-20">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-blue-600 font-bold text-xs uppercase shadow-sm border border-sky-100">
            Available for Elite Contracts
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            Hi, I'm <br /><span className="text-blue-600">Muhammad Hasnain</span>
          </h1>
          <p className="text-2xl font-bold text-slate-600">Lead Architect & Full-Stack Developer</p>
          <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
            Full-Stack Engineer specialized in Next.js 15, MERN Stack, and AI integrations. Building high-performance digital products that drive business growth.
          </p>
          <div className="flex gap-4 pt-4">
            <Link to="/Work" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-200">Explore Work</Link>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex justify-center">
          <div className="w-80 h-96 bg-white p-4 rounded-[3rem] shadow-2xl rotate-3 border-4 border-white">
            <img src="/profile.png" alt="Muhammad Hasnain" className="w-full h-full object-cover rounded-[2rem]" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 py-12">
        {[
          { label: "Core Stack", value: "MERN + AI" },
          { label: "Architecture", value: "Multi-Tenant" },
          { label: "Deployment", value: "Vercel" },
          { label: "Experience", value: "Full-Stack" }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white border border-sky-100 rounded-3xl shadow-sm hover:border-blue-300 transition-all">
            <p className="text-xs text-blue-400 font-bold uppercase">{item.label}</p>
            <p className="text-xl font-black mt-2 text-slate-800">{item.value}</p>
          </div>
        ))}
      </section>

      {/* Footer / Contact */}
      <footer className="border-t border-sky-100 py-16 bg-white/50 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h4 className="text-2xl font-black text-slate-900">Muhammad Hasnain</h4>
            <p className="text-slate-500 font-medium">Software Architect & Developer</p>
          </div>
          <div className="flex gap-8 text-blue-600 font-bold">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="flex items-center gap-2 hover:text-blue-800"><IconLinkedin /> LinkedIn</a>
            <a href="mailto:your@email.com" className="flex items-center gap-2 hover:text-blue-800"><IconMail /> Email</a>
            <div className="flex items-center gap-2 text-slate-600"><IconMap /> Sargodha, Punjab, Pakistan</div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}