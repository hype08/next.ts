import { createGlobalStyle } from 'styled-components'
import reset from '~/styles/modules/reset'
import { MAIN_BACKGROUND } from '~/styles/modules/variables'
import { theme } from '~/styles/themes'

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
  }
  body {
    ${MAIN_BACKGROUND};
    color: ${props => theme(props).colors.text.primary};
  }

  a {
    color: ${props => theme(props).colors.brand.primary};
  }
`
