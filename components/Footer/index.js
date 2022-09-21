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
                        <a href="https://instagram.com" target="_blank"rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://facebook.com" target="_blank"rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://whatsapp.com" target="_blank"rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                        <a href="https://whatsapp.com" target="_blank"rel="noopener noreferrer">
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
                        <p>87/A, Green lane, CA 6732 <br />
                        Real State</p>
                        <a href="www.google.com.br">contato@ultralocacoes.com.br</a>
                        <a href="www.google.com.br">+43 99999-9999</a>
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