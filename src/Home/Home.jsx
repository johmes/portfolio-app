// Home.jsx
import React, { useRef } from 'react'
import Projects from '../Projects';
import Skills from '../Skills';
import About from '../About';
import Contact from '../Contact';
import Footer from "../components/Footer/Footer";
import CTAButton from "../components/Button/CTAButton";

export default function Home() {
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
                                I'm a 20-year-old computer science student from Turku.<br />
                                I love to create web apps and work with algorithms.
                            </p>
                        </figure>
                        <CTAButton target="about" />

                    </div>
                    
                </div>
            </div>
            <About lightTheme={true} />
            <Skills lightTheme={false} />
            <Projects lightTheme={true} />
            <Contact lightTheme={false} />
            <Footer />
        </>

    )
}

