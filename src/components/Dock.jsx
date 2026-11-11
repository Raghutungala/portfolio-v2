import { cn } from '../utils/cn'
import { Home, Briefcase, Folder, Images, User, Mail } from 'lucide-react'

const items = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'gallery', label: 'Gallery', icon: Images },
  { id: 'about', label: 'About', icon: User },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export function Dock({ active, onChange }) {
  return (
    <>
      {/* Desktop Vertical Floating Sidebar: Fixed left, vertically centered */}
      <aside
        aria-label="Application navigation dock"
        className="hidden md:flex fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 w-[60px] flex-col items-center gap-2.5 p-2 rounded-[24px] glass-panel shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
      >
        {items.map((it) => {
          const Icon = it.icon
          const isActive = active === it.id

          return (
            <div key={it.id} className="relative group">
              <button
                type="button"
                onClick={() => onChange(it.id)}
                title={it.label}
                aria-label={it.label}
                className={cn(
                  'relative w-11 h-11 rounded-[14px] grid place-items-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400',
                  isActive
                    ? 'bg-white text-black shadow-[0_8px_20px_rgba(255,255,255,0.25)] font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.08]'
                )}
              >
                <Icon size={19} strokeWidth={isActive ? 2.2 : 1.75} />
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-5 rounded-full bg-[#ff7a3d] shadow-[0_0_8px_#ff7a3d]"
                  />
                )}
              </button>

              {/* Tooltip label */}
              <div className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-[#0e121a]/95 backdrop-blur-md border border-white/10 text-xs font-medium text-white opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 whitespace-nowrap shadow-lg z-50">
                {it.label}
              </div>
            </div>
          )
        })}
      </aside>

      {/* Mobile Floating Horizontal Bottom Navigation */}
      <nav
        aria-label="Mobile navigation bar"
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 px-2 w-fit max-w-[calc(100vw-24px)]"
      >
        <div className="flex items-center gap-1 rounded-full glass-panel px-2 py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
          {items.map((it) => {
            const Icon = it.icon
            const isActive = active === it.id

            return (
              <button
                key={it.id}
                type="button"
                onClick={() => onChange(it.id)}
                title={it.label}
                aria-label={it.label}
                className={cn(
                  'relative h-9 px-3 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-none',
                  isActive
                    ? 'bg-white text-black shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                )}
              >
                <Icon size={17} strokeWidth={isActive ? 2.2 : 1.8} />
                {isActive && (
                  <span className="ml-1.5 text-[11px] font-medium hidden sm:inline">
                    {it.label}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
