"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Send,
  MessageSquare,
  CheckCircle2,
  Copy,
  Check,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-8">
      {/* Contact Island (Inspired directly by 25909e9b-0e5b-4e95-be89-e80f65ee6480.png) */}
      <div className="portfolio-island relative overflow-hidden p-8 sm:p-14 text-center">
        {/* Ambient background blur */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Handshake / Sparkle icon badge */}
        <div className="w-14 h-14 rounded-3xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <span className="text-2xl select-none">🤝</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
          Tell me about your next project
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you want to discuss full-stack engineering, explore a fintech collaboration, or simply say hello, my inbox is always open.
        </p>

        {/* Action Pills Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {/* Email Me Button */}
          <a
            href={`mailto:${personal.contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </a>

          {/* Copy Email Pill */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-500" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          {/* WhatsApp Pill */}
          <a
            href={personal.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-emerald-500" />
            <span>WhatsApp</span>
          </a>

          {/* LinkedIn Pill */}
          <a
            href={personal.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shadow-sm"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-500" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Interactive Direct Message Form */}
        <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-200/70 dark:border-zinc-800/80 text-left">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                Message Sent Successfully!
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto mb-6">
                Thank you, {formData.name}. Mohammed has received your message and will reply to{" "}
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{formData.email}</span> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="px-4 py-2 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-semibold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Direct Inquiries
                </span>
                <span className="text-[11px] text-zinc-400">Response within 24h</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="FinTech project inquiry / Engineering opportunity"
                  className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your project, timeline, or requirements..."
                  className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
