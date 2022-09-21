import Image from 'next/image';
import React from 'react';
import ImageOne from '../../assets/about-img-1.jpg';
import ImageTwo from '../../assets/about-img-2.jpg';
import { AboutUsContainer } from './style';

function AboutUs() {
  return (
    <AboutUsContainer>
        <div className='about__content' id="about">
            <h2>Allow Planet <br />
            <span>the Future</span></h2>
            <div className='about__div1'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='about__div2'>
                <div className='about__img1'>
                    <Image src={ImageOne} />
                </div>
                <div className='about__img2'>
                    <Image src={ImageTwo} />
                </div>
            </div>
            <div className='about__div3'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>

    </AboutUsContainer>
  )
}

export default AboutUs