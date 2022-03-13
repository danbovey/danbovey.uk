import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Stat, StatMetric } from '../stat';

const CantWaitMixes = () => {
  const [mixCount, setMixCount] = useState(null);

  useEffect(() => {
    (async () => {
      let res;
      try {
        res = await axios.get(
          'https://stats-server.danbovey.workers.dev/soundcloud'
        );
      } catch (error) {
        console.error(error);
        return;
      }
      setMixCount(res.data.mixCount);
    })();
  }, []);

  return (
    <Stat>
      <a
        href="https://soundcloud.com/cantwait/sets/cant-wait-mixes"
        target="_blank"
        rel="noreferrer"
      >
        <StatMetric>{mixCount ?? '-'}</StatMetric>
        <small>DJ mixes</small>
      </a>
    </Stat>
  );
};

export default CantWaitMixes;
