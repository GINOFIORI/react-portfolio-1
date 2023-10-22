import React, { useContext, useEffect , useState} from 'react';
import './articles.css'
import { LanguageContext } from '../../context/LanguageContext';
import Lottie from 'react-lottie';
import lamparita from '../../assets/lamparita.json';

const Articles = () => {
    const { language } = useContext(LanguageContext);
    const lamparitaContainer = React.createRef();

    const [isHovered, setIsHovered] = useState(false);

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: lamparita,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <section id='articles'>
            <h2>
                <span style={{ position: "absolute" }} className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>My Articles</span>
                <span className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>Mis Artículos</span>
            </h2>

            <div className='container articles__container'>
                
                {/***************** TARJETA ******************/}
                <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <div className="header">
                        <div>
                            <a className="title" href="#">
                                Transición ágil
                            </a>
                            <p className="name">by Gino Fiori</p>
                        </div>
                        <span className={`image ${isHovered ? 'hovered' : ''}`}>
                            <Lottie options={defaultOptions} isStopped={!isHovered}></Lottie> 
                        </span>
                    </div>
                    <p className="description">
                        Un paseo por mi experiencia en la implementación de metodologías ágiles dentro del entorno empresarial
                    </p>
                    <dl className="post-info">
                        <div className="cr">
                            <dt className="dt">Publicado</dt>
                            <dd className="dd">22 Oct 2023</dd>
                        </div>
                        <div className="cr">
                            <dt className="dt">Tiempo de lectura</dt>
                            <dd className="dd">5 minutos</dd>
                        </div>
                    </dl>
                </div>
                {/***************** TARJETA ******************/}

                

            </div>
        </section>
    );
}

export default Articles;
