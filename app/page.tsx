'use client'

import { motion } from 'framer-motion'
import { Coffee, MapPin, Camera, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{ background: '#5e7a63', top: '-10%', left: '-10%' }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-15"
        style={{ background: '#f4a42a', bottom: '10%', right: '-5%' }}
        animate={{ scale: [1, 1.15, 1], y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div
        className="z-10 text-center max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Logo/Icon */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          <div className="w-24 h-24 rounded-full bg-verde flex items-center justify-center float-animation">
            <Coffee className="w-12 h-12 text-crema" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-serif text-verde mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          coolcoffeshop
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-verde-dark mb-8 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Coming Soon
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base text-verde/80 mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Una cafetería con alma. Espacio acogedor, café de especialidad,
          vibes retro y las mejores migas.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          {socialLinks.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-verde hover:text-mostaza transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <item.icon size={24} strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-wider">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-8 left-8 text-xs text-verde/40 font-serif"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <MapPin size={14} className="inline mr-1" />
        Rosario, Argentina
      </motion.div>
    </main>
  )
}

const socialLinks = [
  { icon: Camera, label: 'Instagram', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hola@coolcoffeshop.com' },
]