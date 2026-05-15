import { getCareerById, getCareerStaticParams } from '@/lib/career';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CareerDetailClient from './CareerDetailClient';

type CareerDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return getCareerStaticParams();
}

export async function generateMetadata({ params }: CareerDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const career = getCareerById(id);

  if (!career) {
    return {
      title: 'Career not found | Portfolio',
    };
  }

  const description = career.fullDescription || career.description;

  return {
    title: `${career.title} | Career`,
    description,
    openGraph: {
      title: `${career.title} | Career`,
      description,
    },
  };
}

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { id } = await params;
  const career = getCareerById(id);

  if (!career) {
    notFound();
  }

  return <CareerDetailClient career={career} />;
}
