import styled from "styled-components"
import { Grid } from "./Grid"
import { Flex } from "./Flex";

import shortenBgMobile from "../assets/images/bg-shorten-mobile.svg";
import shortenBgDesktop from "../assets/images/bg-shorten-desktop.svg";
import { Button } from "./ui/Button";

const Form = styled.form`
    display: grid; 
    gap: 1rem 1.5rem;

    padding: 1.5rem;

    background-image: url(${shortenBgMobile});
    background-repeat: no-repeat;
    background-position: top right;
    background-color: var(--clr-primary-200);

    border-radius: 10px;

    @media (width >= 50em) {
        padding: 3.25rem 4rem; 
        grid-template-columns: 1fr max-content;

        background-image: url(${shortenBgDesktop});
    }
`

const SearchBar = styled.input`
    flex: 1;
    padding: 1rem;
    border-radius: 5px;
    border: none;

    &::placeholder {
        color: var(--clr-neutral-500);
    }
`

const SubmitButton = styled(Button)`
    border-radius: 5px;
`

const ResultList = styled.ul`
`


export default function LinkShortener() {
  return (
    <Grid as="section" $gap="1rem">
        <Form>
            <SearchBar placeholder="Shorten a link here..."/>
            <SubmitButton> Shorten It ! </SubmitButton>
        </Form>

        <ResultList> </ResultList>
    </Grid>
  )
}
