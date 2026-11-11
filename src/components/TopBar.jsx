import { Mail } from 'lucide-react'

export function TopBar({ title = 'Overview', onNavigate }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-2.5 sm:px-4 md:px-8 pt-2 md:pt-3 pointer-events-none">
      <div className="mx-auto max-w-[1280px] h-11 sm:h-12 md:h-13 px-2.5 sm:px-4 md:px-6 glass-panel pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Brand identity */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg glass-chip grid place-items-center shrink-0">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff7a3d] shadow-[0_0_12px_#ff7a3d]" />
          </div>
          <span className="font-display font-semibold text-xs sm:text-sm md:text-base tracking-tight text-white whitespace-nowrap">
            Raghu&apos;s Portfolio
          </span>
        </div>

        {/* Current Active View Name */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full glass-chip">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a3d]" />
          <span className="text-xs font-mono uppercase tracking-wider text-white/90 font-medium">
            {title}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full glass-chip text-xs text-white/60 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for work</span>
          </div>

          <button
            type="button"
            onClick={() => onNavigate && onNavigate('contact')}
            className="flex items-center gap-1 sm:gap-1.5 md:gap-2 px-3 sm:px-3.5 md:px-4 h-7.5 sm:h-8 md:h-8.5 rounded-full bg-white text-black text-[11px] sm:text-xs font-medium hover:bg-white/90 transition shadow-sm shrink-0"
          >
            <Mail size={12} className="shrink-0" />
            <span className="whitespace-nowrap">Contact</span>
          </button>
        </div>
      </div>
    </header>
  )
}
