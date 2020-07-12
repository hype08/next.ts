import { Flex, Text, StyledLink, Image, Box } from '~/ui'
import Logo from '~/static/logo.png'

type linkObjectTypes = {
  href: string
  label: string
}

const AppNav: React.FC<{ navbarLinks: linkObjectTypes[] }> = ({ navbarLinks }) => {
  return (
    <Box as="nav" bg="bg.primary" px={3} py={2}>
      <StyledLink variant="nav1" href="/">
        <Image src={Logo} flex="flex-start" width={30} height={30} variant="default" alt="Hash.io" />
      </StyledLink>
      <Flex height={3} justifyContent="center" alignItems="center">
        {navbarLinks.map(({ label, href }: linkObjectTypes) => (
          <StyledLink key={label} href={href} variant="nav1" fontWeight="regular" m={3}>
            {label}
          </StyledLink>
        ))}
        <Box>
          <Text variant="body" fontWeight="bold" mb={1}></Text>
          <Flex m={1}>
            <StyledLink variant="default" display="flex" justifyContent="flex-end" style={{ textDecoration: 'none' }}>
              Sign in
            </StyledLink>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default AppNav
