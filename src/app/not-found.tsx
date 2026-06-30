import Link from 'next/link';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className="ruled mx-auto flex min-h-[70vh] max-w-[1180px] flex-col justify-center px-5 py-24 sm:px-8">
        <p className="path mb-6">404</p>
        <h1 className="t-hero">Page not found</h1>

        <div className="mt-10 max-w-[60ch] border border-rule bg-surface/40 p-5 text-[0.9rem] leading-relaxed text-text-2">
          <p>
            <span className="text-accent">danbovey.uk</span>
            <span className="text-text-3"> ~ $</span> open {''}
            <span className="text-text">this.page</span>
          </p>
          <p className="mt-2 text-text-3">→ no such file or directory.</p>
          <p className="mt-4">
            <span className="text-accent">danbovey.uk</span>
            <span className="text-text-3"> ~ $</span> ls{' '}
            <span className="text-text-3">--suggestions</span>
            <span className="ml-1 inline-block h-[1.1em] w-[0.5em] translate-y-[0.15em] animate-pulse bg-accent align-middle" />
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link href="/" className="link text-[0.9rem]">
              ~/home
            </Link>
          </li>
          <li>
            <Link href="/work/" className="link text-[0.9rem]">
              ~/work
            </Link>
          </li>
          <li>
            <a href="/Dan-Bovey-CV.pdf" target="_blank" rel="noopener" className="link text-[0.9rem]">
              ~/cv ↓
            </a>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
