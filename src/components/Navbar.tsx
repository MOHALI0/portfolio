"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Copy, Check, FileDown, ArrowUpRight, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.personal.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Expertise", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto transition-all">
      <nav className="portfolio-island px-4 sm:px-6 py-3 flex items-center justify-between gap-3 backdrop-blur-xl bg-opacity-90 dark:bg-opacity-90">
        {/* Left Side: Contact pills (Inspired by reference) */}
        <div className="flex items-center gap-2">
          {/* Email badge + copy button */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium glass-pill">
            <span className="truncate max-w-[140px] sm:max-w-none text-zinc-700 dark:text-zinc-300">
              {portfolioData.personal.contact.email}
            </span>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-200/80 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition-colors text-xs font-semibold focus:outline-none"
              title="Copy Email to Clipboard"
              aria-label="Copy Email"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-zinc-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* CV Pill button */}
          <a
            href="/resume.pdf"
            download="Mohammed_Ali_Al_Sidran_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-all shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
        </div>

        {/* Center: Desktop Navigation links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side: Social icons & Theme toggle */}
        <div className="flex items-center gap-2">
          <a
            href={portfolioData.personal.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={portfolioData.personal.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
            aria-label="Open Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 portfolio-island p-4 flex flex-col gap-2 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-2xl transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Mohammed_Ali_Al_Sidran_CV.pdf"
            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium text-sm"
          >
            <FileDown className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </a>
        </div>
      )}
    </header>
  );
}
