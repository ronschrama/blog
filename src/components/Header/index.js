import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { useTheme } from '../Theming';
import { bpMaxSM } from '../../lib/breakpoints';
import MobileMenu from './MobileMenu';
import Links from './Links';

import Container from '../Container';
import Logo from '../../images/LogoR.svg';

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding: 20px 0;
        background: ${theme.colors.primary};
        /* background:repeating-linear-gradient(45deg, rgb(27, 27, 27) 0px, rgb(27, 27, 27) 97px,rgb(24, 24, 24) 97px, rgb(24, 24, 24) 194px,rgb(20, 20, 20) 194px, rgb(20, 20, 20) 291px) */
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Link
            to="/"
            aria-label="go to homepage"
            css={css`
              color: white;
              font-weight: bold;
              font-size: 20px;
              &:hover {
                color: white;
                text-decoration: none;
              }
              &:active {
                color: white;
              }
            `}
          >
            <img src={Logo} alt="logo" style={{ height: '32px', marginRight: '12px', marginTop: '20px' }} />
            {siteTitle}
          </Link>
          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              font-weight: bold;
              display: flex;
              align-items: center;
              a {
                text-decoration: none;
                color: ${theme.colors.white};
                margin-left: 16px;
                margin-right: 16px;
                :hover { 
                  color: ${theme.colors.secondary};
                }
              }
              .active {
                /* Change active color */
                border-bottom: 2px solid;
                border-color: ${theme.colors.secondary};
                display: inline-block;
                text-shadow:
                  2px 2px ${theme.colors.primary},
                  2px -2px ${theme.colors.primary},
                  -2px 2px ${theme.colors.primary},
                  -2px -2px ${theme.colors.primary};
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                ${bpMaxSM} {
                  display: none;
                }
              `}
            >
              <Links />
            </div>
            <MobileMenu>
              <Links />
            </MobileMenu>
          </div>
        </nav>
      </Container>
    </header>
  )
}

const ConnectedHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Header siteTitle={data.site.siteMetadata.title} {...props} />
    )}
  />
)

export default ConnectedHeader
