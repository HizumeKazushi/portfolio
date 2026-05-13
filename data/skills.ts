import type { SkillGroup, SkillsSectionContent } from './types';

export const skillsSection = {
  title: 'Skills',
  subtitle: 'スキル',
} satisfies SkillsSectionContent;

export const skills = [
  {
    category: 'Backend',
    items: ['Go', 'MySQL', 'Redis', 'docker'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Notion'],
  },
] satisfies SkillGroup[];
