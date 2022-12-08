import styled from "styled-components";

export const EquipsContainer = styled.section`
    padding: 5.62rem 1rem;

    h2 {
        font-size: 4rem;
        font-weight: bold;
        font-family: 'Kanit', sans-serif;
        color: ${({theme}) => theme.third};
        text-align: center;
        margin-bottom: 5.62rem;
    }
    
    h3 {
        font-size: 1.87rem;
        font-weight: 400;
        font-family: 'Kanit', sans-serif;
        color: ${({theme}) => theme.third};
        text-transform: uppercase;
        text-align: center;
    }

    .equips__container {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(400px, 1fr));
        justify-items: center;
        gap: 5rem;
    }
    
`

export const EquipsCards = styled.div`
    max-width: 470px;
    width: 100%;

    h5 {
        font-size: 3.1rem;
        color: ${({theme}) => theme.third};
        font-family: 'Kanit', sans-serif;
        line-height: 1;
        margin: 1.3rem 0;
    }
    p {
        color: ${({theme}) => theme.third};
        font-family: 'Kanit', sans-serif;
        text-align: justify;
    }

    .equips__img {
        border-radius: 20px;
        overflow: hidden;
    }
`