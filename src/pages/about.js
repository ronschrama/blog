import React from 'react';
import { graphql } from 'gatsby';
// import { css } from '@emotion/core';
// import styled from '@emotion/styled';

import Layout from 'components/Layout';
import { useTheme } from 'components/Theming';
import Container from 'components/Container';
import Personal from '../components/Personal';
import Hobbies from '../components/Hobbies';

export default function about({ data: { site } }) {
  return (
    < Layout site={site} >
      <Container>
        <Personal />
        <Hobbies />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`