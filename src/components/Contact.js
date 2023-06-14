import {useEffect, useState} from 'react';
import '../css/Contact.css'
import EmailContactForm from "./EmailContactForm";
import {
    faLinkedin,
    faGithub,
    faSpotify
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEnvelope
} from "@fortawesome/free-regular-svg-icons";

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

    const handleOpenWebsite = (url) => {
        window.open(url, '_blank');
    };

    useEffect(() => {
        document.title = `Paweł Osiński | Contact`;
    }, []);

    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="content">
                <div className="links">
                    <div className="link" onClick={() => handleOpenWebsite("https://github.com/osik2000")}>
                        <FontAwesomeIcon icon={faGithub} size="5x" className="icon"/>
                        <h3>GitHub</h3>
                    </div>
                    <div className="link"
                         onClick={() => handleOpenWebsite("https://www.linkedin.com/in/pawelosinski000/")}>
                        <FontAwesomeIcon icon={faLinkedin} size="5x" className="icon"/>
                        <h3>LinkedIn</h3>
                    </div>
                    <div className="link"
                         onClick={() => handleOpenWebsite("https://open.spotify.com/user/11122212763")}>
                        <FontAwesomeIcon icon={faSpotify} size="5x" className="icon"/>
                        <h3>Spotify</h3>
                    </div>
                    <div className="link" onClick={() => handleOpenWebsite("mailto://pawelosinski000@gmail.com")}>
                        <FontAwesomeIcon icon={faEnvelope} size="5x" className="icon"/>
                        <h3>E-Mail</h3>
                    </div>
                </div>
                <div className="form">
                    {showPopup &&
                        <dialog open className={`alert ${isTryingToSend ? 'sending' : isFailed ? 'error' : ''}`}>
                            {isTryingToSend ?
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
                </div>
            </div>

        </section>
    );
}

export default Contact;
