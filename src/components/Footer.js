import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import { useTheme } from './Theming'
// import SubscribeForm from './Forms/Subscribe'
import { Twitter, GitHub, LinkedIn } from './Social'
import Container from './Container'

const Footer = ({ author, noSubscribeForm }) => {
  const theme = useTheme()
  return (
    <footer
      css={css`
        background: ${theme.colors.footerBg};
        ${bpMaxSM} {
          padding-top: 0;
        }
      `}>
      <Container>
        {/* Add signup form for newsletter later */}
        {/* {!noSubscribeForm && (
        <div>
          <SubscribeForm />
          <br />
          <br />
        </div>
      )} */}
        <div>
          <h2 style={{ fontSize: '24px' }}>Contact</h2>
          <p style={{ fontSize: '16px' }}>Mail me at: hello@ronschrama.com <br />Or you can find me on social media:</p>
        </div>
        <div
          css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
        >
          <div>
            <Twitter />
            <GitHub />
            <LinkedIn />
          </div>
          <div
            css={css`
            font-size: 16px;
            color: ${theme.colors.primary}
            opacity: 0.7;
          `}
          >
            {author && `${author} \u00A9 ${new Date().getFullYear()}`}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
