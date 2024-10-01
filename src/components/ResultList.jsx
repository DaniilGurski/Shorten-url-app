import styled, { css } from "styled-components"

import { Button } from "./ui/Button";
import { Flex, FlexAlignCenter } from "./Flex";
import { Grid } from "./Grid";


const StyledResultList = styled(Grid)`
  grid-row: results;
  color: var(--clr-primary-200);
`;


const ResultItem = styled(Flex).attrs({ as: "li" })`
  overflow-x: scroll;
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

  display: grid;
  border-top: 2px solid var(--clr-neutral-200);
  margin-inline: -2rem; 
  margin-top: var(--_space-around);
  padding-inline: inherit;
  padding-top: var(--_space-around);
  
  > span {
    color: var(--clr-primary-100);
  }

  @media (width >= 50em) {
    grid-template-columns: min-content 8rem;
    align-items: center;
    gap: 1.5rem;

    padding: 0;
    margin: 0;

    border: none;
  }
`


const CopyButton = styled(Button)`
  border-radius: 5px;
  ${({ $selected }) => $selected && css`
    background-color: var(--clr-neutral-600);

  `}
`;


export default function ResultList({ setShortenUrls, shortenUrls }) {
  const onCopyClick = (copyUrlGroup) => {
    setShortenUrls([...shortenUrls.map(urlGroup => ({
      ...urlGroup, 
      selected: urlGroup.shortUrl === copyUrlGroup.shortUrl
    }))])

    navigator.clipboard.writeText(copyUrlGroup.shortUrl);
  }

  return (
    <StyledResultList as="ul" role="list" aria-label="shorten URLS" $gap="1rem">
      {
        shortenUrls.map(urlGroup => {
          const { longUrl, shortUrl, selected } = urlGroup;

          return ( 
            <ResultItem key={shortUrl}> 
              <span> {longUrl} </span>
      
              <ShortenLink $gap="0.5rem">
                <span> {shortUrl} </span>
                <CopyButton onClick={() => onCopyClick(urlGroup)} $selected={selected}> 
                  {selected ? "Copied !" : "Copy"}
                </CopyButton>
              </ShortenLink>
            </ResultItem>
          )
        })
      }
    </StyledResultList>
  )
}
