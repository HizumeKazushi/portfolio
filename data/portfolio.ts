import { contact } from './contact';
import { about } from './profile';
import { skills, skillsSection } from './skills';
import { footer, header, hero, site } from './site';
import type { PortfolioData } from './types';
import { works, worksArchive, worksDetail, worksSection } from './works';

export const portfolioData = {
  site,
  header,
  hero,
  about,
  worksSection,
  worksArchive,
  worksDetail,
  works,
  skillsSection,
  skills,
  contact,
  footer,
} satisfies PortfolioData;

export type { Career, PortfolioData, Work } from './types';
