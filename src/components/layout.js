import React from 'react';
import { Helmet } from 'react-helmet';
import 'sanitize.css';

import useSiteMetadata from '../hooks/use-site-metadata';
import GlobalStyles from '../styles/global-styles';

const Layout = ({ children }) => {
  const { description, subtitle, title } = useSiteMetadata();

  return (
    <>
      <Helmet defaultTitle={title} titleTemplate={`%s • ${title}`}>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} - ${description}`} />
        <meta name="og:description" content={subtitle} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#03a98f" />
        <meta name="msapplication-TileColor" content="#03a98f" />
        <meta name="theme-color" content="#03A98F" />
      </Helmet>
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
};

export default Layout;
