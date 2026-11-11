import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function DetailModal({ isOpen, onClose, title, subtitle, badge, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-panel p-6 sm:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.8)] border border-white/15 z-10"
          >
            {/* Ambient orange glow */}
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#ff7a3d]/[0.15] blur-[70px] pointer-events-none" />

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-2 mb-3 relative z-10">
              <div>
                {badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#ff7a3d]/15 text-[#ff7a3d] border border-[#ff7a3d]/30 mb-2 inline-block">
                    {badge}
                  </span>
                )}
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-white">
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-xs sm:text-sm font-medium text-[#ff9b57] mt-0.5 font-mono">
                    {subtitle}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full glass-chip grid place-items-center text-white/70 hover:text-white hover:bg-white/10 transition shrink-0"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="relative z-10 text-white/80 text-sm leading-relaxed space-y-3">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

