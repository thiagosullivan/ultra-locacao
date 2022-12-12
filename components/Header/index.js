import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useScrollBlock from '../../hook/pageScroll';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import LogoHeader from '../../assets/ultra-logo.png';
import { HeaderContainer, HeaderSocialMedia } from './style';
import { BiMenu, BiX } from 'react-icons/bi';

function Header() {
    const [blockScroll, allowScroll] = useScrollBlock();
    const [ openMenu, setOpenMenu ] = useState(false);

    if(openMenu == true){
        blockScroll();
    } else {
        allowScroll();
    }

  return (
    <HeaderContainer>
        <div className='header__content'>
            <Link href="/">
                <Image src={LogoHeader} width={165} height={70} alt="Logo"/>
            </Link>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/#equipamentos">Equipamentos</Link>
                <Link href="/#sobre">Quem Somos</Link>
                <Link href="/#servicos">Serviços</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/#contato">Contato</Link>
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
        <div className='header__mobile'>
            <div>
                <Link href="/">
                    <Image src={LogoHeader} width={135} height={40} alt="Logo"/>
                </Link>
            </div>
            <div className='mobile__hamburguer' onClick={() => setOpenMenu(true)}>
                <BiMenu />
            </div>
            <div className={`header__mobile__content ${ openMenu ? 'header__mobile__open' : '' }`}>
                <div className='header__mobile__close' onClick={() => setOpenMenu(!openMenu)}>
                    <BiX />
                </div>
                <nav>
                    <li onClick={() => setOpenMenu(!openMenu)}>
                        <Link href="/">Home</Link>
                    </li>
                    <li onClick={() => setOpenMenu(!openMenu)}>
                        <Link href="/#equipamentos">Equipamentos</Link>
                    </li>
                    <li onClick={() => setOpenMenu(!openMenu)}>
                        <Link href="/#sobre">Quem Somos</Link>
                    </li>
                    <li onClick={() => setOpenMenu(!openMenu)}>
                        <Link href="/#servicos">Serviços</Link>
                    </li>
                    <li onClick={() => setOpenMenu(!openMenu)}>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li onClick={() => setOpenMenu(!openMenu)}>
                        <Link href="/#contato">Contato</Link>
                    </li>
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
        </div>
    </HeaderContainer>
  )
}

export default Header;