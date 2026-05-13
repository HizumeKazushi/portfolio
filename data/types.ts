export type LinkItem = {
  name: string;
  href: string;
};

export type ButtonLink = {
  text: string;
  href: string;
};

export type IconName =
  | 'box'
  | 'cloud'
  | 'code'
  | 'cpu'
  | 'database'
  | 'design'
  | 'dribbble'
  | 'facebook'
  | 'github'
  | 'globe'
  | 'heart'
  | 'instagram'
  | 'laptop'
  | 'layers'
  | 'linkedin'
  | 'mail'
  | 'monitor'
  | 'palette'
  | 'rocket'
  | 'server'
  | 'smartphone'
  | 'sparkles'
  | 'spotify'
  | 'star'
  | 'terminal'
  | 'twitter'
  | 'user'
  | 'x'
  | 'youtube'
  | 'zap';

export type SiteMeta = {
  title: string;
  description: string;
};

export type HeaderContent = {
  name: string;
  navigation: LinkItem[];
  ctaButton: ButtonLink;
};

export type HeroContent = {
  subtitle: string;
  title: string;
  titleAccent: string;
  description: string[];
  button: ButtonLink;
  accentCard?: {
    title: string;
    subtitle: string;
  };
  floatingCards: {
    id: number;
    title: string;
    subtitle: string;
    icon: IconName;
    color: 'orange' | 'pink';
  }[];
};

export type ProfileContent = {
  title: string;
  subtitle: string;
  icon?: IconName;
  profileImage?: string;
  description: string[];
  highlights: {
    label: string;
    value: string;
  }[];
  career?: {
    year: string;
    title: string;
    description: string;
  }[];
};

export type Work = {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  image?: string;
  link: string;
  externalLinks?: {
    demo?: string;
    github?: string;
  };
};

export type WorksSectionContent = {
  title: string;
  subtitle: string;
  viewAllText: string;
  viewDetailsText: string;
};

export type WorksArchiveContent = {
  title: string;
  subtitle: string;
  description: string;
  backToHome: string;
  ctaText: string;
  ctaButton: string;
};

export type WorksDetailContent = {
  backToWorks: string;
  backToAll: string;
  overviewTitle: string;
  technologiesTitle: string;
  linksTitle: string;
  viewDetailsText: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type SkillsSectionContent = {
  title: string;
  subtitle: string;
};

export type ContactContent = {
  title: string;
  subtitle: string;
  description: string;
  email: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  social: {
    name: string;
    url: string;
    icon: IconName;
  }[];
};

export type FooterContent = {
  text: string;
  links: LinkItem[];
};

export type PortfolioData = {
  site: SiteMeta;
  header: HeaderContent;
  hero: HeroContent;
  about: ProfileContent;
  worksSection: WorksSectionContent;
  worksArchive: WorksArchiveContent;
  worksDetail: WorksDetailContent;
  works: Work[];
  skillsSection: SkillsSectionContent;
  skills: SkillGroup[];
  contact: ContactContent;
  footer: FooterContent;
};
