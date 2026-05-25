"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Cisco Systems",
    role: "Software Engineer",
    period: "April 2022 – Present",
    location: "San Jose, CA",
    bullets: [
      "Built enterprise IoT web application using React and Node.js serving thousands of internal users",
      "Translated complex Figma designs into production-ready component-based React code",
      "Contributing to Ruby on Rails API middleware and React frontend features",
    ],
    tech: ["React", "Node.js", "Ruby on Rails", "TypeScript", "IoT"],
    current: true,
  },
  {
    company: "Cisco / Webex",
    role: "Software Engineer (Contract)",
    period: "Oct 2021 – April 2022",
    location: "San Jose, CA",
    bullets: [
      "Built Python async tool using Twisted and Klein frameworks for the Webex platform",
      "Developed React.js / Flask internal UI deployed on Docker containers",
      "Implemented E2E testing with Selenium and Appium; built Java test APIs",
    ],
    tech: ["Python", "React.js", "Flask", "Docker", "Selenium", "Java"],
    current: false,
  },
  {
    company: "Sikka.ai",
    role: "Full Stack Developer",
    period: "June 2021 – Oct 2021",
    location: "San Jose, CA",
    bullets: [
      "Designed and built RESTful APIs with ASP.NET/C# MVC with Swagger documentation",
      "Developed React components featuring Victory chart data visualizations",
    ],
    tech: ["ASP.NET", "C#", "React", "Swagger", "Victory Charts"],
    current: false,
  },
  {
    company: "Lumentum LLC",
    role: "Software Engineer Intern",
    period: "May 2020 – May 2021",
    location: "San Jose, CA",
    bullets: [
      "Built React supplier portal with Python data pipeline and Tableau visualizations",
      "Executed Quickbase → Jira migration saving $25,000 in annual seat licensing costs",
      "Built Java + AWS SES email automation system reducing staff allocation time by 10%",
      "Created Python data processing pipeline reducing manual work by 20%",
    ],
    tech: ["React", "Python", "Java", "AWS SES", "Tableau", "Jira"],
    current: false,
    highlight: true,
  },
  {
    company: "AUTOCITIE",
    role: "Full Stack Developer",
    period: "May 2018 – May 2019",
    location: "Pune, India",
    bullets: [
      "Built SpringBoot RESTful endpoints and React.js frontend for the platform",
      "Implemented BDD unit/integration tests and Apache JMeter performance tests",
    ],
    tech: ["Spring Boot", "React.js", "BDD", "JMeter", "Java"],
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-dark-800/50">
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
              Work History
            </span>
          </div>
          <h2 className="section-title mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-dark-600 to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 md:left-6 top-6 w-5 h-5 rounded-full border-2 ${
                      exp.current
                        ? "bg-primary-500 border-primary-400 shadow-lg shadow-primary-500/50"
                        : "bg-dark-700 border-dark-500"
                    } flex items-center justify-center`}
                  >
                    {exp.current && (
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    )}
                  </div>

                  <div
                    className={`card ${"highlight" in exp && exp.highlight ? "border-primary-500/30 bg-primary-500/5" : ""} hover:-translate-y-1`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-white font-bold text-lg">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 border border-green-500/30 rounded-full">
                              Current
                            </span>
                          )}
                          {"highlight" in exp && exp.highlight && (
                            <span className="px-2 py-0.5 text-xs bg-primary-500/20 text-primary-400 border border-primary-500/30 rounded-full">
                              Key Impact
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-primary-400 font-semibold mt-1">
                          <Briefcase size={14} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500 flex flex-col gap-1 shrink-0">
                        <div className="flex items-center gap-1 justify-end">
                          <Calendar size={12} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 justify-end">
                          <MapPin size={12} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-gray-400 text-sm"
                        >
                          <span className="text-primary-500 mt-1 shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="tag text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
