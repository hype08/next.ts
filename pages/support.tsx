import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'

const AboutInner = styled.div``

const Support: NextPage = () => (
  <AboutInner>
    <AppHead title="Support" />
    <p>FAQ</p>
  </AboutInner>
)

export default Support
