'use client';

import { portfolioData } from '@/data/portfolio';
import { useState, useCallback, useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Works() {
  // Only show works with id 1-3 in Selected Works section
  const selectedWorks = useMemo(() => portfolioData.works.filter((work) => work.id >= 1 && work.id <= 3), []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const currentWork = selectedWorks[currentIndex];

  const changeWork = useCallback(
    (newIndex: number, direction: 'left' | 'right') => {
      if (isTransitioning) return;
      setSlideDirection(direction);
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    },
    [isTransitioning]
  );

  const nextWork = () => {
    const newIndex = (currentIndex + 1) % selectedWorks.length;
    changeWork(newIndex, 'right');
  };

  const prevWork = () => {
    const newIndex = (currentIndex - 1 + selectedWorks.length) % selectedWorks.length;
    changeWork(newIndex, 'left');
  };

  const goToWork = (index: number) => {
    if (index === currentIndex) return;
    changeWork(index, index > currentIndex ? 'right' : 'left');
  };

  return (
    <section
      id="works"
      className="py-24 px-6 relative overflow-hidden bg-cream dark:bg-[#1a1a1a] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
              {portfolioData.worksSection.title}
            </h2>
            <p className="text-gray dark:text-gray-light text-lg">{portfolioData.worksSection.subtitle}</p>
          </div>
          <Link
            href="/works"
            className="hidden md:flex items-center gap-2 text-black dark:text-white hover:text-orange transition-colors font-medium group"
          >
            {portfolioData.worksSection.viewAllText}
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Main Work Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
          {/* Left - Image Card with Page Flip Animation */}
          <div className="relative" style={{ perspective: '1200px' }}>
            {/* Main Card - Clickable */}
            <Link
              href={currentWork.link}
              className="block bg-white dark:bg-[#333333] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 group cursor-pointer"
              style={{
                transform: isTransitioning
                  ? `translateX(${slideDirection === 'right' ? '-15px' : '15px'}) rotateY(${
                      slideDirection === 'right' ? '-12deg' : '12deg'
                    }) scale(0.96)`
                  : 'rotate(-8deg) rotateY(0deg)',
                opacity: isTransitioning ? 0 : 1,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease-out, opacity 0.2s ease-out',
              }}
              onMouseEnter={(e) => {
                if (!isTransitioning) {
                  e.currentTarget.style.transform = 'rotate(0deg) rotateY(0deg) scale(1.02)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isTransitioning) {
                  e.currentTarget.style.transform = 'rotate(-8deg) rotateY(0deg) scale(1)';
                }
              }}
            >
              {currentWork.image && !currentWork.image.includes('project') ? (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={currentWork.image}
                    alt={currentWork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-8 relative z-10">
                    <p className="text-3xl md:text-4xl font-serif italic text-green-600 group-hover:scale-110 transition-transform duration-700">
                      {currentWork.title}
                    </p>
                  </div>
                </div>
              )}
            </Link>
          </div>

          {/* Right - Content */}
          <div
            className={`space-y-6 transition-all duration-300 ease-out ${
              isTransitioning
                ? `opacity-0 ${slideDirection === 'right' ? 'translate-x-4' : '-translate-x-4'}`
                : 'opacity-100 translate-x-0'
            }`}
          >
            {/* Category */}
            <p className="text-green-600 font-semibold uppercase tracking-wider text-sm">{currentWork.category}</p>

            {/* Title */}
            <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white">{currentWork.title}</h3>

            {/* Description */}
            <p className="text-gray dark:text-gray-light text-lg leading-relaxed">{currentWork.description}</p>

            {/* Tags - simplified */}
            <div className="flex flex-wrap gap-3">
              {currentWork.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-beige dark:bg-[#3a3a3a] hover:bg-beige-dark dark:hover:bg-[#444444] text-gray dark:text-gray-light rounded-full text-sm font-medium transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Details Button */}
            <Link
              href={currentWork.link}
              className="inline-flex items-center gap-2 bg-black dark:bg-white hover:bg-gray dark:hover:bg-gray-light text-white dark:text-black px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              {portfolioData.worksSection.viewDetailsText}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Navigation Dots - simplified */}
        <div className="flex justify-center gap-3 mt-12">
          {selectedWorks.map((_, index) => (
            <button
              key={index}
              onClick={() => goToWork(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'bg-orange w-8 shadow-md' : 'bg-beige-dark w-3 hover:bg-gray-light hover:w-6'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows - simplified */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevWork}
            className="w-12 h-12 rounded-full bg-beige hover:bg-beige-dark text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            onClick={nextWork}
            className="w-12 h-12 rounded-full bg-beige hover:bg-beige-dark text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
