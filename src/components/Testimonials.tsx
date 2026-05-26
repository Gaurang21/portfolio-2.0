"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "I have had the pleasure of managing Gaurang at Cisco Spaces for 3 years, and I am consistently impressed by their abilities. Gaurang is a quick learner who grasps new concepts rapidly, making him an invaluable asset to our team and a great help to me personally. He excels under pressure, maintaining focus and delivering high-quality work even in challenging situations. Gaurang is not afraid to take on new tasks and consistently steps out of their comfort zone to tackle new challenges. Their proactive attitude and dedication have significantly contributed to our team's success. I highly recommend Gaurang for any role he chooses to pursue.",
    name: "Balu Loganathan",
    title: "Software Engineering Manager",
    company: "Cisco | Stanford, Certified Design Thinking",
    linkedinUrl: "https://www.linkedin.com/in/gaurang-suki",
    initials: "BL",
  },
  {
    quote:
      "Gaurang and I worked closely on all (10+) applications in the Cisco Spaces suite. It was a pleasure whenever I was fortunate enough to work with Gaurang and I can say with confidence his growth from April 2023 – October 2024 has been exponential. Today, Gaurang is someone who will never say no to lending a hand, takes ownership of his deliverables from start to finish, and someone you can rely on (give and forget any quantity/complexity of work). His humble and calm demeanor make him a delight to work with. He would be an invaluable asset on any team.",
    name: "Sarneet Longia",
    title: "Tech Lead",
    company: "Cisco",
    linkedinUrl: "https://www.linkedin.com/in/gaurang-suki",
    initials: "SL",
  },
  {
    quote:
      "Gaurang is a fantastic team player who makes collaboration seamless. He grasps project requirements quickly and is always willing to assist others. His ability to tackle complex issues and deliver solutions swiftly is truly commendable. Additionally, his strong communication skills and attention to detail ensure that projects run smoothly and efficiently.",
    name: "Veena Balasubramanya",
    title: "Frontend Engineer",
    company: "React.js · Redux · ES6 · JavaScript",
    linkedinUrl: "https://www.linkedin.com/in/gaurang-suki",
    initials: "VB",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24" style={{ backgroundColor: 'var(--bg)' }}>
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
                <Quote size={32} className="mb-4 shrink-0" style={{ color: 'color-mix(in srgb, var(--primary) 25%, transparent)' }} />
                <p className="theme-muted-text leading-relaxed italic flex-1 mb-6 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 theme-avatar text-xs" style={{ minWidth: '2.5rem' }}>{t.initials}</div>
                    <div>
                      <p className="theme-body-text font-semibold text-sm">{t.name}</p>
                      <p className="theme-muted-text text-xs">{t.title} · {t.company}</p>
                    </div>
                  </div>
                  <a href={t.linkedinUrl} target="_blank" rel="noopener noreferrer" className="theme-muted-text theme-accent-text transition-colors" aria-label="LinkedIn profile">
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
