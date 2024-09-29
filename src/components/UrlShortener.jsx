import styled, { css } from "styled-components"
import { Grid } from "./Grid"
import { Flex } from "./Flex";

import shortenBgMobile from "../assets/images/bg-shorten-mobile.svg";
import shortenBgDesktop from "../assets/images/bg-shorten-desktop.svg";
import { Button } from "./ui/Button";
import { isValidUrl } from "../utils/helpers";


const StyledUrlShortener = styled(Grid)`
    grid-row: shortener;
    z-index: 999;
`

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


const SearchBarContainer = styled(Grid)`
    position: relative;
    flex: 1;
`


const SearchBar = styled.input`
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    border: none;
    ${({ $formValid }) => !$formValid ? css`outline: 3px solid var(--clr-neutral-400)` : ""};

    &::placeholder {
        color: var(--clr-neutral-500);
    }
`

const ErrorMessage = styled.div`
    > span {
        display: ${({ $formValid }) => !$formValid ? "inline-block" : "none" };
        color: var(--clr-neutral-400);
        font-style: italic;
    }

    @media (width >= 50em) {
        position: absolute;
        top: 100%;
        transform: translateY(0.5rem);
    }
`


const SubmitButton = styled(Button)`
    border-radius: 5px;
`


export default function UrlShortener({ onSubmit, urlInput, setUrlInput, formValid }) {
  return (
    <StyledUrlShortener $gap="1rem">
        <Form onSubmit={onSubmit}>
            <SearchBarContainer $gap="0.25rem">
                <SearchBar 
                value={urlInput}
                placeholder="Shorten a link here..."
                aria-describedby="error-message"
                onChange={(e) => setUrlInput(e.target.value)}
                $formValid={formValid}
                />

                <ErrorMessage aria-live="assertive" id="error-message" $formValid={formValid}>
                    <span> Please add a valid link </span>
                </ErrorMessage>
            </SearchBarContainer>

            <SubmitButton> Shorten It ! </SubmitButton>
        </Form>
    </StyledUrlShortener>
  )
}
