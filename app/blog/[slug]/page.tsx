import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Not Found | Blog',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cream dark:bg-[#1a1a1a] transition-colors duration-300">
      <Header />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray dark:text-gray-light hover:text-orange transition-colors duration-300 mb-8"
          >
            ← 記事一覧に戻る
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Article Content */}
          <article
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-beige-dark/20 dark:border-white/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray dark:text-gray-light hover:text-orange transition-colors duration-300"
            >
              ← 記事一覧に戻る
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
