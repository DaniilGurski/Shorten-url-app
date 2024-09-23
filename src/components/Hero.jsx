import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/menu.svg";

import StyledContainer from "./Container";
import { Flex, FlexAlignCenter } from "./Flex";
import { Button } from "./ui/Button";


const StyledHero = styled(StyledContainer).attrs({ as: "section" })`
    padding-block: 3rem;
    grid-column: full-width;
    background-color: var(--clr-neutral-100);

    row-gap: clamp(1.438rem, 3vw, 4.563rem);
`;


const Header = styled(FlexAlignCenter).attrs({ as: "header", $gap: "2.813rem" })`
    position: relative;

    @media (width <= 50em) {
        justify-content: space-between;
    }
`;


const HeaderMenu = styled(FlexAlignCenter)`
    width: 80%;
    justify-content: space-between;

    @media (width <= 50em) {
        visibility: hidden;
        width: min(90%, 25rem);

        top: 100%;
        left: 50%; 
        transform: translate(-50%);

        flex-direction: column;
        position: absolute;
        gap: 2rem;

        padding: 2.5rem;
        border-radius: 10px;
        background-color: var(--clr-primary-200);
        color: var(--clr-neutral-100);

        * {
            align-items: center;
            flex-direction: column;
        }

        &::after {
            content: "";
            width: 100%;
            height: 2px;
            background-color: var(--clr-neutral-500);
            order: 2;
        }
    }
`;


const HeaderNav = styled.nav`
    order: 1;
`;


const PrimaryNav = styled.ul`
    display: flex;
    gap: 1.875rem; 

    a {
        text-decoration: none;
        font-weight: var(--fw-200);
        color: currentColor;
    }
`;


const PrimaryButtons = styled(Flex)`
    order: 3;

    @media (width <= 50em) {
        gap: 1.5rem
    }
`;


const BurgerMenu = styled(Button)`
    display: none;

    @media (width <= 50.938em) {
        display: block;
    }
`;


const MainContent = styled.article`
    display: grid;
    justify-items: center;
    row-gap: 2rem;


    @media (width >= 50em) {
        > div {
            width: min(90%, 33.75rem);
            margin-right: auto;
        }
    }
`


const Main = styled.div`
    display: grid;
    justify-items: center;
    text-align: center;

    &::before {
        content: "";
        width: min(90%, 20.438rem);
        aspect-ratio: 1;
        background: url("src/assets/images/illustration-working.svg") no-repeat;
        background-size: cover;
    }

    @media (width >= 50em) {
        grid-template-columns: 1fr 1fr;
        align-items: center;

        &::before {
            order: 2;
            width: 100%;
            aspect-ratio: 16 / 9;
            background-size: contain;
            background-position: right;
        }

        > ${MainContent} {
            text-align: start;
            justify-items: start;
        }
    }
`


export default function Hero() {
    return (
        <StyledHero>
            <Header>
                <img src={logo} alt="logo" />

                <HeaderMenu>
                    <HeaderNav>
                        <PrimaryNav role="list">
                            <li><a href="#"> Features  </a></li>
                            <li><a href="#"> Pricing   </a></li>
                            <li><a href="#"> Resources </a></li>
                        </PrimaryNav>
                    </HeaderNav>

                    <PrimaryButtons $gap="2.313rem">
                        <Button $variant="secondary"> Login </Button>
                        <Button> Sign up </Button>
                    </PrimaryButtons>

                </HeaderMenu>

                <BurgerMenu $variant="secondary">
                    <img src={menu} alt="menu" />
                </BurgerMenu>
            </Header>

            <Main>
                <MainContent>
                    <div>
                        <h1> More than just shorter links </h1>
                        <p> 
                            Build your brand's recognition and get detailed insights on how your links are performing. 
                        </p>
                    </div>

                    <Button> Get Started </Button>
                </MainContent>
            </Main>
        </StyledHero>
    )
}
