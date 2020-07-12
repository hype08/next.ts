import type { DefaultTheme } from 'styled-components'
import type { Breakpoints } from '~/@types/styled-components/theme'
import { pxToRem } from '~/styles/modules/mixins'

export const fonts = {
  body: '"Helvetica Neue", Roboto, sans-serif',
  heading: '"Roboto", sans-serif',
  monospace: 'Menlo, monospace',
}

export const fontSizes = [
  '0.625rem',
  '0.75rem',
  '1rem',
  '1.125rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2rem',
  '2.5rem',
  '3rem',
]

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
}

export const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
}

export const letterSpacings = {
  default: 'normal',
  tracked: '0.04em',
}

export const breakpoints: Breakpoints = {
  tablet: '720px',
  desktop: '1024px',
  wide: '1600px',
}

const baseTheme: Partial<DefaultTheme> = {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  breakpoints: [breakpoints.tablet, breakpoints.desktop, breakpoints.wide],
  space: [0, pxToRem(4), pxToRem(8), pxToRem(16), pxToRem(32), pxToRem(64), pxToRem(128), pxToRem(256), pxToRem(512)],
}

export default baseTheme as DefaultTheme
