import React, {useContext}  from 'react'
import {BsLinkedin, BsGithub, BsInstagram, BsFillChatLeftDotsFill} from 'react-icons/bs'
import {FaFileDownload} from 'react-icons/fa'
import CV_en from '../../assets/Gino_Fiori_CV_en.pdf'
import CV_es from '../../assets/Gino_Fiori_CV_es.pdf'
import { LanguageContext } from '../../context/LanguageContext';
import { Tooltip } from 'react-tooltip'

const HeaderSocials = () => {
    const { language } = useContext(LanguageContext);
    return (
    <>
        <div className="header__socials">
            <a href={language === 'en' ? CV_en : CV_es} download 
                data-tooltip-id="my-tooltip" 
                data-tooltip-place="bottom"
                data-tooltip-content={language === 'en' ? "Download my CV" : "Descarga mi CV"}><FaFileDownload size={30}/></a>
            <a href="#contact"
                data-tooltip-id="my-tooltip" 
                data-tooltip-place="bottom"
                data-tooltip-content={language === 'en' ? "Let's talk! 💬" : "Contáctame 💬"}><BsFillChatLeftDotsFill size={30}/></a>
            <a href="https://www.linkedin.com/in/ginofiori/" target="_blank"><BsLinkedin size={30}/></a>
            <a href="https://github.com/GINOFIORI" target="_blank"><BsGithub size={30}/></a>
            <a href="https://instagram.com/gino_fiori" target="_blank"><BsInstagram size={30}/></a>
        </div>

        <Tooltip id="my-tooltip" />
    </>
    )
}

export default HeaderSocials
