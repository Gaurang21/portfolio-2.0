"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import certificationsData from "@/data/certifications.json";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  badgeImage: string | null;
}

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const certs: Certification[] = certificationsData;

  return (
    <section id="certifications" className="py-24 bg-dark-900">
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
              Credentials
            </span>
          </div>
          <h2 className="section-title mb-12">
            <span className="gradient-text">Certifications</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((cert, i) => {
              const isComingSoon = cert.credentialUrl === "#";

              if (isComingSoon) {
                return (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="card flex flex-col gap-4 opacity-60 cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400">
                        <Award size={24} />
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-dark-700 text-gray-500 border border-dark-600">
                        Coming Soon
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-primary-400 text-sm">{cert.issuer}</p>
                      <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                    </div>
                  </motion.div>
                );
              }

              return (
                <a
                  key={cert.name}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="card flex flex-col gap-4 hover:-translate-y-2 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400">
                        <Award size={24} />
                      </div>
                      <ExternalLink
                        size={16}
                        className="text-gray-600 group-hover:text-primary-400 transition-colors"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 group-hover:text-primary-300 transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-primary-400 text-sm">{cert.issuer}</p>
                      <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                    </div>
                  </motion.div>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
