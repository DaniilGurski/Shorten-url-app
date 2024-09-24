import styled from "styled-components"
import StatisticsCard from "./StatisticsCard"
import { Grid } from "./Grid"


const StyledAdvancedStatistics = styled.section`
` 


const TextContent = styled(Grid).attrs({ $gap: "1rem" })`
    width: min(90%, 36.25rem);
    margin-inline: auto;
    text-align: center;
`


const CardList = styled(Grid)`
    position: relative;

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
`

export default function AdvancedStatistics() {
  return (
    <StyledAdvancedStatistics>
        <TextContent>
            <h2> Advanced Statistics </h2>
            <p>
                Track how your links are performing across the web with our advanced statistics dashboard.
            </p>
        </TextContent>

        <CardList as="ul" role="list" $gap="5.75rem">
            <li> <StatisticsCard type="BRAND_RECOGNITION" /> </li>
            <li> <StatisticsCard type="DETAILED_RECORDS" /> </li>
            <li> <StatisticsCard type="FULLY_CUSTOMIZABLE" /> </li>
        </CardList>
    </StyledAdvancedStatistics>
  )
}
