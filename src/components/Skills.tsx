"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    name: "Languages",
    icon: "{}",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Ruby", "C#", "SQL"],
    color: "primary",
  },
  {
    name: "Frontend",
    icon: "⚡",
    skills: [
      "React.js",
      "Next.js",
      "Angular.js",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    color: "accent",
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "ASP.NET/C# MVC",
      "Flask",
      "Ruby on Rails",
      "REST APIs",
    ],
    color: "green",
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    skills: ["AWS", "Docker", "Jenkins", "Git", "CI/CD"],
    color: "orange",
  },
  {
    name: "Testing",
    icon: "🧪",
    skills: ["Selenium", "Appium", "JMeter", "BDD"],
    color: "pink",
  },
  {
    name: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
    color: "teal",
  },
  {
    name: "Tools",
    icon: "🔧",
    skills: ["Jira", "Tableau", "Swagger/OpenAPI", "VS Code", "Figma"],
    color: "yellow",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary-500/10 text-primary-300 border-primary-500/20 hover:bg-primary-500/20",
  accent: "bg-accent-500/10 text-accent-300 border-accent-500/20 hover:bg-accent-500/20",
  green: "bg-green-500/10 text-green-300 border-green-500/20 hover:bg-green-500/20",
  orange: "bg-orange-500/10 text-orange-300 border-orange-500/20 hover:bg-orange-500/20",
  pink: "bg-pink-500/10 text-pink-300 border-pink-500/20 hover:bg-pink-500/20",
  teal: "bg-teal-500/10 text-teal-300 border-teal-500/20 hover:bg-teal-500/20",
  yellow: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20 hover:bg-yellow-500/20",
};

const headerColorMap: Record<string, string> = {
  primary: "text-primary-400",
  accent: "text-accent-400",
  green: "text-green-400",
  orange: "text-orange-400",
  pink: "text-pink-400",
  teal: "text-teal-400",
  yellow: "text-yellow-400",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-dark-900">
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
              Tech Stack
            </span>
          </div>
          <h2 className="section-title mb-12">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.2 }}
                className="card hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3
                    className={`font-bold text-base ${headerColorMap[cat.color]}`}
                  >
                    {cat.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border transition-colors cursor-default ${colorMap[cat.color]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
