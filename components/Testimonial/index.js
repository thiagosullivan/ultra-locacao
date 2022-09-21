import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AuthorOne from '../../assets/author-1.png'
import { TestimonialContainer } from './style';

function Testimonial() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

  return (
    <TestimonialContainer>
        <h2>Depoimentos</h2>
        <div className='testimonial__slider'>
            <Carousel interval={3000} activeIndex={index} onSelect={handleSelect} controls={true} variant="dark">
                <Carousel.Item>
                    <p>"Vivamus aliquet felis eu diam ultricies congue. Morbi porta lorem nec consectetur porta. Sed quis dui elit. Pellentesque habitant morbi tristique senectus et netus et male Sed vestibulum orci"</p>
                    <div className='autor__testimonial'>
                        <img src="https://i.picsum.photos/id/182/60/60.jpg?hmac=PC6Ff1xqU7q_DqJyOofEEiG3mwFGMF5Lf6RfMUXdiJI" />
                        <p>Graham Cracker, <span>Designer at Colorlib</span></p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <p>"Vivamus aliquet felis eu diam ultricies congue. Morbi porta lorem nec consectetur porta. Sed quis dui elit. Pellentesque habitant morbi tristique senectus et netus et male Sed vestibulum orci"</p>
                    <div className='autor__testimonial'>
                        <img src="https://i.picsum.photos/id/182/60/60.jpg?hmac=PC6Ff1xqU7q_DqJyOofEEiG3mwFGMF5Lf6RfMUXdiJI" />
                        <p>Graham Cracker, <span>Designer at Colorlib</span></p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    </TestimonialContainer>
  )
}

export default Testimonial