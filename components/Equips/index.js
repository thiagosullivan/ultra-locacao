import Image from 'next/image';
import React from 'react';
import EquipOne from '../../assets/equips-1.png';
import EquipTwo from '../../assets/equips-2.png';
import { EquipsCards, EquipsContainer } from './style';

function Equips() {
  return (
    <EquipsContainer>
        <h3>Equipamentos</h3>
        <h2>Duis ultricies mattis justo.</h2>

        <div className='equips__container'>
          <EquipsCards>
            <Image src={EquipOne} width={470} height={550} alt="Equipamento" />
            <h5>Sed mattis quis purus pellentesque</h5>
            <p>Phasellus mollis turpis at eros blandit, sit amet elementum lacus cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut rutrum tellus gravida, cursus magna ut, gravida erat. Aenean interdum lacinia dui.</p>
          </EquipsCards>
          <EquipsCards>
            <Image src={EquipTwo} width={470} height={550} alt="Equipamento" />
            <h5>In maximus ligula</h5>
            <p>Phasellus mollis turpis at eros blandit, sit amet elementum lacus cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut rutrum tellus gravida, cursus magna ut, gravida erat. Aenean interdum lacinia dui, non malesuada diam condimentum ac. Pellentesque mattis tortor sed nisl auctor blandit. Integer vitae tincidunt nisi. Sed porttitor diam in pretium imperdiet.</p>
          </EquipsCards>
          <EquipsCards>
            <Image src={EquipTwo} width={470} height={550} alt="Equipamento" />
            <h5>In maximus ligula</h5>
            <p>Phasellus mollis turpis at eros blandit, sit amet elementum lacus cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut rutrum tellus gravida, cursus magna ut, gravida erat. Aenean interdum lacinia dui, non malesuada diam condimentum ac. Pellentesque mattis tortor sed nisl auctor blandit. Integer vitae tincidunt nisi. Sed porttitor diam in pretium imperdiet.</p>
          </EquipsCards>
          <EquipsCards>
            <Image src={EquipOne} width={470} height={550} alt="Equipamento" />
            <h5>Sed mattis quis purus pellentesque</h5>
            <p>Phasellus mollis turpis at eros blandit, sit amet elementum lacus cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut rutrum tellus gravida, cursus magna ut, gravida erat. Aenean interdum lacinia dui.</p>
          </EquipsCards>
        </div>
    </EquipsContainer>
  )
}

export default Equips