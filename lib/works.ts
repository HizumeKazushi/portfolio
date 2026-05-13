import { portfolioData } from '@/data/portfolio';
import type { Work } from '@/data/portfolio';

const featuredWorkIds = [1, 2, 3];

export function getAllWorks(): Work[] {
  return portfolioData.works;
}

export function getFeaturedWorks(): Work[] {
  const featuredIds = new Set(featuredWorkIds);
  return getAllWorks().filter((work) => featuredIds.has(work.id));
}

export function getWorkById(id: number | string): Work | undefined {
  const workId = Number(id);

  if (!Number.isInteger(workId)) {
    return undefined;
  }

  return getAllWorks().find((work) => work.id === workId);
}

export function getWorkStaticParams(): { id: string }[] {
  return getAllWorks().map((work) => ({
    id: String(work.id),
  }));
}
