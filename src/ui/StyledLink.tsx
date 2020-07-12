import styled from 'styled-components'
import { variant } from 'styled-system'
import { TypographyFunctionsProps, typographyFunctions } from '~/styles/modules/typography'
type StyledLinkProps = {
  variant: 'inline' | 'default' | 'nav1' | 'nav2' | 'nav3'
} & TypographyFunctionsProps

const StyledLinkVariants = variant({
  variants: {
    default: {
      fontFamily: 'body',
      fontSize: 2,
      fontWeight: 'medium',
      color: 'brand.primary',
      lineHeight: 'copy',
      textDecoration: 'underline',
      ':hover': {
        color: 'brand.secondary',
      },
      ':active': {
        color: 'brand.primary',
      },
    },
    inline: {
      fontFamily: 'body',
      fontSize: 'inherit',
      fontWeight: 'medium',
      color: 'brand.primary',
      lineHeight: 'copy',
      textDecoration: 'underline',
      ':hover': {
        color: 'brand.secondary',
      },
      ':active': {
        color: 'brand.primary',
      },
    },
    nav1: {
      fontFamily: 'heading',
      fontSize: 3,
      fontWeight: 'bold',
      color: 'ui.primary',
      lineHeight: 'copy',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
        color: 'ui.secondary',
      },
      ':active': {
        textDecoration: 'underline',
        color: 'ui.secondary',
      },
    },
    nav2: {
      fontFamily: 'heading',
      fontSize: 2,
      fontWeight: 'bold',
      color: 'ui.primary',
      lineHeight: 'copy',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
        color: 'ui.secondary',
      },
      ':active': {
        textDecoration: 'underline',
        color: 'ui.secondary',
      },
    },
    nav3: {
      fontFamily: 'heading',
      fontSize: 1,
      fontWeight: 'bold',
      color: 'ui.primary',
      lineHeight: 'copy',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
        color: 'ui.secondary',
      },
      ':active': {
        textDecoration: 'underline',
        color: 'ui.secondary',
      },
    },
  },
})

export const StyledLink = styled.a<StyledLinkProps>`
  ${StyledLinkVariants}
  ${typographyFunctions}
`

StyledLink.defaultProps = {
  variant: 'default',
}
