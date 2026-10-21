"use client";

import React from "react";
import { Project } from "@/data/portfolioData";
import { ArrowUpRight, Info, CheckCircle2, ShieldCheck, TrendingUp, Users, AlertTriangle, Database } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all shadow-xl overflow-hidden group">
      {/* Visual Accent Banner */}
      <div
        className={`w-full bg-gradient-to-r ${project.imageGradient} p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden`}
      >
        <div className="flex items-center justify-between gap-2 relative z-10 flex-wrap mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/40 backdrop-blur-md uppercase tracking-wider border border-white/10">
              {project.category}
            </span>
            {project.team && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/20">
                {project.team}
              </span>
            )}
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-zinc-950 shadow-md">
            Hackathon Lead Innovation
          </span>
        </div>

        <div className="relative z-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-300">
            {project.organization}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            {project.title}
          </h3>
          {project.arabicTitle && (
            <p className="text-sm sm:text-base font-semibold text-emerald-100/90 mt-1 font-sans">
              {project.arabicTitle}
            </p>
          )}
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        {/* Subtitle & Role */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-zinc-800">
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            {project.role}
          </span>
          <span className="text-xs text-zinc-400 font-medium">
            {project.subtitle}
          </span>
        </div>

        {/* Summary */}
        <p className="text-sm text-zinc-300 leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* 4 Departmental Dashboards Grid (from PPTX) */}
        {project.departmentalDashboards && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                4 Specialized Bank Dashboards (لوحات التحكم المتخصصة)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.departmentalDashboards.map((dash, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-zinc-800/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-zinc-200">
                      {dash.name}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400 font-sans">
                      {dash.arabicName}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    {dash.roleDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Architectural Highlights */}
        <div className="space-y-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
            Core Engineering Highlights
          </span>
          {project.keyHighlights.map((highlight, hIdx) => (
            <div
              key={hIdx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
            Verified Tech Stack (التقنيات المستخدمة)
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        {project.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 pt-4 border-t border-zinc-800">
            {project.metrics.map((m, mIdx) => (
              <div
                key={mIdx}
                className="p-3 rounded-xl bg-zinc-800/30 border border-zinc-800/60 text-center"
              >
                <div className="text-xs sm:text-sm font-bold text-emerald-400">
                  {m.value}
                </div>
                <div className="text-[10px] text-zinc-400 font-medium mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Row */}
        <div className="mt-auto pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-white transition-colors px-3 py-2 rounded-xl bg-zinc-800/70 hover:bg-zinc-800 border border-zinc-700/60"
          >
            <Info className="w-4 h-4 text-emerald-400" />
            <span>Full System Architecture Specs</span>
          </button>

          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors border border-zinc-700"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold transition-all shadow-md hover:shadow-emerald-500/20"
              >
                <span>Launch Live System</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
