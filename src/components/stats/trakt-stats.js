import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Stat, StatMetric } from '../stat';

const TraktStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    (async () => {
      let res;
      try {
        res = await axios.get(
          'https://stats-server.danbovey.workers.dev/trakt'
        );
      } catch (error) {
        console.error(error);
        return;
      }
      setStats(res.data);
    })();
  }, []);

  return (
    <Stat>
      <a
        href="https://trakt.tv/users/danbovey"
        target="_blank"
        rel="noreferrer"
      >
        <StatMetric>
          {stats ? Math.round(stats.episodes.minutes / 60) : '-'}h
        </StatMetric>
        <small>TV watched (lifetime)</small>
      </a>
    </Stat>
  );
};

export default TraktStats;
