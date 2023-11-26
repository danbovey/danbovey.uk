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
      <a
        href="https://www.goodreads.com/user_challenges/41277883"
        target="_blank"
        rel="noreferrer"
      >
        <StatMetric>
          {readingChallenge
            ? `${readingChallenge.read}/${readingChallenge.goal}`
            : '-/-'}
        </StatMetric>
        <small>Books read in {new Date().getFullYear()}</small>
      </a>
    </Stat>
  );
};

export default GoodreadsStats;
