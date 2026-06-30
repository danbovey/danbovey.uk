'use client';

import { StatCell } from './stat-cell';
import { useLive } from './use-live';

type SoundCloud = { mixCount: number };

// Can't Wait by the numbers — the DJ mix count is live; album + singles are
// fixed counts kept in sync by hand.
export default function CantWaitStats() {
  const sc = useLive<SoundCloud>('soundcloud');
  const mixes = sc ? sc.mixCount : '–';

  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-8">
      <StatCell
        metric={mixes}
        label="DJ mixes"
        href="https://soundcloud.com/cantwait/sets/cant-wait-mixes"
      />
      <StatCell
        metric={1}
        label="Album"
        href="https://open.spotify.com/album/4332oFXUbgaFT0M7ZMFjIo"
        soft
      />
      <StatCell metric={3} label="Singles" soft />
    </div>
  );
}
