import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ImpactNumbers from "@/components/ImpactNumbers";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Certifications from "@/components/Certifications";
import ResearchPapers from "@/components/ResearchPapers";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <Navbar />
      <Hero />
      <About />
      <ImpactNumbers />
      <Experience />
      <Skills />
      <Projects />
      <CurrentlyLearning />
      <Certifications />
      <ResearchPapers />
      <Education />
      <Testimonials />
      <Hobbies />
      <Contact />
      <Footer />
      <ThemeSwitcher />
    </main>
  );
}
