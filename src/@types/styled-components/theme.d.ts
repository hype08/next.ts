import 'styled-components'

export interface Breakpoints {
  tablet: string
  desktop: string
  wide: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: number[]
    fonts: {
      body: string
      heading: string
      monospace: string
    }
    fontSizes: string[]
    fontWeights: {
      regular: number
      medium: number
      bold: number
    }
    lineHeights: {
      solid: number
      title: number
      copy: number
    }
    letterSpacings: {
      default: string
      tracked: string
    }
    breakpoints: string[]
    space: readonly [number, ...string]
    colors: {
      brand: {
        primary: string
        secondary: string
        accent: string
        muted: string
      }
      ui: {
        primary: string
        secondary: string
        tertiary: string
        quaternary: string
        disabled: string
        error: string
        success: string
      }
      bg: {
        primary: string
        secondary: string
      }
      text: {
        primary: string
        secondary: string
        disabled: string
        inverse: string
        error: string
        success: string
      }
      highlights: {
        primaryHighlight: string
        primaryExtraHighlight: string
        bgHighlight: string
      }
    }
  }
}
