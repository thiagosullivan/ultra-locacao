import { darken } from "polished";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    

    .footer__top {
        background-color: ${({theme}) => theme.primary};
        padding: 3.75rem 1rem;

        .footer__content {
            max-width: 1300px;
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;

            .footer__col1 {
                max-width: 290px;
                width: 100%;

                p {
                    font-family: 'Kanit', sans-serif;
                    font-size: 0.87rem;
                    font-weight: 300;
                    text-align: left;
                    color: ${({theme}) => theme.white};
                    margin: 1rem 0;                  
                }

                .footer__social {
                    display: flex;
                    justify-content: flex-start;
                    width: 100%;

                    a {
                        font-size: 2.2rem;
                        color: ${({theme}) => theme.white};
                        margin-right: 2rem;
                        transition: all 100ms ease-in;

                        &:hover {
                            color: ${({theme}) => theme.secondary};
                        }
                    }
                }
            }
            .footer__col2 {
                p {
                    font-size: 1.5rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    color: ${({theme}) => theme.secondary};
                    font-family: 'Kanit', sans-serif;
                    margin-bottom: 1.87rem;
                }

                ul {
                    padding-left: 0.5rem;

                    li {                        
                        margin-bottom: 1rem;
                        
                        a {
                            font-size: 1.25rem;
                            font-weight: 300;
                            color: ${({theme}) => theme.white};
                            text-transform: unset;
                            font-family: 'Kanit', sans-serif;
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                    
                }
            }
            .footer__col3 {
                p {
                    font-size: 1.5rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    color: ${({theme}) => theme.secondary};
                    font-family: 'Kanit', sans-serif;
                    margin-bottom: 1.87rem;
                }

                .footer__contact {
                    display: flex;
                    flex-direction: column;
                    padding-left: 0.5rem;
                    
                    p {
                        font-size: 1.25rem;
                        font-weight: 300;
                        color: ${({theme}) => theme.white};
                        text-transform: unset;
                        font-family: 'Kanit', sans-serif;
                        margin-bottom: 1rem;
                    }

                    a {
                        font-size: 1.25rem;
                        font-weight: 300;
                        color: ${({theme}) => theme.white};
                        font-family: 'Kanit', sans-serif;
                        margin-bottom: 1rem;
                        transition: all 100ms ease-in;

                        &:last-child {
                            margin-bottom: 0;
                            font-size: 2rem;
                        }

                        &:hover {
                            color: ${({theme}) => theme.secondary};
                        }
                    }
                }
            }
            .footer__col4 {
                max-width: 380px;
                width: 100%;

                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;

                    input {
                        width: 100%;
                        border: 1px solid ${({theme}) => theme.secondary};
                        background-color: transparent;
                        height: 40px;
                        outline: none;
                        color: ${({theme}) => theme.secondary};
                        padding: 0.5rem;
                        margin-bottom: 0.62rem;

                        &::placeholder {
                            color: ${({theme}) => theme.secondary};
                            padding: 0.5rem;
                        }

                        &:focus {
                            box-shadow: 0px 0px 10px #B8E815;
                        }
                    }
                    textarea {
                        width: 100%;
                        resize: none;
                        border: 1px solid ${({theme}) => theme.secondary};
                        background-color: transparent;
                        height: 40px;
                        outline: none;
                        color: ${({theme}) => theme.secondary};
                        padding: 0.5rem;
                        min-height: 150px;
                        margin-bottom: 0.62rem;

                        &::placeholder {
                            color: ${({theme}) => theme.secondary};
                            padding: 0.5rem;
                        }
                        &:focus {
                            box-shadow: 0px 0px 10px #B8E815;
                        }
                    }
                    button {
                        width: 100%;
                        border: 1px solid ${({theme}) => theme.secondary};
                        background-color: ${({theme}) => theme.secondary};
                        color: ${({theme}) => theme.third};
                        font-size: 1.25rem;
                        text-transform: uppercase;
                        padding: 0.96rem 0;
                        transition: all 100ms ease-in;

                        &:hover {
                            background-color: transparent;
                            color: ${({theme}) => theme.secondary};
                        }
                    }
                }
            }
        }
    }

    .footer__bottom {
        background-color: ${({theme}) => theme.third};
        padding:1rem;

        p {
            color: ${({theme}) => theme.white};
            text-align: center;
        }
    }

`;