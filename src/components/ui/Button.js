import { styled, css } from "styled-components"

const DefaultStyling = css`
    padding: 0.5rem 1.5rem;
    color: var(--clr-neutral-100);
    background-color: var(--clr-primary-100);
    border-radius: 28px;
`

const SecondaryStyling = css`
    background: none;
    color: var(--clr-neutral-500);
`

export const Button = styled.button`
    ${({ variant })=> variant === "secondary" ? SecondaryStyling : DefaultStyling}

    font-weight: var(--fw-200);
    text-transform: capitalize;

    border: none;

    cursor: pointer;
`