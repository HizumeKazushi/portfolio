import { portfolioData } from '@/data/portfolio';
import FloatingCard from './FloatingCard';
import { ArrowRight, MousePointer2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-cream dark:bg-[#1a1a1a] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Subtitle */}
            <p className="text-gray dark:text-gray-light text-lg italic">{portfolioData.hero.subtitle}</p>

            {/* Main Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-black dark:text-white">{portfolioData.hero.title}</span>
              <br />
              <span className="gradient-text">{portfolioData.hero.titleAccent}</span>
            </h1>

            {/* Description */}
            <div className="space-y-2 text-gray dark:text-gray-light text-lg max-w-xl">
              {portfolioData.hero.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={portfolioData.hero.button.href}
              className="inline-flex items-center gap-2 bg-black dark:bg-white hover:bg-gray dark:hover:bg-gray-light text-white dark:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {portfolioData.hero.button.text}
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Scroll Indicator */}
            <div className="pt-12 flex items-center gap-3 text-gray-light dark:text-gray text-sm">
              <div className="w-6 h-10 border-2 border-gray-light dark:border-gray rounded-full flex items-start justify-center p-1">
                <div className="w-1.5 h-3 bg-gray-light dark:bg-gray rounded-full animate-bounce"></div>
              </div>
              <span className="italic flex items-center gap-2">
                <MousePointer2 className="w-4 h-4" />
                Scroll Down
              </span>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="hidden lg:block relative h-[600px]">
            {/* Large Accent Card - Glass style like floatingCards */}
            <div
              className="absolute top-0 right-0 w-80 h-96 glass rounded-3xl shadow-xl z-10 flex items-center justify-center transform transition-transform duration-500 hover:scale-105"
              style={{
                transform: 'rotate(-8deg)',
              }}
            >
              <div className="text-center p-8">
                <h3 className="text-3xl font-bold text-black dark:text-white mb-2">
                  {portfolioData.hero.accentCard?.title || 'Technology'}
                </h3>
                <p className="text-3xl font-bold text-black dark:text-white">
                  {portfolioData.hero.accentCard?.subtitle || 'Design'}
                </p>
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute top-32 left-0 w-72 z-20" style={{ transform: 'rotate(12deg)' }}>
              <FloatingCard
                title={portfolioData.hero.floatingCards[0].title}
                subtitle={portfolioData.hero.floatingCards[0].subtitle}
                icon={portfolioData.hero.floatingCards[0].icon}
                color={portfolioData.hero.floatingCards[0].color as 'orange' | 'pink'}
                delay={0}
              />
            </div>

            {/* Floating Card 2 */}
            <div className="absolute top-72 left-12 w-72 z-30" style={{ transform: 'rotate(-15deg)' }}>
              <FloatingCard
                title={portfolioData.hero.floatingCards[1].title}
                subtitle={portfolioData.hero.floatingCards[1].subtitle}
                icon={portfolioData.hero.floatingCards[1].icon}
                color={portfolioData.hero.floatingCards[1].color as 'orange' | 'pink'}
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Background - less AI-like */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-orange/10 dark:bg-orange/5 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-pink/10 dark:bg-pink/5 rounded-full blur-2xl -z-10"></div>
    </section>
  );
}
