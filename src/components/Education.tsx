"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "California State University, East Bay",
    period: "Aug 2019 – May 2021",
    courses: [
      "Advanced Algorithms",
      "Distributed Systems",
      "Machine Learning",
      "Software Engineering",
      "Database Systems",
      "Cloud Computing",
    ],
    icon: "🎓",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "Savitribai Phule Pune University",
    period: "July 2015 – June 2019",
    courses: [
      "Data Structures",
      "Operating Systems",
      "Computer Networks",
      "Web Technologies",
      "Software Design",
      "DBMS",
    ],
    icon: "🏛️",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-dark-900">
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
              Academic Background
            </span>
          </div>
          <h2 className="section-title mb-12">
            <span className="gradient-text">Education</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 + 0.2 }}
                className="card hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-6xl opacity-10 p-4">
                  {edu.icon}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={12} />
                      {edu.period}
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {edu.degree}
                </h3>
                <p className="text-primary-400 font-medium mb-4">{edu.school}</p>

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((c) => (
                      <span key={c} className="tag text-xs">
                        {c}
                      </span>
                    ))}
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
