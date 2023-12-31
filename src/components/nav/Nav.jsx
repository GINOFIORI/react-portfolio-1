import React, { useContext } from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {BsPersonBoundingBox, BsChatLeftDots, BsCodeSlash} from 'react-icons/bs'
import {MdWorkOutline} from 'react-icons/md'
import { FlagIcon } from "react-flag-kit";
import { LanguageContext } from '../../context/LanguageContext';
import LOGO from '../../assets/logo-site.png'

import {useState} from 'react'

const Nav = () => {
    const[activeNav, setActiveNav] = useState('#');
    const { language, setLanguage } = useContext(LanguageContext);

    const handleNavClick = (navId) => {
        setActiveNav(navId);
    }

    const toggleLanguage = () => {
        language==='es'?setLanguage('en'):setLanguage('es');
        console.log(language)
    };

    return (
        <nav>
            <div className="nav__img">
                <img src={LOGO}></img>
            </div>
            <div className="nav__content">
                <a href="#" onClick={() => handleNavClick('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt2/></a>
                <a href="#about" onClick={() => handleNavClick('#about')} className={activeNav==='#about'?'active':''}><BsPersonBoundingBox/></a>
                <a href="#experience" onClick={() => handleNavClick('#experience')} className={activeNav==='#experience'?'active':''}><MdWorkOutline/></a>
                <a href="#portfolio" onClick={() => handleNavClick('#portfolio')} className={activeNav==='#portfolio'?'active':''}><BsCodeSlash/></a>
                <a href="#contact" onClick={() => handleNavClick('#contact')} className={activeNav==='#contact'?'active':''}><BsChatLeftDots/></a>
                <a href="#language" onClick={() => toggleLanguage()}>
                    {language==='en' && <FlagIcon code="US" size={12} />}
                    {language==='es' && <FlagIcon code="AR" size={12} />}
                </a>
            </div>
        </nav>
    )
}

export default Nav
