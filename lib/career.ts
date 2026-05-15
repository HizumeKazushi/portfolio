import { portfolioData } from '@/data/portfolio';
import type { Career } from '@/data/portfolio';

export function getAllCareerItems(): Career[] {
  return portfolioData.about.career ?? [];
}

export function getCareerById(id: number | string): Career | undefined {
  const careerId = Number(id);

  if (!Number.isInteger(careerId)) {
    return undefined;
  }

  return getAllCareerItems().find((item) => item.id === careerId);
}

export function getCareerStaticParams(): { id: string }[] {
  return getAllCareerItems().map((item) => ({
    id: String(item.id),
  }));
}
