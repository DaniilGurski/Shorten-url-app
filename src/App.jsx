import { useState } from 'react'
import GlobalStyles from './components/styles/GlobalStyles'
import { Container } from './components/Container'
import Main from './components/Main'
import Hero from './components/Hero'

export default function App() {
    return (
    <>
      <GlobalStyles />
      <Main> 
        <Container>
          <Hero />
        </Container>
      </Main>
    </>
  )
}