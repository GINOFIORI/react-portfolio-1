import React, {useContext} from 'react'
import './portfolio.css'
import { LanguageContext } from '../../context/LanguageContext';
import IMG1 from '../../assets/ITCRM_4.png'
import IMG2 from '../../assets/EJEMPLO3.jpg'
import IMG3 from '../../assets/EJEMPLO1.png'

const Portfolio = () => {
    const { language } = useContext(LanguageContext);
    return (
        <section id='portfolio'>
            
            <h5 className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>My Recent Work</h5>
            <h5 className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>Trabajos Recientes</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <span className={`portfolio__notification language-transition ${language === 'en' ? 'language-visible' : ''}`}>Available soon!</span>
                    <span className={`portfolio__notification language-transition ${language === 'es' ? 'language-visible' : ''}`}>Proximamente!</span>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>IT CRM</h3>
                    <h5>Software de Gestión de Proyectos</h5>
                    <div className="portfolio__item-cta">
                        <a href="https://crm.neosistemassrl.com" className="btn btn-primary btn-disabled" target="_blank">Demo</a>
                    </div>
                    <p className="small">User: demo@demo.com</p>
                    <p className="small">Pass: demo</p>
                </article>
                <article className="portfolio__item">
                    <span className={`portfolio__notification language-transition ${language === 'en' ? 'language-visible' : ''}`}>Available soon!</span>
                    <span className={`portfolio__notification language-transition ${language === 'es' ? 'language-visible' : ''}`}>Proximamente!</span>
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt=""/>
                    </div>
                    <h3>Business Intelligence</h3>
                    <h5>BI Dashboards</h5>
                    <div className="portfolio__item-cta">
                        <a className="btn btn-disabled" target="">GitHub</a>
                        <a className="btn btn-primary btn-disabled" target="">Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <span className={`portfolio__notification language-transition ${language === 'en' ? 'language-visible' : ''}`}>Available soon!</span>
                    <span className={`portfolio__notification language-transition ${language === 'es' ? 'language-visible' : ''}`}>Proximamente!</span>
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt=""/>
                    </div>
                    <h3>FindMySpot</h3>
                    <h5>App to find nearest parking</h5>
                    <div className="portfolio__item-cta">
                        <a className="btn btn-disabled" target="">GitHub</a>
                        <a className="btn btn-primary btn-disabled" target="">Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio
