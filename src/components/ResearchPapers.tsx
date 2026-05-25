"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

// TODO: Replace placeholder papers with real publications
const papers = [
  {
    title: "Title TBD",
    authors: "Gaurang Suki et al.",
    venue: "Conference TBD",
    year: "TBD",
    abstract:
      "Abstract placeholder — this is where a brief description of the research paper will go. Add 2-3 sentences describing the problem, approach, and key finding.",
    pdfUrl: "#",
    doiUrl: "#",
  },
  {
    title: "Title TBD",
    authors: "Gaurang Suki et al.",
    venue: "Conference TBD",
    year: "TBD",
    abstract:
      "Abstract placeholder — this is where a brief description of the research paper will go. Add 2-3 sentences describing the problem, approach, and key finding.",
    pdfUrl: "#",
    doiUrl: "#",
  },
];

export default function ResearchPapers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 bg-dark-800/50">
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
              Academic Work
            </span>
          </div>
          <h2 className="section-title mb-12">
            Research <span className="gradient-text">Papers</span>
          </h2>

          <div className="grid gap-6">
            {papers.map((paper, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="card hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-500/10 text-accent-400 shrink-0">
                    <FileText size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {paper.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{paper.authors}</p>
                    <div className="flex items-center gap-3 flex-wrap mb-3">
                      <span className="tag">{paper.venue}</span>
                      <span className="text-gray-500 text-xs">{paper.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {paper.abstract}
                    </p>
                    <div className="flex gap-3">
                      <a
                        href={paper.pdfUrl}
                        className="inline-flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-300 transition-colors"
                        aria-label="View PDF"
                      >
                        <ExternalLink size={12} />
                        PDF
                      </a>
                      <a
                        href={paper.doiUrl}
                        className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors"
                        aria-label="View DOI"
                      >
                        <ExternalLink size={12} />
                        DOI
                      </a>
                    </div>
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
