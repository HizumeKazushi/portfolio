'use client';

import { portfolioData } from '@/data/portfolio';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function WorkDetailPage() {
  const params = useParams();
  const workId = Number(params.id);
  const work = portfolioData.works.find((w) => w.id === workId);

  if (!work) {
    return (
      <main className="min-h-screen bg-cream dark:bg-[#1a1a1a] flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Work not found</h1>
          <Link href="/works" className="text-orange hover:underline">
            Back to Works
          </Link>
        </div>
      </main>
    );
  }

  return (
    <motion.main
      className="min-h-screen bg-cream dark:bg-[#1a1a1a] transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <header className="pt-8 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-gray dark:text-gray-light hover:text-orange transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {portfolioData.worksDetail.backToWorks}
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Work Detail */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Hero Image */}
          <motion.div
            className="bg-white dark:bg-[#333333] rounded-3xl overflow-hidden shadow-lg mb-12"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {work.image && !work.image.includes('project') ? (
              <div className="aspect-[16/9] overflow-hidden">
                <motion.img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </div>
            ) : (
              <div className="aspect-[16/9] bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20 flex items-center justify-center">
                <motion.p
                  className="text-4xl md:text-6xl font-serif italic text-green-600 dark:text-green-400"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {work.title}
                </motion.p>
              </div>
            )}
          </motion.div>

          {/* Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <p className="text-orange font-medium uppercase tracking-wider text-sm mb-3">{work.category}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">{work.title}</h1>
                <p className="text-gray dark:text-gray-light text-lg leading-relaxed">{work.description}</p>
              </div>

              {/* Project Description */}
              {work.fullDescription && (
                <div>
                  <h2 className="text-xl font-bold text-black dark:text-white mb-4">
                    {portfolioData.worksDetail.overviewTitle}
                  </h2>
                  <p className="text-gray dark:text-gray-light leading-relaxed">{work.fullDescription}</p>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Technologies */}
              <div className="bg-white dark:bg-[#333333] rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                  {portfolioData.worksDetail.technologiesTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-beige dark:bg-[#3a3a3a] text-gray dark:text-gray-light rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {work.externalLinks && (work.externalLinks.demo || work.externalLinks.github) && (
                <div className="bg-white dark:bg-[#333333] rounded-2xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                    {portfolioData.worksDetail.linksTitle}
                  </h3>
                  <div className="space-y-3">
                    {work.externalLinks.demo && (
                      <a
                        href={work.externalLinks.demo}
                        className="flex items-center gap-2 text-gray dark:text-gray-light hover:text-orange transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {work.externalLinks.github && (
                      <a
                        href={work.externalLinks.github}
                        className="flex items-center gap-2 text-gray dark:text-gray-light hover:text-orange transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                        GitHub Repository
                      </a>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            className="mt-16 pt-8 border-t border-beige-dark dark:border-[#3a3a3a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/works"
              className="inline-flex items-center gap-2 bg-black dark:bg-white hover:bg-gray dark:hover:bg-gray-light text-white dark:text-black px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              {portfolioData.worksDetail.backToAll}
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
