import { motion } from "framer-motion";

// A premium 2-layer light-blue sweep shown on every route change.
// Layers slide DOWN and out, with a soft rounded edge for an elegant feel.
export default function RouteTransition() {
  return (
    <>
      {/* Lighter sky layer (leads) */}
      <motion.div
        className="fixed inset-0 z-[90] bg-gradient-to-b from-sky-300 to-[#7cc0f0] pointer-events-none"
        style={{ borderBottomLeftRadius: "40% 12%", borderBottomRightRadius: "40% 12%" }}
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        exit={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
      />
      {/* Brand blue layer (follows) */}
      <motion.div
        className="fixed inset-0 z-[91] bg-gradient-to-b from-[#3b8fd4] to-[#185FA5] pointer-events-none"
        style={{ borderBottomLeftRadius: "40% 12%", borderBottomRightRadius: "40% 12%" }}
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        exit={{ y: 0 }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
      />
    </>
  );
}