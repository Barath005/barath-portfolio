import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ScrollProgress from "./components/Common/ScrollProgress";
import BackToTop from "./components/Common/BackToTop";
import Loader from "./components/Common/Loader";
import Experience from "./components/Experience/Experience";
import Cursor from "./components/Cursor/Cursor";
import { useTheme } from "./context/ThemeContext";
import Background from "./components/Background/Background";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {
  const { darkMode } = useTheme();
  const [loading, setLoading] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const finishLoading = () => {
      window.setTimeout(() => {
        if (!cancelled) {
          setLoading(false);
        }
      }, 700);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", finishLoading);
    };
  }, []);

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
    <div
      className={
        darkMode
          ? "relative min-h-screen overflow-x-hidden bg-[#030712] text-white transition-colors duration-500"
          : "relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-500"
      }
    >
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!isTouchDevice && <Background />}
      {isTouchDevice && (
        <div
          className={`fixed inset-0 z-0 ${
            darkMode
              ? "bg-[radial-gradient(circle_at_top,#0b1120_0%,#050816_48%,#02030a_100%)]"
              : "bg-[radial-gradient(circle_at_top,#f8fbff_0%,#eef4ff_45%,#e2ebf7_100%)]"
          }`}
        />
      )}

      <div className="relative z-10">
        <Cursor />

        {!isTouchDevice && <ScrollProgress />}

        <Navbar />

        <Hero />

        <About />

        <Experience />

        <Skills />
        
        <Projects />

        <Contact />

        <BackToTop />
      </div>
    </div>
  );
}
