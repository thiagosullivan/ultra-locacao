import Image from 'next/image';
import React from 'react';
import ImageOne from '../../assets/about-img-1.png';
import ImageTwo from '../../assets/about-img-2.png';
import { AboutUsContainer } from './style';

function AboutUs() {
  return (
    <AboutUsContainer>
        <div className='about__content' id="about">
            {/* <h2>O que é o<br />
            <span>Ultraformer III</span></h2> */}
            {/* <div className='about__div1'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div> */}
            {/* <div className='about__div2'>
                <div className='about__img1'>
                    <Image src={ImageOne} />
                </div>
                <div className='about__img2'>
                    <Image src={ImageTwo} />
                </div>
            </div> */}            
            <div className='about__div3'>
                <h2>O que é o Ultraformer III</h2>
                <p>Ele é a solução que vc procura para tratar a flacidez e gordura localizada do seu paciente.Ultraformer III combina o ultrassom micro e macrofocado, atuando nas partes mais profundas e superficiais da pele, promovendo um efeito lifting sem cortes ou anestesia. O aparelho pode ser usado no rosto, pescoço, colo, braços, abdômen, glúteos, culote, interno de coxas e até mesmo naquela gordurinha do sutiã.Ele atua através de ondas de calor, que provocam pontos de coagulação na profundidade e local definidos pelo profissional. Essa energia térmica estimula a produção de colágeno nos níveis mais profundos da pele, reduzindo a flacidez e atenuando rugas e linhas finas.Os transdutores macrofocados são indicados para o corpo, reduzindo a flacidez e até 20% da gordura localizada. Os transdutores microfocados são utilizados para procedimentos na face, promovendo um efeito lifting, melhorando a aparência de linhas e rugas.</p>
            </div>
        </div>

    </AboutUsContainer>
  )
}

export default AboutUs