import { useState } from 'react'
import { GlassCard } from '../components/GlassCard'
import { DetailModal } from '../components/DetailModal'
import { Images, ExternalLink, Code2, BookOpen, Layers, Terminal, Database, MoveRight, ChevronRight, CheckCircle2 } from 'lucide-react'

const categories = ['All', 'Web Apps', 'UI Experiments', 'Documentation', 'AI Experiments']

const galleryItems = [
  {
    id: 'runaway',
    title: 'RUNAWAY Interactive Login',
    subtitle: "A playful login interface with a button that evades the user's cursor.",
    category: 'UI Experiments',
    extraCategories: ['Web Apps'],
    type: 'Personal Project',
    badge: 'Interactive Prototype',
    icon: Code2,
    tags: ['Frontend', 'Interactive', 'JavaScript'],
    link: 'https://github.com/Raghutungala/runaway-login',
    previewType: 'runaway-ui',
    details: [
      'Interactive login experience designed with cursor tracking and vector math.',
      'Button dynamically calculates distance from pointer and accelerates away to prevent clicks.',
      'Demonstrates DOM event manipulation, smooth animation physics, and playful user interaction.',
    ],
  },
  {
    id: 'portfolio-os',
    title: "Raghu's Portfolio Application",
    subtitle: 'A glassmorphic personal dashboard with independent views and interactive navigation.',
    category: 'Web Apps',
    extraCategories: ['UI Experiments'],
    type: 'Web Application',
    badge: 'Live Dashboard',
    icon: Images,
    tags: ['React', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/Raghutungala/portfolio-v2',
    previewType: 'portfolio-ui',
    details: [
      'Engineered as a viewport-locked desktop application inspired by macOS and luxury automotive cockpits.',
      'Six decoupled views switched instantaneously via React state with full URL hash synchronization.',
      'Procedural CSS luxury villa environment with multi-tier mountain ridges, atmospheric lighting, and grain texture.',
    ],
  },
  {
    id: 'sase-dita',
    title: 'SASE & Playblocks Documentation Suite',
    subtitle: 'Conceptual DITA topic architecture and documentation migration workflows.',
    category: 'Documentation',
    extraCategories: [],
    type: 'Enterprise Docs',
    badge: 'DITA Architecture',
    icon: BookOpen,
    tags: ['DITA XML', 'Oxygen XML', 'SASE'],
    previewType: 'dita-diagram',
    details: [
      'Engineered topic hierarchies, maps, and relationship tables for Check Point SASE & Playblocks suites.',
      'Executed full enterprise content migration from legacy MadCap Flare to Oxygen XML authoring.',
      'Established Content Fusion distributed review cycles to accelerate SME sign-offs.',
    ],
  },
  {
    id: 'google-docs',
    title: 'Platform Developer Guides',
    subtitle: 'API references, endpoint schemas and developer onboarding documentation.',
    category: 'Documentation',
    extraCategories: [],
    type: 'Developer Docs',
    badge: 'REST API Guide',
    icon: Layers,
    tags: ['API Docs', 'Camtasia', 'Google'],
    previewType: 'api-diagram',
    details: [
      'Authored REST API endpoint references, request/response payload schemas, and error code catalogs.',
      'Produced step-by-step developer onboarding guides and interactive code samples.',
      'Scripted and recorded technical video tutorials using Camtasia and Snagit.',
    ],
  },
  {
    id: 'ai-workflows',
    title: 'Internal AI Review Tooling',
    subtitle: 'Conceptual AI-assisted workflows for documentation review and content preparation.',
    category: 'AI Experiments',
    extraCategories: [],
    type: 'Internal Tooling',
    badge: 'AI Topic Review',
    icon: Layers,
    tags: ['AI Agents', 'Automation', 'Workflows'],
    previewType: 'agent-diagram',
    details: [
      'Automated extraction of feature updates from pull requests to produce preliminary DITA XML topic drafts.',
      'Designed internal LLM prompts and validation routines to enforce corporate style guides and terminology.',
      'Streamlined review turnaround times for cross-functional engineering teams.',
    ],
  },
  {
    id: 'rag-assistant',
    title: 'API Schema RAG Explorer',
    subtitle: 'A learning prototype exploring document retrieval, embeddings and schema-aware RAG.',
    category: 'AI Experiments',
    extraCategories: [],
    type: 'Roadmap Prototype',
    badge: 'Schema RAG',
    icon: Database,
    tags: ['Python', 'RAG', 'Vector Search'],
    previewType: 'rag-diagram',
    details: [
      'Prototyping vector search pipelines using Python embeddings to semantically index OpenAPI schemas.',
      'Detecting schema drift between live backend endpoints and published markdown/DITA manuals.',
      'Part of ongoing AI Engineering learning roadmap and hands-on LLM experimentation.',
    ],
  },
]

function ThumbnailIllustration({ type }) {
  if (type === 'runaway-ui') {
    return (
      <div className="h-20 sm:h-22 w-full bg-gradient-to-br from-amber-500/15 via-[#0e111a] to-violet-950/40 p-2 sm:p-2.5 relative overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between z-10">
          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-black/60 text-white/80 border border-white/10">
            Interactive Prototype
          </span>
          <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
          </span>
        </div>
        <div className="mx-auto w-full max-w-[180px] glass-chip rounded-lg p-1.5 shadow-md z-10 border border-white/15 flex items-center justify-between gap-2">
          <div className="h-3 w-16 bg-white/20 rounded" />
          <div className="h-4 px-2 rounded-full bg-[#ff7a3d] text-black text-[8px] font-bold flex items-center gap-1 shadow-[0_0_8px_rgba(255,122,61,0.5)]">
            <span>Sign In</span>
            <MoveRight size={8} />
          </div>
        </div>
        <div className="text-[9px] font-mono text-white/40 z-10">UI Experiments • JavaScript</div>
      </div>
    )
  }

  if (type === 'portfolio-ui') {
    return (
      <div className="h-20 sm:h-22 w-full bg-gradient-to-br from-[#ff7a3d]/15 via-[#090c14] to-violet-900/30 p-2 sm:p-2.5 relative overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between z-10">
          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-black/60 text-white/80 border border-white/10">
            Live Application
          </span>
          <span className="text-[9px] font-mono text-[#ff9b57] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active
          </span>
        </div>
        <div className="mx-auto w-full max-w-[180px] glass-panel rounded-lg p-1.5 z-10 border border-white/15 flex items-center gap-2">
          <div className="w-2.5 h-6 bg-white/10 rounded flex flex-col items-center justify-around py-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff7a3d]" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="h-2.5 w-full bg-white/[0.12] rounded" />
            <div className="h-2 w-3/4 bg-white/[0.05] rounded" />
          </div>
        </div>
        <div className="text-[9px] font-mono text-white/40 z-10">Web Apps • React + Vite</div>
      </div>
    )
  }

  if (type === 'dita-diagram') {
    return (
      <div className="h-20 sm:h-22 w-full bg-gradient-to-br from-blue-950/40 via-[#070b14] to-cyan-950/30 p-2 sm:p-2.5 relative overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between z-10">
          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-black/60 text-white/70 border border-white/10">
            Conceptual Illustration
          </span>
          <span className="text-[9px] font-mono text-blue-300">DITA XML</span>
        </div>
        <div className="mx-auto w-full max-w-[180px] z-10 font-mono text-[8px] text-white/70 space-y-0.5">
          <div className="glass-chip px-1.5 py-0.5 rounded flex items-center justify-between border-l-2 border-l-blue-400">
            <span>&lt;map title=&quot;SASE_Suite&quot;&gt;</span>
            <span className="text-[7px] text-blue-300">ROOT</span>
          </div>
          <div className="pl-2 space-y-0.5">
            <div className="glass-chip px-1.5 py-0.5 rounded flex items-center justify-between">
              <span>├── &lt;concept id=&quot;arch&quot;&gt;</span>
              <span className="text-[7px] text-white/40">XML</span>
            </div>
          </div>
        </div>
        <div className="text-[9px] font-mono text-white/40 z-10">Documentation • Enterprise DITA</div>
      </div>
    )
  }

  if (type === 'api-diagram') {
    return (
      <div className="h-20 sm:h-22 w-full bg-gradient-to-br from-amber-950/30 via-[#080c14] to-slate-900/50 p-2 sm:p-2.5 relative overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between z-10">
          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-black/60 text-white/70 border border-white/10">
            Conceptual Illustration
          </span>
          <span className="text-[9px] font-mono text-amber-300">OpenAPI</span>
        </div>
        <div className="mx-auto w-full max-w-[180px] z-10 font-mono text-[8px] space-y-1">
          <div className="glass-chip px-1.5 py-0.5 rounded flex items-center gap-1.5">
            <span className="px-1 bg-emerald-500/20 text-emerald-400 font-bold rounded text-[7px]">GET</span>
            <span className="text-white/80 truncate">/v1/network/endpoints</span>
          </div>
          <div className="glass-chip px-1.5 py-0.5 rounded flex items-center gap-1.5">
            <span className="px-1 bg-blue-500/20 text-blue-400 font-bold rounded text-[7px]">POST</span>
            <span className="text-white/80 truncate">/v1/search/indexer</span>
          </div>
        </div>
        <div className="text-[9px] font-mono text-white/40 z-10">Documentation • API References</div>
      </div>
    )
  }

  if (type === 'agent-diagram') {
    return (
      <div className="h-20 sm:h-22 w-full bg-gradient-to-br from-violet-950/40 via-[#0a0d16] to-fuchsia-950/30 p-2 sm:p-2.5 relative overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between z-10">
          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-black/60 text-white/70 border border-white/10">
            Conceptual Illustration
          </span>
          <span className="text-[9px] font-mono text-violet-300">AI Tooling</span>
        </div>
        <div className="mx-auto w-full max-w-[180px] z-10 font-mono text-[8px] flex items-center justify-between gap-1">
          <div className="glass-chip p-1 rounded text-center flex-1">
            <div className="text-white/40 text-[6px]">INPUT</div>
            <div className="text-white truncate">PR</div>
          </div>
          <div className="text-violet-400 text-[9px]">&rarr;</div>
          <div className="glass-chip p-1 rounded text-center flex-1 border border-violet-500/30 bg-violet-500/10">
            <div className="text-violet-300 text-[6px]">AGENT</div>
            <div className="text-violet-200 truncate">Review</div>
          </div>
          <div className="text-violet-400 text-[9px]">&rarr;</div>
          <div className="glass-chip p-1 rounded text-center flex-1">
            <div className="text-white/40 text-[6px]">OUTPUT</div>
            <div className="text-white truncate">DITA</div>
          </div>
        </div>
        <div className="text-[9px] font-mono text-white/40 z-10">AI Experiments • Enterprise Workflow</div>
      </div>
    )
  }

  // rag-diagram
  return (
    <div className="h-20 sm:h-22 w-full bg-gradient-to-br from-purple-950/40 via-[#070912] to-indigo-950/40 p-2 sm:p-2.5 relative overflow-hidden flex flex-col justify-between">
      <div className="flex items-center justify-between z-10">
        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-black/60 text-white/70 border border-white/10">
          Roadmap Illustration
        </span>
        <span className="text-[9px] font-mono text-purple-300">RAG</span>
      </div>
      <div className="mx-auto w-full max-w-[180px] z-10 font-mono text-[8px] flex items-center justify-center gap-2">
        <div className="glass-chip p-1 rounded text-center">
          <Terminal size={11} className="mx-auto text-purple-400 mb-0.5" />
          <span className="text-[7px] text-white/60">Schema Vector</span>
        </div>
        <div className="text-purple-400 text-[9px]">&harr;</div>
        <div className="glass-chip p-1 rounded text-center">
          <Database size={11} className="mx-auto text-indigo-400 mb-0.5" />
          <span className="text-[7px] text-white/60">Doc Chunks</span>
        </div>
      </div>
      <div className="text-[9px] font-mono text-white/40 z-10">AI Experiments • Prototype</div>
    </div>
  )
}

export function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeModalItem, setActiveModalItem] = useState(null)

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'All') return true
    return item.category === selectedCategory || item.extraCategories.includes(selectedCategory)
  })

  return (
    <div className="space-y-2.5 sm:space-y-3 md:space-y-3.5 w-full">
      {/* 1. Integrated Header & Category Bar */}
      <GlassCard className="p-3 sm:p-3.5 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-violet-600/[0.12] blur-[70px] pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl glass-chip grid place-items-center text-[#ff7a3d] shrink-0">
              <Images size={16} />
            </div>
            <div>
              <h1 className="font-display text-base sm:text-lg font-semibold text-white tracking-tight">
                Visual Artifacts Gallery
              </h1>
              <p className="text-[11px] text-white/65">
                Live interactive projects alongside verified enterprise documentation architectures.
              </p>
            </div>
          </div>

          {/* Category Filter Pills (All 5 filters visible, wrap cleanly into rows on tablet/mobile) */}
          <div className="flex items-center gap-1.5 flex-wrap self-start md:self-auto max-w-full">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 px-3 h-7 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline-none ${
                    isActive
                      ? 'bg-white text-black shadow-sm font-semibold'
                      : 'glass-chip text-white/70 hover:text-white hover:bg-white/[0.09]'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </GlassCard>

      {/* 2. Balanced 3x2 Grid with Complete, Unclipped Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5 items-stretch">
        {filteredItems.map((item) => (
          <GlassCard
            key={item.id}
            className="overflow-hidden flex flex-col justify-between h-full hover:bg-white/[0.08] transition duration-200 group"
          >
            <div>
              {/* Graphic Thumbnail */}
              <ThumbnailIllustration type={item.previewType} />

              {/* Card Meta & Title (Complete, unclipped metadata labels) */}
              <div className="p-3 sm:p-3.5 pb-1">
                <div className="flex items-center justify-between gap-1.5 flex-wrap mb-1">
                  <span className="text-[9.5px] font-mono text-[#ff9b57] uppercase tracking-wider font-medium">
                    {item.type}
                  </span>
                  <span className="text-[9px] font-mono text-white/50">
                    {item.badge}
                  </span>
                </div>
                <h2 className="font-display text-sm font-semibold text-white mb-1 group-hover:text-[#ff9b57] transition truncate">
                  {item.title}
                </h2>
                {/* Complete, unclipped sentence (no line-clamp-1) */}
                <p className="text-[11px] text-white/75 leading-relaxed min-h-[32px]">
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Bottom Actions Aligned */}
            <div className="p-3 sm:p-3.5 pt-1.5">
              <div className="flex flex-wrap gap-1 pt-1.5 mb-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono px-1.5 py-0.2 rounded glass-chip text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between flex-wrap gap-1.5">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-[#ff9b57] hover:underline"
                  >
                    <span>View Repository</span>
                    <ExternalLink size={10} />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-white/50">
                    {item.type.includes('Learning') ? 'Active Roadmap' : 'Conceptual Case Study'}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => setActiveModalItem(item)}
                  className="inline-flex items-center gap-0.5 text-[11px] font-mono text-white/60 hover:text-white transition"
                >
                  <span>Inspect</span>
                  <ChevronRight size={11} />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* 3. DetailModal for deep dive inspection */}
      {activeModalItem && (
        <DetailModal
          isOpen={Boolean(activeModalItem)}
          onClose={() => setActiveModalItem(null)}
          title={activeModalItem.title}
          subtitle={activeModalItem.type}
          badge={activeModalItem.badge}
        >
          <div className="space-y-4">
            <p className="text-sm text-white/85 leading-relaxed">
              {activeModalItem.subtitle}
            </p>

            <div className="space-y-2">
              <p className="text-xs font-mono text-[#ff9b57] uppercase tracking-wider">
                Technical Highlights &amp; Scope
              </p>
              <ul className="space-y-2">
                {activeModalItem.details?.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85 bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                    <CheckCircle2 size={14} className="text-[#ff7a3d] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {activeModalItem.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md glass-chip text-white/80">
                    {t}
                  </span>
                ))}
              </div>

              {activeModalItem.link && (
                <a
                  href={activeModalItem.link}
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
