"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Stats() {
  const stats = [
    { 
      label: "LeetCode", 
      value: "600+", 
      image: "/leetcode.png",
      alt: "LeetCode Logo"
    },
    { 
      label: "CodeChef", 
      value: "1798 (3 star)", 
      desc: "Max Rating", 
      image: "/codechef.jpg", // User uploaded jpg
      alt: "CodeChef Logo"
    },
    { 
      label: "Codeforces", 
      value: "1385 (Pupil)", 
      desc: "Max Rating", 
      image: "/codeforces.png",
      alt: "Codeforces Logo" 
    },
    { 
      label: "Amazon ML", 
      value: "Top 4%", 
      desc: "Rank 262/7000+", 
      image: "/amazon.jpg", 
      alt: "Amazon Logo"
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center rounded border border-zinc-800 bg-zinc-950/50 p-4 text-center hover:bg-zinc-900 transition-colors"
        >
          <div className="relative mb-3 h-12 w-12 overflow-hidden rounded-full bg-zinc-900 ring-1 ring-zinc-800"> 
            <Image 
              src={stat.image} 
              alt={stat.alt} 
              fill 
              className="object-cover" 
            />
          </div>
          <span className="text-2xl font-bold text-zinc-100">{stat.value}</span>
          <span className="text-xs font-mono text-zinc-500 mt-1 uppercase tracking-wide">
            {stat.label}
          </span>
          {stat.desc && <span className="text-[10px] text-zinc-600 mt-1">{stat.desc}</span>}
        </motion.div>
      ))}
    </div>
  );
}
