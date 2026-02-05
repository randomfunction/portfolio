"use client";

import { motion } from "framer-motion";
import { PORTFOLIO } from "@/data/portfolio";

export function Skills() {
  const categories = [
    { key: "languages", label: "Languages" },
    { key: "systems", label: "Systems Engineering" },
    { key: "backend", label: "Backend & Distributed" },
    { key: "ai", label: "AI & ML" },
    { key: "databases", label: "Data Store" },
  ] as const;

  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat, idx) => (
        <motion.div
          key={cat.key}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="rounded-lg border border-zinc-800 bg-zinc-900/20 p-5 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all"
        >
          <h3 className="mb-3 font-mono text-sm font-semibold text-emerald-500 uppercase tracking-wider">
            {cat.label}
          </h3>
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO.skills[cat.key].map((skill) => (
              <span
                key={skill}
                className="cursor-default rounded bg-zinc-800/50 px-2 py-1 text-sm text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
