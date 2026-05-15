import { portfolioData } from '@/data/portfolio';
import { getIcon } from '@/lib/icons';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProfileIcon = getIcon(portfolioData.about.icon || 'user');

export default function About() {
  const profileImage = portfolioData.about.profileImage;
  const career = portfolioData.about.career ?? [];
  const careerStart = career[0]?.year ?? '';
  const careerLatest = career[career.length - 1]?.year ?? '';

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
                  <div className="text-xs md:text-sm text-gray dark:text-gray-light wrap-break-word">{highlight.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image - Absolute positioned to overlap */}
          <div className="hidden lg:block absolute top-0 right-0">
            {profileImage ? (
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 border-4 border-white dark:border-[#333333]">
                <Image src={profileImage} alt="Profile" fill sizes="(min-width: 1024px) 24rem, 16rem" className="object-cover" />
              </div>
            ) : (
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white dark:bg-[#333333] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-500">
                <ProfileIcon className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-orange" strokeWidth={1.5} />
              </div>
            )}
          </div>

          {/* Mobile Profile Image */}
          <div className="lg:hidden flex items-center justify-center mb-8">
            {profileImage ? (
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 border-4 border-white dark:border-[#333333]">
                <Image src={profileImage} alt="Profile" fill sizes="16rem" className="object-cover" />
              </div>
            ) : (
              <div className="w-64 h-64 bg-white dark:bg-[#333333] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-500">
                <ProfileIcon className="w-32 h-32 text-orange" strokeWidth={1.5} />
              </div>
            )}
          </div>
        </div>

        {/* Career Timeline - Centered */}
        {career.length > 0 && (
          <div className="pt-20">
            <div className="mx-auto mb-10 grid max-w-5xl gap-8 border-y border-beige-dark py-8 dark:border-[#3a3a3a] lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
              <div>
                <p className="mb-2 text-sm font-semibold text-orange dark:text-pink">これまでの歩み</p>
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">経歴</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-gray dark:text-gray-light md:text-base">
                  学習開始からハッカソン、コンテスト、インターンまで、開発経験を積み上げてきた流れです。
                </p>
              </div>

              <dl className="grid grid-cols-3 gap-4 border-t border-beige-dark pt-5 text-sm dark:border-[#3a3a3a] lg:grid-cols-1 lg:border-t-0 lg:pt-0">
                <div>
                  <dt className="mb-1 font-semibold text-gray dark:text-gray-light">期間</dt>
                  <dd className="font-bold text-black dark:text-white">
                    {careerStart} - {careerLatest}
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 font-semibold text-gray dark:text-gray-light">項目数</dt>
                  <dd className="font-bold text-black dark:text-white">{career.length}件</dd>
                </div>
                <div>
                  <dt className="mb-1 font-semibold text-gray dark:text-gray-light">現在の軸</dt>
                  <dd className="font-bold text-black dark:text-white">Go / Backend</dd>
                </div>
              </dl>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="relative border-t border-beige-dark dark:border-[#3a3a3a]">
                {career.map((item, index) => {
                  const isLatest = index === career.length - 1;

                  return (
                    <Link
                      key={`${item.year}-${item.title}`}
                      href={item.link}
                      className="group grid gap-4 border-b border-beige-dark py-7 transition-colors hover:border-orange dark:border-[#3a3a3a] dark:hover:border-pink md:grid-cols-[8rem_2rem_minmax(0,1fr)_2rem] md:items-start"
                      aria-label={`${item.title}の詳細を見る`}
                    >
                      <div className="flex items-center gap-3 text-sm font-bold text-orange dark:text-pink md:block">
                        <span>{item.year}</span>
                        {isLatest && (
                          <span className="border-l border-beige-dark pl-3 text-xs text-black dark:border-[#3a3a3a] dark:text-white md:mt-2 md:block md:border-l-0 md:pl-0">
                            最新
                          </span>
                        )}
                      </div>

                      <div className="hidden md:flex md:flex-col md:items-center">
                        <span className="mt-1 size-3 rounded-full border-2 border-orange bg-beige dark:border-pink dark:bg-[#2a2a2a]" />
                        <span className="mt-3 h-full min-h-16 w-px bg-beige-dark dark:bg-[#3a3a3a]" />
                      </div>

                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h4 className="text-xl font-bold leading-snug text-black transition-colors group-hover:text-orange dark:text-white dark:group-hover:text-pink md:text-2xl">
                            {item.title}
                          </h4>
                          <span className="text-xs font-semibold text-gray dark:text-gray-light">
                            {item.category}
                          </span>
                        </div>
                        <p className="max-w-2xl text-sm leading-relaxed text-gray dark:text-gray-light md:text-base">
                          {item.description}
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {item.tags.slice(0, 3).map((tag) => (
                            <li key={tag} className="text-xs font-medium text-gray dark:text-gray-light">
                              #{tag}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex size-8 items-center justify-center text-gray transition-colors group-hover:text-orange dark:text-gray-light dark:group-hover:text-pink">
                        <ArrowUpRight className="size-4" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-5xl">
              <Link
                href={career[career.length - 1]?.link ?? '/#about'}
                className="group inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-orange dark:text-white dark:hover:text-pink"
              >
                最新の経歴を見る
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
