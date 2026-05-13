# コンテンツ編集ガイド

このサイトのコンテンツは `data/` 配下の TypeScript ファイルに分割されています。

## 編集するファイル

- `data/site.ts` - サイト設定、ヘッダー、ヒーロー、フッター
- `data/profile.ts` - プロフィール、経歴
- `data/works.ts` - 作品一覧、作品ページの文言
- `data/skills.ts` - スキル
- `data/contact.ts` - 連絡先、SNS
- `data/types.ts` - データの型定義
- `data/portfolio.ts` - 各データをまとめて公開するファイル

基本的には `data/portfolio.ts` と `data/types.ts` は触らず、内容に応じて `site.ts`、`profile.ts`、`works.ts`、`skills.ts`、`contact.ts` を編集してください。

## 基本情報を変更する

サイトタイトル、ヘッダー、ヒーロー、フッターは `data/site.ts` を編集します。

```typescript
export const site = {
  title: 'Portfolio | Your Name',
  description: 'あなたの説明文',
};
```

## プロフィールを変更する

自己紹介、プロフィール画像、経歴は `data/profile.ts` を編集します。

```typescript
export const about = {
  title: 'About Me',
  subtitle: 'プロフィール',
  profileImage: '/images/prof.jpg',
  description: ['自己紹介文をここに書きます。'],
  highlights: [{ label: 'favorite language', value: 'Go' }],
  career: [
    {
      year: '2026',
      title: 'イベント名',
      description: '説明文',
    },
  ],
};
```

## 作品を追加する

作品は `data/works.ts` の `works` 配列に追加します。

```typescript
{
  id: 9,
  title: 'プロジェクト名',
  category: 'WebApp',
  description: '一覧やカードに出す短い説明',
  fullDescription: '詳細ページに出す説明',
  tags: ['Next.js', 'TypeScript'],
  image: '/images/project.png',
  link: '/works/9',
  externalLinks: {
    demo: 'https://demo.example.com',
    github: 'https://github.com/...',
  },
}
```

画像は `public/images/` に置き、パスは `/images/ファイル名` の形式で指定します。

## スキルを変更する

スキルは `data/skills.ts` を編集します。

```typescript
export const skills = [
  {
    category: 'Backend',
    items: ['Go', 'MySQL', 'Redis', 'Docker'],
  },
];
```

## 連絡先を変更する

メールアドレスや SNS は `data/contact.ts` を編集します。

```typescript
export const contact = {
  email: 'your-email@example.com',
  social: [
    { name: 'GitHub', url: 'https://github.com/yourname', icon: 'github' },
    { name: 'Twitter', url: 'https://x.com/yourname', icon: 'x' },
  ],
};
```

使用できるアイコン名は `data/types.ts` の `IconName` または `lib/icons.ts` を確認してください。

## 確認方法

編集後は次のコマンドで確認します。

```bash
npm run lint
npx tsc --noEmit
```

開発サーバーを起動している場合は、ブラウザで `http://localhost:3000` を確認してください。
