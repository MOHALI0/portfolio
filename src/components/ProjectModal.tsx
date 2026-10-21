"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { X, ExternalLink, CheckCircle2, ShieldCheck, Database, Layers, ArrowUpRight, Cpu } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto portfolio-island p-6 sm:p-10 z-10 shadow-2xl bg-zinc-900 border border-zinc-800 rounded-3xl">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300">
                {project.role}
              </span>
              {project.team && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/80 text-emerald-300 border border-emerald-500/20">
                  {project.team}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-50 tracking-tight">
              {project.title}
            </h3>
            {project.arabicTitle && (
              <p className="text-sm sm:text-base font-semibold text-emerald-400 mt-0.5">
                {project.arabicTitle}
              </p>
            )}
            <p className="text-xs sm:text-sm font-medium text-zinc-400 mt-1">
              {project.organization}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gradient Visual Strip */}
        <div
          className={`w-full rounded-2xl bg-gradient-to-r ${project.imageGradient} p-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white shadow-inner mb-8`}
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-200">
              Architecture & System Blueprint
            </span>
            <p className="text-sm font-semibold text-white/90 mt-0.5">
              Smart Financial Identity (الهوية المالية الذكية) — Hackathon Presentation
            </p>
          </div>

          {project.metrics && (
            <div className="flex flex-wrap gap-2">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-black/35 backdrop-blur-md text-right text-xs font-bold border border-white/10"
                >
                  <span className="opacity-80 block text-[9px] font-normal">{m.label}</span>
                  {m.value}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Problem vs. Solution Grid (from PPTX) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-zinc-800/40 border border-zinc-800">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">
              The Challenge (التحدي)
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.problemStatement ||
                "Repetitive data entry and disparate manual verifications across banking branches prolong customer journeys and delay financing decisions."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-800/40 border border-zinc-800">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              Our Vision (رؤيتنا للحل)
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.solutionVision ||
                "A unified financial file powered by Open Banking protocols and AI analytics that aggregates multi-source records with customer consent."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-800/40 border border-zinc-800">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
              The Impact (الأثر)
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.impactStatement ||
                "Frictionless onboarding, rapid bank underwriting, elimination of cold telemarketing calls, and strict AML compliance."}
            </p>
          </div>
        </div>

        {/* 4 Departmental Dashboards (from PPTX) */}
        {project.departmentalDashboards && (
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
              4 Specialized Departmental Dashboards (لوحات التحكم المخصصة لكل إدارة)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.departmentalDashboards.map((dash, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-zinc-100">{dash.name}</span>
                    <span className="text-xs font-semibold text-emerald-400 font-sans">
                      {dash.arabicName}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{dash.roleDesc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Data Sources & Pipeline (from PPTX Slide 5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {project.dataSources && (
            <div className="p-4 rounded-2xl bg-zinc-800/40 border border-zinc-800">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                Data Sources (مصادر البيانات)
              </span>
              <ul className="space-y-1.5">
                {project.dataSources.map((ds, dsIdx) => (
                  <li key={dsIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>{ds}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.dataPipeline && (
            <div className="p-4 rounded-2xl bg-zinc-800/40 border border-zinc-800">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                Cleansing & ETL Pipeline (تنظيف ومعالجة البيانات)
              </span>
              <ul className="space-y-1.5">
                {project.dataPipeline.map((dp, dpIdx) => (
                  <li key={dpIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>{dp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Tech Stack Breakdown (from PPTX Slide 6) */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
            Technology Stack & Libraries (التقنيات المستخدمة)
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-xl text-xs font-semibold bg-zinc-800 text-zinc-200 border border-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-800">
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-700 bg-zinc-800 text-xs font-semibold hover:bg-zinc-700 transition-colors text-zinc-200"
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
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold transition-all shadow-md"
              >
                <span>Launch Live System</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-zinc-100"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
