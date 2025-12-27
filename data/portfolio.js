export const portfolioData = {
  // Site meta
  site: {
    title: 'Portfolio | HizumeKazushi/mochi',
    description: 'HizumeKazushi/mochiのポートフォリオサイト',
  },

  header: {
    name: 'PORTFOLIO.',
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Works', href: '#works' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' },
    ],
    ctaButton: {
      text: "Let's Talk",
      href: '#contact',
    },
  },

  hero: {
    subtitle: 'Engineer',
    title: 'Portfolio',
    titleAccent: '& Experience',
    description: [
      '高専３年のバックエンドエンジニア志望学生です。',
      'このページでは私が作ってきたものをまとめています。',
    ],
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
  },

  about: {
    title: 'About Me',
    subtitle: 'プロフィール',
    icon: 'user',
    profileImage: '/images/prof.jpg',
    description: [
      'こんにちは！HizumeKazushi(もち)です。',
      '主にGo言語でバックエンド開発をしています。',
      'たまにフロントエンド開発もしています',
    ],
    highlights: [
      { label: 'graduation', value: '3' },
      { label: 'favorite language', value: 'Go' },
      { label: 'hobby', value: 'Music' },
    ],
  },

  // Works section config
  worksSection: {
    title: 'Selected Works',
    subtitle: 'これまでに制作したプロジェクトの一部です。',
    viewAllText: 'View All Archives',
    viewDetailsText: 'View Details',
  },

  // Works archive page config
  worksArchive: {
    title: 'Works',
    subtitle: 'Archive',
    description: 'これまでに手がけた制作物をまとめています',
    backToHome: 'ホームに戻る',
    ctaText: 'もっと作品を見たいですか？',
    ctaButton: 'お問い合わせ',
  },

  // Works detail page config
  worksDetail: {
    backToWorks: '作品一覧に戻る',
    backToAll: 'すべての作品を見る',
    overviewTitle: 'プロジェクト概要',
    technologiesTitle: '使用技術',
    linksTitle: 'リンク',
    viewDetailsText: '詳細を見る',
  },

  works: [
    {
      id: 1,
      title: 'Cove[開発中]',
      category: 'SNS',
      description: '',
      fullDescription:
        '新しいソーシャルネットワークサービスの開発プロジェクト。現実の繋がりを大切にするコンセプトで設計しています。',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Go', 'capacitor', 'firebase'],
      image: '/images/Cove_clear.png',
      link: '/works/1',
      externalLinks: {
        demo: '',
        github: 'https://github.com/HizumeKazushi/Cove',
      },
    },
    {
      id: 2,
      title: '🤩部☆室☆王🤩',
      category: 'WebApp',
      description: 'Hack U KOSEN 2025 OSAKA',
      fullDescription: 'Hack U KOSEN 2025 OSAKAに参加して作成したプロダクトです。私は組み込みのWebAppを担当しました。',
      tags: ['Vue.js', 'Next.js', 'TailwindCSS', 'Firebase', 'Vercel'],
      image: '/images/bushituoh.png',
      link: '/works/2',
      externalLinks: {
        demo: 'https://hacku2025.vercel.app/',
        github: 'https://github.com/NIT-Maizuru-Programmers-Community/BU-SHITU-OH_hackukosen2025',
      },
    },
    {
      id: 3,
      title: 'KakuNote[バックエンド構築中]',
      category: 'WebApp',
      description: '',
      fullDescription: 'AIを内蔵したメモアプリケーションです。日記なども書けます',
      tags: ['Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Go', 'firebase'],
      image: '/images/Kaku_Note.png',
      link: '/works/3',
      externalLinks: {
        demo: '',
        github: 'https://github.com/HizumeKazushi/KakuNote',
      },
    },
    {
      id: 4,
      title: '食堂ナビ',
      category: 'WebApp',
      description: '部室内のプロジェクトで作成した献立アプリ',
      fullDescription: '寮食の献立をすぐ確認できるアプリです。私はリーダー、WebAppを担当しました',
      tags: ['Vuetify', 'Firebase', 'Rasberry Pi'],
      image: '/images/shokudou_nabi.jpg',
      link: '/works/4',
      externalLinks: {
        demo: 'https://shokudou-nabi.web.app/',
        github: 'https://github.com/HizumeKazushi/shokudou-nabi',
      },
    },
  ],

  // Skills section config
  skillsSection: {
    title: 'Skills',
    subtitle: 'スキル',
  },

  skills: [
    {
      category: 'Frontend',
      items: ['Nuxt.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Go', 'MySQL', 'PostgreSQL', 'docker'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Notion', 'obsidian'],
    },
  ],

  contact: {
    title: "Let's Work Together",
    subtitle: 'お気軽にご連絡ください',
    description: '新しいプロジェクトやコラボレーションのお話をお待ちしています。',
    email: 'hizume.mochi@gmail.com',
    ctaTitle: "Let's create something amazing together!",
    ctaDescription: 'プロジェクトのご相談、お仕事のご依頼など、お気軽にご連絡ください。',
    ctaButton: 'Get in Touch',
    social: [
      { name: 'GitHub', url: 'https://github.com/HizumeKazushi', icon: 'github' },
      { name: 'Twitter', url: 'https://twitter.com/20_mochi_38', icon: 'twitter' },
    ],
  },

  footer: {
    text: '© 2025 Portfolio. All rights reserved.',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  },
};
