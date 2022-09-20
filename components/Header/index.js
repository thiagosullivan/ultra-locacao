import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import LogoHeader from '../../assets/ultra-logo.jpeg';
import { HeaderContainer, HeaderSocialMedia } from './style';

function Header() {
  return (
    <HeaderContainer>
        <div className='header__content'>
            <Link href="/">
                <Image src={LogoHeader} width={165} height={70}/>
            </Link>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/">Equipamentos</Link>
                <Link href="/">Quem Somos</Link>
                <Link href="/">Serviços</Link>
                <Link href="/">Contato</Link>
            </nav>
            <HeaderSocialMedia>
                <a href="/">
                    <FaInstagram />
                </a>
                <a href="/">
                    <FaFacebookF />
                </a>
                <a href="/">
                    <FaWhatsapp />
                </a>
            </HeaderSocialMedia>
        </div>
    </HeaderContainer>
  )
}

export default Header;