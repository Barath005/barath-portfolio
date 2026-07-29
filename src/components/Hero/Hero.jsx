import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { scrollToSection } from "../../utils/scrollToSection";
import { useEffect, useState } from "react";

import AuroraBackground from "./AuroraBackground";
import MouseGlow from "./MouseGlow";
import ParticleBackground from "./Particles";

export default function Hero() {
  const { darkMode } = useTheme();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const updateTouchState = () => {
      setIsTouchDevice(mediaQuery.matches || window.innerWidth < 768);
    };

    updateTouchState();
    window.addEventListener("resize", updateTouchState);
    mediaQuery.addEventListener("change", updateTouchState);

    return () => {
      window.removeEventListener("resize", updateTouchState);
      mediaQuery.removeEventListener("change", updateTouchState);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-4 pb-10 pt-24 sm:min-h-screen sm:px-6 sm:pb-20 sm:pt-32"
    >
      {!isTouchDevice && <AuroraBackground />}
      {!isTouchDevice && <ParticleBackground />}
      {!isTouchDevice && <MouseGlow />}

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <motion.p
          initial={isTouchDevice ? false : { opacity: 0, y: 30 }}
          animate={isTouchDevice ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-cyan-400 sm:text-sm sm:tracking-[0.55em]"
        >
          Welcome
        </motion.p>

        <motion.h1
          initial={isTouchDevice ? false : { opacity: 0, y: 50 }}
          animate={isTouchDevice ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 flex flex-col items-center gap-1 text-[1.8rem] font-black leading-none sm:mt-5 sm:block sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl"
        >
          <span className="block leading-[1.05] sm:inline">Hi, I&apos;m</span>
          <span className="block leading-[1.05] sm:inline sm:ml-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Barath
          </span>
        </motion.h1>

        <div
          className={`mt-10 min-h-[120px] px-2 text-base sm:mt-8 sm:min-h-[48px] sm:px-0 sm:text-2xl md:text-3xl ${
            darkMode ? "text-gray-300" : "text-slate-600"
          }`}
        >
          <p className="mx-auto max-w-[16rem] font-semibold leading-relaxed text-cyan-400 sm:max-w-3xl">
            Angular Developer
            <span className="hidden sm:inline">
              {" "}
              • React Developer • Frontend Engineer
            </span>
            <span className="block sm:hidden">React Developer</span>
            <span className="block sm:hidden">Frontend Engineer</span>
          </p>
        </div>

        <motion.p
          initial={isTouchDevice ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`mx-auto mt-6 max-w-xl text-sm leading-6 sm:mt-10 sm:max-w-2xl sm:text-lg sm:leading-7 ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          Building enterprise applications using Angular, React, TypeScript and
          modern frontend technologies.
        </motion.p>

        <motion.div
          initial={isTouchDevice ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex flex-col justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-6"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 transition hover:scale-105 sm:px-8 sm:py-4"
          >
            View Projects
          </button>

          <a
            href="/resume/barath_resume.pdf"
            download="barath_resume.pdf"
            className={`rounded-full border px-6 py-3.5 backdrop-blur-lg transition sm:px-8 sm:py-4 ${
              darkMode
                ? "border-white/20 bg-white/10 hover:bg-white/20"
                : "border-slate-300 bg-white/80 hover:bg-white"
            }`}
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
