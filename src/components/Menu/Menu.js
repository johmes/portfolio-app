// Menu.js
import React from "react";
import { bool } from 'prop-types';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../../Home';
import Projects from "../../Projects";
import Contact from "../../Contact";
import Skills from "../../Skills";
import About from '../../About';
import PrivacyPolicy from "../../Privacy";
import NotFound from "../../NotFound";

import {
    NavBar,
    NavLink,
    NavMenu,
} from './Menu.styled';


function Menu({ open, visible, ...props }) {

    let isHidden = open ? true : false;
    let isVisible = visible ? true : false;
    const tabIndex = isHidden ? 0 : -1;


    return (
        <>
            <BrowserRouter >
                <NavBar visible={isVisible}>
                    <NavMenu open={isHidden} aria-hidden={!isHidden} {...props}>
                        <NavLink to="home" spy={true} smooth={true} offset={-79} duration={100} tabIndex={tabIndex}>
                            <h1>Johannes Mensalo</h1>
                        </NavLink>

                        <NavLink to="about" spy={true} smooth={true} offset={0} duration={100} tabIndex={tabIndex}>
                            <span aria-hidden="true">📖</span>
                            About
                        </NavLink>

                        <NavLink to="skills" spy={true} smooth={true} offset={0} duration={100} tabIndex={tabIndex}>
                            <span aria-hidden="true">🥋</span>
                            Skills
                        </NavLink>

                        <NavLink to="projects" spy={true} smooth={true} offset={0} duration={100} tabIndex={tabIndex}>
                            <span aria-hidden="true">🚧</span>
                            Projects
                        </NavLink>

                        <NavLink to="contact" spy={true} smooth={true} offset={0} duration={100} tabIndex={tabIndex}>
                            <span aria-hidden="true">📩</span>
                            Contact
                        </NavLink>
                    </NavMenu>
                </NavBar>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Skills" element={<Skills />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Privacy" element={<PrivacyPolicy />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>


    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;