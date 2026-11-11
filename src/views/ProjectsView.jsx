import { useState } from 'react'
import { projects } from '../data/profile'
import { GlassCard } from '../components/GlassCard'
import { DetailModal } from '../components/DetailModal'
import { FolderGit2, ExternalLink, ChevronRight, CheckCircle2 } from 'lucide-react'

const allProjects = [
  {
    ...projects[0],
    id: 'sase-dita',
    title: 'SASE & Playblocks Documentation Modernization',
    description:
      'Enterprise documentation modernisation, including migration from MadCap Flare to DITA using Oxygen XML and Content Fusion.',
    category: 'Enterprise Architecture',
    badge: 'Proprietary Enterprise Case Study',
    bullets: [
      'Authored and maintained comprehensive architecture and user guides for Check Point SASE and Playblocks.',
      'Led migration of enterprise documentation suites from MadCap Flare to structured DITA XML pipelines.',
      'Configured Oxygen XML Editor workflows and Content Fusion review cycles for distributed engineering teams.',
      'Developed internal AI-assisted workflows and agents for automated schema review and documentation consistency.',
    ],
  },
  {
    ...projects[1],
    id: 'runaway',
    title: 'RUNAWAY',
    description: "An interactive login experiment where the login button avoids the user's cursor.",
    category: 'Public Personal Project',
    badge: 'Open Source Interactive Prototype',
    bullets: [
      'Interactive login experience featuring physics-based cursor avoidance algorithms.',
      'Built with modern frontend standards, responsive micro-interactions, and reactive state management.',
      'Demonstrates playful UI engineering, collision detection mathematics, and smooth animation transitions.',
    ],
  },
  {
    ...projects[2],
    id: 'ai-rag-agent',
    title: 'Documentation AI Agent & Schema RAG',
    description:
      'A practical learning project exploring AI-assisted documentation, OpenAPI validation, RAG and developer search.',
    tags: ['Python', 'RAG', 'AI Agents', 'OpenAPI'],
    category: 'Practical Learning Roadmap',
    badge: 'Active Exploration & Prototype',
    status: 'Practical Learning Roadmap',
    bullets: [
      'Exploring vector embeddings and chunking strategies tailored to structured DITA XML and OpenAPI specifications.',
      'Prototyping automated drift detectors that alert developers when API schemas fall out of sync with documentation.',
      'Designing agentic workflows for automated changelog synthesis and developer query contextualization.',
    ],
  },
]

export function ProjectsView() {
  const [activeModalProject, setActiveModalProject] = useState(null)

  return (
    <div className="space-y-2.5 sm:space-y-3 md:space-y-3.5 w-full">
      {/* 1. Header Banner */}
      <GlassCard className="p-3 sm:p-3.5 md:p-4 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#ff7a3d]/[0.12] blur-[70px] pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl glass-chip grid place-items-center text-[#ff7a3d] shrink-0">
              <FolderGit2 size={16} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-base sm:text-lg font-semibold text-white tracking-tight">
                  Featured Projects
                </h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#ff7a3d]/15 text-[#ff7a3d] border border-[#ff7a3d]/30">
                  3 SHOWCASE ITEMS
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-white/65 mt-0.5">
                Enterprise documentation architecture, interactive UI experiments, and active AI engineering exploration.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
            <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-full glass-chip text-white/70">
              VERIFIED PORTFOLIO
            </span>
          </div>
        </div>
      </GlassCard>

      {/* 2. Responsive 3-Column Grid with Consistent Card Heights (Balanced 2-col on Tablet, 3-col on Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 items-stretch">
        {allProjects.map((p, idx) => (
          <GlassCard
            key={p.title}
            className={`p-4 sm:p-4.5 flex flex-col justify-between h-full hover:bg-white/[0.08] transition duration-200 group ${
              idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono text-white/40">
                  ITEM 0{idx + 1}
                </span>
                {p.link ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Open Source
                  </span>
                ) : p.status ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30">
                    Roadmap
                  </span>
                ) : (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#ff7a3d]/15 text-[#ff7a3d] border border-[#ff7a3d]/30">
                    Enterprise
                  </span>
                )}
              </div>

              {/* Title & Complete Concise Description (No truncation / line-clamp) */}
              <h2 className="font-display text-sm sm:text-base font-semibold text-white mb-1.5 group-hover:text-[#ff9b57] transition">
                {p.title}
              </h2>

              <p className="text-xs text-white/75 leading-relaxed mb-3 min-h-[48px]">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md glass-chip text-white/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions Aligned Across Cards */}
            <div className="pt-2 flex items-center justify-between flex-wrap gap-2">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#ff9b57] hover:text-white transition"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveModalProject(p)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#ff9b57] hover:text-white transition"
                >
                  <span>Inspect Case Study</span>
                  <ChevronRight size={13} />
                </button>
              )}

              <button
                type="button"
                onClick={() => setActiveModalProject(p)}
                title="View architectural details"
                className="text-[11px] font-mono text-white/50 hover:text-white transition"
              >
                Details &rarr;
              </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* 3. DetailModal for Project Scope & Case Study */}
      {activeModalProject && (
        <DetailModal
          isOpen={Boolean(activeModalProject)}
          onClose={() => setActiveModalProject(null)}
          title={activeModalProject.title}
          subtitle={activeModalProject.category}
          badge={activeModalProject.badge}
        >
          <div className="space-y-4">
            <p className="text-sm text-white/85 leading-relaxed">
              {activeModalProject.description}
            </p>

            <div className="space-y-2">
              <p className="text-xs font-mono text-[#ff9b57] uppercase tracking-wider">
                Key Technical Highlights &amp; Scope
              </p>
              <ul className="space-y-2">
                {activeModalProject.bullets?.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85 bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                    <CheckCircle2 size={14} className="text-[#ff7a3d] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md glass-chip text-white/80">
                    {t}
                  </span>
                ))}
              </div>

              {activeModalProject.link && (
                <a
                  href={activeModalProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 h-8 rounded-full bg-white text-black text-xs font-medium flex items-center gap-1.5 hover:bg-white/90 transition shadow-sm"
                >
                  <span>View Repository on GitHub</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </DetailModal>
      )}
    </div>
  )
}
