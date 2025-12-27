import type { Metadata } from 'next';
import { Zen_Kaku_Gothic_New } from 'next/font/google';
import './globals.css';

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: '--font-zen-kaku',
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio | Designer & Engineer',
  description: '機能性と美しさのバランスを探求するデザイナー兼エンジニアのポートフォリオサイト',
  keywords: ['portfolio', 'designer', 'engineer', 'web development', 'UI/UX'],
  authors: [{ name: 'Portfolio' }],
  openGraph: {
    title: 'Portfolio | Designer & Engineer',
    description: '機能性と美しさのバランスを探求するデザイナー兼エンジニアのポートフォリオサイト',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${zenKakuGothicNew.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
