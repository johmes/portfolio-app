import React, { useRef, useState } from 'react';
import { Axios, db, firestore } from '../Config/firebase';
import { ButtonWrapper, Button } from '../components/Button/CTAButton.styled';


export default function Contact({ lightTheme }) {
    const theme = lightTheme ? "light" : "dark";
    const titleRef = useRef(null);
    const [characterCount, setCharacterCount] = useState(0);
    const [status, setStatus] = useState('');

    const [formData, setFormData] = useState({});

    const maxLength = 1000;

    const sendEmail = () => {
        Axios.post('./submit', formData)
            .then(() => {
                setEmailToFirestore(
                    'emails',
                    new Date(),
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        time: new Date(),
                    });
                setStatus('Success');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                })
                setCharacterCount(0);
            })
            .catch(error => {
                setStatus('Failed');
                console.log(error);
            })
    }

    const setEmailToFirestore = async (
        collectionName,
        docName,
        data) => {
        const docRef = db.doc(
            db,
            collectionName,
            docName);

        return await firestore.setDoc(docRef, data);
    };


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

    return (
        <div id="contact" className={"Content-area " + theme}>
            <div className='Inner'>
                <h2 ref={titleRef}>Contact</h2>

                <form id="contact-form" onSubmit={handleSubmit} method="POST">
                    <Input
                        label="Name"
                        type="text"
                        name="name"
                        id="contactNameInput"
                        onChange={updateInput}
                        value={formData.name || ''}
                    />

                    <Input
                        label="Email address"
                        type="email"
                        name="email"
                        id="contactEmail"
                        onChange={updateInput}
                        value={formData.email || ''}
                        aria-describedby="emailHelp"
                    />

                    <TextAreaInput
                        label="Message"
                        name="message"
                        id="contactTextArea"
                        rows="15"
                        charCount={characterCount}
                        maxLength={maxLength}
                        onChange={updateInput}
                        value={formData.message}
                        limited

                    />

                    <ButtonWrapper aria-label="Submit">
                        <Button type="submit" secondary>
                            Submit
                        </Button>
                    </ButtonWrapper>

                </form>
                <div
                    className={
                        `Submit-status ${status === "Success" ?
                            "Success" :
                            (status === "Failed"
                                ? "Failed" :
                                "")}`
                    }
                >
                    {status}
                </div>
            </div>
        </div>
    )
}

const Input = ({ label, ...props }) => {
    return (
        <div className="form-group">
            <label htmlFor="contactEmail">{label}</label>
            <input
                className="form-control"
                {...props}
            />
        </div>
    );
}

const TextAreaInput = ({ label, limited, charCount, ...props }) => {
    return (
        <div className="form-group">
            <label htmlFor="contactTextArea">
                {label}
            </label>
            <textarea
                className="form-control"
                {...props}
            />

            {limited ?
                <span
                    id="maxChar"
                    className='Max-lenght'
                >
                    {`${charCount}/${props.maxLength}`}
                </span> :
                null
            }

        </div>
    );
}