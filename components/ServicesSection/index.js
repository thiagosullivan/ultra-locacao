import Image from 'next/image';
import React from 'react';
import iconOne from '../../assets/icon-1.png';
import iconTwo from '../../assets/icon-2.png';
import iconThree from '../../assets/icon-3.png';
import iconFour from '../../assets/icon-4.png';
import { OptionsServices, ServicesContainer } from './style';

function Services() {
  return (
    <ServicesContainer>
        <div className='services__content'>
            <h3>Serviços</h3>
            <h2>Diferenciais na locação do Ultraformer III</h2>

            <div className='services__options'>
                <OptionsServices>
                    <div className='service__img'>
                        <Image src={iconOne} alt="Icon" width={100} height={100} />
                    </div>
                    <div className='service__txt'>
                        <h4>Seguro e Eficaz</h4>
                        <p>Um dos mais modernos tratamentos.</p>
                    </div>
                </OptionsServices>
                <OptionsServices>
                    <div className='service__img'>
                        <Image src={iconTwo} alt="Icon" width={100} height={100} />
                    </div>
                    <div className='service__txt'>
                        <h4>Número de Sessões</h4>
                        <p>Varia de 1 a 3 sessões, dependendo do planejamento individualizado</p>
                    </div>
                </OptionsServices>
                <OptionsServices>
                    <div className='service__img'>
                        <Image src={iconThree} alt="Icon" width={100} height={100} />
                    </div>
                    <div className='service__txt'>
                        <h4>Tempo da Sessão</h4>
                        <p>O tempo médio de cada sessão é de aproximadamente 80 Minutos.</p>
                    </div>
                </OptionsServices>
                <OptionsServices>
                    <div className='service__img'>
                        <Image src={iconFour} alt="Icon" width={100} height={100} />
                    </div>
                    <div className='service__txt'>
                        <h4>Ganhos</h4>
                        <p>De 5 a 10 mil em 1 dia de trabalho</p>
                    </div>
                </OptionsServices>
            </div>
            <p>🤑 Aumente os ganhos de sua clínica, gerando ainda mais satisfação para suas clientes. Fale conosco e agende uma data para atendimento com o Ultraformer III. 🤔 Ainda não sabe como realizar procedimentos com o Ultraformer III? Não se preocupe, nós treinaremos você! Chame agora em nosso WhatsApp e tire todas as dúvidas. Para facilitar, o link está na bio. 😉</p>
        </div>
    </ServicesContainer>
  )
}

export default Services