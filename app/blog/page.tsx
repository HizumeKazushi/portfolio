import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog | Portfolio',
  description: 'ブログ記事一覧',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-cream dark:bg-black transition-colors duration-300">
      <Header />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-orange font-semibold mb-2">ブログ</p>
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">Blog</h1>
            <p className="text-gray dark:text-gray-light text-lg">技術的な記事やプロジェクトの進捗を発信しています。</p>
          </div>

          {/* Posts List */}
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray dark:text-gray-light text-lg">まだ記事がありません。</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <article className="bg-white dark:bg-[#2a2a2a] rounded-2xl p-6 md:p-8 shadow-md hover:shadow-playful transition-all duration-300 hover:translate-y-[-2px]">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <time className="text-sm text-orange dark:text-pink font-medium">{post.date}</time>
                      {post.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-beige dark:bg-[#333333] text-gray dark:text-gray-light rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-orange transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray dark:text-gray-light leading-relaxed">{post.excerpt}</p>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray dark:text-gray-light hover:text-orange transition-colors duration-300"
            >
              ← ホームに戻る
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
