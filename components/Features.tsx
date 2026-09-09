'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Shield, Rocket } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Advanced AI',
    description: 'Powered by the latest machine learning algorithms for superior performance'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process queries in milliseconds with our optimized infrastructure'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with global security standards'
  },
  {
    icon: Rocket,
    title: 'Easy Integration',
    description: 'Simple API integration for seamless implementation in your workflow'
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-dark/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-secondary/60 text-lg max-w-2xl mx-auto">
            Everything you need to harness the power of AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="bg-light/5 hover:bg-light/10 border border-light/10 rounded-2xl p-6 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-accent mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Icon size={32} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary/60">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
