import React from 'react';

// A single live figure: a big teal metric over a quiet mono label. Optionally
// a source link wrapping the whole cell. Presentational — no data fetching.
export function StatCell({
  metric,
  label,
  href,
  soft = false
}: {
  metric: React.ReactNode;
  label: React.ReactNode;
  href?: string;
  soft?: boolean;
}) {
  const inner = (
    <>
      <div className={`metric ${soft ? 'metric--soft' : ''}`}>{metric}</div>
      <div className="meta mt-2 normal-case tracking-normal text-text-2">
        {label}
        {href && <span className="text-accent"> ↗</span>}
      </div>
    </>
  );

  if (href) {
    return (
      <div className="group">
        <a href={href} target="_blank" rel="noopener" className="block">
          {inner}
        </a>
      </div>
    );
  }
  return <div>{inner}</div>;
}
