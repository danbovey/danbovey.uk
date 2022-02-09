import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Stat, StatMetric } from '../stat';

const GoodreadsStats = () => {
  const [readingChallenge, setReadingChallenge] = useState(null);

  useEffect(() => {
    (async () => {
      let res;
      try {
        res = await axios.get(
          'https://stats-server.danbovey.workers.dev/goodreads'
        );
      } catch (error) {
        console.error(error);
        return;
      }
      setReadingChallenge(res.data);
    })();
  }, []);

  return (
    <Stat>
      <StatMetric>
        {readingChallenge
          ? `${readingChallenge.read}/${readingChallenge.goal}`
          : '-/-'}
      </StatMetric>
      <small>Books read in {new Date().getFullYear()}</small>
    </Stat>
  );
};

export default GoodreadsStats;
