import { motion } from "framer-motion";
import RouteTransition from "./RouteTransition";

// Page wrapper: shows the light-blue sweep on route change + content fade/slide in.
const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

export default function PageWrapper({ children, className = "" }) {
  return (
    <>
      <RouteTransition />
      <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className={className}>
        {children}
      </motion.div>
    </>
  );
}