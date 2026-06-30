'use client';

import { StatCell } from './stat-cell';
import { useLive } from './use-live';

type Fitbit = { steps: number };
type Strava = { elapsed_time: number };
type Goodreads = { read: number; goal: number; challengeId?: string };
type Trakt = { episodes: { minutes: number } };

const year = new Date().getFullYear();
const goodreadsProfile = 'https://www.goodreads.com/user/show/117994749';

// The leaned-in "off the clock" ledger — the numbers that move week to week,
// pulled live. Steps, saddle time, books, screen time.
export default function StatsLedger() {
  const fitbit = useLive<Fitbit>('fitbit');
  const strava = useLive<Strava>('strava');
  const goodreads = useLive<Goodreads>('goodreads');
  const trakt = useLive<Trakt>('trakt');

  const steps = fitbit ? fitbit.steps.toLocaleString('en-GB') : '–';
  const rideHours = strava ? (strava.elapsed_time / 3600).toFixed(1) : '–';
  const books = goodreads ? `${goodreads.read}/${goodreads.goal}` : '–/–';
  const tvHours = trakt ? Math.round(trakt.episodes.minutes / 60) : '–';
  const challengeHref = goodreads?.challengeId
    ? `https://www.goodreads.com/user_challenges/${goodreads.challengeId}`
    : goodreadsProfile;

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12 lg:grid-cols-4">
      <StatCell metric={steps} label="Steps today" />
      <StatCell
        metric={<>{rideHours}h</>}
        label="On the bike, recently"
        href="https://www.strava.com/athletes/32516454"
        soft
      />
      <StatCell
        metric={books}
        label={`Books read in ${year}`}
        href={challengeHref}
      />
      <StatCell
        metric={<>{tvHours}h</>}
        label="TV watched, lifetime"
        href="https://trakt.tv/users/danbovey"
        soft
      />
    </div>
  );
}
