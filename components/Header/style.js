import { darken } from "polished";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 1.87rem 1rem;
    color: ${({theme}) => theme.primary};

    img {
        cursor: pointer;
    }

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

    @media screen and (max-width: 1230px){
        .header__content {
            nav {
                a {
                    font-size: 1.2rem;
                    padding: 0 1rem;
                }
            }
        }
    }

    .header__mobile {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
        display: none;
        justify-content: space-between;
        align-items: center;
        /* position: relative; */

        .header__mobile__content {
            position: absolute;
            top: 0;
            left: 0;
            background-color: ${({theme}) => theme.white};
            width: 100vw;
            height: 100vh;
            z-index: 9;
            display: flex;
            flex-direction: column;
            align-items: center;
            transform: translateX(-1000px);
            transition: all 150ms ease-in;

            .header__mobile__close {
                cursor: pointer;
                position: absolute;
                right: 1rem;
                top: 1rem;

                svg {
                    font-size: 2.5rem;
                }
            }

            nav {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 15%;

                a {
                    font-size: 1.4rem;
                    font-family: 'Kanit', sans-serif;
                    margin-bottom: 1.4rem;

                    &:hover {
                        color: ${({theme}) => theme.secondary};
                    }
                }
            }
        }

        .header__mobile__open {
            display: flex;
            transform: translateX(0px);
        }

        .mobile__hamburguer {
            cursor: pointer;

            svg {
                font-size: 2.5rem;
            }
        }
    }

    @media screen and (max-width: 980px) {
        .header__mobile {
            display: flex;
        }
        .header__content {
            display: none;
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

    @media screen and (max-width: 1230px){
        a {
            font-size: 1.2rem;
            padding: 0 0.4rem;
        }
    }
`;