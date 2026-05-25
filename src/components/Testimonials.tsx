"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";

// TODO: Replace with real LinkedIn recommendations
const testimonials = [
  {
    quote:
      "Placeholder — paste your LinkedIn recommendation here. This is where a genuine endorsement from a colleague, manager, or peer will appear.",
    name: "Colleague Name",
    title: "Engineering Manager",
    company: "Company Name",
    linkedinUrl: "#",
    initials: "CN",
  },
  {
    quote:
      "Placeholder — a second LinkedIn recommendation highlighting specific technical skills, teamwork, or impact you made on a project or team.",
    name: "Colleague Name",
    title: "Senior Software Engineer",
    company: "Company Name",
    linkedinUrl: "#",
    initials: "CN",
  },
  {
    quote:
      "Placeholder — a third recommendation from someone who worked closely with you and can speak to your problem-solving abilities and work ethic.",
    name: "Colleague Name",
    title: "Product Manager",
    company: "Company Name",
    linkedinUrl: "#",
    initials: "CN",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-dark-800/50">
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
              What Others Say
            </span>
          </div>
          <h2 className="section-title mb-12">
            <span className="gradient-text">Recommendations</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="card flex flex-col hover:-translate-y-1 relative"
              >
                <Quote
                  size={32}
                  className="text-primary-500/20 mb-4 shrink-0"
                />
                <p className="text-gray-300 leading-relaxed italic flex-1 mb-6 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">
                        {t.title} · {t.company}
                      </p>
                    </div>
                  </div>
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-400 transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <FiLinkedin size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
