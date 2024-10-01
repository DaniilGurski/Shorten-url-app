import styled from "styled-components"
import logo from "../assets/images/logo.svg"
import facebookIcon from "../assets/images/icon-facebook.svg"
import twitterIcon from "../assets/images/icon-twitter.svg"
import pinterestIcon from "../assets/images/icon-pinterest.svg"
import instagramIcon from "../assets/images/icon-instagram.svg"

import { Flex, FlexAlignCenter } from "./Flex"
import { Grid } from "./Grid"


const StyledFooter = styled(Flex)`
    flex-direction: column;
    align-items: center;

    padding-block: 3.375rem;
    background-color: var(--clr-neutral-700);

    @media (width >= 70em) {
        flex-direction: row;
        align-items: start;
        justify-content: space-around;
    }
`;


const Logo = styled.img`
    width: 7.5rem;
    filter: brightness(100);
`;


const MenuContentColumn = styled.div`
    display: grid;
    row-gap: 1.375rem;

    text-align: center;

    > h4 {
        font-weight: var(--fw-200);
        color: var(--clr-neutral-100);
    }


    > ul {
        display: grid;
        row-gap: 0.625rem;
    }


    a:is(:hover, :focus) {
        color: var(--clr-primary-100);
    }


    a:is(:hover, :focus) {
        color: var(--clr-primary-100);
    }
`;


const Menu = styled(Flex)`
    flex-direction: column;

    @media (width >= 70em) {
        gap: 6.563rem;
        ${MenuContentColumn} {
            text-align: start;
        }
        flex-direction: row;
    }
`;


const SocialMedia = styled(FlexAlignCenter)`
`


export default function Footer() {
  return (
    <StyledFooter as="footer" $gap="3.125rem">
        <Logo src={logo} alt="logo" />

        <Menu as="nav" $gap="2.5rem">
            <MenuContentColumn>
                <h4> Features </h4>

                <ul role="list">
                    <li><a href="#"> Link Shortening </a></li>
                    <li><a href="#"> Branded Links   </a></li>
                    <li><a href="#"> Analytics       </a></li>
                </ul>
            </MenuContentColumn>

            <MenuContentColumn>
                <h4> Resources </h4>

                <ul role="list">
                    <li><a href="#"> Blog </a></li>
                    <li><a href="#"> Developers </a></li>
                    <li><a href="#"> Support </a></li>
                </ul>
            </MenuContentColumn>

            <MenuContentColumn>
                <h4> Company </h4>

                <ul role="list">
                    <li><a href="#"> About </a></li>
                    <li><a href="#"> Our Team </a></li>
                    <li><a href="#"> Careers </a></li>
                    <li><a href="#"> Contact </a></li>
                </ul>
            </MenuContentColumn>

            <SocialMedia as="ul" role="list" $gap="1.5rem" aria-label="social media">
                <li><a href="#"><img src={facebookIcon} alt="facebook" /></a></li>
                <li><a href="#"><img src={twitterIcon} alt="twitter" /></a></li>
                <li><a href="#"><img src={pinterestIcon} alt="pinterest" /></a></li>
                <li><a href="#"><img src={instagramIcon} alt="instagram" /></a></li>
            </SocialMedia>
        </Menu>
    </StyledFooter>
  )
}
