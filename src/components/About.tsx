"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+", icon: Briefcase },
  { label: "Technologies", value: "10+", icon: Code2 },
  { label: "Companies", value: "4", icon: MapPin },
  { label: "Degrees", value: "2", icon: GraduationCap },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
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
            <span
              className="text-sm font-mono uppercase tracking-widest"
              style={{ color: "var(--primary)" }}
            >
              About Me
            </span>
          </div>
          <h2 className="section-title mb-12">
            The person behind the <span className="gradient-text">code</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
                I&apos;m a Senior Software Engineer at{" "}
                <span style={{ color: "var(--primary-light, var(--primary))", fontWeight: 600 }}>
                  Cisco Systems
                </span>{" "}
                in the Bay Area — building systems that quietly take work off people&apos;s plates.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                My work lives at the intersection of{" "}
                <span style={{ color: "var(--text)" }}>full-stack engineering</span> and{" "}
                <span style={{ color: "var(--text)" }}>applied AI</span>: designing the architecture,
                writing the APIs and data models, and shipping the UI on top — across{" "}
                <span style={{ color: "var(--text)" }}>IoT</span>,{" "}
                <span style={{ color: "var(--text)" }}>SaaS</span>,{" "}
                <span style={{ color: "var(--text)" }}>telecom</span>, and{" "}
                <span style={{ color: "var(--text)" }}>healthcare</span>.
                At Cisco I rebuilt an IoT platform from its foundations and built{" "}
                <span style={{ color: "var(--text)" }}>RAG-powered AI agents</span>{" "}
                that cut support resolution time by 30%.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                There&apos;s a thread through the work I&apos;m proudest of: it replaces something{" "}
                <span style={{ color: "var(--text)" }}>slow and manual</span> with something{" "}
                <span style={{ color: "var(--text)" }}>fast and automatic</span>.
                90% test coverage isn&apos;t a chore — it&apos;s how I sleep at night.
              </p>

              <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                <MapPin size={16} style={{ color: "var(--primary)" }} />
                <span>Fremont, CA</span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "Applied AI & RAG",
                  "Systems that Scale",
                  "Clean Code",
                  "90% Test Coverage",
                ].map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="card text-center group hover:-translate-y-1"
                >
                  <div
                    className="inline-flex p-3 rounded-xl mb-3 transition-colors"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
                      color: "var(--primary)",
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {value}
                  </div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
