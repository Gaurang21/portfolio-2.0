"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const learningItems = [
  {
    name: "Kubernetes & Container Orchestration",
    icon: "⚓",
    progress: 45,
    description: "Exploring k8s deployments, Helm charts, and cluster management",
    status: "In Progress",
  },
  {
    name: "LLM APIs & AI-Powered Applications",
    icon: "🤖",
    progress: 65,
    description: "Building integrations with OpenAI, Anthropic, and LangChain",
    status: "Active",
  },
  {
    name: "Rust (Systems Programming)",
    icon: "🦀",
    progress: 25,
    description: "Learning memory safety, ownership model, and systems-level code",
    status: "Starting",
  },
  {
    name: "GraphQL",
    icon: "◈",
    progress: 55,
    description: "Schema design, resolvers, and Apollo Client integrations",
    status: "In Progress",
  },
];

const statusColor: Record<string, string> = {
  "In Progress": "bg-primary-500/20 text-primary-300 border-primary-500/30",
  Active: "bg-green-500/20 text-green-300 border-green-500/30",
  Starting: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
};

export default function CurrentlyLearning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="learning" className="py-24 bg-dark-800/50">
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
              Always Growing
            </span>
          </div>
          <h2 className="section-title mb-4">
            Currently <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl">
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
                      <h3 className="text-white font-semibold text-sm">
                        {item.name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${statusColor[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">{item.description}</p>

                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.progress}%` } : {}}
                      transition={{ delay: i * 0.1 + 0.5, duration: 1 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
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
