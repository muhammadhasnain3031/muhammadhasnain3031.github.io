import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/Services" },
    { name: "Skills", path: "/Skill" },
    { name: "Work", path: "/Work" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 md:left-6 md:right-6 z-50 flex items-center justify-between pl-3 pr-3 md:pl-4 md:pr-4 py-2.5 bg-white/70 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-[0_8px_40px_rgb(2,8,40,0.12)] animate-[fadeDown_0.7s_cubic-bezier(0.22,1,0.36,1)_both]">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center shadow-lg shadow-blue-900/20 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
            <span className="font-extrabold text-white text-lg tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>MH</span>
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </div>
          <div className="leading-none">
            <div className="font-extrabold text-[15px] text-slate-900 tracking-tight">
              Hasnain<span className="text-amber-500">.</span>
            </div>
            <div className="text-[9px] font-semibold text-slate-400 tracking-[0.18em] uppercase">
              Developer
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-0.5 bg-slate-100/50 rounded-xl p-1 border border-slate-200/50">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/25"
                    : "text-slate-600 hover:text-blue-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Hire Me + Hamburger */}
        <div className="flex items-center gap-2">
          <Link
            to="/Contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 group"
          >
            <span>Hire Me</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-150 transition-transform" />
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed top-20 left-4 right-4 z-50 bg-white/90 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-2xl p-3 flex flex-col gap-1 animate-[fadeDown_0.3s_ease-out_both]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                    : "text-slate-600 hover:bg-sky-100/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/Contact"
            onClick={() => setOpen(false)}
            className="mt-1 px-4 py-3 rounded-xl text-sm font-bold bg-slate-900 text-white text-center"
          >
            Hire Me
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;