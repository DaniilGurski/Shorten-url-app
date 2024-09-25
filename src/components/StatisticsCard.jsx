import styled from "styled-components";
import iconBrandRecognition from "../assets/images/icon-brand-recognition.svg";
import iconDetailedRecords from "../assets/images/icon-detailed-records.svg";
import iconFullyCustomizable from "../assets/images/icon-fully-customizable.svg";

import { Grid } from "./Grid";


const StyledStatisticsCard = styled.article`
    position: relative;
    border-radius: 5px;
    padding: 2rem;
    padding-top: 4.813rem;
    background-color: var(--clr-neutral-100);   
    text-align: var(--card-text-align, center);

    @media (width >= 50em) {
        aspect-ratio: 1 / 0.7;
    }
`;


const Icon = styled.div`
    width: max-content;
    padding: 1.5rem;
    border-radius: 99rem;
    background-color: var(--clr-primary-200);

    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (width >= 50em) {
        left: 15%;
    }
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
            <Icon>
                <img src={cardContent?.icon} alt="" />
            </Icon>
            <TextContent>
                <h3>{cardContent?.heading}</h3>
                <p> {cardContent?.body} </p>
            </TextContent>
        </StyledStatisticsCard>
    )
}
