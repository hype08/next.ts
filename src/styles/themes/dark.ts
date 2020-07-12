import type { DefaultTheme } from 'styled-components'
import baseTheme from '~/styles/themes/base'
import { lighten } from 'polished'

const theme: DefaultTheme = {
  ...baseTheme,
  colors: {
    brand: {
      primary: '#298DFF',
      secondary: '#7CAEE8',
      accent: '#FDB447',
      muted: '#B7CBEA',
    },
    ui: {
      primary: '#FFFFFF',
      secondary: '#A1A1A1',
      tertiary: '#3C3C3C',
      quaternary: '#262626',
      disabled: '#242424',
      error: '#FF4D4D',
      success: '#1CBD00',
    },
    bg: {
      primary: '#111111',
      secondary: '#262626',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A1A1A1',
      disabled: '#525252',
      inverse: '#262626',
      error: '#FF4D4D',
      success: '#1CBD00',
    },
    highlights: {
      primaryHighlight: lighten(0.1, '#298DFF'),
      primaryExtraHighlight: lighten(0.2, '#298DFF'),
      bgHighlight: lighten(0.1, '#111111'),
    },
  },
}

export default theme
