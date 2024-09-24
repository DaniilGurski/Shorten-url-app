import { useState } from 'react'
import GlobalStyles from './components/styles/GlobalStyles'
import StyledContainer from './components/Container'
import Main from './components/Main'
import Hero from './components/Hero'
import LinkShortener from './components/LinkShortener'
import AdvancedStatistics from './components/AdvancedStatistics'


export default function App() {
    return (
    <>
      <GlobalStyles />
      <Main> 
        <StyledContainer>
          <Hero />

          <LinkShortener /> 

          <AdvancedStatistics />
        </StyledContainer>
      </Main>
    </>
  )
}