import './articledetail.css'
import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import '../articles/Articles'
import Articles from '../../assets/articles/articles.json';

const ArticleDetail = () => {

    const { id } = useParams();

    const article_spanish = Articles[id].es;

    const { language } = useContext(LanguageContext);
    return (
        <header>
            <div className="container article_container">
                <div className="article_content">
                    <h1>{article_spanish.title}</h1>
                    <h2>{article_spanish.resume}</h2>
                    {article_spanish.content.map(paragraph => (
                        <p>{paragraph}</p>
                        
                    ))
                    }
                </div>
            </div>

        </header>
    )
}

export default ArticleDetail
