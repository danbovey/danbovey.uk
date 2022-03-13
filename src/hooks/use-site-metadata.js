import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            subtitle
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
