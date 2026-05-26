"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-12" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: 'linear-gradient(to bottom right, var(--primary), var(--accent))' }}>
                GS
              </div>
              <span className="theme-body-text font-semibold">Gaurang Suki</span>
            </div>
            <p className="theme-muted-text text-sm">
              © {new Date().getFullYear()} · Built with{" "}
              <span className="theme-accent-text">Next.js</span> &amp;{" "}
              <span style={{ color: 'var(--accent)' }}>Tailwind CSS</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: "https://github.com/Gaurang21", label: "GitHub" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/gaurang-suki", label: "LinkedIn" },
              { icon: FiMail, href: "mailto:gaurang.suki@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 theme-muted-text theme-accent-text transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm theme-muted-text transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowUp size={14} />
            </motion.span>
          </button>
        </div>
      </div>
    </footer>
  );
}
