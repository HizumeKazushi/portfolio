import { portfolioData } from '@/data/portfolio';
import { getIcon } from '@/lib/icons';

export default function About() {
  const IconComponent = getIcon(portfolioData.about.icon || 'user');
  const profileImage = portfolioData.about.profileImage;

  return (
    <section id="about" className="py-24 px-6 bg-beige dark:bg-[#2a2a2a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Title and Content Section */}
          <div className="lg:pr-80">
            <div>
              <p className="text-orange font-semibold mb-2">{portfolioData.about.subtitle}</p>
              <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">
                {portfolioData.about.title}
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray dark:text-gray-light text-lg leading-relaxed mb-8">
              {portfolioData.about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Highlights - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-12 max-w-2xl">
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

          {/* Profile Image - Absolute positioned to overlap */}
          <div className="hidden lg:block absolute top-0 right-0">
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

          {/* Mobile Profile Image */}
          <div className="lg:hidden flex items-center justify-center mb-8">
            {profileImage ? (
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 border-4 border-white dark:border-[#333333]">
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-64 h-64 bg-white dark:bg-[#333333] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-500">
                <IconComponent className="w-32 h-32 text-orange" strokeWidth={1.5} />
              </div>
            )}
          </div>
        </div>

        {/* Career Timeline - Centered */}
        {portfolioData.about.career && (
          <div className="pt-20 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 text-center">経歴</h3>
            <div className="space-y-4">
              {portfolioData.about.career.map((item, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-orange dark:border-pink last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-orange dark:bg-pink border-4 border-beige dark:border-[#2a2a2a]"></div>

                  {/* Content */}
                  <div className="bg-white dark:bg-[#333333] rounded-xl p-4 md:p-6 shadow-md hover:shadow-playful transition-all duration-300 hover:translate-x-1">
                    <div className="text-sm font-semibold text-orange dark:text-pink mb-1">{item.year}</div>
                    <h4 className="text-lg md:text-xl font-bold text-black dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray dark:text-gray-light text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
