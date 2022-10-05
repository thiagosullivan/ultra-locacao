import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';

import toast from 'react-hot-toast';
import MaskedInput from 'react-input-mask';
import { sendContactMail } from '../../services/sendMail';

import { FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import FooterLogo from '../../assets/ultra-logo-white.png';
import { FooterContainer } from './style';
import theme from '../../styles/theme';
import Loader from '../Loader';
import { useEffect } from 'react';

function Footer() {
    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ text, setText ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ sent, setSent ] = useState(false);

    console.log(nome, email, phone, text)
    console.log(sent, 'ANTES')

    async function handleSubmit(event){
        event.preventDefault();

        if(!nome || !email || !phone || !text){
            toast('Preencha todos os campos para enviar sua mensagem!', {
            style: {
                background: theme.error,
                color: theme.white
            }
            });

            return;
        }

        try {
            setLoading(true)
            await sendContactMail(nome, email, phone, text);
            setNome('');
            setEmail('');
            setPhone('');
            setText('');
            toast('Formulário enviado com sucesso!', {
                style: {
                    background: theme.success,
                    color: theme.white
                }
            });
        } catch {
            toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
                style: {
                    background: theme.error,
                    color: theme.white
                }
            });
        } finally {
            // router.push('/obrigado')
            setLoading(false)
            setSent(true)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setSent(false)
            console.log(sent, 'DEPOIS')
        }, 3000);
    }, [sent])

  return (
    <FooterContainer>
        <div className='footer__top'>
            <div className='footer__content'>
                <div className='footer__col1'>
                    <Image src={FooterLogo} alt="Logo footer" width={235} height={95}/>
                    <p>Ultraformer III é a Tecnologia Dermatológica mais Desejada no Mercado. Faça sua Cotação. Ultrassom para Tratamento de Contorno Corporal, Flacidez e Gordura Localizada. Saiba Mais. Serviços: Ultrassom Microfocado, Ultrassom Macrofocado, Eficácia contra flacidez.</p>
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
                    { loading ? <p>Carregando</p> : ''}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Nome'
                            onChange={({target}) => setNome(target.value)}
                            value={nome}
                        />
                        <input
                            type="email"
                            placeholder='E-mail'
                            onChange={({target}) => setEmail(target.value)}
                            value={email}
                        />
                        <MaskedInput
                            mask="(99) 99999-9999"
                            type='tel'
                            placeholder='Telefone'
                            onChange={({target}) => setPhone(target.value)}
                            value={phone}
                        />
                        <textarea
                            placeholder='Mensagem'
                            onChange={({target}) => setText(target.value)}
                            value={text}
                        />
                        <button type="submit">
                            { loading || sent ? '' : <span>Enviar</span>}
                            { sent ? <span>Enviado!</span> : '' }
                            { loading ? <Loader /> : ''}
                        </button>
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