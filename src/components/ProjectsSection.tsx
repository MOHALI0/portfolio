"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const flagshipProject = projects[0];

  return (
    <section id="projects" className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-8">
      <div className="portfolio-island p-8 sm:p-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold glass-pill mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Flagship FinTech Innovation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-50 tracking-tight">
              Featured Project Showcase
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              The complete architecture of the <span className="text-emerald-400 font-semibold">Unified Financial File System</span> (الهوية المالية الذكية) — engineered for the Tuwaiq Academy & Alinma Bank FinTech Hackathon 2026.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-zinc-800 text-zinc-300 border border-zinc-700/80">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Open Banking & AI System</span>
          </div>
        </div>

        {/* Flagship Project Showcase */}
        {flagshipProject && (
          <div className="w-full">
            <ProjectCard
              project={flagshipProject}
              onSelect={(p) => setSelectedProject(p)}
            />
          </div>
        )}

        {/* Selected Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
