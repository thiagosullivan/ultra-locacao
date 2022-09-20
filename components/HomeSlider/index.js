import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { HomeSliderContainer } from './style';

function HomeSlider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

  return (
    <HomeSliderContainer>
        <Carousel interval={3000} activeIndex={index} onSelect={handleSelect} controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://raw.githubusercontent.com/thiagosullivan/alemao-futebol/main/assets/home-banner-1.jpeg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://raw.githubusercontent.com/thiagosullivan/alemao-futebol/main/assets/home-banner-2.jpeg"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
    </HomeSliderContainer>
  )
}

export default HomeSlider