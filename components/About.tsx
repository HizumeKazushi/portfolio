import { portfolioData } from '@/data/portfolio';
import { getIcon } from '@/lib/icons';

export default function About() {
  const IconComponent = getIcon(portfolioData.about.icon || 'user');
  const profileImage = portfolioData.about.profileImage;

  return (
    <section id="about" className="py-24 px-6 bg-beige dark:bg-[#2a2a2a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-orange font-semibold mb-2">{portfolioData.about.subtitle}</p>
              <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">
                {portfolioData.about.title}
              </h2>
            </div>

            <div className="space-y-4 text-gray dark:text-gray-light text-lg leading-relaxed">
              {portfolioData.about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Highlights - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-8">
              {portfolioData.about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="text-center p-4 md:p-6 bg-white dark:bg-[#333333] rounded-2xl shadow-md hover:shadow-playful transition-all duration-500 hover:scale-105"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{highlight.value}</div>
                  <div className="text-xs md:text-sm text-gray dark:text-gray-light break-words">{highlight.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Profile Image or Icon */}
          <div className="flex items-center justify-center">
            {profileImage ? (
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 border-4 border-white dark:border-[#333333]">
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white dark:bg-[#333333] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-500">
                <IconComponent className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-orange" strokeWidth={1.5} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
