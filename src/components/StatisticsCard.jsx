import styled from "styled-components";
import iconBrandRecognition from "../assets/images/icon-brand-recognition.svg";
import iconDetailedRecords from "../assets/images/icon-detailed-records.svg";
import iconFullyCustomizable from "../assets/images/icon-fully-customizable.svg";

import { Grid } from "./Grid";


const StyledStatisticsCard = styled.article`
`;


const Icon = styled.img`
`;


const TextContent = styled(Grid).attrs({ $gap: "0.75rem" })`
`;


export default function StatisticsCard({ type }) {
    const cardContents = {
        "BRAND_RECOGNITION": {
            icon: iconBrandRecognition,
            heading: "Brand Recognition",
            body: `Boost your brand recognition with each click. 
            Generic links don't mean a thing. Branded links help instil confidence in your content.`,
        },

        "DETAILED_RECORDS": {
            icon: iconDetailedRecords,
            heading: "Detailed Records",
            body: `Gain insights into who is clicking your links. 
            Knowing when and where people engage with your content helps inform better decisions.`,
        },

        "FULLY_CUSTOMIZABLE": {
            icon: iconFullyCustomizable,
            heading: "Fully Customizable",
            body: `Improve brand awareness and content discoverability through customizable links, 
            supercharging audience engagement.`,
        }
    }

    const cardContent = cardContents[type];

    return (
        <StyledStatisticsCard>
            <Icon src={cardContent?.icon} alt="" />
            <TextContent>
                <h3>{cardContent?.heading}</h3>
                <p> {cardContent?.body} </p>
            </TextContent>
        </StyledStatisticsCard>
    )
}
