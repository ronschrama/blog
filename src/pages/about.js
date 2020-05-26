import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from 'components/Layout';
import Link from 'components/Link';
import { useTheme } from 'components/Theming';
import Container from 'components/Container';
import { rhythm } from '../lib/typography';

export default function about({ data: { site } }) {
  return (
    <Layout site={site}>

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