'use client';

import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-beige dark:bg-[#2a2a2a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange font-semibold mb-2">{portfolioData.skillsSection.subtitle}</p>
          <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
            {portfolioData.skillsSection.title}
          </h2>
          <p className="text-gray dark:text-gray-light text-lg max-w-2xl mx-auto">
            フロントエンド、バックエンドなど、幅広いスキルセットを持っています。
          </p>
        </div>

        {/* Skills Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {portfolioData.skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#333333] rounded-3xl p-6 md:p-8 shadow-md hover:shadow-playful transition-all duration-500 hover:scale-105 group"
            >
              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {skillGroup.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-3 text-sm md:text-base text-gray dark:text-gray-light hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-orange rounded-full flex-shrink-0"></div>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
