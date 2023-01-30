import { darken } from "polished";
import styled from "styled-components";

export const BlogHomeContainer = styled.section`
    background-color: ${({theme}) => theme.primary};
    padding: 4rem 1rem;

    .blog__home__content {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;

        h2 {
            font-size: 4rem;
            text-align: center;
            font-family: 'Kanit', sans-serif;
            color: ${({theme}) => theme.secondary};
            margin-bottom: 4rem;
        }

        .btn__blog {
            background-color: ${({theme}) => theme.secondary};
            width: 250px;
            height: 65px;
            margin: 1rem auto ;
            transition: all 150ms ease-in;
            
            a {
                font-family: 'Kanit', sans-serif;
                font-size: 1.3rem;
                color: ${({theme}) => theme.primary};
                padding: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                
            }
            
            &:hover {
                background-color: ${({theme}) => darken(0.1, theme.secondary)};
            }
        }

        .blog__home__content__bottom {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`

export const BlogHomeCard = styled.div`
    background-color: ${({theme}) => theme.white};
    display: flex;
    max-width: 900px;
    border-radius: 20px;
    box-shadow: 0 5px 5px rgba(0,0,0,.3);
    margin: 1rem;
    padding: 1rem;

    .blog__home__img {
        border-radius: 20px;
        overflow: hidden;
    }

    .blog__home__txt {
        width: 70%;
        margin-left: 1rem;

        h4 {
            font-family: 'Kanit', sans-serif;
            color: ${({theme}) => theme.primary};
            cursor: pointer;
        }

        p {
            text-align: justify;
            margin-bottom: 1rem;
            font-family: 'Kanit', sans-serif;
            color: rgba(0,0,0,.5);
        }

        a {
            background-color: ${({theme}) => theme.secondary};
            padding: 1rem;
            font-size: 1rem;
            font-weight: 600;
            display: block;
            max-width: 120px;
            margin-left: auto;
            border-radius: 5px;
            box-shadow: 0 2px 2px rgba(0,0,0,.2);
            color: ${({theme}) => theme.primary};
        }
    }

    @media screen and (max-width: 550px){
        flex-direction: column;
        align-items: center;

        .blog__home__txt {
            width: 100%;
            margin: 0 1rem;

            a {
                margin: 0 auto;
            }
        }
    }
`