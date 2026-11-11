import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CinematicBackground } from './components/CinematicBackground'
import { TopBar } from './components/TopBar'
import { Dock } from './components/Dock'

import { Overview } from './views/Overview'
import { ExperienceView } from './views/ExperienceView'
import { ProjectsView } from './views/ProjectsView'
import { GalleryView } from './views/GalleryView'
import { AboutView } from './views/AboutView'
import { ContactView } from './views/ContactView'

const validViews = ['overview', 'experience', 'projects', 'gallery', 'about', 'contact']

const viewTitles = {
  overview: 'Overview',
  experience: 'Experience',
  projects: 'Projects',
  gallery: 'Gallery',
  about: 'About',
  contact: 'Contact',
}

export default function App() {
  const [activeView, setActiveView] = useState(() => {
    const raw = window.location.hash.replace('#', '')
    const base = raw.split('-')[0]
    return validViews.includes(base) ? base : 'overview'
  })

  // Sync state on browser back/forward hashchange
  useEffect(() => {
    const syncFromHash = () => {
      const raw = window.location.hash.replace('#', '')
      const base = raw.split('-')[0]
      if (validViews.includes(base)) {
        setActiveView(base)
      }
    }
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  const setView = (viewId) => {
    if (validViews.includes(viewId)) {
      setActiveView(viewId)
      window.location.hash = viewId
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

  return (
    <div className="w-full relative text-white selection:bg-[#ff7a3d]/30 overflow-x-hidden min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden flex flex-col justify-between">
      {/* 1. Cinematic CSS-Generated Luxury Villa Background */}
      <CinematicBackground activeView={activeView} />

      {/* 2. Fixed Luxury Top Header */}
      <TopBar title={viewTitles[activeView] || 'Overview'} onNavigate={setView} />

      {/* 3. Navigation Dock: Desktop vertical centered left / Mobile horizontal bottom */}
      <Dock active={activeView} onChange={setView} />

      {/* 4. Main Application Area: Natural scrolling on Mobile/Tablet, Viewport-locked on Desktop */}
      <div className="flex-1 flex flex-col justify-between w-full max-w-[1280px] mx-auto px-4 md:px-8 md:pl-24 pt-18 md:pt-20 pb-24 md:pb-12 lg:pb-2.5 relative z-10 min-h-0">
        <main className="flex-1 flex flex-col justify-center min-h-0 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 8, scale: 0.995 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.995 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {activeView === 'overview' && <Overview onViewChange={setView} />}
              {activeView === 'experience' && <ExperienceView />}
              {activeView === 'projects' && <ProjectsView />}
              {activeView === 'gallery' && <GalleryView />}
              {activeView === 'about' && <AboutView />}
              {activeView === 'contact' && <ContactView />}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Application Status Bar / Footer */}
        <footer className="mt-4 lg:mt-2 pt-2 lg:pt-1 text-center text-[11px] font-mono text-white/35 shrink-0 hidden md:block">
          <p>
            Tungala Raghu Vardhan • Technical Writer &amp; AI Engineering Explorer • Hyderabad, India
          </p>
        </footer>
      </div>
    </div>
  )
}
