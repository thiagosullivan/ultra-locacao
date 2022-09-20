import { darken } from "polished";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 1.87rem 1rem;
    color: ${({theme}) => theme.primary};

    .header__content {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        nav {
            a {
                font-family: 'Kanit', sans-serif;
                font-size: 1.5rem;
                padding: 0 1.56rem;
                transition: all 100ms ease-in;

                &:hover {
                    color: ${({theme}) => theme.secondary};
                }
            }
        }
    }
`;

export const HeaderSocialMedia = styled.div`
    a {
        padding: 0 0.62rem;
        font-size: 1.8rem;
        transition: all 100ms ease-in;

        &:hover {
            color: ${({theme}) => theme.secondary};
        }
    }
`;