import { portfolioData } from '@/data/portfolio';
import { getWorkById, getWorkStaticParams } from '@/lib/works';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WorkDetailClient from './WorkDetailClient';

type WorkDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return getWorkStaticParams();
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const work = getWorkById(id);

  if (!work) {
    return {
      title: 'Work not found | Portfolio',
    };
  }

  const description = work.fullDescription || work.description || `${work.title}の制作実績`;

  return {
    title: `${work.title} | Works`,
    description,
    openGraph: {
      title: `${work.title} | Works`,
      description,
      images: work.image ? [{ url: work.image, alt: work.title }] : undefined,
    },
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id } = await params;
  const work = getWorkById(id);

  if (!work) {
    notFound();
  }

  return <WorkDetailClient work={work} content={portfolioData.worksDetail} />;
}
