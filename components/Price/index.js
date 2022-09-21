import React from 'react'
import { PriceCard, PriceContainer } from './style'

function Price() {
  return (
    <PriceContainer>
        <div className='price__content'>
            <h2>Escolha o melhor preço para você</h2>

            <div className='price__cards__container'>
              <PriceCard>
                <h4>Lorem Ipsum</h4>
                <p>R$ 1,00</p>
                <div className='price__bottom'>
                  <ul>
                    <li>Sed ut perspiciatis unde omnis iste.</li>
                    <li>Natus error sit voluptatem.</li>
                    <li>Accusantium Doloremque lauda</li>
                    <li>Totam rem aperiam.</li>
                    <li>Eaque ipsa quae.</li>
                  </ul>

                  <a href="https://whatsapp.com">Nos chame!</a>
                </div>
              </PriceCard>
              <PriceCard>
                <h4>Lorem Ipsum</h4>
                <p>R$ 1,00</p>
                <div className='price__bottom'>
                  <ul>
                    <li>Sed ut perspiciatis unde omnis iste.</li>
                    <li>Natus error sit voluptatem.</li>
                    <li>Accusantium Doloremque lauda</li>
                    <li>Totam rem aperiam.</li>
                    <li>Eaque ipsa quae.</li>
                  </ul>

                  <a href="https://whatsapp.com">Nos chame!</a>
                </div>
              </PriceCard>
              <PriceCard>
                <h4>Lorem Ipsum</h4>
                <p>R$ 1,00</p>
                <div className='price__bottom'>
                  <ul>
                    <li>Sed ut perspiciatis unde omnis iste.</li>
                    <li>Natus error sit voluptatem.</li>
                    <li>Accusantium Doloremque lauda</li>
                    <li>Totam rem aperiam.</li>
                    <li>Eaque ipsa quae.</li>
                  </ul>

                  <a href="https://whatsapp.com">Nos chame!</a>
                </div>
              </PriceCard>
            </div>
        </div>
    </PriceContainer>
  )
}

export default Price