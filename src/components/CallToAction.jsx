import styled from "styled-components";

import boostBgDesktop from "../assets/images/bg-boost-desktop.svg";
import boostBgMobile from "../assets/images/bg-boost-mobile.svg";

import { Button } from "./ui/Button";
import { Grid } from "./Grid";


const StyledCallToAction = styled(Grid)`
    --heading-color: var(--clr-neutral-100);
    
    grid-column: full-width;
    place-items: center;

    padding-block: var(--cta-padding-block, 5.625rem);

    background-image: url(${boostBgMobile});
    background-color: var(--clr-primary-200);
    background-repeat: no-repeat;
    background-size: cover;

    @media (width >= 50em) {
        background-image: url(${boostBgDesktop});
        --cta-padding-block: 3.563rem;
    }
`;


export default function CallToAction() {
  return (
    <StyledCallToAction as="section" $gap="clamp(1rem, 3vw, 2rem)">
        <h2> Boost your links today </h2>
        <Button> Get started </Button>
    </StyledCallToAction>
  )
}
