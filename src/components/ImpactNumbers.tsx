"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    value: 25000,
    prefix: "$",
    suffix: "",
    label: "Cost Savings",
    description: "Quickbase → Jira migration saved in annual seat costs",
    color: "from-green-400 to-emerald-600",
  },
  {
    value: 20,
    prefix: "",
    suffix: "%",
    label: "Manual Work Reduced",
    description: "Time saved via Python automation pipelines",
    color: "from-primary-400 to-primary-600",
  },
  {
    value: 10,
    prefix: "",
    suffix: "%",
    label: "Staff Time Freed",
    description: "Allocation time reduced via AWS SES automation",
    color: "from-accent-400 to-accent-600",
  },
  {
    value: 5,
    prefix: "",
    suffix: "+",
    label: "Years Experience",
    description: "Building production systems across multiple verticals",
    color: "from-orange-400 to-rose-500",
  },
  {
    value: 10,
    prefix: "",
    suffix: "+",
    label: "Technologies",
    description: "Mastered across frontend, backend, cloud, and data",
    color: "from-teal-400 to-cyan-600",
  },
  {
    value: 4,
    prefix: "",
    suffix: "",
    label: "Companies",
    description: "Shipped production code at enterprise-scale organizations",
    color: "from-pink-400 to-purple-600",
  },
];

function Counter({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix: string;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactNumbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
      </div>

      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-primary-500" />
            <span className="text-primary-400 text-sm font-mono uppercase tracking-widest">
              Real Impact
            </span>
            <div className="h-px w-12 bg-primary-500" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Impact by{" "}
            <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Measurable outcomes from real production work — not just features shipped
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="card group hover:-translate-y-2 cursor-default"
            >
              <div
                className={`text-5xl sm:text-6xl font-black bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}
              >
                <Counter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>
              <div className="text-white font-bold text-lg mb-2">
                {metric.label}
              </div>
              <div className="text-gray-400 text-sm leading-relaxed">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
