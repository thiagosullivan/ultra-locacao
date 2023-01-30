import Image from 'next/image';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AuthorOne from '../../assets/author-1.png'
import { TestimonialContainer } from './style';

function Testimonial({depos}) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

  return (
    <TestimonialContainer>
        <h2>Depoimentos</h2>
        <div className='testimonial__slider'>
            <Carousel interval={3000} activeIndex={index} onSelect={handleSelect} controls={true} variant="dark">
                {depos.map((depo, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <p>&ldquo;{depo.depoText}&ldquo;</p>
                            <div className='autor__testimonial'>
                                <Image src={depo.depoAvatar.url} width={60} height={60} alt={depo.depoName} />
                                <p>{depo.depoName}, <span>{depo.depoRole}</span></p>
                            </div>
                        </Carousel.Item>
                    )
                })}
                {/* <Carousel.Item>
                    <p>&ldquo;{depos.depoText}&ldquo;</p>
                    <div className='autor__testimonial'>
                        <Image src="https://i.picsum.photos/id/182/60/60.jpg?hmac=PC6Ff1xqU7q_DqJyOofEEiG3mwFGMF5Lf6RfMUXdiJI" width={60} height={60} alt="Graham Cracker" />
                        <p>Graham Cracker, <span>Designer at Colorlib</span></p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <p>&ldquo;Vivamus aliquet felis eu diam ultricies congue. Morbi porta lorem nec consectetur porta. Sed quis dui elit. Pellentesque habitant morbi tristique senectus et netus et male Sed vestibulum orci&ldquo;</p>
                    <div className='autor__testimonial'>
                        <Image src="https://i.picsum.photos/id/182/60/60.jpg?hmac=PC6Ff1xqU7q_DqJyOofEEiG3mwFGMF5Lf6RfMUXdiJI" width={60} height={60} alt="Graham Cracker" />
                        <p>Graham Cracker, <span>Designer at Colorlib</span></p>
                    </div>
                </Carousel.Item> */}
            </Carousel>
        </div>
    </TestimonialContainer>
  )
}

export default Testimonial