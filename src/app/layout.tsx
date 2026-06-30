import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

// Iosevka — self-hosted, the brand's signature monospace. Three weights.
const iosevka = localFont({
  src: [
    { path: '../fonts/iosevka-regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/iosevka-medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/iosevka-bold.woff2', weight: '700', style: 'normal' }
  ],
  variable: '--font-iosevka',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://danbovey.uk'),
  title: {
    default: 'Dan Bovey — Software Engineer',
    template: '%s · Dan Bovey'
  },
  description:
    'Dan Bovey — Senior Software Engineer. By day at OakNorth; after hours, building products at Polycorp. Plus music, playlists and the numbers.',
  openGraph: {
    title: 'Dan Bovey — Software Engineer',
    description:
      'Senior Software Engineer at OakNorth. After hours, building products at Polycorp.',
    url: 'https://danbovey.uk',
    siteName: 'Dan Bovey',
    type: 'website'
  }
};

// Empty for localhost; set to /absproxy/3000 behind the code-server proxy so
// static favicon/manifest refs resolve under the prefix too.
const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={iosevka.variable}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href={`${bp}/apple-touch-icon.png`} />
        <link rel="icon" type="image/svg+xml" href={`${bp}/favicon.svg`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${bp}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${bp}/favicon-16x16.png`} />
        <link rel="manifest" href={`${bp}/site.webmanifest`} />
        <link rel="mask-icon" href={`${bp}/safari-pinned-tab.svg`} color="#03a98f" />
        <meta name="msapplication-TileColor" content="#1c1e1e" />
        <meta name="theme-color" content="#1c1e1e" />
      </head>
      <body>{children}</body>
    </html>
  );
}
