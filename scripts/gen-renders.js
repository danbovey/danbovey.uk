const fs = require('fs');
const path = require('path');
const out = require('path').join(__dirname, '..', 'public', 'renders');
fs.mkdirSync(out, { recursive: true });

const INK = '#1c1e1e', CARD = '#26292b', CARD2 = '#2f3335', LINE = '#3a3f41';
const TEXT = '#f4f5f3', MUT = '#8b918d', DIM = '#5c625e';
const W = 320, H = 693, R = 44;

const mono = "font-family='ui-monospace, monospace'";

function statusbar() {
  return `
  <text x='22' y='42' fill='${TEXT}' ${mono} font-size='15' font-weight='700'>9:41</text>
  <g fill='${TEXT}'>
    <rect x='244' y='32' width='16' height='11' rx='2'/>
    <rect x='266' y='30' width='14' height='13' rx='2'/>
    <rect x='286' y='28' width='22' height='15' rx='3'/>
  </g>`;
}

function header(title, sub, accent) {
  return `
  <text x='22' y='98' fill='${accent}' ${mono} font-size='15' letter-spacing='2' font-weight='700'>${sub.toUpperCase()}</text>
  <text x='21' y='140' fill='${TEXT}' ${mono} font-size='34' font-weight='700' letter-spacing='-1'>${title}</text>`;
}

function rows(y, n, accent) {
  let s = '';
  for (let i = 0; i < n; i++) {
    const ry = y + i * 58;
    s += `
    <rect x='20' y='${ry}' width='280' height='46' rx='12' fill='${CARD}'/>
    <circle cx='44' cy='${ry + 23}' r='12' fill='${i === 0 ? accent : CARD2}'/>
    <rect x='66' y='${ry + 14}' width='${120 - i * 12}' height='8' rx='4' fill='${MUT}'/>
    <rect x='66' y='${ry + 28}' width='${70 + i * 8}' height='6' rx='3' fill='${DIM}'/>
    <rect x='250' y='${ry + 18}' width='34' height='10' rx='5' fill='${i === 0 ? accent : LINE}'/>`;
  }
  return s;
}

function dashboard(accent) {
  // big balance card + line chart
  let pts = [];
  const seed = accent.length;
  for (let i = 0; i <= 10; i++) {
    const x = 36 + i * 24.8;
    const yy = 300 - (Math.sin(i * 0.8 + seed) * 22 + i * 6);
    pts.push(`${x.toFixed(0)},${yy.toFixed(0)}`);
  }
  return `
  <rect x='20' y='168' width='280' height='190' rx='20' fill='${CARD}'/>
  <text x='40' y='205' fill='${MUT}' ${mono} font-size='12' letter-spacing='1'>BALANCE</text>
  <text x='39' y='242' fill='${TEXT}' ${mono} font-size='30' font-weight='700' letter-spacing='-1'>£12,480</text>
  <polyline points='${pts.join(' ')}' fill='none' stroke='${accent}' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/>
  <circle cx='${pts[pts.length-1].split(',')[0]}' cy='${pts[pts.length-1].split(',')[1]}' r='5' fill='${accent}'/>
  ${rows(384, 4, accent)}`;
}

function player(accent) {
  // album art + waveform + controls
  let bars = '';
  for (let i = 0; i < 28; i++) {
    const bx = 26 + i * 10;
    const bh = 8 + Math.abs(Math.sin(i * 0.9 + accent.length)) * 54;
    const on = i < 16;
    bars += `<rect x='${bx}' y='${(440 - bh / 2).toFixed(0)}' width='5' height='${bh.toFixed(0)}' rx='2.5' fill='${on ? accent : LINE}'/>`;
  }
  return `
  <rect x='20' y='168' width='280' height='200' rx='20' fill='${CARD}'/>
  <rect x='44' y='190' width='156' height='156' rx='14' fill='${CARD2}'/>
  <circle cx='122' cy='268' r='30' fill='${INK}'/>
  <circle cx='122' cy='268' r='8' fill='${accent}'/>
  <text x='216' y='232' fill='${TEXT}' ${mono} font-size='17' font-weight='700'>Track 01</text>
  <text x='216' y='258' fill='${MUT}' ${mono} font-size='13'>4:32</text>
  <g>${bars}</g>
  <circle cx='160' cy='540' r='34' fill='${accent}'/>
  <rect x='152' y='525' width='6' height='30' rx='2' fill='${INK}'/>
  <rect x='164' y='525' width='6' height='30' rx='2' fill='${INK}'/>
  <circle cx='72' cy='540' r='6' fill='${MUT}'/>
  <circle cx='248' cy='540' r='6' fill='${MUT}'/>`;
}

function system(accent) {
  // storage ring + device rows
  const c = 160, cy = 250, rr = 70;
  const circ = 2 * Math.PI * rr;
  return `
  <rect x='20' y='168' width='280' height='200' rx='20' fill='${CARD}'/>
  <circle cx='${c}' cy='${cy}' r='${rr}' fill='none' stroke='${LINE}' stroke-width='14'/>
  <circle cx='${c}' cy='${cy}' r='${rr}' fill='none' stroke='${accent}' stroke-width='14' stroke-linecap='round'
    stroke-dasharray='${(circ*0.62).toFixed(0)} ${circ.toFixed(0)}' transform='rotate(-90 ${c} ${cy})'/>
  <text x='${c}' y='${cy-2}' fill='${TEXT}' ${mono} font-size='26' font-weight='700' text-anchor='middle'>2.4TB</text>
  <text x='${c}' y='${cy+22}' fill='${MUT}' ${mono} font-size='12' text-anchor='middle'>of 4TB used</text>
  ${rows(390, 4, accent)}`;
}

const apps = [
  { slug: 'arq', title: 'Arq', sub: 'Home cloud', accent: '#f64c00', kind: system },
  { slug: 'basefund', title: 'Basefund', sub: 'This month', accent: '#4CA388', kind: dashboard },
  { slug: 'oaknorth-personal', title: 'OakNorth', sub: 'Personal', accent: '#5bff9a', kind: dashboard },
  { slug: 'cant-wait', title: "Can't Wait", sub: 'Now playing', accent: '#659e97', kind: player },
  { slug: 'obscura-radio', title: 'Obscura', sub: 'On air', accent: '#00e676', kind: player }
];

for (const a of apps) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${W} ${H}' width='${W}' height='${H}'>
  <rect width='${W}' height='${H}' rx='${R}' fill='${INK}'/>
  ${statusbar()}
  ${header(a.title, a.sub, a.accent)}
  ${a.kind(a.accent)}
</svg>`;
  fs.writeFileSync(path.join(out, `${a.slug}.svg`), svg);
  console.log('wrote', a.slug + '.svg');
}
