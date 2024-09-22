import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import heroIllustration from "../assets/images/illustration-working.svg"
import menu from "../assets/images/menu.svg";

import { ContainerStyling } from "./Container";
import { Flex, FlexAlignCenter } from "./Flex";
import { Button, SecondaryButton } from "./ui/Button";

const StyledHero = styled.section`
    ${ContainerStyling}
    grid-column: full-width;
    background-color: var(--clr-neutral-100);
`

const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 2.813rem;
`

const Logo = styled.img``;


const HeaderMenu = styled(FlexAlignCenter)`
    flex: 1;
    justify-content: space-between;
`;


const HeaderNav = styled.nav``


const PrimaryNav = styled.ul`
    display: flex;
    gap: 1.875rem; 

    a {
        text-decoration: none;
        font-weight: var(--fw-200);
        color: var(--clr-neutral-500);
    }
`

const PrimaryButtons = styled(Flex)`
`

const BurgerMenu = styled(SecondaryButton)`
    display: none;

    @media (width <= 50.938em) {
        display: block;
    }
`

const Main = styled.div`
    &::after {
        content: url(${heroIllustration})
    }
`

const MainContent = styled.article`
    display: grid;
    row-gap: 2.375rem;
`

export default function Hero() {
    return (
        <StyledHero>
            <Header>
                <Logo src={logo} alt="logo" />

                <HeaderMenu $gap="20rem">
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
            </Header>

        </StyledHero>
    )
}








{/* <Main>
    <MainContent>
        <div>
            <h1> More than just shorter links </h1>
            <p> Build your brand's recognition and get detailed insights on how your links are performing. </p>
        </div>

        <Button> Get Started </Button>
    </MainContent>
</Main> */}