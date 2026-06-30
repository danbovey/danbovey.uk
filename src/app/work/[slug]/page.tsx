import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { getAllWork, getWork } from '@/lib/work';

export function generateStaticParams() {
  return getAllWork().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const post = getWork(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.subtitle };
}

export default function WorkPost({ params }: { params: { slug: string } }) {
  const post = getWork(params.slug);
  if (!post) notFound();

  return (
    <div>
      <Header />
      <main className="ruled mx-auto min-h-[70vh] max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="meta mb-8">
          <Link href="/work/" className="navlink">
            <span className="navlink__slash">/</span>work
          </Link>
        </p>

        <h1 className="t-hero">{post.title}</h1>
        {post.subtitle && (
          <p className="t-section mt-4 text-text-2">{post.subtitle}</p>
        )}
        {post.dates && (
          <p className="meta mt-3 normal-case tracking-normal text-text-3">
            {post.dates}
          </p>
        )}

        <article
          className="article mt-12 max-w-prose"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <p className="mt-16 border-t border-rule pt-6">
          <Link href="/work/" className="link text-[0.85rem]">
            ← All work
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}
