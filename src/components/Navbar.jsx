import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/Services" },
    { name: "Skills", path: "/Skill" },
    { name: "Work", path: "/Work" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <>
      {/* Smooth Global Keyframe Animations */}
      <style>{`
        @keyframes navReveal {
          from { opacity: 0; transform: translateY(-15px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-nav {
          animation: navReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      <nav className="fixed top-4 left-4 right-4 z-50 md:left-8 md:right-8 bg-white/70 backdrop-blur-xl border border-sky-100/60 rounded-2xl shadow-[0_10px_30px_rgba(24,95,165,0.05)] px-6 py-3.5 flex items-center justify-between animate-nav transition-all duration-300">
        
        {/* Animated Brand Logo */}
        <Link to="/" className="group text-2xl font-black tracking-tighter text-[#0f172a] flex items-center gap-1">
          <span className="bg-gradient-to-r from-[#185FA5] to-sky-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">MH</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5] group-hover:translate-y-[-4px] transition-transform duration-300"></span>
        </Link>

        {/* Desktop Links with Slide Underline Effect */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${
                  isActive 
                    ? "text-[#185FA5] bg-[#E6F1FB]" 
                    : "text-slate-600 hover:text-[#185FA5] hover:bg-sky-50/50"
                }`}
              >
                {link.name}
                {/* Micro-interaction Line */}
                <span className={`absolute bottom-1 left-4 right-4 h-[2px] bg-[#185FA5] rounded-full transition-all duration-300 origin-center ${
                  isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100"
                }`} />
              </Link>
            );
          })}
        </div>

        {/* Action Button: Hire Me */}
        <div className="hidden md:block">
          <Link 
            to="/Contact"
            className="px-5 py-2.5 bg-[#185FA5] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-[#0c447c] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-[#185FA5]/10 hover:shadow-lg hover:shadow-[#185FA5]/20"
          >
            Hire Me
          </Link>
        </div>

        {/* Advanced Mobile Hamburger Trigger */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-xl bg-sky-50/80 hover:bg-[#E6F1FB] transition-colors gap-1.5 outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`h-0.5 w-5 rounded-full bg-[#0f172a] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 bg-[#185FA5]" : ""}`} />
          <span className={`h-0.5 w-5 rounded-full bg-[#0f172a] transition-all duration-300 ${isOpen ? "opacity-0 scale-0" : ""}`} />
          <span className={`h-0.5 w-5 rounded-full bg-[#0f172a] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2 bg-[#185FA5]" : ""}`} />
        </button>

        {/* Pure CSS Smooth Sliding Mobile Drawer */}
        <div className={`absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-2xl p-6 rounded-2xl border border-sky-100/80 shadow-xl flex flex-col gap-3 md:hidden transition-all duration-300 origin-top ${
          isOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className={`p-3.5 rounded-xl text-base font-bold transition-all ${
                  isActive ? "bg-[#E6F1FB] text-[#185FA5]" : "text-slate-700 hover:bg-sky-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link 
            to="/Contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full py-4 bg-[#185FA5] text-white text-center font-bold rounded-xl shadow-lg shadow-[#185FA5]/10"
          >
            Hire Me
          </Link>
        </div>

      </nav>
    </>
  );
};

export default Navbar;