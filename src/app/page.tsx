import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustTicker from "@/components/TrustTicker";
import Competencies from "@/components/Competencies";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300">
      {/* Sticky Navigation matching inspiration pill top bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust & Credibility Strip */}
      <TrustTicker />

      {/* Value Statement & 4-Column Competency Pillars */}
      <Competencies />

      {/* Projects Showcase with interactive filtering & architecture modals */}
      <ProjectsSection />

      {/* Skills Matrix, Marquee Ticker & Academic Rigor */}
      <SkillsSection />

      {/* Trajectory, Hackathons & Experience Milestones */}
      <ExperienceSection />

      {/* Contact Island & Direct Connection Form */}
      <ContactSection />

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}
