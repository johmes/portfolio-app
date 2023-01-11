import React, { useRef } from 'react'
import CTAButton from "../components/Button/CTAButton.jsx";

function Header() {
    const titleRef = useRef(null);

    return (
        <>
            <div className='Bottom-shadow' />
            <div id="home" className="Content-area landing-area">
                <div className='Inner'>
                    <p className="Greeting-text">Hi, it's</p>
                    <h1 ref={titleRef}><span className="Header-highlight">Johannes</span> Mensalo</h1>
                    <p className="Slogan-text">Developing The Future</p>
                    <div className='Content-sneakpeek'>
                        <figure>
                            <p>
                                I'm a 21-year-old computer science student and an entrepreneur from Turku.<br />
                                I love to create native and web apps.
                            </p>
                        </figure>
                        <CTAButton target="about" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header