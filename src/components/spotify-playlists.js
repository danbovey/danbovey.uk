import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Playlists = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  font-size: 80%;
`;

const SinglePlaylist = styled.a`
  width: 100px;
  margin-right: 16px;
  text-decoration: none;
  color: inherit;

  &:last-child {
    margin-right: 0;
  }
`;

const PlaylistCover = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
`;

const PlaylistTitle = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.8rem;
`;

const SpotifyPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('https://api.npoint.io/d7dcc9096029eb1e17df');
      setPlaylists(res.data);
    })();
  }, []);

  if (playlists.length === 0) {
    return (
      <Playlists>
        {Array.from(Array(5), (e, i) => (
          <SinglePlaylist key={i}>
            <PlaylistCover src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'/>" />
            <PlaylistTitle>
              <>Loading</>
            </PlaylistTitle>
            <small>
              <>...</>
            </small>
          </SinglePlaylist>
        ))}
      </Playlists>
    );
  }

  return (
    <Playlists>
      {playlists.map(playlist => (
        <SinglePlaylist
          href={`https://open.spotify.com/playlist/${playlist.id}`}
          target="_blank"
          rel="noreferrer"
          key={playlist.id}
        >
          <PlaylistCover src={playlist.images[0].url} alt={playlist.name} />
          <PlaylistTitle>{playlist.name}</PlaylistTitle>
          <small>{playlist.followers} followers</small>
        </SinglePlaylist>
      ))}
    </Playlists>
  );
};

export default SpotifyPlaylists;
