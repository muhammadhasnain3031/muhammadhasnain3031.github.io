import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/Services" },
    { name: "Skills", path: "/Skill" },
    { name: "Work", path: "/Work" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-4 right-4 md:left-6 md:right-6 z-50 flex items-center justify-between gap-4 pl-3 pr-3 py-2.5 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-[#0b1437]/90 shadow-[0_8px_40px_rgba(11,20,55,0.5)]"
            : "bg-[#0b1437]/70 shadow-[0_8px_30px_rgba(11,20,55,0.3)]"
        } backdrop-blur-2xl border border-cyan-300/15`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0" onClick={() => setOpen(false)}>
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-[#2563eb] to-[#1e3a8a] flex items-center justify-center shadow-lg shadow-cyan-500/30 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 overflow-hidden">
            <span className="font-extrabold text-white text-lg tracking-tight relative z-10">MH</span>
            <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#f5d061] animate-pulse z-10" />
          </div>
          <div className="leading-none hidden sm:block">
            <div className="font-extrabold text-[15px] text-white tracking-tight">
              Hasnain<span className="text-[#f5d061]">.</span>
            </div>
            <div className="text-[9px] font-semibold text-cyan-300/70 tracking-[0.18em] uppercase">Developer</div>
          </div>
        </Link>

        {/* Desktop Links (centered, takes available space) */}
        <div className="hidden md:flex items-center gap-1 mx-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2563eb] to-cyan-500 shadow-lg shadow-cyan-500/30 -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Hire Me + Hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/Contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-[#f5d061] to-[#e0b93c] text-[#0b1437] text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-[#f5d061]/40 transition-all hover:scale-105 active:scale-95 group whitespace-nowrap"
          >
            <span>Hire Me</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0b1437] group-hover:scale-150 transition-transform" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white border border-cyan-300/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-20 left-4 right-4 z-50 bg-[#0b1437]/95 backdrop-blur-2xl border border-cyan-300/15 rounded-2xl shadow-2xl p-3 flex flex-col gap-1"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive ? "bg-gradient-to-r from-[#2563eb] to-cyan-500 text-white" : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/Contact"
              onClick={() => setOpen(false)}
              className="mt-1 px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-[#f5d061] to-[#e0b93c] text-[#0b1437] text-center"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;