import styled from "styled-components";

export const TestimonialContainer = styled.section`
    padding: 5.62rem 1rem;

    h2 {
        font-size: 4rem;
        font-weight: bold;
        font-family: 'Kanit', sans-serif;
        color: ${({theme}) => theme.third};
        text-align: center;
        margin-bottom: 5.62rem;
    }

    .testimonial__slider {
        max-width: 950px;
        width: 100%;
        margin: 0 auto;
        

        p {
            font-size: 1.5rem;
            color: ${({theme}) => theme.third};
            font-family: 'Kanit', sans-serif;
        }

        .autor__testimonial {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2rem;

            img {
                border-radius: 30px;
                margin-bottom: 1rem;
            }

            p {
                font-family: 'Kanit', sans-serif;
                font-weight: 300;
                font-size: 1rem;

                span {
                    font-weight: 700;
                }
            }
        }

        .carousel-control-prev {
            left: -120px;
        }
        .carousel-control-next {
            right: -120px;
        }
        .carousel-indicators {
            margin-bottom: -2rem;
        }
    }
`