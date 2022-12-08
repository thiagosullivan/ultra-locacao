import styled from "styled-components";

export const BlogPageContainer = styled.section`
    max-width: 1300px;
    width: 100%;
    margin: 0 auto 5rem;

    h1 {
        font-family: 'Kanit', sans-serif;
        font-size: 4rem;
        line-height: 1;
        color: ${({theme}) => theme.primary};
        text-align: center;
        margin: 2rem 0;
    }
    
    .blog__page__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        

    }
`;

export const BlogPageCard = styled.div`
    background-color: ${({theme}) => theme.white};
    display: flex;
    max-width: 900px;
    border-radius: 20px;
    box-shadow: 0 3px 10px rgba(0,0,0,.3);
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
            font-size: 1.2rem;
            font-weight: 600;
            display: block;
            max-width: 120px;
            margin-left: auto;
            border-radius: 5px;
            box-shadow: 0 2px 2px rgba(0,0,0,.2);
            color: ${({theme}) => theme.primary};
        }
    }
`;