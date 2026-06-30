import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import { marked } from 'marked';

const WORK_DIR = path.join(process.cwd(), 'content', 'work');

export type WorkMeta = {
  slug: string;
  title: string;
  subtitle: string;
  dates: string;
  image?: string;
};

export type WorkPost = WorkMeta & { html: string };

// Filenames are date-prefixed (2023-02-06-oaknorth.md); the prefix drives
// ordering and the whole basename is the slug, preserving the old URLs.
function readFiles(): { slug: string; raw: string }[] {
  return fs
    .readdirSync(WORK_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => ({
      slug: f.replace(/\.md$/, ''),
      raw: fs.readFileSync(path.join(WORK_DIR, f), 'utf8')
    }));
}

// Most recent first (descending by date-prefixed slug).
export function getAllWork(): WorkMeta[] {
  return readFiles()
    .map(({ slug, raw }) => {
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        subtitle: data.subtitle as string,
        dates: data.dates as string,
        image: data.image as string | undefined
      };
    })
    .sort((a, b) => b.slug.localeCompare(a.slug, 'en'));
}

export function getWork(slug: string): WorkPost | null {
  const file = path.join(WORK_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, 'utf8'));
  return {
    slug,
    title: data.title as string,
    subtitle: data.subtitle as string,
    dates: data.dates as string,
    image: data.image as string | undefined,
    html: marked.parse(content, { async: false }) as string
  };
}
