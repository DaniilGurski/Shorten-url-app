import styled from "styled-components"
import facebookIcon from "../assets/images/icon-facebook.svg"
import twitterIcon from "../assets/images/icon-twitter.svg"
import pinterestIcon from "../assets/images/icon-pinterest.svg"
import instagramIcon from "../assets/images/icon-instagram.svg"

import { Flex } from "./Flex"
import { Grid } from "./Grid"


const StyledFooter = styled(Flex)`
`;


const Logo = styled.img`
`;


const Menu = styled(Flex)`
`;


const MenuContentColumn = styled(Grid)`
`;


const SocialMedia = styled(Flex)`
`


export default function Footer() {
  return (
    <StyledFooter as="footer">
        <Logo />

        <Menu>
            <Flex as="nav">
                <MenuContentColumn>
                    <h4> Features </h4>

                    <ul>
                        <li><a href="#"> Link Shortening </a></li>
                        <li><a href="#"> Branded Links   </a></li>
                        <li><a href="#"> Analytics       </a></li>
                    </ul>
                </MenuContentColumn>

                <MenuContentColumn>
                    <h4> Resources </h4>

                    <ul>
                        <li><a href="#"> Blog </a></li>
                        <li><a href="#"> Developers </a></li>
                        <li><a href="#"> Support </a></li>
                    </ul>
                </MenuContentColumn>

                <MenuContentColumn>
                    <h4> Company </h4>

                    <ul>
                        <li><a href="#"> About </a></li>
                        <li><a href="#"> Our Team </a></li>
                        <li><a href="#"> Careers </a></li>
                        <li><a href="#"> Contact </a></li>
                    </ul>
                </MenuContentColumn>
            </Flex>
            
            {/* this list can be inside nav ?*/}
            <SocialMedia as="ul">
                <li><a href="#"><img src={facebookIcon} alt="facebook" /></a></li>
                <li><a href="#"><img src={twitterIcon} alt="twitter" /></a></li>
                <li><a href="#"><img src={pinterestIcon} alt="pinterest" /></a></li>
                <li><a href="#"><img src={instagramIcon} alt="instagram" /></a></li>
            </SocialMedia>
        </Menu>
    </StyledFooter>
  )
}
