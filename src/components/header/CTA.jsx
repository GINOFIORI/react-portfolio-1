import React, {useContext} from 'react'
import CV_en from '../../assets/Gino_Fiori_CV_en.pdf'
import CV_es from '../../assets/Gino_Fiori_CV_es.pdf'
import { LanguageContext } from '../../context/LanguageContext';

const CTA = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className='cta'>
            <a href={language === 'en' ? CV_en : CV_es} download className='btn' style={{height:"auto"}}>
                <span style={{position:'absolute'}} className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>Download CV</span>
                <span className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>Descargar CV</span>
            </a>
            <a href="#contact" className='btn'>
                <span style={{position:'absolute'}} className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>Let's Ttalk</span>
                <span className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>Contactame</span>
            </a>
        </div>
    )
}

export default CTA
