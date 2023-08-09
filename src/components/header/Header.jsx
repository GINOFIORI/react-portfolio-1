import React, {useContext} from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-5.png'
import HeaderSocials from './HeaderSocials'
import { LanguageContext } from '../../context/LanguageContext';
import Typewriter from 'typewriter-effect';

const Header = () => {
    const { language } = useContext(LanguageContext);
    return (
        <header>
            <div className="container header__container">
                <h5 className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>Hello I'm</h5>
                <h5 className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>¡Hola! Soy</h5>
                <h1>Gino Fiori</h1>
                <h5 className={`text-light monoscope language-transition ${language === 'en' ? 'language-visible' : ''}`}><Typewriter options={{strings:['Software Developer'],autoStart:true,loop:true}} /></h5>
                <h5 className={`text-light monoscope language-transition ${language === 'es' ? 'language-visible' : ''}`}><Typewriter options={{strings:['Desarrolador de Software'],autoStart:true,loop:true}}/></h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <img src={ME} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header
