# Portfolio Website

モダンでインタラクティブなポートフォリオサイトです。Next.js 16、Tailwind CSS、Framer Motion を使用しています。

## ✨ 特徴

- 🎨 **美しいデザイン** - グラスモーフィズム、スムーズなアニメーション
- 🌙 **ダークモード対応** - ボタンで切り替え可能
- 📱 **レスポンシブ** - モバイル、タブレット、デスクトップ対応
- ⚡ **高速** - Next.js App Router + Turbopack
- 🔧 **簡単カスタマイズ** - `portfolio.js` で全てのコンテンツを管理
- 📝 **Markdownブログ** - `.md` ファイルで記事を管理

## 🚀 セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build
```

開発サーバー: http://localhost:3000

## 📝 コンテンツの編集

全てのコンテンツは `data/portfolio.js` で管理されています。

### 基本情報

```javascript
// data/portfolio.js
export const portfolioData = {
  site: {
    title: 'Portfolio | Your Name',
    description: 'あなたの説明文',
  },
  header: {
    name: 'PORTFOLIO.',
    navigation: [...],
    ctaButton: { text: 'Let\'s Talk', href: '#contact' },
  },
  // ...
}
```

### 作品の追加

```javascript
works: [
  {
    id: 1,
    title: 'プロジェクト名',
    category: 'WebApp',
    description: '短い説明',
    fullDescription: '詳細な説明',
    tags: ['Next.js', 'TypeScript'],
    image: '/images/project.png', // public/images/ に配置
    link: '/works/1',
    externalLinks: {
      demo: 'https://demo.example.com',
      github: 'https://github.com/...',
    },
  },
  // ...
];
```

### プロフィール画像

```javascript
about: {
  profileImage: '/images/prof.jpg',  // public/images/ に配置
  // ...
}
```

### アイコンの変更

使用可能なアイコン名:

- 一般: `code`, `sparkles`, `heart`, `star`, `rocket`, `globe`
- 技術: `terminal`, `database`, `server`, `cloud`, `cpu`
- デバイス: `smartphone`, `monitor`, `laptop`
- SNS: `github`, `twitter`, `linkedin`, `instagram`

```javascript
floatingCards: [
  { icon: 'code', ... },
  { icon: 'sparkles', ... },
]
```

## � ブログ記事の追加

`content/blog/` ディレクトリに `.md` ファイルを追加するだけで記事が公開されます。

### 記事のフォーマット

```markdown
---
title: '記事タイトル'
date: '2026-01-22'
excerpt: '記事の概要（一覧ページに表示されます）'
tags: ['タグ1', 'タグ2']
---

# 本文

Markdown形式で記事を書けます。

## 見出し2

- リスト
- リスト

\`\`\`javascript
// コードブロックも使えます
const hello = "world";
\`\`\`
```

### ブログページ

- 一覧: `/blog`
- 詳細: `/blog/[ファイル名（拡張子なし）]`

## �📁 ディレクトリ構成

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # レイアウト設定
│   ├── page.tsx            # ホームページ
│   ├── globals.css         # グローバルスタイル
│   ├── blog/               # ブログページ
│   │   ├── page.tsx        # 一覧ページ
│   │   └── [slug]/         # 詳細ページ
│   └── works/              # 作品ページ
├── components/             # Reactコンポーネント
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Works.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── ...
├── content/
│   └── blog/               # ★ ブログ記事（.md）
├── data/
│   └── portfolio.js        # ★ コンテンツ管理
├── lib/
│   ├── icons.ts            # アイコンマッピング
│   └── blog.ts             # ブログユーティリティ
└── public/
    └── images/             # 画像ファイル
```

## 🎨 カスタマイズ

### テーマカラーの変更

`app/globals.css` で色を変更:

```css
@theme {
  --color-orange: #ff6b35; /* メインカラー */
  --color-pink: #ff6b9d; /* アクセントカラー */
  --color-cream: #faf8f5; /* 背景色 */
}
```

## 📦 デプロイ

### Vercel (推奨)

1. GitHub にプッシュ
2. [Vercel](https://vercel.com) でリポジトリをインポート
3. 自動デプロイ完了

## 🛠 技術スタック

- [Next.js 16](https://nextjs.org/) - React フレームワーク
- [Tailwind CSS v4](https://tailwindcss.com/) - スタイリング
- [Framer Motion](https://www.framer.com/motion/) - アニメーション
- [Lucide React](https://lucide.dev/) - アイコン
- [TypeScript](https://www.typescriptlang.org/) - 型安全性
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Markdownメタデータ
- [remark](https://github.com/remarkjs/remark) - Markdown変換
