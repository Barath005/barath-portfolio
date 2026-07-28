import { useTheme } from "../../context/ThemeContext";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToSection as scrollToSectionById } from "../../utils/scrollToSection";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(section.id);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActive(id);
    scrollToSectionById(id);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-500 ${
        darkMode
          ? "border-white/10 bg-black/20"
          : "border-slate-200 bg-white/70"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
          Barath
        </h1>

        <div className="hidden gap-6 md:flex lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm transition duration-300 lg:text-base ${
                active === item.id
                  ? "text-cyan-400"
                  : darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition hover:scale-110 sm:h-12 sm:w-12 md:ml-4 ${
              darkMode
                ? "border-white/20 bg-white/10"
                : "border-slate-300 bg-slate-900/5"
            }`}
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400 sm:size-[22px]" />
            ) : (
              <Moon size={20} className="text-slate-800 sm:size-[22px]" />
            )}
          </button>

          <button
            className={`rounded-full p-2 md:hidden ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`overflow-hidden backdrop-blur-xl md:hidden ${
              darkMode ? "bg-black/90" : "bg-white/95"
            }`}
          >
            <div className="flex flex-col gap-4 px-4 pb-6 pt-2 sm:px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-base transition-colors sm:text-lg ${
                    active === item.id
                      ? "text-cyan-400"
                      : darkMode
                        ? "text-gray-300 hover:text-cyan-400"
                        : "text-slate-700 hover:text-cyan-500"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
