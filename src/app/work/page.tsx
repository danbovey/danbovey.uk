import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { getAllWork } from '@/lib/work';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Where Dan Bovey has worked — a full engineering history.'
};

export default function WorkIndex() {
  const work = getAllWork();

  return (
    <div>
      <Header />
      <main className="ruled mx-auto min-h-[70vh] max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="path mb-2">work</p>
        <h1 className="t-hero">Work</h1>
        <p className="lede mt-6">
          A decade of front-to-back engineering, most recent first. The short
          version lives on the{' '}
          <a href="/Dan-Bovey-CV.pdf" target="_blank" rel="noopener" className="link">
            CV ↓
          </a>
          .
        </p>

        <ul className="mt-12 border-t border-rule">
          {work.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/work/${post.slug}/`}
                className="row group grid grid-cols-[1fr] gap-1 px-1 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span>
                  <span className="t-section transition-colors group-hover:text-accent-soft">
                    {post.title}
                  </span>
                  <span className="meta mt-1 block normal-case tracking-normal text-text-2">
                    {post.subtitle}
                  </span>
                </span>
                <span className="meta shrink-0 normal-case tracking-normal text-text-3">
                  {post.dates}
                </span>
              </Link>
            </li>
          ))}
          <li className="border-t border-rule" />
        </ul>
      </main>
      <Footer />
    </div>
  );
}
