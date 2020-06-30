import { createTheming } from '@callstack/react-theme-provider'
import { lighten } from 'polished'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: '#0F0C3F',
      secondary: '#13BBAF',
      text: colors.black,
      bodyBg: colors.gray,
      footerBg: '#F1F6F9',
      headerBg: colors.blue,
      link: colors.blue,
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      // primary: lighten(0.05, '#0F0C3F'),
      // primary: '#4C1199',
      primary: '#100E16',
      secondary: '#13BBAF',
      text: colors.white,
      bodyBg: '#201C2D',
      footerBg: '#201C2Dk',
      headerBg: colors.black,
      link: lighten(0.05, colors.blue),
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
