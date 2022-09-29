import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import LogoHeader from '../../assets/ultra-logo.png';
import { HeaderContainer, HeaderSocialMedia } from './style';

function Header() {
  return (
    <HeaderContainer>
        <div className='header__content'>
            <Link href="/">
                <Image src={LogoHeader} width={165} height={70} alt="Logo"/>
            </Link>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/">Equipamentos</Link>
                <Link href="/#about">Quem Somos</Link>
                <Link href="/">Serviços</Link>
                <Link href="/">Contato</Link>
            </nav>
            <HeaderSocialMedia>
                <a href="https://www.instagram.com/ultraformer_loc/" target="_blank"rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com/ultralocacoes" target="_blank"rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5543984151977&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20loca%C3%A7%C3%A3o%20do%20Ultraformer%20III" target="_blank"rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
            </HeaderSocialMedia>
        </div>
    </HeaderContainer>
  )
}

export default Header;