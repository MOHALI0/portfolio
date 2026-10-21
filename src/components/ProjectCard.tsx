"use client";

import React from "react";
import { Project } from "@/data/portfolioData";
import { ArrowUpRight, Info, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-3xl bg-zinc-50/70 dark:bg-zinc-800/30 border border-zinc-200/70 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-lg overflow-hidden group">
      {/* Top Visual Accent Strip */}
      <div
        className={`h-28 w-full bg-gradient-to-r ${project.imageGradient} p-5 flex flex-col justify-between text-white relative overflow-hidden`}
      >
        <div className="flex items-center justify-between gap-2 relative z-10">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-black/30 backdrop-blur-md uppercase tracking-wider">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white text-zinc-900 shadow-sm">
              Featured
            </span>
          )}
        </div>

        <div className="flex items-end justify-between relative z-10">
          <span className="text-xs font-medium text-white/90">{project.role}</span>
          {project.organization && (
            <span className="text-[11px] text-white/80 font-medium truncate max-w-[200px]">
              {project.organization}
            </span>
          )}
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-4">
          {project.subtitle}
        </p>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5 line-clamp-3">
          {project.summary}
        </p>

        {/* Highlights */}
        <div className="space-y-1.5 mb-6">
          {project.keyHighlights.slice(0, 2).map((highlight, hIdx) => (
            <div
              key={hIdx}
              className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.slice(0, 4).map((tech, tIdx) => (
            <span
              key={tIdx}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[11px] font-medium px-1.5 py-0.5 text-zinc-400 dark:text-zinc-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action Row */}
        <div className="mt-auto pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <Info className="w-3.5 h-3.5 text-emerald-500" />
            <span>Details & Specs</span>
          </button>

          <div className="flex items-center gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-zinc-200/60 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                title="View GitHub"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <span>Demo</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
