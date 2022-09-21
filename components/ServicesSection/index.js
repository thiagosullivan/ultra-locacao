import Image from 'next/image';
import React from 'react';
import UltraIcon from '../../assets/icon-ultra.png';
import { OptionsServices, ServicesContainer } from './style';

function Services() {
  return (
    <ServicesContainer>
        <div className='services__content'>
            <h3>Serviços</h3>
            <h2>We Provide the Perfect Solution</h2>

            <div className='services__options'>
                <OptionsServices>
                    <Image src={UltraIcon} alt="Icon" width={100} height={100} />
                    <p>Lorem ipsum</p>
                </OptionsServices>
                <OptionsServices>
                    <Image src={UltraIcon} alt="Icon" width={100} height={100} />
                    <p>Lorem ipsum</p>
                </OptionsServices>
                <OptionsServices>
                    <Image src={UltraIcon} alt="Icon" width={100} height={100} />
                    <p>Lorem ipsum</p>
                </OptionsServices>
                <OptionsServices>
                    <Image src={UltraIcon} alt="Icon" width={100} height={100} />
                    <p>Lorem ipsum</p>
                </OptionsServices>
            </div>
            <p>Etiam ut diam vestibulum, sagittis lorem id, volutpat quam. Etiam malesuada vel arcu et gravida. Etiam sed laoreet lorem, ut elementum ante. Sed scelerisque posuere urna at iaculis. Ut scelerisque enim sit amet dolor pulvinar, id faucibus leo ultricies. Duis consequat eu diam nec gravida. Etiam finibus blandit diam, ut viverra libero commodo ac. Mauris non libero id elit dictum ultricies at venenatis dolor. In rhoncus mauris nisi, nec imperdiet lorem lacinia in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec condimentum erat eu arcu euismod, et sodales mi interdum.</p>
        </div>
    </ServicesContainer>
  )
}

export default Services