import type { ContactContent } from './types';

export const contact = {
  title: "Let's Work Together",
  subtitle: 'お気軽にご連絡ください',
  description: '新しいプロジェクトやコラボレーションのお話をお待ちしています。',
  email: 'hizume.mochi@gmail.com',
  ctaTitle: "Let's create something amazing together!",
  ctaDescription: 'プロジェクトのご相談、お仕事のご依頼など、お気軽にご連絡ください。',
  ctaButton: 'Get in Touch',
  social: [
    { name: 'GitHub', url: 'https://github.com/HizKz', icon: 'github' },
    { name: 'Twitter', url: 'https://x.com/hiz_kz', icon: 'x' },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/playlist/0d9a9uhMqJpqoQRC5FKBmu?si=e9efb259fe61473a',
      icon: 'spotify',
    },
  ],
} satisfies ContactContent;
