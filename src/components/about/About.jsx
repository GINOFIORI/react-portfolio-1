import React, {useContext} from 'react'
import './about.css'
import ME from '../../assets/IMG5.png'
import { LanguageContext } from '../../context/LanguageContext';
import {IoIosSchool} from 'react-icons/io'
import {BsCodeSlash} from 'react-icons/bs'
import {FaAward} from 'react-icons/fa'

const About = () => {
    const { language } = useContext(LanguageContext);
    return (
        <section id='about'>
            <h5 className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>Get to Know</h5>
            <h5 className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>...un poco</h5>
            <h2>
                <span style={{position:"absolute"}} className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>About Me</span>
                <span className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>Sobre mi</span>
            </h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME}/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <IoIosSchool className='about__icon'/>
                            <h5 className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>College Degree</h5>
                            <h5 className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>Título Universitario</h5>
                            {language === 'en' && <small className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>System Analyst | UAI</small>}
                            {language === 'es' && <small className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>Analista de Sistemas | UAI</small>}
                        </article>

                        <article className="about__card">
                            <BsCodeSlash className='about__icon'/>
                            <h5 className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>Experience</h5>
                            <h5 className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>Experiencia</h5>
                            {language === 'en' && <small className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>10+ years of software design & dev</small>}
                            {language === 'es' && <small className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>10+ años dedicado al desarrollo y diseño de software</small>}
                        </article>

                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5 className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>Latest Studies</h5>
                            <h5 className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>Estudios más recientes</h5>
                            {language === 'en' && <small className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>PSM I training (scrum.org)</small>}
                            {language === 'es' && <small className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>Training para certificación PSM I (scrum.org)</small>}
                        </article>
                    </div>

                    {language === 'en' &&
                    <>
                    <p>
                    Introducing a standout professional in the field of computer science and software development. As a versatile candidate, I excel in both project management and software development roles. My results-driven approach and ability to tackle complex challenges have allowed me to develop innovative solutions that optimize business processes.
                    </p>
                    <p>
                        I take pride in staying up-to-date with the latest technological trends and constantly seeking new knowledge. My passion for technology fuels my desire to contribute to the success of innovative projects.
                    </p>
                    </>
                    }

                    {language === 'es' &&
                    <>
                    <p>
                        Como un recurso versátil, me destacan mis habilidades tanto para la de gestión de equipos y de proyectos como para el diseño y desarrollo de sistemas. Mi enfoque orientado a resultados y mi capacidad para enfrentar desafíos complejos me han permitido desarrollar soluciones innovadoras que optimizan los procesos empresariales.
                    </p>
                    <p>
                        Me enorgullece mantenerme al día en las últimas tendencias tecnológicas y estar siempre en búsqueda de conocimientos nuevos. Mi pasión por la tecnología impulsa mi deseo de contribuir al éxito de proyectos innovadores.
                    </p>
                    </>
                    }

                    {language ==='en' && <a href="#contact" className="btn btn-primary">Let's Talk</a>}
                    {language ==='es' && <a href="#contact" className="btn btn-primary">Contactame</a>}

                </div>



            </div>


        </section>
    )
}

export default About
