"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const papers = [
  {
    title: "DocBot: A Medical Consultant ChatBot Using Deep Learning",
    authors: "Gaurang Suki, Mayur Giri, Revati Ganorkar, Shubham Deshpande, Araddhana Deshmukh",
    venue: "Research Publication",
    year: "2021",
    abstract: "Proposed a robust 5-stage pipeline architecture for a medical consultancy chatbot using deep learning and seq2seq natural language processing. The model interacts with users in natural language, identifies symptoms, suggests probable diagnoses, and recommends relevant specialists — unlike existing platforms (e.g. WebMD) that limit free-form communication.",
    pdfUrl: "/research-papers/DocBot.pdf",
    doiUrl: "#",
  },
  {
    title: "Textual Content Moderation using Supervised Machine Learning Approach",
    authors: "Revati Ganorkar, Gaurang Suki, Shubham Deshpande, Mayur Giri, Araddhana Deshmukh",
    venue: "ICINC 2019 — International Conference on Internet of Things, Next Generation Network & Cloud Computing",
    year: "2019",
    abstract: "Proposed an efficient automated textual content moderation system to detect hate speech and offensive content on social networking sites using supervised machine learning. Addresses the limitations of manual moderation used by tech giants like Facebook and Microsoft, reducing harm to both users and content moderators.",
    pdfUrl: "/research-papers/ICINC19.pdf",
    doiUrl: "#",
  },
  {
    title: "Proposed IoT Approach to Ameliorate Traffic Conditions",
    authors: "Shubham Deshpande, Revati Ganorkar, Mayur Giri, Gaurang Suki, Araddhana Deshmukh",
    venue: "IJIRCCE — International Journal of Innovative Research in Computer and Communication Engineering, Vol. 6, Issue 11",
    year: "2018",
    abstract: "Proposed a smart vehicular IoT system using MQTT (Message Queue Telemetry Transport) protocol to reduce road congestion and prevent accidents. The model uses advanced vehicle monitoring and sensor networks to keep drivers informed about traffic conditions and alert them to potential hazards in real time.",
    pdfUrl: "/research-papers/IJIRCCE.pdf",
    doiUrl: "#",
  },
  {
    title: "Smart Implanted NFC-based System to Expedite Medical Treatment",
    authors: "Shubham Deshpande, Gaurang Suki, Mayur Giri, Revati Ganorkar, Araddhana Deshmukh",
    venue: "IJPAM — International Journal of Pure and Applied Mathematics, Vol. 118, No. 24",
    year: "2018",
    abstract: "Proposed an NFC chip implant system for patients that stores prioritized medical data (name, blood group, history, allergies) on-chip with secondary data on the cloud. A doctor can scan the chip to instantly retrieve patient details during emergencies, significantly reducing time before treatment begins.",
    pdfUrl: "/research-papers/IJPAM.pdf",
    doiUrl: "#",
  },
  {
    title: "A Model for Harnessing the Power of Social Media in Disaster Management",
    authors: "Shubham Deshpande, Revati Ganorkar, Mayur Giri, Gaurang Suki, Araddhana Deshmukh",
    venue: "ICPS 2018 — International Conference on Power Systems",
    year: "2018",
    abstract: "Proposed a platform that aggregates real-time information from YouTube, Twitter, and Facebook during disaster events, filters out misinformation and spam, and broadcasts SMS alerts to people in disaster-prone areas. Leverages social media's role as a dominant real-time communication channel to enhance disaster response.",
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
