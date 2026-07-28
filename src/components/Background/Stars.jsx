import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Stars({ darkMode = true }) {
  const stars = useMemo(
    () =>
      Array.from({ length: 140 }, (_, index) => ({
        id: index,
        size: Math.random() * 2.4 + 0.8,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.35 + 0.18,
      })),
    []
  );

  return (
    <>
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className={`absolute rounded-full ${
            darkMode ? "bg-white" : "bg-slate-500"
          }`}
          style={{
            width: star.size,
            height: star.size,
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
            boxShadow: darkMode
              ? "0 0 10px rgba(255,255,255,0.25)"
              : "0 0 8px rgba(71,85,105,0.18)",
          }}
          animate={{
            opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5],
            scale: [1, 1.45, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: star.duration,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
