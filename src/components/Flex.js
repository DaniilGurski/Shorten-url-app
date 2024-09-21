import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    gap: ${props => props.$gap};
`

export const FlexAlignCenter = styled(Flex)`
    align-items: center;
`