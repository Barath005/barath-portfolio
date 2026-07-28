import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import Stars from "./Stars";

const shootingStars = [
  { top: "18%", left: "8%", delay: 0, duration: 2.8, size: 220 },
  { top: "28%", left: "58%", delay: 4.5, duration: 3.2, size: 260 },
  { top: "12%", left: "72%", delay: 9, duration: 3, size: 200 },
];

const reflections = [
  { top: "16%", left: "12%", width: 280, height: 180, rotate: -12 },
  { top: "44%", right: "10%", width: 360, height: 220, rotate: 16 },
  { bottom: "10%", left: "28%", width: 320, height: 200, rotate: -8 },
];

export default function Background() {
  const { darkMode } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(0, { stiffness: 28, damping: 20, mass: 1.4 });
  const parallaxY = useSpring(0, { stiffness: 28, damping: 20, mass: 1.4 });

  useEffect(() => {
    const syncViewport = () => {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    };

    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      const normalizedX = event.clientX / window.innerWidth - 0.5;
      const normalizedY = event.clientY / window.innerHeight - 0.5;

      parallaxX.set(normalizedX * 18);
      parallaxY.set(normalizedY * 12);
    };

    syncViewport();
    window.addEventListener("resize", syncViewport);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", syncViewport);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, parallaxX, parallaxY]);

  const mouseGlow = darkMode
    ? useMotionTemplate`radial-gradient(320px at ${mouseX}px ${mouseY}px, rgba(56,189,248,0.12), transparent 72%),
      radial-gradient(240px at ${mouseX}px ${mouseY}px, rgba(168,85,247,0.06), transparent 68%)`
    : useMotionTemplate`radial-gradient(260px at ${mouseX}px ${mouseY}px, rgba(14,165,233,0.08), transparent 72%),
      radial-gradient(220px at ${mouseX}px ${mouseY}px, rgba(99,102,241,0.04), transparent 68%)`;

  const gridColor = darkMode
    ? "rgba(255,255,255,0.08)"
    : "rgba(15,23,42,0.06)";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          darkMode
            ? "bg-[radial-gradient(circle_at_top,#0b1120_0%,#050816_48%,#02030a_100%)]"
            : "bg-[radial-gradient(circle_at_top,#f8fbff_0%,#eef4ff_45%,#e2ebf7_100%)]"
        }`}
      />

      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ x: parallaxX, y: parallaxY }}
      >
        <motion.div
          animate={{
            x: [0, 120, -90, 0],
            y: [0, -60, 90, 0],
            scale: [1, 1.12, 0.96, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -left-32 -top-40 h-[620px] w-[620px] rounded-full blur-[170px] ${
            darkMode ? "bg-cyan-500/18" : "bg-sky-300/35"
          }`}
        />

        <motion.div
          animate={{
            x: [0, -160, 110, 0],
            y: [0, 120, -70, 0],
            scale: [1.12, 0.96, 1.08, 1.12],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute bottom-[-220px] right-[-140px] h-[720px] w-[720px] rounded-full blur-[190px] ${
            darkMode ? "bg-fuchsia-500/16" : "bg-violet-300/30"
          }`}
        />

        <motion.div
          animate={{
            x: [0, 90, -130, 0],
            y: [0, -110, 70, 0],
            scale: [0.94, 1.08, 1, 0.94],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute left-1/2 top-[22%] h-[540px] w-[540px] -translate-x-1/2 rounded-full blur-[160px] ${
            darkMode ? "bg-blue-500/14" : "bg-cyan-200/28"
          }`}
        />
      </motion.div>

      <div
        className="absolute inset-0 opacity-60 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0.4) 60%, transparent 100%)",
        }}
      />

      <motion.div className="absolute inset-0" style={{ background: mouseGlow }} />

      <motion.div className="absolute inset-0" style={{ x: parallaxX, y: parallaxY }}>
        <Stars darkMode={darkMode} />
      </motion.div>

      {shootingStars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: 2,
            rotate: "-22deg",
            background: darkMode
              ? "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.95), rgba(56,189,248,0))"
              : "linear-gradient(90deg, rgba(255,255,255,0), rgba(14,165,233,0.75), rgba(255,255,255,0))",
            boxShadow: darkMode
              ? "0 0 22px rgba(56,189,248,0.45)"
              : "0 0 18px rgba(14,165,233,0.25)",
          }}
          animate={{
            x: [-40, 420],
            y: [-10, 170],
            opacity: [0, 0, 0.95, 0.7, 0],
            scaleX: [0.4, 0.4, 1, 1, 0.75],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
        />
      ))}

      <div className="absolute inset-0">
        {reflections.map((reflection, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-[40px] border backdrop-blur-3xl ${
              darkMode
                ? "border-white/8 bg-white/4"
                : "border-white/40 bg-white/25"
            }`}
            style={{
              ...reflection,
              boxShadow: darkMode
                ? "0 0 90px rgba(148,163,184,0.07)"
                : "0 0 80px rgba(148,163,184,0.10)",
            }}
            animate={{
              x: [0, 20, -10, 0],
              y: [0, -12, 16, 0],
              opacity: darkMode ? [0.12, 0.2, 0.14] : [0.08, 0.14, 0.1],
            }}
            transition={{
              duration: 12 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-[radial-gradient(circle_at_center,transparent_45%,rgba(2,6,23,0.32)_100%)]"
            : "bg-[radial-gradient(circle_at_center,transparent_35%,rgba(255,255,255,0.18)_100%)]"
        }`}
      />
    </div>
  );
}
