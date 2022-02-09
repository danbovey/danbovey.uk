import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../../components/layout';
import { Container } from '../../components/container';
import Breadcrumbs from '../../components/breadcrumbs';
import { Subtitle, Dates } from '../../styles/work-style';

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        dates
      }
    }
  }
`;

const WorkPost = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Helmet title={frontmatter.title} />
      <Container>
        <Breadcrumbs list={[['/work', 'Work']]} />
        <h1>{frontmatter.title}</h1>
        {frontmatter.subtitle && <Subtitle>{frontmatter.subtitle}</Subtitle>}
        {frontmatter.dates && <Dates>{frontmatter.dates}</Dates>}
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
};

export default WorkPost;
