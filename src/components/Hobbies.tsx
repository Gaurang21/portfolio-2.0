"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// TODO: Update with your actual hobbies
const hobbies = [
  {
    emoji: "🏋️",
    name: "Fitness & Weightlifting",
    description: "Consistency in the gym mirrors consistency in code. Daily discipline.",
  },
  {
    emoji: "🎮",
    name: "Gaming",
    description: "Strategy games sharpen problem-solving. Also, it's just fun.",
  },
  {
    emoji: "🌍",
    name: "Traveling",
    description: "New places, new perspectives. Exploring cultures and cuisines.",
  },
  {
    emoji: "📚",
    name: "Reading Tech Blogs",
    description: "Keeping up with the frontier. From Hacker News to research papers.",
  },
  {
    emoji: "🍳",
    name: "Cooking",
    description: "Experimenting in the kitchen. Recipes are just algorithms.",
  },
  {
    emoji: "🎵",
    name: "Music",
    description: "Lo-fi beats while coding, live concerts on weekends.",
  },
];

export default function Hobbies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hobbies" className="py-24 bg-dark-800/50">
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
              Beyond the Screen
            </span>
          </div>
          <h2 className="section-title mb-4">
            Hobbies &amp; <span className="gradient-text">Interests</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl">
            When I&apos;m not building software, this is where you&apos;ll find me.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, i) => (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.08 + 0.2, type: "spring" }}
                className="card text-center hover:-translate-y-2 group cursor-default"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  {hobby.emoji}
                </div>
                <h3 className="text-white font-bold mb-2">{hobby.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {hobby.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
