import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/ginofiori/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/GINOFIORI" target="_blank"><BsGithub/></a>
            <a href="https://instagram.com/gino_fiori" target="_blank"><BsInstagram/></a>
        </div>
    )
}

export default HeaderSocials
