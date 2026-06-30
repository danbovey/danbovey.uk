import type { MetadataRoute } from 'next';

import { getAllWork } from '@/lib/work';

export const dynamic = 'force-static';

const base = 'https://danbovey.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const work = getAllWork().map((w) => ({
    url: `${base}/work/${w.slug}/`,
    changeFrequency: 'yearly' as const,
    priority: 0.6
  }));

  return [
    { url: `${base}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/work/`, changeFrequency: 'monthly', priority: 0.8 },
    ...work
  ];
}
