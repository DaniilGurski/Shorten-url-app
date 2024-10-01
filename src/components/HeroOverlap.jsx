import styled from "styled-components"
import StyledContainer from "./Container"

const StyledHeroOverlap = styled(StyledContainer).attrs({ as: "section" })` 
  grid-column: full-width;
  grid-template-rows: [hero-start] 1fr [shortener-start] 5rem [hero-end] 5rem [shortener-end] 2.625rem [results-start]; 
`

export default function HeroOverlap({ children }) {
  return (
    <StyledHeroOverlap>
        {children}
    </StyledHeroOverlap>
  )
}
