import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import useSiteMetadata from '../hooks/use-site-metadata';
import Layout from '../components/layout';
import { Container } from '../components/container';
import WorkList from '../components/work-list';
import CantWaitMixes from '../components/stats/cant-wait-mixes';
import SpotifyPlaylists from '../components/spotify-playlists';
import FitbitStats from '../components/stats/fitbit-stats';
import StravaStats from '../components/stats/strava-stats';
import GoodreadsStats from '../components/stats/goodreads-stats';
import TraktStats from '../components/stats/trakt-stats';
import { StatGroup, Stat, StatMetric } from '../components/stat';
import {
  Feature,
  FeatureIcon,
  FeatureContent,
  FeatureMeta
} from '../styles/home-style';

const HomePage = () => {
  const { title } = useSiteMetadata();

  return (
    <Layout>
      <Container>
        <h1>{title}</h1>
        <small>
          <Link to="/work">/work</Link>
        </small>
        <WorkList />
        <small>/music</small>
        <Feature>
          <FeatureIcon>
            <StaticImage
              src="../images/the-congregation.jpg"
              alt="The Congregation Album Cover"
            />
          </FeatureIcon>
          <FeatureContent>
            <h2>Producing music as Can't Wait</h2>
            <FeatureMeta>
              <a
                href="https://soundcloud.com/cantwait"
                target="_blank"
                rel="noreferrer"
              >
                SoundCloud ↗
              </a>
              <a
                href="https://open.spotify.com/artist/5wAIaYufHo5evs0JAEdg0g?si=c077f046796b41cd"
                target="_blank"
                rel="noreferrer"
              >
                Spotify ↗
              </a>
            </FeatureMeta>
            <StatGroup>
              <CantWaitMixes />
              <Stat>
                <a
                  href="https://open.spotify.com/album/4332oFXUbgaFT0M7ZMFjIo?si=38v_wIE3RbOPN9XtW4efEw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StatMetric>1</StatMetric>
                  <small>Album</small>
                </a>
              </Stat>
              <Stat>
                <StatMetric>3</StatMetric>
                <small>Singles</small>
              </Stat>
            </StatGroup>
          </FeatureContent>
        </Feature>
        <small>/spotify</small>
        <Feature>
          <FeatureIcon>
            <StaticImage src="../images/ccd.jpg" alt="Country Club Disco" />
          </FeatureIcon>
          <FeatureContent>
            <h2>Curating playlists on Spotify</h2>
            <small>
              <a
                href="https://open.spotify.com/user/boveybrawlers"
                target="_blank"
                rel="noreferrer"
              >
                Spotify Profile ↗
              </a>
            </small>
            <SpotifyPlaylists />
          </FeatureContent>
        </Feature>
        <small>/irl</small>
        <Feature>
          <FeatureIcon></FeatureIcon>
          <FeatureContent>
            <h2>...and when I'm not on the Internet</h2>
            <StatGroup>
              <FitbitStats />
              <StravaStats />
              <GoodreadsStats />
              <TraktStats />
            </StatGroup>
          </FeatureContent>
        </Feature>
      </Container>
    </Layout>
  );
};

export default HomePage;
