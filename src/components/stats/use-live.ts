'use client';

import { useEffect, useState } from 'react';

const BASE = 'https://stats-server.danbovey.workers.dev';

// Fetch a live stat from the Workers stats server. Returns null until loaded
// (and stays null on error) so callers can render a '-' placeholder.
export function useLive<T>(path: string): T | null {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(`${BASE}/${path}`);
        if (!res.ok) return;
        const json = (await res.json()) as T;
        if (active) setData(json);
      } catch {
        /* keep the placeholder */
      }
    })();
    return () => {
      active = false;
    };
  }, [path]);

  return data;
}
