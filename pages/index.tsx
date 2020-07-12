import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'
import { Box, Heading, Flex, StyledLink } from '~/ui'

const IndexInner = styled.div``

const Index: NextPage = () => (
  <IndexInner>
    <AppHead title="Homepage" />
    <Heading variant="heading-1">Grow your Instagram influence.</Heading>
    <Heading variant="heading-2">Increase followers, likes and comments with our automated engagement engine.</Heading>
    <Flex>
      <Box as="text">
        <Heading variant="heading-3">
          <strong>How it works</strong>
        </Heading>
        <Heading variant="heading-4">
          Organically grow your Instagram followers! Get 100% real followers that actually care about your content.
        </Heading>
        <form className="email-box">
          <input type="email" placeholder="Enter email address.." />
          <StyledLink variant="default" href="/download/" style={{ textDecoration: 'none' }}>
            Try for free
          </StyledLink>
        </form>
      </Box>
    </Flex>
  </IndexInner>
)

export default Index
