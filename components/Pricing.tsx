'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for getting started',
    features: ['10K API calls/month', 'Basic support', 'Standard models']
  },
  {
    name: 'Professional',
    price: '$99',
    description: 'For growing businesses',
    features: ['100K API calls/month', 'Priority support', 'Advanced models', 'Custom integrations'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations',
    features: ['Unlimited API calls', '24/7 support', 'Custom models', 'Dedicated account manager']
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-secondary/60 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 transition-all ${
                plan.popular
                  ? 'bg-accent/10 border-2 border-accent md:scale-105'
                  : 'bg-light/5 border border-light/10 hover:border-light/20'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="text-accent text-sm font-semibold mb-4">Most Popular</div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-secondary/60 mb-4">{plan.description}</p>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <button className={`w-full py-3 rounded-lg font-semibold mb-6 transition-colors ${
                plan.popular
                  ? 'bg-accent hover:bg-blue-600 text-white'
                  : 'border border-accent/30 hover:border-accent text-secondary'
              }`}>
                Get Started
              </button>
              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check size={20} className="text-accent" />
                    <span className="text-secondary/80">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
