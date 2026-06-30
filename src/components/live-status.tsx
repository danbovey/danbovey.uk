'use client';

import { useEffect, useState } from 'react';

type Clock = { time: string; afterHours: boolean };

// London time, and whether it's "after hours" — outside a 09:00–17:30 weekday
// working day. The after-hours window is exactly when the Polycorp work happens.
function readLondon(): Clock {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/London',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
      weekday: 'short'
    })
      .formatToParts(new Date())
      .map((p) => [p.type, p.value])
  );
  const mins = parseInt(parts.hour, 10) * 60 + parseInt(parts.minute, 10);
  const weekend = parts.weekday === 'Sat' || parts.weekday === 'Sun';
  const afterHours = weekend || mins < 9 * 60 || mins >= 17 * 60 + 30;
  return { time: `${parts.hour}:${parts.minute}:${parts.second}`, afterHours };
}

export default function LiveStatus({ className = '' }: { className?: string }) {
  // Stable placeholder on the server, then tick on the client.
  const [clock, setClock] = useState<Clock | null>(null);

  useEffect(() => {
    setClock(readLondon());
    const id = setInterval(() => setClock(readLondon()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = clock?.time ?? '--:--:--';
  const afterHours = clock?.afterHours ?? true;

  return (
    <span className={`live ${className}`}>
      <span className="status-dot" data-on={afterHours} aria-hidden="true" />
      <span className="tabular-nums">{time}</span>
      <span aria-hidden="true">·</span>
      <span>London</span>
      <span aria-hidden="true">·</span>
      <span>{afterHours ? 'After hours' : 'Working hours'}</span>
    </span>
  );
}
