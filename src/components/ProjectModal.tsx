"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Database, Zap } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto portfolio-island p-6 sm:p-8 z-10 shadow-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {project.role}
              </span>
              {project.organization && (
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                  • {project.organization}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gradient Visual Strip */}
        <div
          className={`w-full h-24 rounded-2xl bg-gradient-to-r ${project.imageGradient} p-4 flex items-end justify-between text-white shadow-inner mb-6`}
        >
          <div className="text-xs font-semibold uppercase tracking-wider opacity-90">
            System Architecture & Deep Dive
          </div>
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex gap-2">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-black/25 backdrop-blur-md text-right text-xs font-bold"
                >
                  <span className="opacity-80 block text-[10px] font-normal">{m.label}</span>
                  {m.value}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Narrative Description */}
        <div className="space-y-4 mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
            Overview & Problem Space
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Architectural Accomplishments */}
        <div className="space-y-3 mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
            Key Architectural Achievements
          </h4>
          <div className="space-y-2">
            {project.keyHighlights.map((highlight, hIdx) => (
              <div
                key={hIdx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Breakdown */}
        <div className="mb-8">
          <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-3">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-800 dark:text-zinc-200"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
