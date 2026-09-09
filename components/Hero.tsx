'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-dark to-primary flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-6 text-accent"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={20} />
            <span className="text-sm font-semibold">The Future of AI</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-300 to-accent bg-clip-text text-transparent">
              Unlock the Power of AI
            </span>
          </h1>

          <p className="text-xl text-secondary/60 mb-8 max-w-2xl mx-auto">
            Experience cutting-edge artificial intelligence technology designed for productivity and innovation
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.button
              className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
            <motion.button
              className="border-2 border-accent/30 hover:border-accent text-secondary px-8 py-4 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>
      </div>
    </div>
  )
}
