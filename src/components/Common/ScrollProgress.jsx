import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 origin-left z-[100] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
      style={{
        scaleX: scrollYProgress,
        width: "100%",
      }}
    />
  );
}