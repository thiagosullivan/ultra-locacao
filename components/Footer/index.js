import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import FooterLogo from '../../assets/ultra-logo-white.png';
import { FooterContainer } from './style';

function Footer() {
  return (
    <FooterContainer>
        <div className='footer__top'>
            <div className='footer__content'>
                <div className='footer__col1'>
                    <Image src={FooterLogo} alt="Logo footer" width={235} height={95}/>
                    <p>Phasellus mollis turpis at eros blandit, sit amet elementum lacus cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <div className='footer__social'>
                        <a href="https://www.instagram.com/ultraformer_loc/" target="_blank"rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/ultralocacoes" target="_blank"rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5543984151977&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20loca%C3%A7%C3%A3o%20do%20Ultraformer%20III" target="_blank"rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                        <a href="mailto:contato@ultralocacoes.com.br" target="_blank"rel="noopener noreferrer">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
                <div className='footer__col2'>
                    <p>Navegação</p>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">Equipamentos</Link>
                        </li>
                        <li>
                            <Link href="/">Quem Somos</Link>
                        </li>
                        <li>
                            <Link href="/">Serviços</Link>
                        </li>
                    </ul>
                </div>
                <div className='footer__col3'>
                    <p>Contato</p>
                    <div className='footer__contact'>
                        <p>Londrina - PR</p>
                        <a href="mailto:contato@ultralocacoes.com.br">contato@ultralocacoes.com.br</a>
                        <a href="tel:+5543984151977">&#40;43&#41; 98415-1977</a>
                    </div>
                </div>
                <div className='footer__col4'>
                    <form>
                        <input type="text" placeholder='Nome' />
                        <input type="email" placeholder='E-mail' />
                        <input type="tel" placeholder='Telefone' />
                        <textarea placeholder='Mensagem' />
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='footer__bottom'>
            <p>© 2022 <strong>Ultra Locações</strong> - Desenvolvido por <strong>Digital Cloud Marketing</strong>.</p>
        </div>
    </FooterContainer>
  )
}

export default Footer