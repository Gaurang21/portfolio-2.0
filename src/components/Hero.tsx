"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const titles = [
  "Full Stack Engineer",
  "React & Node.js Developer",
  "Cloud & API Architect",
  "Problem Solver",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.substring(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.substring(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setTitleIndex((i) => (i + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, titleIndex]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0ea5e9 1px, transparent 1px), linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />

      <div className="relative section-container text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight">
            Gaurang{" "}
            <span className="gradient-text">Suki</span>
          </h1>

          {/* Typing title */}
          <div className="h-12 flex items-center justify-center mb-6">
            <span className="text-xl sm:text-2xl font-mono text-primary-400">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Building scalable web applications at the intersection of{" "}
            <span className="text-primary-300">beautiful UIs</span> and{" "}
            <span className="text-accent-400">robust backends</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button onClick={scrollToProjects} className="btn-primary">
              View My Work
              <ChevronDown size={18} />
            </button>
            <a href="/resume.pdf" download className="btn-secondary">
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            {[
              {
                icon: FiGithub,
                href: "https://github.com/Gaurang21",
                label: "GitHub",
              },
              {
                icon: FiLinkedin,
                href: "https://www.linkedin.com/in/gaurang-suki",
                label: "LinkedIn",
              },
              {
                icon: FiMail,
                href: "mailto:gaurang.suki@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 text-gray-400 hover:text-primary-400 hover:bg-dark-700 rounded-xl transition-all duration-200 hover:scale-110"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-gray-600"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
