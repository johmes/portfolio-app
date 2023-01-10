// Home.jsx
import React from 'react'
import Projects from '../Projects';
import Skills from '../Skills';
import About from '../About';
import Contact from '../Contact';
import Footer from "../components/Footer/Footer";
import Header from '../components/Header';

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

