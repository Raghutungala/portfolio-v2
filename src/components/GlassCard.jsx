import { motion } from 'framer-motion'
import { cn } from '../utils/cn'

export function GlassCard({ className = '', children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'glass-panel',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
