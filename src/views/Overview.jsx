import { useState } from 'react'
import { profile, projects } from '../data/profile'
import { GlassCard } from '../components/GlassCard'
import { Mail, ArrowRight, Briefcase, FileCode, Sparkles, ExternalLink, BookOpen, Layers, Terminal } from 'lucide-react'

const domainCompetencies = [
  {
    title: 'API & Developer Documentation',
    subtitle: 'REST APIs, OpenAPI / Swagger, Postman, Developer Onboarding',
    status: 'Core Expertise',
    statusClass: 'bg-[#ff7a3d]/15 text-[#ff7a3d] border-[#ff7a3d]/30',
    icon: Layers,
  },
  {
    title: 'DITA XML & Structured Authoring',
    subtitle: 'Oxygen XML Editor, Content Fusion, MadCap Flare, Modular Topics',
    status: 'Core Expertise',
    statusClass: 'bg-[#ff7a3d]/15 text-[#ff7a3d] border-[#ff7a3d]/30',
    icon: BookOpen,
  },
  {
    title: 'Technical Writing & Content Architecture',
    subtitle: 'User Manuals, Release Notes, Information Architecture, Style Guides',
    status: 'Core Expertise',
    statusClass: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/30',
    icon: FileCode,
  },
  {
    title: 'Developer Tools & Workflows',
    subtitle: 'Git & GitHub, Docs-as-Code, Jira / Agile, Camtasia & Snagit',
    status: 'Production Stack',
    statusClass: 'bg-sky-400/15 text-sky-300 border-sky-400/30',
    icon: Terminal,
  },
  {
    title: 'AI Engineering & Automation',
    subtitle: 'LLM Orchestration, RAG Exploration, Schema Drift Detection, Python',
    status: 'Active Learning',
    statusClass: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    icon: Sparkles,
  },
]

function getGreeting() {
  if (typeof window === 'undefined') return 'Welcome'
  const hour = new Date().getHours()
  return hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'
}

