"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

type Project ={
    title: string;
    description: string;
    github: string;
    tech: string[];
}

export default function ProjectCard({ project } : {project:Project}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border border-gray-800 p-6 rounded-2xl hover:bg-gray-900"
    >
      <h2 className="text-2xl font-bold text-neon">{project.title}</h2>
      <p className="mt-3 text-gray-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-purpleGlow/20 border border-purpleGlow/30 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-6">
        <a
          href={project.github}
          target="_blank"
          className="flex items-center gap-2 text-gray-300 hover:text-neon"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </motion.div>
  );
}
