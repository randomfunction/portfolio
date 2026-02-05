"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  category?: string;
}

export function ProjectCard({ project, index }: { project: ProjectProps; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-colors hover:border-zinc-600 hover:bg-zinc-900/80"
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded bg-zinc-800 px-2 py-0.5 text-xs font-medium text-zinc-400 font-mono">
              {project.category || "Project"}
            </span>
          </div>
          <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
        </div>
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
        )}
      </div>

      <p className="mb-4 text-sm text-zinc-400 leading-relaxed">
        {project.description}
      </p>

      <ul className="mb-6 flex-1 space-y-2 text-sm text-zinc-300">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/50" />
            <span className="w-full">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
        {project.tech.map((t) => (
          <span
            key={t}
            className="flex items-center text-xs text-zinc-500 font-mono bg-zinc-950 px-2 py-1 rounded border border-zinc-800"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
