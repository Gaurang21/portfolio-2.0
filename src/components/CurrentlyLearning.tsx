"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const learningItems = [
  {
    name: "Agentic Workflows & Model Context Protocol (MCP)",
    icon: "🧠",
    progress: 70,
    description: "Building multi-step AI agents and integrating tools via MCP for real-world automation",
    status: "Active",
  },
  {
    name: "AI Evaluation & Observability",
    icon: "📊",
    progress: 50,
    description: "Measuring LLM output quality, tracing agent runs, and building eval pipelines",
    status: "In Progress",
  },
  {
    name: "LangGraph",
    icon: "🔗",
    progress: 55,
    description: "Designing stateful, cyclical agent graphs for complex multi-step reasoning tasks",
    status: "In Progress",
  },
  {
    name: "LLM APIs & AI-Powered Applications",
    icon: "🤖",
    progress: 80,
    description: "Production integrations with OpenAI, Anthropic, and LangChain in real systems",
    status: "Active",
  },
];

const statusStyle: Record<string, React.CSSProperties> = {
  "In Progress": { backgroundColor: 'color-mix(in srgb, var(--primary) 20%, transparent)', color: 'var(--primary)', border: '1px solid color-mix(in srgb, var(--primary) 30%, transparent)' },
  Active: { backgroundColor: 'rgba(22,163,74,0.15)', color: '#16a34a', border: '1px solid rgba(22,163,74,0.4)' },
  Starting: { backgroundColor: 'rgba(217,119,6,0.15)', color: '#d97706', border: '1px solid rgba(217,119,6,0.4)' },
};

export default function CurrentlyLearning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="learning" className="py-24" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 theme-accent-line" />
            <span className="theme-accent-text text-sm font-mono uppercase tracking-widest">
              Always Growing
            </span>
          </div>
          <h2 className="section-title mb-4">
            Currently <span className="gradient-text">Learning</span>
          </h2>
          <p className="theme-muted-text mb-12 max-w-xl">
            The best engineers never stop learning. Here&apos;s what&apos;s on
            my radar right now.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {learningItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="card hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h3 className="theme-body-text font-semibold text-sm">{item.name}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={statusStyle[item.status]}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="theme-muted-text text-sm mb-4">{item.description}</p>

                <div>
                  <div className="flex justify-between text-xs theme-muted-text mb-1.5">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden theme-track">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.progress}%` } : {}}
                      transition={{ delay: i * 0.1 + 0.5, duration: 1 }}
                      className="h-full theme-track-fill rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
