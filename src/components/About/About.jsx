import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { scrollToSection } from "../../utils/scrollToSection";

export default function About() {
  const { darkMode } = useTheme();

  return (
    <section id="about" className="flex items-center py-16 sm:min-h-screen sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 flex justify-center lg:order-1"
        >
          <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-40 blur-3xl" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-4 border-dashed border-cyan-400"
            />

            <img
              src="/images/profile.jpg"
              alt="Barath"
              className={`absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)] rounded-full border-4 object-cover object-center sm:inset-4 sm:h-[calc(100%-32px)] sm:w-[calc(100%-32px)] ${
                darkMode ? "border-white" : "border-slate-200"
              }`}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400 sm:tracking-[0.45em]">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Frontend Developer
          </h2>

          <p
            className={`mt-8 leading-8 ${
              darkMode ? "text-gray-400" : "text-slate-600"
            }`}
          >
            I&apos;m an Angular Developer with experience building enterprise
            applications including POS systems, payment integrations, invoice
            management, QuickBooks integration and route planning.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:gap-5">
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 sm:px-8 sm:py-4"
            >
              Hire Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
