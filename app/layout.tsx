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
  title: 'Portfolio | HizumeKazushi/mochi',
  description: 'HizumeKazushi/mochiのポートフォリオサイト',
  keywords: ['portfolio', 'designer', 'engineer', 'web development', 'UI/UX'],
  authors: [{ name: 'HizumeKazushi' }],
  icons: {
    icon: '/images/prof.jpg',
    apple: '/images/prof.jpg',
  },
  openGraph: {
    title: 'Portfolio | HizumeKazushi/mochi',
    description: 'HizumeKazushi/mochiのポートフォリオサイト',
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
