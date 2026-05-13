import type { Work, WorksArchiveContent, WorksDetailContent, WorksSectionContent } from './types';

export const worksSection = {
  title: 'Selected Works',
  subtitle: 'これまでに制作したプロジェクトの一部です。',
  viewAllText: 'View All Archives',
  viewDetailsText: 'View Details',
} satisfies WorksSectionContent;

export const worksArchive = {
  title: 'Works',
  subtitle: 'Archive',
  description: 'これまでに手がけた制作物をまとめています',
  backToHome: 'ホームに戻る',
  ctaText: 'もっと作品を見たいですか？',
  ctaButton: 'お問い合わせ',
} satisfies WorksArchiveContent;

export const worksDetail = {
  backToWorks: '作品一覧に戻る',
  backToAll: 'すべての作品を見る',
  overviewTitle: 'プロジェクト概要',
  technologiesTitle: '使用技術',
  linksTitle: 'リンク',
  viewDetailsText: '詳細を見る',
} satisfies WorksDetailContent;

export const works = [
  {
    id: 1,
    title: 'KakuNote',
    category: 'WebApp',
    description: '',
    fullDescription: 'AIを内蔵したメモアプリケーションです。日記なども書けます',
    tags: ['Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Go', 'firebase'],
    image: '/images/Kaku_Note.png',
    link: '/works/1',
    externalLinks: {
      demo: 'https://kaku-note.vercel.app',
    },
  },
  {
    id: 2,
    title: '🤩部☆室☆王🤩',
    category: 'WebApp',
    description: 'Hack U KOSEN 2025 OSAKA',
    fullDescription: 'Hack U KOSEN 2025 OSAKAに参加して作成したプロダクトです。私は組み込みのwebappを担当しました。',
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
    title: 'coffee recipe app',
    category: 'WebApp,NativeApp',
    description: 'コーヒーレシピ共有アプリ',
    tags: ['React Native', 'Expo', 'supabase', 'TypeScript', 'Go', 'Gin'],
    link: '/works/3',
    externalLinks: {
      demo: 'https://coffee-recipe-hub-teal.vercel.app/',
    },
  },
  {
    id: 4,
    title: 'Cove[開発中]',
    category: 'SNS',
    description: '',
    fullDescription: '新しいソーシャルネットワークサービスの開発プロジェクト。現実の繋がりを大切にするコンセプトで設計しています。',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Go', 'capacitor', 'firebase'],
    image: '/images/Cove_clear.png',
    link: '/works/4',
    externalLinks: {
      demo: '',
      github: 'https://github.com/HizumeKazushi/Cove',
    },
  },
  {
    id: 5,
    title: '食堂ナビ',
    category: 'WebApp',
    description: '部室内のプロジェクトで作成した献立アプリ',
    fullDescription: '寮食の献立をすぐ確認できるアプリです。私はリーダー、WebAppを担当しました',
    tags: ['Vuetify', 'Firebase', 'Rasberry Pi'],
    image: '/images/shokudou_nabi.jpg',
    link: '/works/5',
    externalLinks: {
      demo: 'https://shokudou-nabi.web.app/',
      github: 'https://github.com/HizumeKazushi/shokudou-nabi',
    },
  },
  {
    id: 6,
    title: 'Fideliair',
    category: 'NativeApp',
    description: 'Mac用音楽再生アプリ',
    fullDescription:
      'Mac用の音楽再生アプリです。SwiftUIとLiquid Glassを使用して美しいUIを実現しました。YouTube MusicやGoogle Drive、ローカル再生に対応しています。',
    tags: ['swift', 'SwiftUI', 'Liquid Glass'],
    image: '/images/Fideliair.png',
    link: '/works/6',
    externalLinks: {
      demo: 'https://github.com/HizumeKazushi/Fideliair/releases/tag/v0.9',
      github: 'https://github.com/HizumeKazushi/Fideliair',
    },
  },
  {
    id: 7,
    title: 'PDF to PNG',
    category: 'WebApp',
    description: 'PDFをPNGに変換するシンプルなWebアプリ',
    fullDescription: '',
    tags: ['Next.js', 'vercel'],
    image: '/images/pdftopng.png',
    link: '/works/7',
    externalLinks: {
      demo: 'https://pdf-to-png-next.vercel.app/',
      github: 'https://github.com/HizumeKazushi/pdftopng',
    },
  },
  {
    id: 8,
    title: 'localhost_check',
    category: 'CLI Tool',
    description: 'ローカルホストのポート使用状況を確認するCLIツール',
    fullDescription: 'javascriptで書かれたCLIツールで、ローカルホストのポート使用状況を簡単に確認できます。',
    tags: ['javascript', 'node.js'],
    link: '/works/8',
    externalLinks: {
      demo: 'https://www.npmjs.com/package/localhost-port-check',
      github: 'https://github.com/HizumeKazushi/localhost_check',
    },
  },
] satisfies Work[];
