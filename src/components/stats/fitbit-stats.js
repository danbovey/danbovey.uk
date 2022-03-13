import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Stat, StatMetric } from '../stat';

const FitbitStats = () => {
  const [summary, setSummary] = useState(null);
  
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
    <Stat>
      <StatMetric>{summary ? summary.steps : '-'}</StatMetric>
      <small>Steps today</small>
    </Stat>
  );
};

export default FitbitStats;
