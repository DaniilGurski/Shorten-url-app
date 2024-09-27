import { useState } from 'react'
import GlobalStyles from './components/styles/GlobalStyles'
import StyledContainer from './components/Container'
import Main from './components/Main'
import HeroOverlap from './components/HeroOverlap'
import Hero from './components/Hero'
import LinkShortener from './components/LinkShortener'
import ResultList from './components/ResultList'
import AdvancedStatistics from './components/AdvancedStatistics'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'


export default function App() {
    return (
    <>
      <GlobalStyles />
      
      <Main> 
        <StyledContainer $gap="clamp(5rem, 10vw, 7.5rem)">
          <HeroOverlap> 
            <Hero />
            <LinkShortener /> 
            <ResultList />
          </HeroOverlap>
          <AdvancedStatistics />
          <CallToAction />
        </StyledContainer>
      </Main>

      <Footer />
    </>
  )
}