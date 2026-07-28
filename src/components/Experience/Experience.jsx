import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const experiences = [
  {
    company: "Klio Technologies",
    role: "Frontend Developer",
    duration: "2023 - Present",
    location: "Tamil Nadu, India",
    description:
      "Developing enterprise web applications using Angular, JavaScript, TypeScript and REST APIs.",
    achievements: [
      "Developed POS and Invoice Management modules",
      "Integrated QuickBooks APIs",
      "Implemented Route Planner using Leaflet",
      "Built Payment Gateway integrations",
      "Fixed production bugs and optimized performance",
      "Worked directly with international clients",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "REST API",
      "Leaflet",
      "Bootstrap",
    ],
  },
];

export default function Experience() {
  const { darkMode } = useTheme();

  return (
    <section id="experience" className="py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center sm:mb-20"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
            Experience
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            My Journey
          </h2>
          <p className={`mt-6 ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
            Professional experience building enterprise applications.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 hidden w-1 bg-cyan-500/30 sm:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12 pl-0 sm:mb-16 sm:pl-20"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/40 sm:absolute sm:left-0 sm:top-2 sm:mb-0 sm:h-12 sm:w-12">
                <Briefcase size={22} />
              </div>

              <div
                className={`glass-panel rounded-3xl border p-5 backdrop-blur-xl transition sm:p-8 ${
                  darkMode
                    ? "border-white/10 bg-white/5 hover:border-cyan-500"
                    : "border-slate-200 bg-white hover:border-cyan-400"
                }`}
              >
                <h3 className="text-2xl font-bold sm:text-3xl">{exp.role}</h3>
                <h4 className="mt-2 text-lg text-cyan-400 sm:text-xl">
                  {exp.company}
                </h4>

                <div
                  className={`mt-4 flex flex-wrap gap-4 sm:gap-6 ${
                    darkMode ? "text-gray-400" : "text-slate-500"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    {exp.duration}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {exp.location}
                  </div>
                </div>

                <p
                  className={`mt-6 leading-8 ${
                    darkMode ? "text-gray-300" : "text-slate-600"
                  }`}
                >
                  {exp.description}
                </p>

                <div className="mt-8">
                  <h5 className="mb-4 text-lg font-semibold sm:text-xl">
                    Key Achievements
                  </h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((item) => (
                      <li
                        key={item}
                        className={`flex gap-3 ${
                          darkMode ? "text-gray-300" : "text-slate-700"
                        }`}
                      >
                        <span className="text-cyan-400">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
