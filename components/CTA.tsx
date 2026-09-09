'use client'

import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-accent to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Workflow?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using AI Pro to boost productivity
          </p>
          <motion.button
            className="bg-white text-accent hover:bg-light px-8 py-4 rounded-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
