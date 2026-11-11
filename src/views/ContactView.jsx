import { useState } from 'react'
import { profile } from '../data/profile'
import { GlassCard } from '../components/GlassCard'
import {
  Mail,
  Send,
  MapPin,
  ExternalLink,
  Clock,
  MessageSquare,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  Loader2,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react'

function LinkedInIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).'
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a subject (at least 3 characters).'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message (at least 10 characters).'
    }
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot trap check
    if (formData._gotcha) {
      setStatus('success')
      return
    }

    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xvgzqgke'

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' })
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.emailAddress)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2200)
  }

  const fallbackMailto = `mailto:${profile.emailAddress}?subject=${encodeURIComponent(
    formData.subject || 'Direct Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    formData.message ? `From: ${formData.name} (${formData.email})\n\n${formData.message}` : ''
  )}`

  return (
    <div className="space-y-2.5 sm:space-y-3 md:space-y-3.5 w-full">
      {/* 1. Header Banner */}
      <GlassCard className="p-3 sm:p-3.5 md:p-4 relative overflow-hidden">
        <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-[#ff7a3d]/[0.12] blur-[70px] pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl glass-chip grid place-items-center text-[#ff7a3d] shrink-0">
              <MessageSquare size={16} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-base sm:text-lg font-semibold text-white tracking-tight">
                  Get in Touch
                </h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/30">
                  AVAILABLE FOR WORK
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-white/65 mt-0.5">
                Technical documentation architecture, API reference engineering, structured authoring, and AI workflows.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/30 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DIRECT INQUIRIES OPEN</span>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* 2. Main Two-Column Area: Left Form | Right Verified Details */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr] gap-2.5 sm:gap-3.5 items-start">
        {/* Left Column: Real Interactive Contact Form */}
        <GlassCard className="p-4 sm:p-4.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-3">
              <div>
                <h2 className="font-display text-sm sm:text-base font-semibold text-white">
                  Send a Direct Message
                </h2>
                <p className="text-[11px] text-white/60 mt-0.5">
                  Inquiries delivered directly via Formspree or encrypted webmail dispatch.
                </p>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full glass-chip text-[#ff9b57]">
                SECURE FORM
              </span>
            </div>

            {status === 'success' ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2.5 my-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 grid place-items-center mx-auto">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="font-display text-sm font-semibold text-white">Message Sent Successfully</h3>
                <p className="text-xs text-white/75 leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. Your inquiry has been dispatched and I will respond to your email promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition"
                >
                  <RotateCcw size={12} />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-2.5 sm:space-y-3">
                {/* Honeypot anti-spam field */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Status error banner with fallback link */}
                {status === 'error' && (
                  <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs flex items-start gap-2">
                    <AlertCircle size={15} className="shrink-0 mt-0.5 text-rose-400" />
                    <div className="flex-1">
                      <p className="font-medium">Direct delivery paused</p>
                      <p className="text-[11px] text-rose-200/80 mt-0.5">
                        Network dispatch encountered an issue. You can click below to launch your default mail app directly:
                      </p>
                      <a
                        href={fallbackMailto}
                        className="inline-flex items-center gap-1 mt-1 text-[11px] font-medium text-white underline hover:text-[#ff9b57]"
                      >
                        <Mail size={11} />
                        <span>Open mail app with prefilled message</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] font-mono text-white/75 mb-1">
                      YOUR NAME <span className="text-[#ff7a3d]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Mercer"
                      className={`w-full h-9 px-3 rounded-xl bg-white/[0.04] border ${
                        errors.name ? 'border-rose-500/70' : 'border-white/10'
                      } text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#ff7a3d]/70 focus:bg-white/[0.07] transition`}
                    />
                    {errors.name && <p className="text-[10px] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-mono text-white/75 mb-1">
                      EMAIL ADDRESS <span className="text-[#ff7a3d]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={`w-full h-9 px-3 rounded-xl bg-white/[0.04] border ${
                        errors.email ? 'border-rose-500/70' : 'border-white/10'
                      } text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#ff7a3d]/70 focus:bg-white/[0.07] transition`}
                    />
                    {errors.email && <p className="text-[10px] text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-[11px] font-mono text-white/75 mb-1">
                    SUBJECT <span className="text-[#ff7a3d]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Documentation Leadership / Technical Writing Inquiry"
                    className={`w-full h-9 px-3 rounded-xl bg-white/[0.04] border ${
                      errors.subject ? 'border-rose-500/70' : 'border-white/10'
                    } text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#ff7a3d]/70 focus:bg-white/[0.07] transition`}
                  />
                  {errors.subject && <p className="text-[10px] text-rose-400 mt-1">{errors.subject}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-mono text-white/75 mb-1">
                    MESSAGE <span className="text-[#ff7a3d]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your documentation requirements, platform stack, timeline, or consultation topics..."
                    className={`w-full p-3 rounded-xl bg-white/[0.04] border ${
                      errors.message ? 'border-rose-500/70' : 'border-white/10'
                    } text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#ff7a3d]/70 focus:bg-white/[0.07] transition resize-none leading-relaxed`}
                  />
                  {errors.message && <p className="text-[10px] text-rose-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-1 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-mono text-white/40 hidden sm:inline">
                    Protected by client validation &amp; honeypot filter
                  </span>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="h-9 px-5 rounded-full bg-white text-black text-xs font-medium flex items-center justify-center gap-2 hover:bg-white/90 disabled:opacity-60 transition shadow-sm shrink-0 ml-auto"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={13} className="animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={13} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </GlassCard>

        {/* Right Column: Clean Verified Professional Details */}
        <div className="space-y-2.5 sm:space-y-3">
          <GlassCard className="p-4 sm:p-4.5 space-y-3.5">
            <div>
              <div className="flex items-center justify-between pb-1 mb-2">
                <h2 className="font-display text-sm sm:text-base font-semibold text-white">
                  Direct Contact Details
                </h2>
                <span className="text-[10px] font-mono text-emerald-300">VERIFIED</span>
              </div>
              <p className="text-[11px] text-white/65 leading-relaxed">
                Connect via professional channels for role inquiries, documentation consultations, or technical collaboration.
              </p>
            </div>

            {/* Channel 1: Email */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg glass-chip grid place-items-center text-[#ff7a3d] shrink-0">
                  <Mail size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-white/40 uppercase">Direct Email</p>
                  <p className="text-xs font-mono text-white font-medium truncate select-all">
                    {profile.emailAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="h-7 px-2 rounded-lg glass-chip text-white/80 hover:text-white text-[10px] font-mono flex items-center gap-1 transition"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={11} className="text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={11} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={profile.email}
                  title="Open in default mail client"
                  className="h-7 px-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10px] font-mono flex items-center gap-1 transition"
                >
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Channel 2: LinkedIn */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg glass-chip grid place-items-center text-[#ff9b57] shrink-0">
                  <LinkedInIcon className="w-4 h-4 text-[#ff7a3d]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-white/40 uppercase">LinkedIn Profile</p>
                  <p className="text-xs font-mono text-white font-medium truncate">
                    linkedin.com/in/raghu-tungala
                  </p>
                </div>
              </div>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="h-7 px-2.5 rounded-lg glass-chip text-white/90 hover:text-white text-[10px] font-mono flex items-center gap-1 transition shrink-0"
              >
                <span>Connect</span>
                <ExternalLink size={10} className="opacity-60" />
              </a>
            </div>

            {/* Channel 3: GitHub */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg glass-chip grid place-items-center text-white shrink-0">
                  <GitHubIcon className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-white/40 uppercase">GitHub Profile</p>
                  <p className="text-xs font-mono text-white font-medium truncate">
                    github.com/Raghutungala
                  </p>
                </div>
              </div>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="h-7 px-2.5 rounded-lg glass-chip text-white/90 hover:text-white text-[10px] font-mono flex items-center gap-1 transition shrink-0"
              >
                <span>Repositories</span>
                <ExternalLink size={10} className="opacity-60" />
              </a>
            </div>
          </GlassCard>

          {/* Location & Availability Card */}
          <GlassCard className="p-3.5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-medium text-white">
              <MapPin size={14} className="text-[#ff7a3d]" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-white/70">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>{profile.availability}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-white/50 pt-1">
              <Clock size={13} className="text-emerald-400" />
              <span>Direct inquiries answered within 24 hours</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
