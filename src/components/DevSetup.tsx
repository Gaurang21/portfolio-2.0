"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// TODO: Update with your actual dev setup
const setupItems = [
  {
    category: "Editor",
    icon: "📝",
    value: "VS Code",
    detail: "with custom dark theme + Vim keybindings",
  },
  {
    category: "Terminal",
    icon: "💻",
    value: "iTerm2 / Zsh",
    detail: "with Oh My Zsh + custom aliases",
  },
  {
    category: "Machine",
    icon: "🖥️",
    value: "MacBook Pro",
    detail: "M-series chip, 16GB RAM",
  },
  {
    category: "Browser",
    icon: "🌐",
    value: "Chrome",
    detail: "DevTools power user + React DevTools",
  },
  {
    category: "Design",
    icon: "🎨",
    value: "Figma",
    detail: "for wireframes, prototypes, and collaboration",
  },
  {
    category: "Project Mgmt",
    icon: "📋",
    value: "Jira + Notion",
    detail: "Jira at work, Notion for personal systems",
  },
];

export default function DevSetup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="setup" className="py-24 bg-dark-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-primary-500" />
            <span className="text-primary-400 text-sm font-mono uppercase tracking-widest">
              My Setup
            </span>
          </div>
          <h2 className="section-title mb-4">
            Dev <span className="gradient-text">Setup</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl">
            The tools and gear I rely on daily to write better code, faster.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {setupItems.map((item, i) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07 + 0.2 }}
                className="card hover:-translate-y-1 group flex items-start gap-4"
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">
                    {item.category}
                  </p>
                  <p className="text-white font-semibold group-hover:text-primary-300 transition-colors">
                    {item.value}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
