import React from 'react';
import '../css/Contact.css'
import EmailContactForm from "./EmailContactForm";

const Contact = () => {
    return (
        <section className="contact">
            <h2>Contact</h2>
            <div className="contact-item">
                <h3>Github</h3>
                <p>osik2000</p>
            </div>
            <div className="contact-item">
                <h3>Linked-in</h3>
                <p>pawelosinski</p>
            </div>
            <EmailContactForm/>

        </section>
    );
}

export default Contact;
