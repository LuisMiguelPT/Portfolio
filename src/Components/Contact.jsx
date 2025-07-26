import React from "react";
import '../styles/Contact.css'
import { MdEmail, MdPhone } from 'react-icons/md';


function Contact() {
    return (
        <div className="contact" id="contacto">
            <h1>Si quieres contactar conmigo , no lo dudes , 
                te dejo aqui unos enlaces donde puedes hacerlo</h1>
            <ul>
                <li>
                    <MdEmail className="email-icon" />
                    <a href="mailto:luismy.dev@email.com"> luismy.dev@gmail.com</a>
                </li>
                <li>
                    <MdPhone className="phone-icon" />
                    <a href="tel:+34695841663"> +34 695 84 16 63</a>
                </li>
            </ul>

        </div>
    )


}
export default Contact;