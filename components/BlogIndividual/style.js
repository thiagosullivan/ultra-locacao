import styled from "styled-components";

export const BlogIndividualContainer = styled.section`
    max-width: 1300px;
    width: 100%;
    margin: 3rem auto;
    padding-top: 2rem;
    border-top: 3px solid ${({theme}) => theme.primary};


    h1 {
        color: ${({theme}) => theme.primary};
        font-family: 'Kanit', sans-serif;
        text-align: center;
        font-size: 3rem;
    }

    .post__individual__img {
        max-width: 1300px;
        width: 100%;
        height: 600px;
        position: relative;
        margin: 2rem 0;

        img {
            object-fit: cover;
        }
    }

    p {
        font-family: 'Kanit',sans-serif;
        font-size: 1.4rem;
        line-height: 1.5;
        text-align: justify;
        font-weight: 200;
        margin-bottom: 1rem;

        strong {
            font-weight: 700;
        }
    }
`;