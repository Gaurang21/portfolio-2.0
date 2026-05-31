"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Cisco Systems",
    role: "Senior Software Engineer",
    period: "April 2022 – Present",
    location: "San Jose, CA",
    bullets: [
      "Architected and led a 6-month ground-up rebuild of Cisco IoT, replacing a single-technology-per-network model with per-Access-Point technology assignment — deployed across ~1,000+ customer IoT networks with 90% test coverage",
      "Designed a zero-downtime migration that auto-synced legacy configurations into the new data model via a distributed background job queue, moving the entire customer base with no service disruption",
      "Built RAG-powered AI agents for two products using OpenAI embeddings and a vector database, surfaced through VSCode/GitHub IDE integrations and a Webex bot — cutting support resolution time by 30%",
      "Built an interactive enterprise web app with React and Mapbox rendering custom indoor building maps that auto-computes optimal Access Point placement across large campuses, cutting deployment from days to minutes",
      "Drove the Zigbee smart-lock feature to General Availability and integrated third-party ESL hardware, opening new hospitality and retail customer segments",
    ],
    tech: ["React", "Node.js", "Ruby on Rails", "PostgreSQL", "OpenAI", "RAG", "Mapbox", "TypeScript"],
    current: true,
  },
  {
    company: "Cisco / Webex",
    role: "Software Engineer (Contract)",
    period: "Oct 2021 – April 2022",
    location: "San Jose, CA",
    bullets: [
      "Built and maintained an internal Python diagnostics tool (Twisted, Klein) that collected and surfaced Webex meeting-app logs, accelerating root-cause analysis during production failures",
      "Developed an internal tool UI with React and Flask APIs, containerized via Docker, and authored Java, Selenium, and Appium automated tests for end-to-end Webex platform coverage",
    ],
    tech: ["Python", "React.js", "Flask", "Docker", "Selenium", "Appium", "Java"],
    current: false,
  },
  {
    company: "Sikka.ai",
    role: "Full Stack Developer",
    period: "June 2021 – Oct 2021",
    location: "San Jose, CA",
    bullets: [
      "Designed and built RESTful services using ASP.NET/C# MVC, documented with Swagger, to power Sikka's new product",
      "Developed a React UI with interactive data visualizations (Victory charts) and partnered with QA on test plans to reduce functional and performance defects",
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
      "Migrated supplier metrics from Quickbase to Jira with Python, saving ~$25K/year in licensing, and built interactive dashboards using Groovy and C3.js",
      "Automated monthly supplier reporting with Java and AWS SES, reducing staff allocation time 10%, and built a React + Python portal feeding real-time Tableau dashboards",
    ],
    tech: ["React", "Python", "Java", "AWS SES", "Tableau", "Jira", "Groovy"],
    current: false,
    highlight: true,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-24"
      style={{ backgroundColor: "color-mix(in srgb, var(--bg-card) 50%, var(--bg))" }}
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12" style={{ backgroundColor: "var(--primary)" }} />
            <span className="text-sm font-mono uppercase tracking-widest" style={{ color: "var(--primary)" }}>
              Work History
            </span>
          </div>
          <h2 className="section-title mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-4 md:left-8 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, var(--primary), var(--border), transparent)" }}
            />

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
                    className="absolute left-2 md:left-6 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={
                      exp.current
                        ? {
                            backgroundColor: "#22c55e",
                            borderColor: "#4ade80",
                            boxShadow: "0 0 12px rgba(34,197,94,0.5)",
                          }
                        : {
                            backgroundColor: "var(--bg-card-hover)",
                            borderColor: "var(--border)",
                          }
                    }
                  >
                    {exp.current && (
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    )}
                  </div>

                  <div
                    className="card hover:-translate-y-1"
                    style={
                      exp.current
                        ? {
                            borderLeft: "3px solid #22c55e",
                            boxShadow: "0 0 20px rgba(34,197,94,0.1)",
                          }
                        : "highlight" in exp && exp.highlight
                        ? {
                            borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)",
                            backgroundColor: "color-mix(in srgb, var(--primary) 5%, var(--bg-card))",
                          }
                        : {}
                    }
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-lg" style={{ color: "var(--text)" }}>
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span
                              className="text-xs px-2 py-1 rounded-full font-medium"
                              style={{
                                backgroundColor: "rgba(34,197,94,0.15)",
                                color: "#22c55e",
                                border: "1px solid rgba(34,197,94,0.3)",
                              }}
                            >
                              Current
                            </span>
                          )}
                          {"highlight" in exp && exp.highlight && (
                            <span
                              className="px-2 py-0.5 text-xs rounded-full"
                              style={{
                                backgroundColor: "color-mix(in srgb, var(--primary) 20%, transparent)",
                                color: "var(--primary)",
                                border: "1px solid color-mix(in srgb, var(--primary) 30%, transparent)",
                              }}
                            >
                              Key Impact
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 font-semibold mt-1" style={{ color: "var(--primary)" }}>
                          <Briefcase size={14} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-right text-sm flex flex-col gap-1 shrink-0" style={{ color: "var(--text-muted)" }}>
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
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <span className="mt-1 shrink-0" style={{ color: "var(--primary)" }}>▸</span>
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
