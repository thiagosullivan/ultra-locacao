import styled from "styled-components";

export const ServicesContainer = styled.section`
    background-color: ${({theme}) => theme.primary};
    padding: 5.62rem 2rem;

    .services__content {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
          

        h2 {
            color: ${({theme}) => theme.secondary};
            text-align: center;
            font-family: 'Kanit', sans-serif;
            font-size: 4rem;
            font-weight: bold;
            margin-bottom: 5.62rem;
        }

        h3 {
            color: ${({theme}) => theme.secondary};
            text-align: center;
            font-size: 1.87rem;
            font-family: 'Kanit', sans-serif;
            font-weight: 400;
            text-transform: uppercase;
        }

        p {
            &:last-child {
                font-family: 'Kanit', sans-serif;
                font-size: 1.25rem;
                font-weight: 300;
                text-align: justify;
                color: ${({theme}) => theme.white};
            }
        }

        .services__options {
            display: flex;
            justify-content: center;
            gap: 25px;
            flex-wrap: wrap;
            margin-bottom: 5.62rem;
        }
    }

`
export const OptionsServices = styled.div`
    border-radius: 10px;
    max-width: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .service__img {
        background-color: ${({theme}) => theme.secondary};
        padding: 1.43rem 4.68rem;
        width: 100%;
    }

    .service__txt {
        background-color: ${({theme}) => theme.white};
        width: 100%;
        padding: 1.25rem;

        h4 {
            font-family: 'Kanit', sans-serif;
            font-size: 1.25rem;
            font-weight: bold;
            text-align: center;
            color: ${({theme}) => theme.primary} !important;
            text-transform: uppercase;
            margin-bottom: 10px;
        }

        p {
            font-family: 'Kanit', sans-serif;
            font-size: 1rem;
            font-weight: 300;
            text-align: center !important;
            line-height: 1.1;
            color: ${({theme}) => theme.primary} !important;
            min-height: 90px;
        }
    }
`