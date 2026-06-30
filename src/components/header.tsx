import Link from 'next/link';

import Logo from './logo';

// The page index, in the brand's file-path voice.
const nav = [
  { label: 'work', href: '/work/' },
  { label: 'after-hours', href: '/#after-hours' },
  { label: 'music', href: '/#music' },
  { label: 'stats', href: '/#stats' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-ink/85 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" aria-label="Dan Bovey — home" className="flex items-center gap-2.5">
          <Logo className="h-7 w-7 shrink-0" />
          <span className="text-[0.95rem] font-bold tracking-tight">Dan Bovey</span>
        </Link>

        <nav aria-label="Index">
          <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 sm:gap-x-5">
            {nav.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="navlink">
                  <span className="navlink__slash">/</span>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Dan-Bovey-CV.pdf"
                className="navlink"
                target="_blank"
                rel="noopener"
              >
                <span className="navlink__slash">/</span>cv ↓
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
