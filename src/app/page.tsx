import Link from 'next/link';

import Header from '@/components/header';
import Footer from '@/components/footer';
import LiveStatus from '@/components/live-status';
import CantWaitStats from '@/components/stats/cant-wait';
import SpotifyPlaylists from '@/components/stats/spotify-playlists';
import StatsLedger from '@/components/stats/stats-ledger';
import { getAllWork } from '@/lib/work';

const stack = 'React · TypeScript · Node.js · Go · Python · C# · PHP';

// Polycorp — the after-hours studio. Real products, in document order.
const polycorp = [
  {
    n: '01',
    name: 'Arq',
    status: 'In development',
    live: false,
    note: 'A home computer for the AI era — one device that replaces rented subscriptions with a digital home you own.',
    href: 'https://arq.house',
    link: 'arq.house'
  },
  {
    n: '02',
    name: 'Basefund',
    status: 'Live',
    live: true,
    note: 'A shared financial surface for the household — income, bills and what’s left, planned from one place.',
    href: 'https://basefund.uk',
    link: 'basefund.uk'
  }
];

export default function Home() {
  const work = getAllWork();
  const current = work[0];
  const previous = work.slice(1);

  return (
    <div id="top">
      <Header />
      <main>
        {/* — Hero — */}
        <section className="ruled mx-auto max-w-[1180px] px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
          <div className="reveal">
            <p className="path mb-6">dan-bovey</p>
            <h1 className="t-hero">Dan Bovey</h1>
            <p className="lede mt-7 max-w-[48ch]">
              Senior Software Engineer. At{' '}
              <a href="https://oaknorth.com" rel="noopener" className="link">
                OakNorth
              </a>{' '}
              by day; after hours, building products at{' '}
              <a href="https://polycorp.ltd" rel="noopener" className="link">
                Polycorp
              </a>{' '}
              and making music as Can’t Wait.
            </p>
            <div className="mt-10 flex flex-col gap-x-6 gap-y-4 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
              <LiveStatus />
              <span className="meta normal-case tracking-normal text-text-3">
                {stack}
              </span>
            </div>
          </div>
        </section>

        {/* — /work — */}
        <section
          id="work"
          className="border-t border-rule bg-ink"
        >
          <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
            <div className="mb-10 flex items-baseline justify-between gap-4">
              <p className="path">work</p>
              <Link href="/work/" className="navlink">
                full history →
              </Link>
            </div>

            <div className="grid gap-x-10 gap-y-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="meta">Currently</p>
                <h2 className="t-statement mt-3">{current.subtitle}</h2>
                <p className="meta mt-4 normal-case tracking-normal text-text-2">
                  {current.dates}
                </p>
                <p className="lede mt-6">
                  Building and shipping full-stack software for a bank that
                  doesn’t feel like one — front to back, with the same care end
                  to end.
                </p>
                <Link
                  href={`/work/${current.slug}/`}
                  className="link mt-6 inline-block text-[0.85rem]"
                >
                  Read more →
                </Link>
              </div>

              <div className="lg:col-span-5">
                <p className="meta">Previously</p>
                <ul className="mt-3 border-b border-rule">
                  {previous.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/work/${post.slug}/`}
                        className="row group flex items-baseline justify-between gap-4 px-1 py-4"
                      >
                        <span className="text-text transition-colors group-hover:text-accent-soft">
                          {post.subtitle.replace(/^.*?at\s+/i, '')}
                        </span>
                        <span className="meta shrink-0 normal-case tracking-normal">
                          {post.dates.split('—').pop()?.trim()}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* — /after-hours · Polycorp — */}
        <section id="after-hours" className="border-t border-rule">
          <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
            <div className="grid gap-x-10 gap-y-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="path">after-hours</p>
                <h2 className="t-statement mt-4">
                  Polycorp<span className="text-accent">.</span>
                </h2>
                <p className="mt-6 text-lg leading-snug text-text">
                  An after-hours product studio. Mine.
                </p>
                <p className="lede mt-5">
                  No board deck, no growth theatre — just careful products built
                  properly, after the day job is done. Software and hardware that
                  earn their place.
                </p>
                <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a href="https://polycorp.ltd" rel="noopener" className="link text-[0.85rem]">
                    polycorp.ltd ↗
                  </a>
                  <span className="meta normal-case tracking-normal text-text-3">
                    Est. 2023 · No. 14957566
                  </span>
                </p>
              </div>

              <div className="lg:col-span-7 lg:pt-1">
                <div className="border-t border-rule">
                  {polycorp.map((p) => (
                    <div
                      key={p.name}
                      className="row grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-2 px-1 py-6 sm:grid-cols-[3rem_1fr]"
                    >
                      <span className="meta tabular-nums pt-1">{p.n}</span>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="t-section">{p.name}</h3>
                          <span className="meta flex items-center gap-1.5">
                            <span
                              className="status-dot"
                              data-on={p.live ? 'true' : 'false'}
                              aria-hidden="true"
                            />
                            <span className={p.live ? 'meta--accent' : ''}>
                              {p.status}
                            </span>
                          </span>
                        </div>
                        <p className="mt-2 max-w-[52ch] text-text-2">{p.note}</p>
                        <a
                          href={p.href}
                          rel="noopener"
                          className="link mt-3 inline-block text-[0.8rem]"
                        >
                          {p.link} ↗
                        </a>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-rule" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* — /music · Can't Wait + playlists — */}
        <section id="music" className="border-t border-rule bg-ink">
          <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
            <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p className="path">music</p>
                <h2 className="t-statement mt-4">
                  Producing &amp; DJing as Can’t Wait
                </h2>
                <p className="lede mt-5">
                  House and disco — records, edits and mixes, released and played
                  out under the name Can’t Wait.
                </p>
                <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href="https://soundcloud.com/cantwait"
                    rel="noopener"
                    className="link text-[0.85rem]"
                  >
                    SoundCloud ↗
                  </a>
                  <a
                    href="https://open.spotify.com/artist/5wAIaYufHo5evs0JAEdg0g"
                    rel="noopener"
                    className="link text-[0.85rem]"
                  >
                    Spotify ↗
                  </a>
                </p>
                <div className="mt-10">
                  <CantWaitStats />
                </div>
              </div>

              <div className="lg:col-span-6">
                <p className="path">spotify</p>
                <h3 className="t-section mt-4">Playlists I keep up</h3>
                <p className="meta mt-3 normal-case tracking-normal text-text-2">
                  <a
                    href="https://open.spotify.com/user/boveybrawlers"
                    rel="noopener"
                    className="link"
                  >
                    @boveybrawlers ↗
                  </a>
                </p>
                <SpotifyPlaylists />
              </div>
            </div>
          </div>
        </section>

        {/* — /stats · off the clock — */}
        <section id="stats" className="border-t border-rule">
          <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
            <div className="mb-10 flex items-baseline justify-between gap-4">
              <p className="path">stats</p>
              <span className="meta normal-case tracking-normal text-text-3">
                Live · off the clock
              </span>
            </div>
            <p className="t-section max-w-[28ch] text-text">
              And when I’m not at a keyboard, the numbers still tick over.
            </p>
            <div className="mt-12">
              <StatsLedger />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
