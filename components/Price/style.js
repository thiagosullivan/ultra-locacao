import { darken } from "polished";
import styled from "styled-components";

export const PriceContainer = styled.section`
    background-color: ${({theme}) => theme.primary};
    padding: 5.62rem 1rem;

    .price__content {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;

        h2 {
            color: ${({theme}) => theme.secondary};
            margin-bottom: 5.62rem;
            font-family: 'Kanit', sans-serif;
            font-size: 4rem;
            text-align: center;            
        }

        .price__cards__container {
            display: grid;
            grid-template-columns: repeat( auto-fit, minmax(400px, 1fr));
            justify-items: center;
            gap: 1rem;
        }
    }
`;

export const PriceCard = styled.div`
    border: 1px solid ${({theme}) => theme.secondary};
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        background-color: ${({theme}) => theme.white};
        padding: .8rem 3.4rem;
        border-radius: 30px;
        margin: 1.6rem 0 1.25rem;
        font-family: 'Kanit', sans-serif;
        color: ${({theme}) => theme.third};
    }
    p {
        color: ${({theme}) => theme.secondary};
        font-size: 1.87rem;
        font-family: 'Kanit', sans-serif;
    }

    .price__bottom {
        border-top: 1px solid ${({theme}) => theme.secondary};
        width: 100%;
        padding: 1.25rem 1.8rem 1.8rem;

        p {
            color: ${({theme}) => theme.white};
            font-family: 'Kanit', sans-serif;
            font-size: 1rem;
            margin-bottom: 1rem;
            font-weight: 300;
            min-height: 130px;
        }
        ul {
            padding-left: 0;
            min-height: 130px;

            p {
                min-height: unset;
            }
            
            li {
                color: ${({theme}) => theme.white};
                font-family: 'Kanit', sans-serif;
                font-size: 1rem;
                margin-bottom: 1rem;
                font-weight: 300;
            }
        }
        a {
            background-color: ${({theme}) => theme.secondary};
            margin: 0 auto;
            padding: 0 5.6rem;
            height: 60px;
            max-width: max-content;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: ${({theme}) => theme.third};
            font-family: 'Kanit', sans-serif;
            border: 1px solid transparent;
            transition: all 100ms ease-in;

            &:hover {
                background-color: transparent;
                border: 1px solid ${({theme}) => theme.secondary};
                color: ${({theme}) => theme.secondary};
            }
        }
    }
`;