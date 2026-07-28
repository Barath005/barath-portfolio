import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ScrollProgress from "./components/Common/ScrollProgress";
import BackToTop from "./components/Common/BackToTop";
import Experience from "./components/Experience/Experience";
import Cursor from "./components/Cursor/Cursor";
import { useTheme } from "./context/ThemeContext";
import Background from "./components/Background/Background";

export default function App() {
  const { darkMode } = useTheme();

  return (
    <div
      className={
        darkMode
          ? "relative min-h-screen overflow-hidden bg-[#030712] text-white transition-colors duration-500"
          : "relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-500"
      }
    >
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
