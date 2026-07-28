import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import {
  SiJavascript,
  SiLeaflet,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiPhp 
} from "react-icons/si";

const skills = [
  { name: "Angular", icon: <FaAngular size={55} className="text-red-500" /> },
  { name: "React", icon: <FaReact size={55} className="text-cyan-400" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript size={55} className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={55} className="text-blue-500" />,
  },
  {
    name: "PHP",
    icon: <SiPhp size={55} className="text-[#777BB4]" />,
  },
  { name: "HTML5", icon: <FaHtml5 size={55} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={55} className="text-blue-400" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={55} className="text-cyan-300" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={55} className="text-violet-500" />,
  },
  { name: "Leaflet", icon: <SiLeaflet size={55} className="text-green-400" /> },
  { name: "Git", icon: <FaGitAlt size={55} className="text-orange-600" /> },
  { name: "MySQL", icon: <SiMysql size={55} className="text-blue-400" /> },
];

export default function Skills() {
  const { darkMode } = useTheme();

  return (
    <section id="skills" className="py-16 sm:min-h-screen sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-4xl font-bold sm:mb-16 sm:text-5xl lg:mb-20 lg:text-6xl">
          My Skills
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className={`glass-panel flex flex-col items-center rounded-3xl border p-5 backdrop-blur-xl transition-colors sm:p-6 lg:p-8 ${
                darkMode
                  ? "border-white/10 bg-white/5"
                  : "border-slate-200 bg-white"
              }`}
            >
              {skill.icon}

              <h3 className="mt-4 text-center text-base font-semibold sm:mt-5 sm:text-lg">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
