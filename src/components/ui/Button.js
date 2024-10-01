import { styled, css } from "styled-components"

const DefaultStyling = css`
    padding: 0.875rem 1.5rem;
    color: var(--clr-neutral-100);
    background-color: var(--clr-primary-100);
    border-radius: 28px;

    &:is(:hover, :focus) {
        background-color: hsl(180, 57%, 75%);
    }
`

const SecondaryStyling = css`
    background: none;
    color: currentColor;

    &:is(:hover, :focus) {
        color: var(--clr-primary-200);
    }
`

export const Button = styled.button`
    ${({ $variant })=> $variant === "secondary" ? SecondaryStyling : DefaultStyling}

    font-weight: var(--fw-200);
    text-transform: capitalize;

    border: none;

    cursor: pointer;
`