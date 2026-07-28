import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-20">

      <motion.div
        animate={{
          x: [0, 120, -120, 0],
          y: [0, -80, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] rounded-full top-[-200px] left-[-150px]"
      />

      <motion.div
        animate={{
          x: [0, -180, 120, 0],
          y: [0, 120, -80, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
        }}
        className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[160px] rounded-full bottom-[-250px] right-[-200px]"
      />

    </div>
  );
}