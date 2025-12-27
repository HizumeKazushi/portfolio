# コンテンツ編集ガイド

このドキュメントは、ポートフォリオサイトのコンテンツを簡単に編集する方法を説明します。

## 📝 編集の基本

**すべてのコンテンツは `data/portfolio.js` に集約されています。**

このファイルを編集するだけで、サイト全体の内容を変更できます。プログラミングの知識は不要です！

---

## ✏️ 編集例

### 1. 自分の名前を変更する

**編集箇所**: `data/portfolio.js` の 3 行目

```javascript
header: {
  name: "PORTFOLIO.",  // ← ここを変更
```

**例**:

```javascript
header: {
  name: "SATOSHI NAKAMURA.",  // 自分の名前に変更
```

---

### 2. ヒーローセクションのメッセージを変更する

**編集箇所**: `data/portfolio.js` の 18〜24 行目

```javascript
hero: {
  subtitle: "Designing",
  title: "Digital Craft",
  titleAccent: "& Experience",
  description: [
    "機能性と美しさのバランスを探求するデザイナー兼エンジニア。",
    "あなたのブランドに「遊び心」と「洗練」をプラスします。",
  ],
```

**例**:

```javascript
hero: {
  subtitle: "Creating",
  title: "Web Solutions",
  titleAccent: "That Work",
  description: [
    "シンプルで効果的なWebソリューションを提供します。",
    "あなたのビジネスを次のレベルへ。",
  ],
```

---

### 3. プロジェクトを追加する

**編集箇所**: `data/portfolio.js` の 64〜94 行目

```javascript
works: [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'モダンなEコマースプラットフォームの構築',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/project1.jpg',
    link: '#',
  },
  // 新しいプロジェクトをここに追加
];
```

**新しいプロジェクトの追加例**:

```javascript
works: [
  // 既存のプロジェクト...
  {
    id: 4, // 新しいID
    title: 'Corporate Website', // プロジェクト名
    category: 'Web Design', // カテゴリー
    description: '企業向けコーポレートサイトのデザイン', // 説明
    tags: ['Figma', 'WordPress', 'SEO'], // 使用技術
    image: '/images/project4.jpg', // 画像パス
    link: 'https://example.com', // プロジェクトURL
  },
];
```

> [!TIP]
> 画像は `public/images/` フォルダーに配置してください。

---

### 4. スキルを変更する

**編集箇所**: `data/portfolio.js` の 96〜113 行目

```javascript
skills: [
  {
    category: 'Design',
    items: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator', 'Photoshop'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  // ...
];
```

**カテゴリーやスキルの変更例**:

```javascript
skills: [
  {
    category: 'UI/UX デザイン', // カテゴリー名を日本語に
    items: ['Figma', 'Adobe XD', 'プロトタイピング'], // スキルを変更
  },
  {
    category: 'Webデベロップメント',
    items: ['HTML', 'CSS', 'JavaScript', 'Vue.js'], // 使用技術を変更
  },
];
```

---

### 5. 連絡先を変更する

**編集箇所**: `data/portfolio.js` の 115〜125 行目

```javascript
contact: {
  title: "Let's Work Together",
  subtitle: "お気軽にご連絡ください",
  description: "新しいプロジェクトやコラボレーションのお話をお待ちしています。",
  email: "contact@example.com",  // ← メールアドレスを変更
  social: [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
    // ...
  ],
}
```

**メールアドレスと SNS リンクの変更例**:

```javascript
contact: {
  email: "your-email@gmail.com",  // 自分のメールアドレス
  social: [
    { name: "GitHub", url: "https://github.com/yourname", icon: "github" },
    { name: "Twitter", url: "https://twitter.com/yourname", icon: "twitter" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourname", icon: "linkedin" },
  ],
}
```

---

## 🖼️ 画像の追加方法

1. **画像を準備**:

   - プロジェクトの画像を用意（JPG、PNG 形式推奨）
   - ファイル名は英数字とハイフンのみ（例: `my-project-1.jpg`）

2. **画像を配置**:

   ```bash
   # 画像を public/images フォルダーにコピー
   cp ~/Desktop/my-project.jpg public/images/
   ```

3. **パスを指定**:
   `data/portfolio.js` で画像パスを指定
   ```javascript
   {
     id: 1,
     title: "My Project",
     image: "/images/my-project.jpg",  // ← ファイル名を指定
   }
   ```

---

## 💾 変更を保存して確認

1. **ファイルを保存**: `data/portfolio.js` を保存（Cmd + S）

2. **ブラウザで確認**:

   - 開発サーバーが起動していれば自動的にリロードされます
   - http://localhost:3000 で確認

3. **変更が反映されない場合**:
   - ブラウザを手動でリロード（Cmd + R）
   - 開発サーバーを再起動
     ```bash
     # Ctrl + C で停止
     npm run dev  # 再起動
     ```

---

## 🎨 色やフォントの変更

### カラーテーマの変更

**編集ファイル**: `app/globals.css`

```css
:root {
  --background: #faf8f5; /* 背景色 */
  --orange: #ff6b35; /* アクセントカラー */
  --pink: #ff6b9d; /* セカンダリーカラー */
}
```

### フォントの変更

**編集ファイル**: `app/layout.tsx`

```typescript
import { Inter, Outfit } from 'next/font/google';

// 別のフォントに変更する場合
import { Roboto, Poppins } from 'next/font/google';
```

---

## ❓ よくある質問

**Q: コンテンツを編集したのに反映されません**

- A: ブラウザをリロードしてください。また、`data/portfolio.js` の構文エラーがないか確認してください。

**Q: 画像が表示されません**

- A: 画像のパスが正しいか確認してください。`/images/` で始まるパスを使用します。

**Q: プロジェクトを削除したい**

- A: `data/portfolio.js` の `works` 配列から該当のオブジェクトを削除してください。

---

## 🚀 次のステップ

コンテンツの編集に慣れたら、以下にも挑戦してみてください：

1. **新しいセクションを追加** - `components/` にコンポーネントを作成
2. **カスタムアニメーションを追加** - `app/globals.css` でアニメーションを定義
3. **本番環境へデプロイ** - Vercel などでデプロイ

編集を楽しんでください！🎉
