import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../../components/layout';
import { Container } from '../../components/container';
import Breadcrumbs from '../../components/breadcrumbs';

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
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

const WorkIndex = ({
  data: {
    allMarkdownRemark: { nodes }
  }
}) => {
  const workPosts = nodes.slice();
  workPosts.sort((a, b) => b.parent.name.localeCompare(a.parent.name, 'en'));

  return (
    <Layout>
      <Helmet title="Work" />
      <Container>
        <Breadcrumbs />
        <h1>Work</h1>
        <ul>
          {workPosts.map(post => (
            <li key={post.parent.name}>
              <Link to={post.parent.name}>{post.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default WorkIndex;
