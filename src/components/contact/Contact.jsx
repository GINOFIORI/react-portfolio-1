import React, {useContext, useRef} from 'react'
import './contact.css'
import { LanguageContext } from '../../context/LanguageContext';
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
    const { language } = useContext(LanguageContext);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_727n4rx', 'template_g9z8cug', form.current, '1-sTPnR9rjjsRtSah')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    return (
        <section id="contact">
            <h5 className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>Get In Touch</h5>
            
            <h2>
                <span style={{position:"absolute"}} className={`language-transition ${language === 'es' ? 'language-visible' : ''}`}>Contacto</span>
                <span className={`language-transition ${language === 'en' ? 'language-visible' : ''}`}>Contact Me</span>
            </h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>gino.fiori@gmail.com</h5>
                        <a href="mailto:gino.fiori@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>+5493416456942</h5>
                        <a href="https://api.whatsapp.com/send?phone=5493416456942" target="_blank">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact