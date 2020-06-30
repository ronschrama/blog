import { React } from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import { rgba } from 'polished'

const Button = ({ to, children, secondary, ...restProps }) => {
  const theme = useTheme()
  const styles = css({
    display: 'inline-flex',
    border: 'none',
    borderRadius: '4px',
    background: secondary
      ? rgba(theme.colors.primary, 0.1)
      : theme.colors.primary,
    color: secondary ? theme.colors.primary : theme.colors.white,
    padding: '10px 15px',
    cursor: 'pointer',
  })
  return to ? (
    <Link to={to} css={styles} {...restProps}>
      {children}
    </Link>
  ) : (
      <button css={styles} {...restProps}>
        {children}
      </button>
    )
}

export default Button
