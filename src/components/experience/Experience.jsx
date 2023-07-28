import React, {useContext} from 'react'
import './experience.css'
import { LanguageContext } from '../../context/LanguageContext';
import {FaReact,FaBootstrap,FaVuejs,FaAngular, FaLaravel, FaRunning, FaNodeJs} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {SiTailwindcss, SiTypescript, SiMicrosoftsqlserver} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'

const Experience = () => {
    const { language } = useContext(LanguageContext);
    return (
        <section id='experience'>
            <h5 className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>What Skills I Have</h5>
            <h5 className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>Habilidades Con Las Que Cuento</h5>
            <h2>
                <span style={{position:"absolute"}} className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>My Experience</span>
                <span className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>Mi Experiencia</span>
            </h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaReact className="experience__details-icon"/>
                            <div>
                                <h4>React JS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <DiJavascript1 className="experience__details-icon"/>
                            <div>
                                <h4>Javascript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaBootstrap className="experience__details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiTailwindcss className="experience__details-icon"/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiTypescript className="experience__details-icon"/>
                            <div>
                                <h4>Typescript</h4>
                                <small className="text-light">Intermidiate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaAngular className="experience__details-icon"/>
                            <div>
                                <h4>Angular</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaVuejs className="experience__details-icon"/>
                            <div>
                                <h4>Vue JS</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <SiMicrosoftsqlserver className="experience__details-icon"/>
                            <div>
                                <h4>SQL Server</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <GrMysql className="experience__details-icon"/>
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaLaravel className="experience__details-icon"/>
                            <div>
                                <h4>PHP Laravel</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaRunning className="experience__details-icon"/>
                            <div>
                                <h4 className="text-nowrap">PowerBuilder</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaNodeJs className="experience__details-icon"/>
                            <div>
                                <h4>Node JS</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
            
        </section>
    )
}

export default Experience