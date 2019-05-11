import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const WorkPage = ({ data }) => (
  <Layout>
    <SEO title="About"/>
    <h1>This is work page</h1>
    <div>{data.worksYaml.title}</div>
    <div>{data.worksYaml.description}</div>
    <div>
      {data.worksYaml.category} - {data.worksYaml.year}
    </div>
    <Link to="/">go back to home</Link>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    worksYaml(slug: { eq: $slug }) {
      title
      description
      category
      year
    }
  }
`

export default WorkPage;
