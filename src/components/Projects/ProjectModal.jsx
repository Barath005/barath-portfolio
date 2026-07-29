import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ProjectModal({ project, onClose }) {
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 40 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className={`relative grid h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl border shadow-2xl sm:h-[88vh] sm:rounded-3xl lg:h-[85vh] lg:grid-cols-2 ${
          darkMode
            ? "border-white/10 bg-[#0f172a]"
            : "border-slate-200 bg-white"
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute right-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-full border transition sm:right-5 sm:top-5 sm:h-11 sm:w-11 ${
            darkMode
              ? "border-white/20 bg-black/50 hover:bg-red-500"
              : "border-slate-300 bg-white/90 hover:bg-red-500 hover:text-white"
          }`}
        >
          <X size={22} />
        </button>

        <div
          className={`flex items-center justify-center p-4 sm:p-6 lg:p-8 ${
            darkMode ? "bg-[#0B1220]" : "bg-slate-100"
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={`w-full overflow-hidden rounded-2xl border shadow-2xl ${
              darkMode
                ? "border-white/10 bg-[#111827]"
                : "border-slate-200 bg-white"
            }`}
          >
            <div
              className={`flex h-10 items-center border-b px-4 ${
                darkMode
                  ? "border-white/10 bg-[#1E293B]"
                  : "border-slate-200 bg-slate-100"
              }`}
            >
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div
                className={`flex-1 text-center text-xs ${
                  darkMode ? "text-gray-400" : "text-slate-500"
                }`}
              >
                {project.title}
              </div>
            </div>

            <div className={darkMode ? "bg-[#0F172A] p-4" : "bg-slate-50 p-4"}>
              <img
                src={project.image}
                alt={project.title}
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>
          </motion.div>
        </div>

        <div className="overflow-y-auto p-5 pr-14 pt-14 sm:p-7 sm:pr-16 sm:pt-16 lg:p-10 lg:pr-20 lg:pt-10">
          <p
            className={`text-base leading-7 sm:text-lg sm:leading-8 ${
              darkMode ? "text-gray-300" : "text-slate-600"
            }`}
          >
            {project.description}
          </p>

          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold sm:mb-5 sm:text-2xl">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="mb-4 text-xl font-semibold sm:mb-5 sm:text-2xl">
              Features
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className={`rounded-xl border p-4 ${
                    darkMode
                      ? "border-white/10 bg-white/5"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  {`+ ${feature}`}
                </div>
              ))}
            </div>
          </div>

          {!project.isCompanyProject && (
            <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-5">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 transition hover:scale-105 sm:px-7"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-center gap-2 rounded-xl border px-6 py-3 transition sm:px-7 ${
                  darkMode
                    ? "border-white/20 bg-white/5 hover:bg-white/10"
                    : "border-slate-300 bg-slate-100 hover:bg-slate-200"
                }`}
              >
                GitHub
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
