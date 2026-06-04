# Portfolio Website

Next.js App Router で作られたポートフォリオサイトです。プロフィール、経歴、制作実績、スキル、連絡先、Markdown ブログを管理できます。

## 特徴

- ダークモード対応
- レスポンシブ対応
- `data/*.ts` によるコンテンツ管理
- 制作実績の一覧・詳細ページ
- 経歴の一覧表示・詳細ページ
- `content/blog/*.md` による Markdown ブログ
- Framer Motion によるページ・要素アニメーション

## セットアップ

```bash
npm install
npm run dev
```

開発サーバーは通常 `http://localhost:3000` で起動します。

## よく使うコマンド

```bash
# 開発サーバー
npm run dev

# ESLint
npm run lint

# TypeScript の型チェック
npx tsc --noEmit

# 本番ビルド
npm run build

# 本番サーバー
npm run start
```

## コンテンツ編集

サイトの主要コンテンツは `data/` 配下の TypeScript ファイルで管理します。詳しい編集手順は [CONTENT_EDITING_GUIDE.md](./CONTENT_EDITING_GUIDE.md) も参照してください。

- `data/site.ts` - サイト設定、ヘッダー、ヒーロー、フッター
- `data/profile.ts` - プロフィール、経歴
- `data/works.ts` - 制作実績、制作実績ページの文言
- `data/skills.ts` - スキル
- `data/contact.ts` - 連絡先、SNS
- `data/types.ts` - コンテンツ型定義
- `data/portfolio.ts` - 各データの集約

基本的には `data/types.ts` と `data/portfolio.ts` は触らず、内容に応じて `site.ts`、`profile.ts`、`works.ts`、`skills.ts`、`contact.ts` を編集します。

### 基本情報

```typescript
// data/site.ts
export const site = {
  title: 'Portfolio | Your Name',
  description: 'あなたの説明文',
};

export const header = {
  name: 'PORTFOLIO.',
  navigation: [
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
  ],
  ctaButton: { text: "Let's Talk", href: '#contact' },
};
```

### プロフィールと経歴

```typescript
// data/profile.ts
export const about = {
  title: 'About Me',
  subtitle: 'プロフィール',
  profileImage: '/images/prof.jpg',
  description: ['自己紹介文をここに書きます。'],
  highlights: [{ label: 'favorite language', value: 'Go' }],
  career: [
    {
      id: 1,
      year: '2026',
      title: 'イベント名',
      category: 'Event',
      description: '一覧に表示する説明',
      fullDescription: '詳細ページに表示する説明',
      tags: ['Go', 'Backend'],
      highlights: ['取り組んだこと'],
      link: '/career/1',
    },
  ],
};
```

### 制作実績の追加

```typescript
// data/works.ts
export const works = [
  {
    id: 1,
    title: 'プロジェクト名',
    category: 'WebApp',
    description: '一覧やカードに表示する短い説明',
    fullDescription: '詳細ページに表示する説明',
    tags: ['Next.js', 'TypeScript'],
    image: '/images/project.png',
    link: '/works/1',
    externalLinks: {
      demo: 'https://demo.example.com',
      github: 'https://github.com/...',
    },
  },
];
```

画像は `public/images/` に置き、`/images/ファイル名` の形式で指定します。

### スキル

```typescript
// data/skills.ts
export const skills = [
  {
    category: 'Backend',
    items: ['Go', 'MySQL', 'Redis', 'Docker'],
  },
];
```

### 連絡先

```typescript
// data/contact.ts
export const contact = {
  email: 'your-email@example.com',
  social: [
    { name: 'GitHub', url: 'https://github.com/yourname', icon: 'github' },
    { name: 'X', url: 'https://x.com/yourname', icon: 'x' },
  ],
};
```

使用できるアイコン名は `data/types.ts` の `IconName` または `lib/icons.ts` を確認してください。

## ブログ記事の追加

`content/blog/` に `.md` ファイルを追加すると、ブログ一覧と詳細ページに反映されます。

```markdown
---
title: '記事タイトル'
date: '2026-01-22'
excerpt: '記事の概要'
tags: ['タグ1', 'タグ2']
---

# 本文

Markdown 形式で記事を書けます。
```

ブログの URL は次の形式です。

- 一覧: `/blog`
- 詳細: `/blog/[ファイル名（拡張子なし）]`

## ページ構成

- `/` - ホーム
- `/works` - 制作実績一覧
- `/works/[id]` - 制作実績詳細
- `/career/[id]` - 経歴詳細
- `/blog` - ブログ一覧
- `/blog/[slug]` - ブログ記事詳細

## ディレクトリ構成

```text
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── career/
│   │   └── [id]/
│   │       ├── page.tsx
│   │       └── CareerDetailClient.tsx
│   └── works/
│       ├── page.tsx
│       └── [id]/
│           ├── page.tsx
│           └── WorkDetailClient.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── ThemeToggle.tsx
│   └── Works.tsx
├── content/
│   └── blog/
├── data/
│   ├── contact.ts
│   ├── portfolio.ts
│   ├── profile.ts
│   ├── site.ts
│   ├── skills.ts
│   ├── types.ts
│   └── works.ts
├── lib/
│   ├── blog.ts
│   ├── career.ts
│   ├── icons.ts
│   ├── skill-icons.tsx
│   └── works.ts
└── public/
    └── images/
```

## スタイル

グローバルスタイルとテーマトークンは `app/globals.css` にあります。

```css
@theme {
  --color-orange: #ff6b35;
  --color-pink: #ff6b9d;
  --color-cream: #faf8f5;
}
```

Tailwind CSS v4 を使っているため、色や余白などのデザイントークンは `@theme` で管理します。

## 技術スタック

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- gray-matter
- remark / remark-html

## デプロイ

Vercel でのデプロイを想定しています。

1. GitHub に push
2. Vercel でリポジトリを import
3. Build Command は `npm run build`
4. Install Command は `npm install`
