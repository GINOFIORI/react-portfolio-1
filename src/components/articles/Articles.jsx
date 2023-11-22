import React, { useContext , useState} from 'react';
import './articles.css'
import { LanguageContext } from '../../context/LanguageContext';
import Lottie from 'react-lottie';
import lamparita from '../../assets/lamparita.json';
import articles from '../../assets/articles/articles.json'
import { Link } from 'react-router-dom';

const Articles = () => {
    const { language } = useContext(LanguageContext);

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
                
                {articles.map((articulo, index) => (
                    <Link to={`/article/${index}`}>
                        <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} key={index}>
                            <div className="header">
                                <div>
                                    <a className="title" href="#">
                                        {articulo.title}
                                    </a>
                                    <p className="name">by {articulo.author}</p>
                                </div>
                                <span className={`image ${isHovered ? 'hovered' : ''}`}>
                                    <Lottie options={defaultOptions} isStopped={!isHovered}></Lottie>
                                </span>
                            </div>
                            <p className="description">{articulo.resume}</p>
                            <dl className="post-info">
                                <div className="cr">
                                    <dt className="dt">Publicado</dt>
                                    <dd className="dd">{articulo.date}</dd>
                                </div>
                                <div className="cr">
                                    <dt className="dt">Tiempo de lectura</dt>
                                    <dd className="dd">{articulo.readingtime}</dd>
                                </div>
                            </dl>
                        </div>
                    </Link>
                ))}
                {/***************** TARJETA ******************/}

                

            </div>
        </section>
    );
}

export default Articles;
