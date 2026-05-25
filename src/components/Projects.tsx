"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, GitFork, ExternalLink, Clock } from "lucide-react";
import { FiGithub } from "react-icons/fi";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
}

const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  Ruby: "#701516",
  "C#": "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Go: "#00ADD8",
  Rust: "#dea584",
};

function SkeletonCard() {
  return (
    <div className="card animate-pulse">
      <div className="h-5 bg-dark-600 rounded w-3/4 mb-3" />
      <div className="h-4 bg-dark-600 rounded w-full mb-2" />
      <div className="h-4 bg-dark-600 rounded w-2/3 mb-4" />
      <div className="flex gap-4">
        <div className="h-3 bg-dark-600 rounded w-12" />
        <div className="h-3 bg-dark-600 rounded w-12" />
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays < 1) return "today";
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
  return `${Math.floor(diffDays / 365)}y ago`;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    fetch("https://api.github.com/users/Gaurang21/repos?sort=updated&per_page=12")
      .then((r) => {
        if (!r.ok) throw new Error("Failed");
        return r.json();
      })
      .then((data: Repo[]) => {
        setRepos(data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-24 bg-dark-800/50">
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
              Open Source
            </span>
          </div>
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <h2 className="section-title mb-0">
              GitHub <span className="gradient-text">Projects</span>
            </h2>
            <a
              href="https://github.com/Gaurang21"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              <FiGithub size={16} />
              View All on GitHub
            </a>
          </div>

          {error && (
            <div className="text-center py-16 text-gray-500">
              <FiGithub size={48} className="mx-auto mb-4 opacity-30" />
              <p>Unable to load repositories. Visit GitHub directly.</p>
              <a
                href="https://github.com/Gaurang21"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 btn-primary inline-flex"
              >
                <FiGithub size={16} />
                Open GitHub Profile
              </a>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : repos.map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.08 + 0.2 }}
                    className="card group hover:-translate-y-2 flex flex-col cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-white font-semibold group-hover:text-primary-300 transition-colors truncate pr-2">
                        {repo.name}
                      </h3>
                      <ExternalLink
                        size={14}
                        className="text-gray-600 group-hover:text-primary-400 transition-colors shrink-0 mt-1"
                      />
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4 line-clamp-2">
                      {repo.description || "No description available."}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                              backgroundColor:
                                languageColors[repo.language] || "#8b949e",
                            }}
                          />
                          <span>{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star size={11} />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={11} />
                        <span>{repo.forks_count}</span>
                      </div>
                      <div className="flex items-center gap-1 ml-auto">
                        <Clock size={11} />
                        <span>{formatDate(repo.updated_at)}</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
