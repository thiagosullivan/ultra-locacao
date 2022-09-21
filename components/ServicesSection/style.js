import styled from "styled-components";

export const ServicesContainer = styled.section`
    background-color: ${({theme}) => theme.primary};
    padding: 5.62rem 1rem;

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
                text-align: justify;
                color: ${({theme}) => theme.white};
            }
        }

        .services__options {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5.62rem;
        }
    }

`
export const OptionsServices = styled.div`
    border: 1px solid ${({theme}) => theme.secondary};
    max-width: 250px;
    width: 100%;
    padding: 2.8rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 1.87rem;
        margin-top: 1.25rem;
        color: ${({theme}) => theme.secondary};
        text-transform: uppercase;
    }
`