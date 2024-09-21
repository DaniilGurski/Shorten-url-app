import { createGlobalStyle } from "styled-components";
import Reset from "./Reset";
import FontFace from "./FontFace"

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${FontFace}

  :root {
    --clr-primary-200:  hsl(257, 27%, 26%);
    --clr-primary-100:  hsl(180, 66%, 49%);

    --clr-secondary: hsl(0, 87%, 67%); 

    --clr-neutral-400: hsl(255, 11%, 22%);
    --clr-neutral-300: hsl(257, 7%, 63%);
    --clr-neutral-200: hsl(0, 87%, 67%);
    --clr-neutral-100: hsl(0, 0%, 75%);

    --fs-500: 2.5rem;
    --fs-400: 1.375rem; 
    --fs-300: 1.25rem 
    --fs-200: 1.125rem;
    --fs-100: 1rem;

    --ff-primary: "Poppins", sans-serif
  }


  body {
    font-family: var(--ff-primary);
  }
`

export default GlobalStyles;