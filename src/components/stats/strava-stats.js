import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Stat, StatMetric } from '../stat';

const StravaStats = () => {
  const [recentRides, setRecentRides] = useState(null);

  useEffect(() => {
    (async () => {
      let res;
      try {
        res = await axios.get(
          'https://stats-server.danbovey.workers.dev/strava'
        );
      } catch (error) {
        console.error(error);
        return;
      }
      setRecentRides(res.data);
    })();
  }, []);

  return (
    <Stat>
      <a
        href="https://www.strava.com/athletes/32516454"
        target="_blank"
        rel="noreferrer"
      >
        <StatMetric>{recentRides ? recentRides.elapsed_time : '-'}h</StatMetric>
        <small>Recent bike rides</small>
      </a>
    </Stat>
  );
};

export default StravaStats;
