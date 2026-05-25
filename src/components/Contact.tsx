"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle, XCircle } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // TODO: Replace with your Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-dark-800/50">
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
              Get In Touch
            </span>
          </div>
          <h2 className="section-title mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl">
            Whether you have an opportunity, a project idea, or just want to
            say hi — my inbox is always open.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "gaurang.suki@gmail.com",
                  href: "mailto:gaurang.suki@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+1 (510)-305-9836",
                  href: "tel:+15103059836",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Fremont, CA",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-white font-medium hover:text-primary-300 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4 flex gap-4">
                <a
                  href="https://github.com/Gaurang21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600 transition-all"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gaurang-suki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600 transition-all"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-dark-700 border border-dark-600 focus:border-primary-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-dark-700 border border-dark-600 focus:border-primary-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full bg-dark-700 border border-dark-600 focus:border-primary-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, role, or just say hello..."
                  required
                  rows={5}
                  className="w-full bg-dark-700 border border-dark-600 focus:border-primary-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {/* Toast notification */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
                >
                  <CheckCircle size={16} />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                >
                  <XCircle size={16} />
                  Something went wrong. Please email me directly.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
