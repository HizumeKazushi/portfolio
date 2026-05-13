import type { ProfileContent } from './types';

export const about = {
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
  career: [
    {
      year: '2024.12',
      title: 'プログラミング学習開始',
      description: '本格的にプログラミングの学習を開始。バックエンド開発を中心に学習を進める。',
    },
    {
      year: '2024',
      title: 'Hack U KOSEN 2024 参加',
      description: 'Yahoo! JAPANが主催するハッカソンに初参加。チーム開発の経験を積む。',
    },
    {
      year: '2025',
      title: 'Hack U KOSEN 2025 OSAKA 参加',
      description: '🤩部☆室☆王🤩プロジェクトで組み込みとWebAppを担当。実践的な開発経験を積む。',
    },
    {
      year: '2025',
      title: 'DCON 参加中',
      description: '全国高等専門学校ディープラーニングコンテストに参加中。本戦出場決定',
    },
    {
      year: '2026',
      title: 'GoCollege 参加',
      description: 'サイバーエージェント様が主催するGo言語のインターンに参加。ベストセキュリティ賞を受賞。',
    },
  ],
} satisfies ProfileContent;
