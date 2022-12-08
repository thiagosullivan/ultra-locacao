import Image from 'next/image';
import React from 'react';
import EquipOne from '../../assets/equips-1-1.jpeg';
import EquipTwo from '../../assets/equips-2.png';
import { EquipsCards, EquipsContainer } from './style';

function Equips() {
  return (
    <EquipsContainer>
        <h3 id="equipamentos">Equipamentos</h3>
        <h2>Produtos com os quais trabalhamos</h2>

        <div className='equips__container'>
          <EquipsCards>
            <div className='equips__img'>
              <Image src={EquipOne} width={470} height={550} alt="Equipamento" />
            </div>
            <h5>Ultraformer III</h5>
            <p>O Ultraformer III é a última palavra para tratamento da flacidez, contorno corporal e ancoragem muscular no mundo.
            A tecnologia combina o ultrassom micro e macrofocado que podem ser ajustados de acordo com o objetivo e área do tratamento. Os transdutores microfocados são utilizados para procedimentos na face, promovendo um efeito lifting, melhorando a aparência de linhas e rugas. Os transdutores macrofocados são indicados para o corpo, reduzindo a flacidez e a gordura localizada no abdômen e na região interna das coxas.</p>
          </EquipsCards>
          {/* <EquipsCards>
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
          </EquipsCards> */}
        </div>
    </EquipsContainer>
  )
}

export default Equips