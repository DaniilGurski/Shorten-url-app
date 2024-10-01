import styled from "styled-components"
import StatisticsCard from "./StatisticsCard"
import { Grid } from "./Grid"


const StyledAdvancedStatistics = styled(Grid)`
` 


const TextContent = styled(Grid).attrs({ $gap: "1rem" })`
    width: min(90%, 36.25rem);
    margin-inline: auto;
    text-align: center;
`


const CardList = styled(Grid)`
    position: relative;

    // green line
    &::before {
        content: "";
        width: 8px; 
        display: inline-block;
        position: absolute;
        top: 0; 
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        background-color: var(--clr-primary-100);
    }

    @media (width >= 50em) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 3rem 3rem 1fr 3rem 3rem;
        grid-template-areas: 
        "card-1 ... ..."
        "card-1 card-2 ..."
        "card-1 card-2 card-3"
        "... card-2 card-3"
        "... ... card-3";

        gap: 0rem 1.875rem;

        article {
            text-align: start;
        }
       
        // cards
        > li:nth-child(1) {
            grid-area: card-1;
        }


        > li:nth-child(2) {
            grid-area: card-2;
        }


        > li:nth-child(3) {
            grid-area: card-3;
        }


        // green line
        &::before {
            width: 100%;
            height: 8px;
            left: 0;
            top: 50%;
            transform: translate(0%, -50%);
        }
    }
`

export default function AdvancedStatistics() {
  return (
    <StyledAdvancedStatistics as="section" $gap="clamp(5.75rem, 5vw, 6.25rem)">
        <TextContent>
            <h2> Advanced Statistics </h2>
            <p>
                Track how your links are performing across the web with our advanced statistics dashboard.
            </p>
        </TextContent>

        <CardList as="ul" role="list" aria-label="statistic cards" $gap="5.75rem">
            <li> <StatisticsCard type="BRAND_RECOGNITION" /> </li>
            <li> <StatisticsCard type="DETAILED_RECORDS" /> </li>
            <li> <StatisticsCard type="FULLY_CUSTOMIZABLE" /> </li>
        </CardList>
    </StyledAdvancedStatistics>
  )
}
