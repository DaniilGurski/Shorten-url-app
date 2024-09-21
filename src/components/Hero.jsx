import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { Flex, FlexAlignCenter } from "./Flex";
import { Button } from "./ui/Button";

const StyledHero = styled.section`
    background-color: var(--clr-neutral-100);
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
`

const PrimaryNav = styled.ul`
    display: flex;
    gap: 2rem; 

    a {
        text-decoration: none;
        font-weight: var(--fw-200);
        color: var(--clr-neutral-500);
    }
`

export default function Hero() {
    return (
        <StyledHero>
            <Header>
                <FlexAlignCenter $gap="2.813rem">
                    <img src={logo} alt="logo" />

                    <nav>
                        <PrimaryNav role="list">
                            <li> <a href="#"> Features  </a> </li>
                            <li> <a href="#"> Pricing   </a> </li>
                            <li> <a href="#"> Resources </a> </li>
                        </PrimaryNav>
                    </nav>
                </FlexAlignCenter>

                <Flex $gap="2.313rem">
                    <Button variant="secondary"> Login </Button>
                    <Button> Sign up</Button>
                </Flex>
            </Header>
        </StyledHero>
    )
}