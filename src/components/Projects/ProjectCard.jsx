import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function ProjectCard({ project, onOpen }) {
  const { darkMode } = useTheme();

  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`glass-panel group cursor-pointer overflow-hidden rounded-3xl border backdrop-blur-xl transition-colors ${
        darkMode ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"
      }`}
      onClick={() => onOpen(project)}
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover duration-500 group-hover:scale-110 sm:h-64"
        />
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-bold sm:text-2xl">{project.title}</h3>

        <p className={`mt-4 ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
