import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import {
  Feature,
  FeatureIcon,
  FeatureContent,
  FeatureImg
} from '../styles/home-style';

const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          subtitle
          dates
          image
        }
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`;

const WorkList = () => {
  const {
    allMarkdownRemark: { nodes }
  } = useStaticQuery(query);

  const workPosts = nodes.slice();
  workPosts.sort((a, b) => b.parent.name.localeCompare(a.parent.name, 'en'));

  const current = workPosts[0];

  return (
    <Feature>
      <FeatureIcon>
        <FeatureImg src={current.frontmatter.image} alt={current.title} />
      </FeatureIcon>
      <FeatureContent>
        <h2>{current.frontmatter.subtitle}</h2>
        <small>{current.frontmatter.dates}</small>
        <br />
        <br />
        <small>
          <small>
            Previously
            {workPosts.slice(1, 3).map(workPost => (
              <p key={workPost.parent.name}>
                <Link to={`/work/${workPost.parent.name}`}>
                  {workPost.frontmatter.subtitle}
                </Link>
              </p>
            ))}
          </small>
        </small>
      </FeatureContent>
    </Feature>
  );
};

export default WorkList;
