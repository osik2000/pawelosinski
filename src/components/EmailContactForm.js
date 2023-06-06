import React, {useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import '../css/Contact.css'
import Alert from "./Alert";



const EmailContactForm = () => {

    const notify = () => toast("Wow so easy!");

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    const form = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika obsługi wysyłania formularza
        // emailjs.sendForm(
        //     process.env.REACT_APP_SERVICE_ID,
        //     process.env.REACT_APP_TEMPLATE_ID,
        //     form.current,
        //     process.env.REACT_APP_PUBLIC_KEY
        // )
        //     .then((result) => {
        //         // show the user a success message
        //     }, (error) => {
        //         // show the user an error
        //     });

    };

    return (
        <div>
            <section id="contact">
                <h2>Send me a message!</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        // value={message}
                        // onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>

                    <button type="submit">Send</button>
                </form>
            </section>
        </div>

    );
}

export default EmailContactForm;
