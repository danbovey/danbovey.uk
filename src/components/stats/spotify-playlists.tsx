'use client';

import { useEffect, useState } from 'react';

type Playlist = {
  id: string;
  name: string;
  followers: number;
  images: { url: string }[];
};

export default function SpotifyPlaylists() {
  const [playlists, setPlaylists] = useState<Playlist[] | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch('https://api.npoint.io/d7dcc9096029eb1e17df');
        if (!res.ok) return;
        const json = (await res.json()) as Playlist[];
        if (active) setPlaylists(json);
      } catch {
        /* keep placeholders */
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const items = playlists ?? Array.from({ length: 5 }, () => null);

  return (
    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-6">
      {items.map((playlist, i) => {
        if (!playlist) {
          return (
            <div key={i} className="w-[104px]">
              <div className="aspect-square w-full border border-rule bg-surface" />
              <p className="meta mt-2 normal-case tracking-normal">Loading…</p>
            </div>
          );
        }
        return (
          <a
            key={playlist.id}
            href={`https://open.spotify.com/playlist/${playlist.id}`}
            target="_blank"
            rel="noopener"
            className="group w-[104px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={playlist.images[0]?.url}
              alt={playlist.name}
              width={104}
              height={104}
              loading="lazy"
              className="aspect-square w-full border border-rule object-cover transition-transform duration-200 group-hover:-translate-y-1"
            />
            <p className="mt-2 truncate text-[0.8rem] text-text">{playlist.name}</p>
            <p className="meta normal-case tracking-normal">
              {playlist.followers} followers
            </p>
          </a>
        );
      })}
    </div>
  );
}
