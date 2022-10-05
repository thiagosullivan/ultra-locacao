import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
 100% { transform: rotate(360deg); }
`

export const LoaderContainer = styled.div`

    svg {
        animation: ${LoadingAnimation} 1s linear infinite;
        color: ${({theme}) => theme.third};
    }
`