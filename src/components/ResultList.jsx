import styled from "styled-components"

import { Button } from "./ui/Button";
import { Flex, FlexAlignCenter } from "./Flex";


const StyledResultList = styled.ul`
  grid-row: results;
  color: var(--clr-primary-200);
`;


const ResultItem = styled(Flex).attrs({ as: "li" })`
  flex-direction: column;
  
  padding: 1.125rem 2rem;

  background-color: var(--clr-neutral-100);

  border-radius: 10px;

  @media (width >= 50em) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`; 


const ShortenLink = styled(Flex)`
  --_space-around: 0.875rem;

  flex-direction: column;
  border-top: 2px solid var(--clr-neutral-200);
  margin-inline: -2rem; 
  margin-top: var(--_space-around);
  padding-inline: inherit;
  padding-top: var(--_space-around);
  
  > span {
    color: var(--clr-primary-100);
  }

  @media (width >= 50em) {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;

    padding: 0;
    margin: 0;

    border: none;
  }
`


const CopyButton = styled(Button)`
  border-radius: 5px;
`;


export default function ResultList() {
  return (
    <StyledResultList role="list">
      {/* <ResultItem> 
        <span> https://www.frontendmentor.io </span>

        <ShortenLink $gap="0.5rem">
          <span> https://rel.ink/k4lKyk </span>
          <CopyButton> Copy </CopyButton>
        </ShortenLink>
      </ResultItem> */}
    </StyledResultList>
  )
}
