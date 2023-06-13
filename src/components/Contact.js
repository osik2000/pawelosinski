import {useState} from 'react';
import '../css/Contact.css'
import EmailContactForm from "./EmailContactForm";

const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [isTryingToSend, setIsTryingToSend] = useState(false);

    const handleSwitchPopup = (state) => {
        setShowPopup(state);
    }

    const handleFailChange = (state) => {
        setIsFailed(state);
    }

    const handleTryingToSend = (state) => {
        setIsTryingToSend(state);
    }

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
            {showPopup &&
                <dialog open className={`alert ${isTryingToSend? 'sending' : isFailed ? 'error' : ''}`}>
                    {isTryingToSend?
                        <span> Wysyłanie wiadomości...</span> :
                        isFailed ?
                        <span> Nie udało się wysłać wiadomości.</span> :
                        <span> Wysłano wiadomość!</span>
                    }
                    <button onClick={() => {
                        handleSwitchPopup(false)
                    }} className='exit'> X
                    </button>
                </dialog>
            }

            <EmailContactForm handleFailChange={handleFailChange} handleSwitchPopup={handleSwitchPopup}
                              showPopup={showPopup} handleIsTryingToSend={handleTryingToSend}/>

        </section>
    );
}

export default Contact;
