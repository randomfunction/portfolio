"use client";

import { motion } from "framer-motion";
import { Github, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO } from "@/data/portfolio";

export function Hero() {
  return (
    <header className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="mb-4 flex items-center gap-2 text-emerald-500 font-mono text-sm">
          <span>&gt; initializing_profile...</span>
          <span className="animate-pulse">_</span>
        </div>
        
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
          {PORTFOLIO.personal.name}
        </h1>
        
        <p className="mb-8 text-xl text-zinc-400 md:text-2xl leading-relaxed max-w-2xl">
          {PORTFOLIO.personal.tagline}
        </p>
        
        <div className="flex flex-wrap items-center gap-6 text-zinc-500">
          <Link
            href={PORTFOLIO.personal.github}
            target="_blank"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="font-mono text-sm">GitHub</span>
          </Link>
          
          {/* <Link
            href={`mailto:${PORTFOLIO.personal.email}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="font-mono text-sm">Email</span>
          </Link> */}

            <a className="font-mono text-sm"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PORTFOLIO.personal.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Email via Gmail
            </a>

          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span className="font-mono text-sm">{PORTFOLIO.personal.location}</span>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
