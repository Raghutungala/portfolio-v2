import { profile, skillGroups, aiTopics } from '../data/profile'
import { GlassCard } from '../components/GlassCard'
import { User, BookOpen, Layers, Terminal, Sparkles, MapPin, Calendar, Briefcase } from 'lucide-react'

export function AboutView() {
  return (
    <div className="space-y-2.5 sm:space-y-3 md:space-y-3.5 w-full">
      {/* 1. Profile Overview Header */}
      <GlassCard className="p-3 sm:p-3.5 md:p-4 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#ff7a3d]/[0.12] blur-[70px] pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full glass-chip text-[11px] font-mono text-[#ff9b57] mb-1.5">
              <User size={12} />
              <span>PROFILE &amp; EXPERTISE</span>
            </div>
            <h1 className="font-display text-base sm:text-lg md:text-xl font-semibold text-white tracking-tight">
              About {profile.name}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-[#ff9b57] mt-0.5">
              Technical Writer • API Documentation • Structured Authoring Specialist
            </p>
            {/* Complete, unclipped introductory description */}
            <p className="mt-1.5 text-xs text-white/75 leading-relaxed">
              {profile.summary}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-1.5 sm:gap-2 shrink-0 md:pl-4 text-[11px] font-mono text-white/60">
            <div className="flex items-center gap-1.5">
              <MapPin size={12} className="text-[#ff7a3d]" />
              <span className="text-white">{profile.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={12} className="text-violet-400" />
              <span className="text-white">7+ Years Enterprise</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase size={12} className="text-emerald-400" />
              <span className="text-white">Check Point Software</span>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* 2. Established Core Expertise (4 Primary Pillars in 4-Column Grid) */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a3d]" />
            <h2 className="font-display text-xs sm:text-sm font-semibold text-white">
              Established Professional Capabilities (7+ Years Industry Track Record)
            </h2>
          </div>
          <span className="text-[10px] font-mono text-white/40 hidden sm:inline">4 CORE PILLARS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 items-stretch">
          {/* Pillar 1: Technical Documentation */}
          <GlassCard className="p-3 sm:p-3.5 flex flex-col justify-between h-full hover:bg-white/[0.08] transition">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#ff9b57] mb-1">
                <BookOpen size={13} />
                <span>FOUNDATION</span>
              </div>
              <h3 className="font-display text-xs sm:text-sm font-semibold text-white mb-1">
                Technical Documentation
              </h3>
              <p className="text-[11px] text-white/75 leading-relaxed mb-2.5 min-h-[34px]">
                End-to-end user manuals, product guides, architecture documentation and release content.
              </p>
            </div>
            <div className="pt-1.5 flex flex-wrap gap-1">
              {skillGroups[0].items.map((it) => (
                <span key={it} className="text-[9px] font-mono px-1.5 py-0.2 rounded glass-chip text-white/80">
                  {it}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Pillar 2: API & Developer Documentation */}
          <GlassCard className="p-3 sm:p-3.5 flex flex-col justify-between h-full hover:bg-white/[0.08] transition">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#ff9b57] mb-1">
                <Layers size={13} />
                <span>DEV EXPERIENCE</span>
              </div>
              <h3 className="font-display text-xs sm:text-sm font-semibold text-white mb-1">
                API &amp; Developer Docs
              </h3>
              <p className="text-[11px] text-white/75 leading-relaxed mb-2.5 min-h-[34px]">
                REST API references, Swagger specifications, Postman collections and developer onboarding.
              </p>
            </div>
            <div className="pt-1.5 flex flex-wrap gap-1">
              {skillGroups[1].items.map((it) => (
                <span key={it} className="text-[9px] font-mono px-1.5 py-0.2 rounded glass-chip text-white/80">
                  {it}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Pillar 3: DITA XML & Structured Authoring */}
          <GlassCard className="p-3 sm:p-3.5 flex flex-col justify-between h-full hover:bg-white/[0.08] transition">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#ff9b57] mb-1">
                <BookOpen size={13} />
                <span>ARCHITECTURE</span>
              </div>
              <h3 className="font-display text-xs sm:text-sm font-semibold text-white mb-1">
                DITA XML &amp; Structured
              </h3>
              <p className="text-[11px] text-white/75 leading-relaxed mb-2.5 min-h-[34px]">
                DITA migration, modular content, Oxygen XML and Content Fusion workflows.
              </p>
            </div>
            <div className="pt-1.5 flex flex-wrap gap-1">
              {skillGroups[2].items.map((it) => (
                <span key={it} className="text-[9px] font-mono px-1.5 py-0.2 rounded glass-chip text-white/80">
                  {it}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Pillar 4: Developer Tools & Workflows */}
          <GlassCard className="p-3 sm:p-3.5 flex flex-col justify-between h-full hover:bg-white/[0.08] transition">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#ff9b57] mb-1">
                <Terminal size={13} />
                <span>WORKFLOWS</span>
              </div>
              <h3 className="font-display text-xs sm:text-sm font-semibold text-white mb-1">
                Tools &amp; Docs-as-Code
              </h3>
              <p className="text-[11px] text-white/75 leading-relaxed mb-2.5 min-h-[34px]">
                Git version control, CI/CD documentation workflows, and Agile collaboration.
              </p>
            </div>
            <div className="pt-1.5 flex flex-wrap gap-1">
              {skillGroups[3].items.map((it) => (
                <span key={it} className="text-[9px] font-mono px-1.5 py-0.2 rounded glass-chip text-white/80">
                  {it}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* 3. AI Engineering — Active Learning Roadmap */}
      <GlassCard className="p-3.5 sm:p-4 relative overflow-hidden border-violet-500/30">
        <div className="absolute -left-16 -top-16 w-60 h-60 rounded-full bg-violet-600/[0.12] blur-[70px] pointer-events-none" />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 pb-1 mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded-lg bg-violet-500/20 text-violet-300 grid place-items-center shrink-0">
                <Sparkles size={13} />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-xs sm:text-sm font-semibold text-white">
                  AI Engineering — Active Learning Roadmap
                </h3>
                <p className="text-[10px] font-mono text-violet-300/80 leading-normal">
                  Practical engineering transition in progress • Not claimed as prior commercial employment
                </p>
              </div>
            </div>

            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30 shrink-0 whitespace-nowrap self-start md:self-auto">
              ACTIVE ROADMAP
            </span>
          </div>

          <p className="text-[11px] text-white/75 leading-relaxed mb-2.5">
            Actively building hands-on competencies in agentic documentation workflows, automated OpenAPI schema validation, retrieval-augmented generation (RAG), and developer search tools.
          </p>

          <div className="flex flex-wrap gap-1.5">
            {aiTopics.map((topic) => (
              <span
                key={topic}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-200 border border-violet-500/20"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
