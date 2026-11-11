import { useState } from 'react'
import { experience } from '../data/profile'
import { GlassCard } from '../components/GlassCard'
import { DetailModal } from '../components/DetailModal'
import { Calendar, Building, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react'

export function ExperienceView() {
  const [activeModalRole, setActiveModalRole] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash.includes('modal')) {
      return experience[0]
    }
    return null
  })

  return (
    <div className="space-y-2.5 sm:space-y-3 md:space-y-3.5 w-full">
      {/* 1. Sleek Compact Header Bar (Minimizes empty top space) */}
      <GlassCard className="p-3 sm:p-3.5 md:p-4 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#ff7a3d]/[0.12] blur-[70px] pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl glass-chip grid place-items-center text-[#ff7a3d] shrink-0">
              <Building size={16} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-base sm:text-lg font-semibold text-white tracking-tight">
                  Professional Experience
                </h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#ff7a3d]/15 text-[#ff7a3d] border border-[#ff7a3d]/30">
                  4 ROLES
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-white/65 mt-0.5">
                7+ years verified track record in enterprise technical writing, API reference design, and DITA authoring.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
            <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>CURRENTLY ACTIVE @ CHECK POINT</span>
            </span>
          </div>
        </div>
      </GlassCard>

      {/* 2. Balanced 2x2 Career Grid (Consistent card dimensions and spacing) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
        {experience.map((job, idx) => (
          <GlassCard
            key={job.company}
            className="p-3.5 sm:p-4 flex flex-col justify-between hover:bg-white/[0.08] transition duration-200 group"
          >
            <div>
              {/* Responsive Header Rows (No truncation, complete titles and company names) */}
              <div className="space-y-1.5 pb-2 mb-2">
                {/* Row 1: Job Title, Employment Status, and Period Badge */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-display text-sm sm:text-base font-semibold text-white leading-snug">
                      {job.role}
                    </h2>
                    {idx === 0 && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-400/15 text-emerald-300 border border-emerald-400/30 shrink-0">
                        Active
                      </span>
                    )}
                  </div>

                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full glass-chip text-[10px] font-mono text-white/65 shrink-0">
                    <Calendar size={11} className="opacity-60" />
                    <span>{job.period}</span>
                  </div>
                </div>

                {/* Row 2: Full Company Name on a Separate Line (No truncate) */}
                <p className="text-xs font-medium text-[#ff9b57] leading-relaxed">
                  {job.company}
                </p>
              </div>

              {/* Verified Highlights without unintended line clamp or ellipsis */}
              <ul className="space-y-1.5 text-xs text-white/75 leading-relaxed">
                {job.points.slice(0, 2).map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-[#ff7a3d] shrink-0 mt-0.5 opacity-90" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Action: Trigger Full Details Modal */}
            <div className="mt-2.5 pt-1.5 flex items-center justify-between flex-wrap gap-2">
              <span className="text-[10px] font-mono text-white/40">
                {job.points.length} verified responsibilities
              </span>
              <button
                type="button"
                onClick={() => setActiveModalRole(job)}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#ff9b57] hover:text-white transition group-hover:translate-x-0.5 duration-150"
              >
                <span>Inspect All Responsibilities</span>
                <ChevronRight size={13} />
              </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* 3. Reusable DetailModal for complete bulleted responsibilities */}
      {activeModalRole && (
        <DetailModal
          isOpen={Boolean(activeModalRole)}
          onClose={() => setActiveModalRole(null)}
          title={activeModalRole.role}
          subtitle={activeModalRole.company}
          badge={activeModalRole.period}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-white/50 pb-1">
              <Briefcase size={14} className="text-[#ff7a3d]" />
              <span>FULL VERIFIED RESPONSIBILITIES &amp; SCOPE ({activeModalRole.points.length})</span>
            </div>
            <ul className="space-y-2">
              {activeModalRole.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85 leading-relaxed bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                  <CheckCircle2 size={14} className="text-[#ff7a3d] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </DetailModal>
      )}
    </div>
  )
}
