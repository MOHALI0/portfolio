"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Sparkles, Layers } from "lucide-react";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "FinTech & Web", "Systems & Python", "Data Science & AI"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-8">
      <div className="portfolio-island p-8 sm:p-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold glass-pill mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Featured Work & Systems
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
              From hackathon-winning FinTech architectures to real-time analytics engines and algorithmic utilities.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Selected Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
