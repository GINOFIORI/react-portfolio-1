import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo' ></a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#"></a></li>
            </ul>

            <div className='footer__socials'>
                <a href="https://www.linkedin.com/in/ginofiori/" target="_blank"><BsLinkedin /></a>
                <a href="https://github.com/GINOFIORI" target="_blank"><BsGithub/></a>
                <a href="https://instagram.com/gino_fiori" target="_blank"><BsInstagram/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Gino Fiori. All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer
