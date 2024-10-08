import { styled } from "styled-components";

export const containerPaddingInline = 2;
const containerMaxWidth = 110; 
export const breakoutMaxWidth = 120;
const breakoutSize = `${(breakoutMaxWidth - containerMaxWidth) / 2}`;

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns:
    [full-width-start] minmax(${containerPaddingInline}rem, 1fr)
    [breakout-start] minmax(0, ${breakoutSize}ch)
    [content-start] min(100% - (${containerPaddingInline}rem * 2), ${breakoutMaxWidth}ch)
    [content-end] minmax(0, ${breakoutSize}ch)
    [breakout-end] minmax(${containerPaddingInline}rem, 1fr)
    [full-width-end];
    row-gap: ${({ $gap }) => $gap};
    
    > * {
        grid-column: content;
    }
`

export default StyledContainer;