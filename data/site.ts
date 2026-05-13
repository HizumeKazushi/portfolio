import type { FooterContent, HeaderContent, HeroContent, SiteMeta } from './types';

export const site = {
  title: 'Portfolio | hizkz',
  description: 'hizkzのポートフォリオサイト',
} satisfies SiteMeta;

export const header = {
  name: 'PORTFOLIO.',
  navigation: [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Works', href: '/#works' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ],
  ctaButton: {
    text: "Let's Talk",
    href: '/#contact',
  },
} satisfies HeaderContent;

export const hero = {
  subtitle: 'Engineer',
  title: 'Portfolio',
  titleAccent: '& Experience',
  description: ['高専３年のバックエンドエンジニア志望学生です。', 'このページでは私が作ってきたものをまとめています。'],
  button: {
    text: 'View Works',
    href: '#works',
  },
  accentCard: {
    title: 'Technology',
    subtitle: '&Design',
  },
  floatingCards: [
    {
      id: 1,
      title: 'Clean Code',
      subtitle: 'メンテナンス性とパフォーマンスを重視した設計',
      icon: 'code',
      color: 'orange',
    },
    {
      id: 2,
      title: 'AI agent',
      subtitle: '最新の技術をキャッチアップ',
      icon: 'sparkles',
      color: 'pink',
    },
  ],
} satisfies HeroContent;

export const footer = {
  text: '© 2025 Portfolio. All rights reserved.',
  links: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
} satisfies FooterContent;
