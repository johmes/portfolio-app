import React, { useRef, useState } from 'react';
import { Axios, db } from '../firebase/firebaseConfig'
import { ButtonWrapper, Button } from '../components/Button/CTAButton.styled';

export default function Contact({ lightTheme }) {
    const theme = lightTheme ? "light" : "dark";
    const titleRef = useRef(null);
    const [characterCount, setCharacterCount] = useState(0);
    const [status, setStatus] = useState('');

    const [formData, setFormData] = useState({});

    const maxLength = 1000;

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        if (e.target.name === "message") {
            setCharacterCount(e.target.value.length);
        }

    }

    const handleSubmit = event => {
        event.preventDefault()
        setStatus('Sending...');
        sendEmail()
    }
    const sendEmail = () => {
        Axios.post(
            './submit',
            formData
        )
            .then(res => {
                db.collection('emails').add({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date(),
                });
                setStatus('Success');
            })
            .catch(error => {
                setStatus('Failed');
                console.log(error);
            })

        setFormData({
            name: '',
            email: '',
            message: '',
        })
        setCharacterCount(0);
    }


    return (
        <div id="contact" className={"Content-area " + theme}>
            <div className='Inner'>
                <h2 ref={titleRef}>Contact</h2>

                <form id="contact-form" onSubmit={handleSubmit} method="POST">
                    <div className="form-group">
                        <label htmlFor="contactNameInput">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="contactNameInput"
                            className="form-control"
                            onChange={updateInput}
                            value={formData.name || ''}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contactEmail">Email address</label>
                        <input
                            type="email"
                            name="email"
                            id="contactEmail"
                            className="form-control"
                            onChange={updateInput}
                            value={formData.email || ''}
                            aria-describedby="emailHelp"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contactTextArea">Message</label>
                        <textarea
                            name="message"
                            className="form-control"
                            id="contactTextArea"
                            rows="10"
                            maxLength={maxLength}
                            onChange={updateInput}
                            value={formData.message}
                        />
                        <span id="maxChar" className='Max-lenght'>{`${characterCount}/${maxLength}`}</span>
                    </div>

                    <ButtonWrapper aria-label="Submit">
                        <Button type="submit" secondary>
                            Submit
                        </Button>
                    </ButtonWrapper>

                </form>
                <div className={`Submit-status ${status === "Success" ? "Success" : (status === "Failed" ? "Failed" : "")}`}>{status}</div>
            </div>
        </div>
    )
}