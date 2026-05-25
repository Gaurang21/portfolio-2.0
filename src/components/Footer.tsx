"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-dark-900 border-t border-dark-700 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xs">
                GS
              </div>
              <span className="text-white font-semibold">Gaurang Suki</span>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} · Built with{" "}
              <span className="text-primary-400">Next.js</span> &amp;{" "}
              <span className="text-accent-400">Tailwind CSS</span>
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
                className="p-2 text-gray-500 hover:text-primary-400 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-400 transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowUp size={14} className="group-hover:text-primary-400" />
            </motion.span>
          </button>
        </div>
      </div>
    </footer>
  );
}
