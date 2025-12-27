'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Smile } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md border-b border-beige-dark/20 dark:border-white/10 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
            <span className="text-white dark:text-black font-bold text-lg">P</span>
          </div>
          <h1 className="text-xl font-bold text-black dark:text-white">{portfolioData.header.name}</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {portfolioData.header.navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-gray dark:text-gray-light hover:text-orange transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle & CTA Button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* CTA Button */}
          <a
            href={portfolioData.header.ctaButton.href}
            className="hidden md:flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {portfolioData.header.ctaButton.text}
            <Smile className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-black dark:bg-white transition-all ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span className={`w-6 h-0.5 bg-black dark:bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span
              className={`w-6 h-0.5 bg-black dark:bg-white transition-all ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#2a2a2a] border-t border-beige-dark/20 dark:border-white/10 animate-fade-in">
          <ul className="px-6 py-4 space-y-3">
            {portfolioData.header.navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray dark:text-gray-light hover:text-orange transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={portfolioData.header.ctaButton.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
              >
                {portfolioData.header.ctaButton.text}
                <Smile className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
