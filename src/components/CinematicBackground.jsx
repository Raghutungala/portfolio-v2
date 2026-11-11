export function CinematicBackground({ activeView }) {
  const isAbout = activeView === 'about'

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-[#05070c]">
      {/* 1. OUTDOOR DUSK SCENE & SKY (View through floor-to-ceiling windows) */}
      <div className="absolute inset-0">
        {/* Twilight dusk sky gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #050711 0%, #0d0f22 25%, #1f1433 46%, #3d1b3e 64%, #6e2a3b 78%, #ab4633 88%, #d96d34 95%, #ea8540 100%)',
          }}
        />

        {/* Low dusk horizon sun glow */}
        <div
          className="absolute bottom-[24%] left-[15%] right-[15%] h-[280px] rounded-[100%]"
          style={{
            background:
              'radial-gradient(ellipse at 50% 85%, rgba(255, 155, 80, 0.55) 0%, rgba(220, 80, 90, 0.3) 45%, transparent 75%)',
            filter: 'blur(40px)',
          }}
        />

        {/* DISTANT MISTY HILLS (SVG silhouettes with atmospheric haze) */}
        <div className="absolute bottom-[16%] inset-x-0 h-[380px] w-full">
          {/* Valley mist glow */}
          <div
            className="absolute bottom-[42%] inset-x-0 h-32"
            style={{
              background:
                'linear-gradient(to top, transparent 0%, rgba(255, 138, 77, 0.22) 50%, transparent 100%)',
              filter: 'blur(16px)',
            }}
          />

          <svg
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1920 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="farHills" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#432646" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#1a1429" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="midHills" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#251a34" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#10111e" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="nearHills" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#141724" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#080a12" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Far mountain ridge (soft and misty) */}
            <path
              d="M0,230 Q220,160 480,210 T960,175 T1440,215 T1920,180 L1920,400 L0,400 Z"
              fill="url(#farHills)"
              opacity="0.8"
            />

            {/* Mid mountain ridge */}
            <path
              d="M0,265 Q260,215 540,250 T1080,220 T1580,255 T1920,230 L1920,400 L0,400 Z"
              fill="url(#midHills)"
              opacity="0.92"
            />

            {/* Near hills with gentle slopes & crests */}
            <path
              d="M0,305 Q300,265 640,300 T1260,270 T1780,295 T1920,280 L1920,400 L0,400 Z"
              fill="url(#nearHills)"
            />
          </svg>

          {/* Low mountain mist drifting across ridges */}
          <div
            className="absolute bottom-[20%] inset-x-0 h-24"
            style={{
              background:
                'linear-gradient(to top, transparent, rgba(168, 85, 247, 0.15) 50%, rgba(255, 140, 80, 0.12) 80%, transparent)',
              filter: 'blur(20px)',
            }}
          />
        </div>
      </div>

      {/* 2. FLOOR-TO-CEILING WINDOW FRAMES (Penthouse Architectural Structure - Suppressed in About view to eliminate background lines) */}
      {!isAbout && (
        <div className="absolute inset-0">
          {/* Panoramic window framing border */}
          <div className="absolute inset-2 md:inset-6 border-[3px] md:border-[5px] border-[#0c0f18] rounded-[28px] md:rounded-[36px] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]" />

          {/* 4 Grand Floor-to-Ceiling Window Panes (3 vertical mullions) */}
          <div className="absolute inset-2 md:inset-6 flex justify-between pointer-events-none">
            {/* Mullion 1 (left pane separator) */}
            <div className="absolute left-[26%] top-0 bottom-0 w-[4px] md:w-[7px] bg-[#0c0f18] shadow-[0_0_8px_rgba(0,0,0,0.9),inset_1px_0_0_rgba(255,255,255,0.08)]">
              <div className="absolute inset-y-0 right-0 w-[1px] bg-white/[0.06]" />
            </div>

            {/* Mullion 2 (center pane separator) */}
            <div className="absolute left-[52%] top-0 bottom-0 w-[5px] md:w-[9px] bg-[#0c0f18] shadow-[0_0_10px_rgba(0,0,0,0.9),inset_1px_0_0_rgba(255,255,255,0.08)]">
              <div className="absolute inset-y-0 right-0 w-[1px] bg-white/[0.06]" />
            </div>

            {/* Mullion 3 (right pane separator) */}
            <div className="absolute left-[78%] top-0 bottom-0 w-[4px] md:w-[7px] bg-[#0c0f18] shadow-[0_0_8px_rgba(0,0,0,0.9),inset_1px_0_0_rgba(255,255,255,0.08)]">
              <div className="absolute inset-y-0 right-0 w-[1px] bg-white/[0.06]" />
            </div>

            {/* Architectural horizontal transom beam across upper window */}
            <div className="absolute inset-x-0 top-[28%] h-[3px] md:h-[5px] bg-[#0c0f18] shadow-[0_2px_8px_rgba(0,0,0,0.8),0_-1px_0_rgba(255,255,255,0.06)]">
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-black/80" />
            </div>
          </div>

          {/* Glass reflection / glare streaks across window panes */}
          <div
            className="absolute inset-2 md:inset-6 rounded-[28px] md:rounded-[36px] opacity-40"
            style={{
              background:
                'linear-gradient(125deg, rgba(255,255,255,0.05) 0%, transparent 28%, rgba(255,255,255,0.02) 42%, transparent 68%, rgba(255,255,255,0.03) 85%, transparent 100%)',
            }}
          />
        </div>
      )}

      {/* 3. DARK LUXURY LIVING ROOM INTERIOR LAYER */}
      {/* Polished reflective luxury floor at the bottom */}
      <div
        className="absolute bottom-0 inset-x-0 h-[28%] md:h-[32%]"
        style={{
          background:
            'linear-gradient(180deg, rgba(8, 11, 19, 0.72) 0%, rgba(6, 8, 14, 0.92) 45%, rgba(3, 4, 8, 0.98) 100%)',
          backdropFilter: 'blur(3px)',
        }}
      >
        {/* Soft vertical window & dusk reflections on the polished dark floor */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(255, 140, 70, 0.3) 0%, rgba(130, 60, 140, 0.15) 40%, transparent 70%)',
          }}
        />
        {/* Subtle wood / marble floor grain sheen line */}
        {!isAbout && (
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        )}
      </div>

      {/* Luxury architectural ceiling soffit with indirect warm cove glow */}
      <div className="absolute top-0 inset-x-0 h-16 md:h-24 bg-gradient-to-b from-[#030408] via-[#060810]/80 to-transparent">
        {!isAbout && (
          <div className="absolute top-0 inset-x-0 h-[1px] bg-white/[0.04]" />
        )}
      </div>

      {/* 4. LUXURY AMBIENT LIGHTING ACCENTS */}
      {/* Orange ambient light in the left region (designer warm interior glow) */}
      <div
        className="absolute -left-[6%] top-[18%] w-[580px] h-[580px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 122, 61, 0.24) 0%, rgba(255, 90, 20, 0.09) 45%, transparent 72%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Purple ambient light in the right region (luxury violet accent lighting) */}
      <div
        className="absolute -right-[8%] top-[24%] w-[640px] h-[640px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(168, 85, 247, 0.20) 0%, rgba(120, 45, 200, 0.08) 50%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Subtle blue lighting near the bottom (cool architectural floor reflection) */}
      <div
        className="absolute left-[25%] right-[25%] bottom-[2%] h-[260px] rounded-[100%]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(56, 189, 248, 0.14) 0%, rgba(37, 99, 235, 0.06) 50%, transparent 80%)',
          filter: 'blur(70px)',
        }}
      />

      {/* 5. GRAIN TEXTURE & VIGNETTE */}
      {/* SVG noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.045] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />

      {/* Deep cinematic perimeter vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 48%, transparent 42%, rgba(2, 4, 7, 0.6) 75%, rgba(2, 3, 6, 0.92) 100%)',
        }}
      />
    </div>
  )
}
