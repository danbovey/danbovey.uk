'use client';

import { useEffect, useRef, useState } from 'react';

// Each device is a real phone frame wrapping a placeholder screen render.
// Swap the `src` for a real screenshot — the markup and framing stay the same.
type Device = {
  slug: string;
  name: string;
  sub: string;
  href?: string;
};

const devices: Device[] = [
  { slug: 'oaknorth-personal', name: 'OakNorth', sub: 'Personal banking' },
  { slug: 'arq', name: 'Arq', sub: 'Home cloud', href: 'https://arq.house' },
  { slug: 'basefund', name: 'Basefund', sub: 'Household money', href: 'https://basefund.uk' },
  { slug: 'cant-wait', name: "Can't Wait", sub: 'Music', href: 'https://soundcloud.com/cantwait' },
  { slug: 'obscura-radio', name: 'Obscura Radio', sub: '24/7 AI-powered Radio Station' }
];

const N = devices.length;

// Signed offset of device i from the active one, wrapped to [-2, 2].
function rel(i: number, active: number) {
  let r = i - active;
  if (r > N / 2) r -= N;
  if (r < -N / 2) r += N;
  return r;
}

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function DeviceShowcase() {
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);
  const tiltRef = useRef<HTMLDivElement>(null);

  // Auto-rotate the stack, unless paused (hover/focus) or reduced-motion.
  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % N), 3400);
    return () => clearInterval(id);
  }, [paused]);

  // Pointer parallax — tilt the whole cluster toward the cursor. Applied via a
  // ref so it never re-renders the phones.
  function onMove(e: React.PointerEvent) {
    const el = tiltRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${px * 12}deg) rotateX(${-py * 9}deg)`;
  }
  function onLeave() {
    if (tiltRef.current) tiltRef.current.style.transform = '';
  }

  const current = devices[active];

  return (
    <div
      className="device-showcase select-none"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="device-stage relative h-[420px] sm:h-[480px]">
        <div
          ref={tiltRef}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {devices.map((d, i) => {
            const r = rel(i, active);
            const a = Math.abs(r);
            const isFront = r === 0;
            return (
              <button
                key={d.slug}
                type="button"
                aria-label={`${d.name} — ${d.sub}`}
                aria-pressed={isFront}
                onClick={() => (isFront && d.href ? window.open(d.href, '_blank', 'noopener') : setActive(i))}
                className="absolute left-1/2 top-1/2 cursor-pointer focus:outline-none"
                style={{
                  transform: `translate(-50%, -50%) translateX(${r * 72}px) translateY(${a * 16}px) rotateZ(${r * 6}deg) scale(${1 - a * 0.1})`,
                  zIndex: 50 - a * 10,
                  opacity: a > 2 ? 0 : 1 - a * 0.14,
                  filter: `brightness(${1 - a * 0.18})`,
                  transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.45s ease, filter 0.45s ease',
                  pointerEvents: a > 2 ? 'none' : 'auto'
                }}
              >
                <span
                  className={`phone block ${isFront ? 'phone--front' : ''}`}
                >
                  <span className="phone__notch" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${bp}/renders/${d.slug}.svg`}
                    alt={`${d.name} app — placeholder render`}
                    width={205}
                    height={444}
                    draggable={false}
                    className="phone__screen"
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Caption + picker */}
      <div className="mt-6 flex flex-col items-center gap-3 text-center">
        <p aria-live="polite">
          <span className="font-bold text-text">{current.name}</span>
          <span className="meta ml-3 normal-case tracking-normal text-text-3">
            {current.sub}
          </span>
          {current.href && (
            <a
              href={current.href}
              target="_blank"
              rel="noopener"
              className="link ml-3 text-[0.8rem]"
            >
              open ↗
            </a>
          )}
        </p>
        <div className="flex items-center gap-2.5">
          {devices.map((d, i) => (
            <button
              key={d.slug}
              type="button"
              aria-label={`Show ${d.name}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-6 bg-accent' : 'w-1.5 bg-text-2 hover:bg-text'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
