import type { DefaultTheme } from 'styled-components'
import baseTheme from '~/styles/themes/base'
import { darken } from 'polished'

const theme: DefaultTheme = {
  ...baseTheme,
  colors: {
    brand: {
      primary: '#012E86',
      secondary: '#0064D9',
      accent: '#DB7C00',
      muted: '#C6DAF7',
    },
    ui: {
      primary: '#262626',
      secondary: '#757575',
      tertiary: '#F1F1F1',
      quaternary: '#FFFFFF',
      disabled: '#DEDEDE',
      error: '#D0421B',
      success: '#138000',
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#F1F1F1',
    },
    text: {
      primary: '#262626',
      secondary: '#757575',
      disabled: '#9C9C9C',
      inverse: '#FFFFFF',
      error: '#D0421B',
      success: '#138000',
    },
    highlights: {
      primaryHighlight: darken(0.1, '#012E86'),
      primaryExtraHighlight: darken(0.2, '#012E86'),
      bgHighlight: darken(0.1, '#FFFFFF'),
    },
  },
}

export default theme
