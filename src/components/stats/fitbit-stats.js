import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Stat, StatMetric, StatPopover } from '../stat';

const FitbitStats = () => {
  const [summary, setSummary] = useState(null);

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      let res;
      try {
        res = await axios.get(
          'https://stats-server.danbovey.workers.dev/fitbit'
        );
      } catch (error) {
        console.error(error);
        return;
      }
      setSummary(res.data);
    })();
  }, []);

  return (
    <Stat onClick={() => setOpen(true)}>
      <StatMetric>{summary ? summary.steps : '-'}</StatMetric>
      <small>Steps today</small>
      <StatPopover
        isOpen={isOpen}
        onClick={e => {
          e.stopPropagation();
          setOpen(false);
        }}
      >
        Tracked live from my Fitbit
      </StatPopover>
    </Stat>
  );
};

export default FitbitStats;
