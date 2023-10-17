import React, {useContext} from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/IMG16.png'
import HeaderSocials from './HeaderSocials'
import { LanguageContext } from '../../context/LanguageContext';
import Typewriter from 'typewriter-effect';

const Header = () => {
    const { language } = useContext(LanguageContext);
    return (
        <header>
            <div className="container header__container">
                <div className="header_content">
                    <h4 className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>Welcome! I'm</h4>
                    <h4 className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>¡Bienvenido! Soy</h4>
                    <h1>Gino Fiori</h1>
                    <h5 className={`text-light monoscope language-transition ${language === 'en' ? 'language-visible' : ''}`}><Typewriter options={{strings:['Software Designer'],autoStart:true,loop:true}} /></h5>
                    <h5 className={`text-light monoscope language-transition ${language === 'es' ? 'language-visible' : ''}`}><Typewriter options={{strings:['Diseñador de Software'],autoStart:true,loop:true}}/></h5>
                    
                    <HeaderSocials/>
                </div>
                <div className="header__me">
                    <div className="me">
                        <img src={ME} alt=""/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
