'use client';

import { portfolioData } from '@/data/portfolio';
import { Mail, ArrowUpRight, Check, Copy } from 'lucide-react';
import { getIcon } from '@/lib/icons';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-cream dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-orange font-semibold mb-2">{portfolioData.contact.subtitle}</p>
          <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">
            {portfolioData.contact.title}
          </h2>
          <p className="text-gray dark:text-gray-light text-lg max-w-2xl mx-auto">
            {portfolioData.contact.description}
          </p>
        </div>

        {/* Email - Click to copy */}
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold text-black dark:text-white hover:text-orange transition-all duration-500 mb-4 group cursor-pointer"
        >
          <Mail className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
          <span>{portfolioData.contact.email}</span>
          {copied ? (
            <Check className="w-6 h-6 text-green-500" />
          ) : (
            <Copy className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
          )}
        </button>
        <p className="text-gray dark:text-gray-light text-sm mb-12">
          {copied ? 'コピーしました！' : 'クリックしてコピー'}
        </p>

        {/* Social Links with playful tilts */}
        <div className="flex justify-center gap-6 mb-12">
          {portfolioData.contact.social.map((social, index) => {
            const IconComponent = getIcon(social.icon);
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white dark:bg-[#333333] hover:bg-orange text-gray dark:text-gray-light hover:text-white rounded-2xl flex items-center justify-center shadow-md hover:shadow-playful transition-all duration-500 hover:scale-110"
                aria-label={social.name}
                style={{
                  transform: `rotate(${index % 2 === 0 ? '4deg' : '-4deg'})`,
                }}
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
