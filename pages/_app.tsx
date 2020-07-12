import React from 'react'
import App from 'next/app'
import AppNav from '~/components/layout/AppNav'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '~/styles/global'
import { dark, light } from '~/styles/themes'

const navbarLinks = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/support', label: 'Support' },
]

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <AppNav navbarLinks={navbarLinks} />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
