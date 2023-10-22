import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import {LanguageProvider} from './context/LanguageContext'
import { Analytics } from '@vercel/analytics/react';
import Articles from './components/articles/Articles'

const App = () => {
    return (
        <LanguageProvider>
            <Nav />
            <Header />
            <Articles/>
            <About />
            <Experience/>
            <Portfolio/>
            <Contact/>
            <Footer/>
            <Analytics />
        </LanguageProvider>
    )
}

export default App
