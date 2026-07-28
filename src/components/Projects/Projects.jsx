import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

import projects from "../../data/projects";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { darkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const companyProjects = projects.filter((project) => project.isCompanyProject);
  const personalProjects = projects.filter((project) => !project.isCompanyProject);

  return (
    <section id="projects" className="py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold sm:text-5xl lg:text-6xl">
          Featured Projects
        </h2>

        <p
          className={`mt-6 text-center ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          Some enterprise applications modules I&apos;ve worked on.
        </p>

        <div className="mt-10 grid gap-6 sm:mt-16 lg:mt-20 lg:grid-cols-3 lg:gap-10">
          {companyProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {personalProjects.length > 0 && (
          <div className="mt-16 sm:mt-24">
            <h3 className="text-center text-3xl font-bold sm:text-4xl">
              Personal Projects
            </h3>

            <p
              className={`mt-4 text-center ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              A few projects I built on my own.
            </p>

            <div className="mx-auto mt-10 grid max-w-2xl gap-6">
              {personalProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
