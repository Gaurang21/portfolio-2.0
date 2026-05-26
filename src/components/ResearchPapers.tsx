"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const papers = [
  {
    title: "International Conference on Intelligent Networks and Computing (ICINC 2019)",
    authors: "Gaurang Suki et al.",
    venue: "ICINC 2019",
    year: "2019",
    abstract: "Research paper presented at the International Conference on Intelligent Networks and Computing 2019. Click to view full paper.",
    pdfUrl: "/research-papers/ICINC19.pdf",
    doiUrl: "#",
  },
  {
    title: "International Journal of Innovative Research in Computer and Communication Engineering",
    authors: "Gaurang Suki et al.",
    venue: "IJIRCCE",
    year: "2020",
    abstract: "Published research in the International Journal of Innovative Research in Computer and Communication Engineering. Click to view full paper.",
    pdfUrl: "/research-papers/IJIRCCE.pdf",
    doiUrl: "#",
  },
  {
    title: "International Journal of Pure and Applied Mathematics",
    authors: "Gaurang Suki et al.",
    venue: "IJPAM",
    year: "2019",
    abstract: "Research contribution to the International Journal of Pure and Applied Mathematics. Click to view full paper.",
    pdfUrl: "/research-papers/IJPAM.pdf",
    doiUrl: "#",
  },
  {
    title: "DocBot: Document Intelligence System",
    authors: "Gaurang Suki et al.",
    venue: "Research Paper",
    year: "2021",
    abstract: "DocBot is an intelligent document processing system. Click to view full paper.",
    pdfUrl: "/research-papers/DocBot.pdf",
    doiUrl: "#",
  },
  {
    title: "International Conference on Power Systems (ICPS 2018)",
    authors: "Gaurang Suki et al.",
    venue: "ICPS 2018",
    year: "2018",
    abstract: "Research paper presented at the International Conference on Power Systems 2018. Click to view full paper.",
    pdfUrl: "/research-papers/ICPS_2018_paper_6.pdf",
    doiUrl: "#",
  },
];

export default function ResearchPapers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
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
                  <div className="theme-icon-badge-accent"><FileText size={22} /></div>
                  <div className="flex-1">
                    <h3 className="theme-body-text font-semibold text-lg mb-1">{paper.title}</h3>
                    <p className="theme-muted-text text-sm mb-1">{paper.authors}</p>
                    <div className="flex items-center gap-3 flex-wrap mb-3">
                      <span className="tag">{paper.venue}</span>
                      <span className="theme-muted-text text-xs">{paper.year}</span>
                    </div>
                    <p className="theme-muted-text text-sm leading-relaxed mb-4">{paper.abstract}</p>
                    <div className="flex gap-3">
                      <a
                        href={paper.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs theme-accent-text transition-colors"
                        aria-label="View PDF"
                      >
                        <ExternalLink size={12} />PDF
                      </a>
                      {paper.doiUrl !== "#" && (
                        <a
                          href={paper.doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs theme-muted-text transition-colors"
                          aria-label="View DOI"
                        >
                          <ExternalLink size={12} />DOI
                        </a>
                      )}
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
