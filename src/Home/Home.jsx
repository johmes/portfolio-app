// Home.jsx
import React from 'react'
import Projects from '../Projects/index.js';
import Skills from '../Skills/index.js';
import About from '../About/index.js';
import Contact from '../Contact/index.js';
import Footer from "../components/Footer/Footer.jsx";
import Header from '../components/Header.jsx';

export default function Home() {
    return (
        <>
            <Header />
            <About lightTheme={true} />
            <Skills lightTheme={false} />
            <Projects lightTheme={true} />
            <Contact lightTheme={false} />
            <Footer />
        </>

    )
}

