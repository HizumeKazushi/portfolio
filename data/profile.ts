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
      id: 1,
      year: '2024.12',
      title: 'プログラミング学習開始',
      category: '学習',
      description: '本格的にプログラミングの学習を開始。バックエンド開発を中心に学習を進める。',
      fullDescription:
        'Goを中心に、Webアプリケーションのバックエンド開発に必要な基礎を学び始めました。HTTP、DB、API設計など、アプリケーションが動く仕組みを一つずつ理解しながら、小さな実装を積み重ねています。',
      tags: ['Go', 'Backend', 'HTTP', 'Database'],
      highlights: ['バックエンド開発を軸に学習を開始', 'APIやデータベースの基礎を習得', '小さな実装から継続的にアウトプット'],
      link: '/career/1',
    },
    {
      id: 2,
      year: '2024',
      title: 'Hack U KOSEN 2024 参加',
      category: 'ハッカソン',
      description: 'Yahoo! JAPANが主催するハッカソンに初参加。チーム開発の経験を積む。',
      fullDescription:
        '初めて本格的なハッカソンに参加し、限られた時間の中でアイデアを形にする開発を経験しました。個人開発とは違う、役割分担・相談・実装速度の重要性を学ぶきっかけになりました。',
      tags: ['Hackathon', 'Team Development', 'Prototype'],
      highlights: ['ハッカソン形式の開発を初経験', 'チームでの役割分担を経験', '短期間で形にする開発サイクルを体験'],
      link: '/career/2',
    },
    {
      id: 3,
      year: '2025',
      title: 'Hack U KOSEN 2025 OSAKA 参加',
      category: 'プロダクト開発',
      description: '🤩部☆室☆王🤩プロジェクトで組み込みとWebAppを担当。実践的な開発経験を積む。',
      fullDescription:
        '🤩部☆室☆王🤩プロジェクトでは、組み込み領域とWebアプリケーションの連携部分を担当しました。画面上の体験だけでなく、現実のデバイスや状態とWebがつながる面白さを実感したプロジェクトです。',
      tags: ['WebApp', 'Embedded', 'Firebase', 'Team Development'],
      highlights: ['組み込みとWebアプリの接続を担当', '実際に使えるプロダクトとして実装', 'チーム開発で実践的な担当領域を経験'],
      link: '/career/3',
    },
    {
      id: 4,
      year: '2025',
      title: 'DCON 参加中',
      category: 'コンテスト',
      description: '全国高等専門学校ディープラーニングコンテストに参加中。本戦出場決定',
      fullDescription:
        '全国高等専門学校ディープラーニングコンテストに参加し、AIを活用したプロダクトや事業性を考える経験をしています。技術実装だけでなく、課題設定や価値の伝え方まで含めて取り組んでいます。',
      tags: ['Deep Learning', 'AI', 'Presentation', 'Business'],
      highlights: ['DCON本戦出場が決定', 'AIを活用した課題解決に挑戦', '技術と事業性の両面からプロダクトを検討'],
      link: '/career/4',
    },
    {
      id: 5,
      year: '2026',
      title: 'GoCollege 参加',
      category: 'インターン',
      description: 'サイバーエージェント様が主催するGo言語のインターンに参加。ベストセキュリティ賞を受賞。',
      fullDescription:
        'サイバーエージェント様が主催するGo言語のインターンに参加しました。Goでの実装力を伸ばしながら、セキュリティ観点を含めた開発に取り組み、ベストセキュリティ賞を受賞しました。',
      tags: ['Go', 'Security', 'Backend', 'Internship'],
      highlights: ['Go言語のインターンに参加', 'セキュリティを意識した実装に取り組む', 'ベストセキュリティ賞を受賞'],
      link: '/career/5',
    },
  ],
} satisfies ProfileContent;
