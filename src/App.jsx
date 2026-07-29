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

  return (
    <div
      className={
        darkMode
          ? "relative min-h-screen overflow-x-hidden bg-[#030712] text-white transition-colors duration-500"
          : "relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-500"
      }
    >
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <Background />

      <div className="relative z-10">
        <Cursor />

        <ScrollProgress />

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