export function Overview({ onViewChange }) {
  const [greeting] = useState(getGreeting)

  return (
    <div className="space-y-3 sm:space-y-3.5 md:space-y-4 w-full">
      {/* 1. Hero / Identity Banner */}
      <GlassCard className="p-4 sm:p-5 md:p-5.5 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-[#ff7a3d]/[0.15] blur-[70px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full glass-chip text-[11px] font-mono text-white/70 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM ONLINE • {profile.location.toUpperCase()}</span>
            </div>

            <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white leading-tight">
              {greeting}, I&apos;m <span className="text-white">{profile.name}</span>
            </h1>

            <p className="text-xs sm:text-sm font-medium text-[#ff9b57] font-display mt-0.5">
              {profile.title} <span className="text-white/30">•</span> API &amp; Developer Documentation <span className="text-white/30">•</span> AI Engineering Explorer
            </p>

            <p className="mt-2 text-white/75 text-xs sm:text-sm leading-relaxed max-w-2xl">
              {profile.summary}
            </p>
          </div>

          <div className="flex flex-row lg:flex-col gap-2 shrink-0 self-start lg:self-center mt-1 lg:mt-0">
            <button
              type="button"
              onClick={() => onViewChange('experience')}
              className="px-4 h-8.5 rounded-full bg-white text-black text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-white/90 transition shadow-sm"
            >
              <Briefcase size={13} />
              <span>Experience</span>
            </button>
            <button
              type="button"
              onClick={() => onViewChange('contact')}
              className="px-4 h-8.5 rounded-full glass-chip text-white text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-white/10 transition"
            >
              <Mail size={13} />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </GlassCard>

      {/* 2. Three Compact Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
        <GlassCard className="p-3 sm:p-3.5 relative overflow-hidden group hover:bg-white/[0.08] transition">
          <div className="flex justify-between items-start mb-1.5">
            <div className="w-8 h-8 rounded-lg glass-chip grid place-items-center text-[#ff7a3d]">
              <FileCode size={15} />
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full glass-chip text-white/60">VERIFIED</span>
          </div>
          <div className="text-2xl font-display font-semibold text-white">7+ Years</div>
          <p className="text-xs font-medium text-white/80 mt-0.5">Technical Documentation</p>
          <p className="text-[10px] text-white/50 font-mono">Enterprise Software &amp; Developer APIs</p>
        </GlassCard>

        <GlassCard className="p-3 sm:p-3.5 relative overflow-hidden group hover:bg-white/[0.08] transition">
          <div className="flex justify-between items-start mb-1.5">
            <div className="w-8 h-8 rounded-lg glass-chip grid place-items-center text-violet-400">
              <Briefcase size={15} />
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full glass-chip text-white/60">TRACK RECORD</span>
          </div>
          <div className="text-2xl font-display font-semibold text-white">4 Enterprises</div>
          <p className="text-xs font-medium text-white/80 mt-0.5">Career Foundation</p>
          <p className="text-[10px] text-white/50 font-mono">Check Point • Google • FedEx • JOSH</p>
        </GlassCard>

        <GlassCard className="p-3 sm:p-3.5 relative overflow-hidden group hover:bg-white/[0.08] transition md:col-span-2 lg:col-span-1">
          <div className="flex justify-between items-start mb-1.5">
            <div className="w-8 h-8 rounded-lg glass-chip grid place-items-center text-emerald-400">
              <Sparkles size={15} />
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full glass-chip text-white/60">SPECIALTY</span>
          </div>
          <div className="text-2xl font-display font-semibold text-white">DITA XML</div>
          <p className="text-xs font-medium text-white/80 mt-0.5">Structured Authoring &amp; AI</p>
          <p className="text-[10px] text-white/50 font-mono">Oxygen XML, Content Fusion, Docs-as-Code</p>
        </GlassCard>
      </div>

      {/* 3. Balanced Two-Column Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-3 sm:gap-3.5">
        {/* Left Column: Descriptive Domain Competencies */}
        <GlassCard className="p-4 sm:p-4.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <Layers size={15} className="text-[#ff7a3d]" />
                <h3 className="font-display text-sm font-semibold text-white">Core Competencies &amp; Stacks</h3>
              </div>
              <span className="text-[10px] font-mono text-white/40">5 DOMAINS</span>
            </div>
            <p className="text-[11px] text-white/60 mb-2.5">
              Verified technical writing proficiencies and ongoing engineering specializations.
            </p>

            {/* Structured Capability Domain Cards */}
            <div className="space-y-1.5">
              {domainCompetencies.map((comp) => {
                const CompIcon = comp.icon
                return (
                  <div
                    key={comp.title}
                    className="p-2 sm:p-2.5 rounded-xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.05] transition flex items-center justify-between gap-2.5"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-lg glass-chip grid place-items-center text-white/80 shrink-0">
                        <CompIcon size={13} className="text-[#ff7a3d]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white truncate">{comp.title}</p>
                        <p className="text-[10px] text-white/60 font-mono truncate">{comp.subtitle}</p>
                      </div>
                    </div>
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded-md border shrink-0 whitespace-nowrap ${comp.statusClass}`}
                    >
                      {comp.status}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-2.5 pt-1.5 grid grid-cols-3 gap-2 text-center">
            <div className="glass-chip rounded-lg p-1.5">
              <p className="text-[9px] font-mono text-white/40">SPECIALTY</p>
              <p className="text-[11px] font-medium text-white truncate">DITA XML</p>
            </div>
            <div className="glass-chip rounded-lg p-1.5">
              <p className="text-[9px] font-mono text-white/40">CORE FOCUS</p>
              <p className="text-[11px] font-medium text-white truncate">REST APIs</p>
            </div>
            <div className="glass-chip rounded-lg p-1.5">
              <p className="text-[9px] font-mono text-white/40">ROADMAP</p>
              <p className="text-[11px] font-medium text-white truncate">AI Engineering</p>
            </div>
          </div>
        </GlassCard>

        {/* Right Column: Recent Work & Featured Preview */}
        <GlassCard className="p-4 sm:p-4.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display text-sm font-semibold text-white">Recent Work &amp; Focus</h3>
              <button
                type="button"
                onClick={() => onViewChange('experience')}
                className="text-[11px] font-mono text-[#ff9b57] hover:underline flex items-center gap-1"
              >
                <span>Timeline</span> <ArrowRight size={11} />
              </button>
            </div>

            <div className="space-y-2 relative">
              <div className="flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 mt-1 shrink-0 shadow-[0_0_6px_#34d399]" />
                <div className="glass-chip rounded-lg p-2 flex-1">
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs font-semibold text-white">Check Point SASE &amp; Playblocks</p>
                    <span className="text-[9px] font-mono text-[#ff9b57]">Nov 2025 – Present</span>
                  </div>
                  <p className="text-[11px] text-white/70 mt-0.5">DITA migration, Oxygen XML and product guides.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-violet-400 mt-1 shrink-0 shadow-[0_0_6px_#a78bfa]" />
                <div className="glass-chip rounded-lg p-2 flex-1">
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs font-semibold text-white">Internal AI Automation Tooling</p>
                    <span className="text-[9px] font-mono text-white/40">Tooling</span>
                  </div>
                  <p className="text-[11px] text-white/70 mt-0.5">AI-assisted content review and documentation workflows.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-amber-400 mt-1 shrink-0 shadow-[0_0_6px_#fbbf24]" />
                <div className="glass-chip rounded-lg p-2 flex-1">
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs font-semibold text-white">Google Platform Documentation</p>
                    <span className="text-[9px] font-mono text-white/40">2023 – 2025</span>
                  </div>
                  <p className="text-[11px] text-white/70 mt-0.5">Developer guides, REST API references and video tutorials.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2.5 pt-1.5 flex items-center justify-between text-[11px] font-mono">
            <span className="text-white/40">Enterprise Architecture</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onViewChange('projects')}
                className="text-[#ff9b57] hover:underline flex items-center gap-1"
              >
                <span>Projects</span> &rarr;
              </button>
              {projects[1]?.link && (
                <a
                  href={projects[1].link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white flex items-center gap-1"
                >
                  <span>RUNAWAY</span> <ExternalLink size={10} />
                </a>
              )}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
