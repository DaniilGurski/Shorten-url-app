import { css } from "styled-components";

const Reset = css`
    /* Reset CSS by Andy Bell */
    *,
    *::before,
    *::after {
    font: inherit;
    box-sizing: border-box;
    }


    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
    margin: 0;
    }


    ul[role='list'],
    ul[role='listbox'],
    ol[role='list'],
    ol[role='listbox'] {
    margin: 0;
    padding: var(--list-padding, 0);
    list-style: none;
    }


    html,
    body {
    height: 100%;
    }


    html:focus-within {
    scroll-behavior: smooth;
    }


    body {
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    }


    a:not([class]) {
    text-decoration-skip-ink: auto;
    }


    img,
    picture {
    max-width: 100%;
    display: block;
    }


    input,
    button,
    textarea,
    select {
    font: inherit;
    }

`
export default Reset;