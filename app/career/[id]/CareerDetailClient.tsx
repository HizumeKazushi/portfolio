'use client';

import type { Career } from '@/data/types';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type CareerDetailClientProps = {
  career: Career;
};

export default function CareerDetailClient({ career }: CareerDetailClientProps) {
  return (
    <motion.main
      className="min-h-screen bg-cream dark:bg-black transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <header className="px-6 pt-8">
        <div className="mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/#about"
              className="group inline-flex items-center gap-2 text-sm text-gray transition-colors hover:text-orange dark:text-gray-light"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              経歴に戻る
            </Link>
          </motion.div>
        </div>
      </header>

      <section className="border-b border-beige-dark px-6 py-14 dark:border-[#3a3a3a] md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="grid gap-8 md:grid-cols-[8rem_minmax(0,1fr)] md:items-start"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex items-end gap-4 md:block">
              <div className="text-sm font-semibold text-orange dark:text-pink">
                {career.year}
              </div>
              <div className="pb-0 text-sm text-gray dark:text-gray-light md:mt-2">
                {career.category}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-orange dark:text-pink">経歴詳細</p>
              <h1 className="mb-5 max-w-3xl text-3xl font-bold leading-tight text-black dark:text-white md:text-5xl">
                {career.title}
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-gray dark:text-gray-light md:text-lg">
                {career.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <section className="border-t border-beige-dark pt-8 dark:border-[#3a3a3a]">
              <h2 className="mb-5 text-2xl font-bold text-black dark:text-white">概要</h2>
              <p className="max-w-3xl leading-8 text-gray dark:text-gray-light">
                {career.fullDescription ?? career.description}
              </p>
            </section>

            <section className="border-t border-beige-dark pt-8 dark:border-[#3a3a3a]">
              <h2 className="mb-5 text-2xl font-bold text-black dark:text-white">取り組んだこと</h2>
              <ol className="border-y border-beige-dark dark:border-[#3a3a3a]">
                {career.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="grid gap-4 border-b border-beige-dark py-5 last:border-b-0 dark:border-[#3a3a3a] sm:grid-cols-[4rem_minmax(0,1fr)]"
                    >
                    <span className="text-sm font-bold text-orange dark:text-pink">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="leading-relaxed text-gray dark:text-gray-light">{highlight}</p>
                  </li>
                ))}
              </ol>
            </section>
          </motion.div>

          <motion.aside
            className="lg:border-l lg:border-beige-dark lg:pl-8 lg:dark:border-[#3a3a3a]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="sticky top-8 space-y-10">
              <div>
                <h3 className="mb-4 border-b border-beige-dark pb-3 text-sm font-bold text-black dark:border-[#3a3a3a] dark:text-white">
                  基本情報
                </h3>
                <dl className="space-y-5 text-sm">
                  <div>
                    <dt className="mb-1 font-semibold text-gray dark:text-gray-light">時期</dt>
                    <dd className="text-black dark:text-white">{career.year}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-gray dark:text-gray-light">分類</dt>
                    <dd className="text-black dark:text-white">{career.category}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="mb-4 border-b border-beige-dark pb-3 text-sm font-bold text-black dark:border-[#3a3a3a] dark:text-white">
                  関連キーワード
                </h3>
                <ul className="space-y-2">
                  {career.tags.map((tag) => (
                    <li key={tag} className="flex items-center justify-between gap-3 text-sm">
                      <span className="text-gray dark:text-gray-light">{tag}</span>
                      <ArrowUpRight className="size-3.5 shrink-0 text-orange dark:text-pink" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            className="mt-16 border-t border-beige-dark pt-8 dark:border-[#3a3a3a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange dark:text-white dark:hover:text-pink"
            >
              <ArrowLeft className="size-4" />
              経歴に戻る
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
