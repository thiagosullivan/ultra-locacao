import React from 'react'
import { PriceCard, PriceContainer } from './style'

function Price() {
  return (
    <PriceContainer>
        <div className='price__content'>
            <h2>Valores para Locação</h2>

            <div className='price__cards__container'>
              <PriceCard>
                <h4>Aluguel</h4>
                <p>R$ 400,00</p>
                <div className='price__bottom'>
                  <p>O valor de aluguel é referente ao período de 4 horas e já incluso entrega e retirada do equipamento em sua clínica.</p>

                  <a href="https://api.whatsapp.com/send?phone=5543984151977&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20loca%C3%A7%C3%A3o%20do%20Ultraformer%20III">Reservar Data</a>
                </div>
              </PriceCard>
              <PriceCard>
                <h4>Disparos</h4>
                <p>A partir de R$ 1,80</p>
                <div className='price__bottom'>
                  <ul>
                    <p>O valor por disparo é de acordo com a ponteira utilizada e segue a seguinte tabela:</p>
                    <li>Ponteiras 1,5 I 2 I 3 I 4,5, R$ 2,50 por disparo</li>
                    <li>Ponteiras 6 I 9 I 13 R$ 1,80 por disparo</li>
                  </ul>

                  <a href="https://api.whatsapp.com/send?phone=5543984151977&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20loca%C3%A7%C3%A3o%20do%20Ultraformer%20III">Reservar Data</a>
                </div>
              </PriceCard>
              <PriceCard>
                <h4>Aluguel Free</h4>
                <p>Grátis*</p>
                <div className='price__bottom'>
                  <p>O Aluguel do período será gratuito se forem utilizados 1.000 &#40;um mil&#41; disparos</p>

                  <a href="https://api.whatsapp.com/send?phone=5543984151977&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20loca%C3%A7%C3%A3o%20do%20Ultraformer%20III">Reservar Data</a>
                </div>
              </PriceCard>
            </div>
        </div>
    </PriceContainer>
  )
}

export default Price