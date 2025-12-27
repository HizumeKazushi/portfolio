'use client';

import { portfolioData } from '@/data/portfolio';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function WorksPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.main
      className="min-h-screen bg-cream dark:bg-[#1a1a1a] transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <header className="pt-12 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray dark:text-gray-light hover:text-orange transition-colors text-sm mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {portfolioData.worksArchive.backToHome}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-orange text-sm font-medium mb-2">{portfolioData.worksArchive.subtitle}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
              {portfolioData.worksArchive.title}
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Works List */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {portfolioData.works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <Link
                href={`/works/${work.id}`}
                className="group block"
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative py-8 md:py-12 border-b border-beige-dark dark:border-[#3a3a3a]">
                  {/* Background reveal on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-50 dark:from-green-900/20 to-transparent overflow-hidden"
                    initial={{ x: '-100%' }}
                    animate={{ x: hoveredId === work.id ? '0%' : '-100%' }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />

                  <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                    {/* Number */}
                    <motion.div
                      className="text-6xl md:text-8xl font-bold text-beige-dark/50 dark:text-[#3a3a3a] leading-none md:w-32 shrink-0"
                      animate={{
                        color: hoveredId === work.id ? '#ff6b35' : undefined,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>

                    {/* Title & Category */}
                    <div className="flex-1">
                      <motion.h2
                        className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-2"
                        animate={{
                          x: hoveredId === work.id ? 10 : 0,
                          color: hoveredId === work.id ? '#ff6b35' : undefined,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {work.title}
                      </motion.h2>
                      <p className="text-gray dark:text-gray-light text-sm md:text-base">{work.description}</p>
                    </div>

                    {/* Category Tag */}
                    <div className="md:w-40 shrink-0">
                      <span className="inline-block px-4 py-2 bg-white dark:bg-[#333333] border border-beige-dark dark:border-[#3a3a3a] rounded-full text-xs md:text-sm text-gray dark:text-gray-light group-hover:border-orange group-hover:text-orange transition-colors">
                        {work.category}
                      </span>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-beige-dark dark:border-[#3a3a3a] text-gray dark:text-gray-light shrink-0"
                      animate={{
                        backgroundColor: hoveredId === work.id ? '#ff6b35' : 'transparent',
                        borderColor: hoveredId === work.id ? '#ff6b35' : undefined,
                        color: hoveredId === work.id ? '#ffffff' : undefined,
                        x: hoveredId === work.id ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.div>
                  </div>

                  {/* Floating preview on hover */}
                  <motion.div
                    className="absolute right-24 top-1/2 -translate-y-1/2 w-64 h-40 rounded-xl overflow-hidden shadow-2xl pointer-events-none hidden lg:block"
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{
                      opacity: hoveredId === work.id ? 1 : 0,
                      scale: hoveredId === work.id ? 1 : 0.8,
                      x: hoveredId === work.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full bg-white dark:bg-[#333333] flex items-center justify-center">
                      {work.image && !work.image.includes('project') ? (
                        <img src={work.image} alt={work.title} className="w-full h-full object-contain" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20 flex items-center justify-center">
                          <p className="text-xl font-serif italic text-green-600 dark:text-green-400">{work.title}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <motion.section
        className="px-6 pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray dark:text-gray-light mb-4">{portfolioData.worksArchive.ctaText}</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-black dark:bg-white hover:bg-orange text-white dark:text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            {portfolioData.worksArchive.ctaButton}
          </Link>
        </div>
      </motion.section>
    </motion.main>
  );
}
