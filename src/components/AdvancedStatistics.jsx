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


const CardList = styled.ul`
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

        <CardList>
            <li> <StatisticsCard type="BRAND_RECOGNITION" /> </li>
            <li> <StatisticsCard type="DETAILED_RECORDS" /> </li>
            <li> <StatisticsCard type="FULLY_CUSTOMIZABLE" /> </li>
        </CardList>
    </StyledAdvancedStatistics>
  )
}
