import { createGlobalStyle } from "styled-components";
import Reset from "./Reset";
import FontFace from "./FontFace"

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${FontFace}

  :root {
    --clr-primary-200: hsl(257, 27%, 26%);
    --clr-primary-100: hsl(180, 66%, 49%);

    --clr-secondary: hsl(0, 87%, 67%); 

    --clr-neutral-600: hsl(255, 11%, 22%);
    --clr-neutral-500: hsl(257, 7%, 63%);
    --clr-neutral-400: hsl(0, 87%, 67%);
    --clr-neutral-300: hsl(0, 0%, 75%);
    --clr-neutral-200: hsl(225, 33%, 95%);
    --clr-neutral-100: hsl(100, 100%, 100%);

    --fs-600: 3.125rem;
    --fs-500: 2.5rem;
    --fs-400: 1.375rem; 
    --fs-300: 1.25rem 
    --fs-200: 1.125rem;
    --fs-100: 1rem;

    --fw-200: 700;
    --fw-100: 500;

    --ff-primary: "Poppins", sans-serif;

    @media (width <= 50em) {
      --fs-600: 2.625rem; 
      --fs-500: 1.75rem;
    }
  }


  body {
    font-family: var(--ff-primary);
    background-color: var(--clr-neutral-200);
    color: var(--clr-neutral-500);
  }


  h1, h2, h3 {
    color: var(--heading-color, var(--clr-neutral-600));
    font-weight: var(--fw-200);
  }


  h1 {
    font-size: var(--fs-600);
  }


  h2 {
    font-size: var(--fs-500);
  }


  h3 {
    font-size: var(--fs-400);
  }
`

export default GlobalStyles;