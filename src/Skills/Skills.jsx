// Skills.jsx
import React, { useRef } from 'react'

export default function Skills({ lightTheme }) {
    const theme = lightTheme ? "light" : "dark";
    const titleRef = useRef(null);

    return (
        <div id="skills" className={"Content-area " + theme}>
            <div className='Inner'>
                <h2 ref={titleRef}>Skills Under <span className="Header-highlight">The Belt</span></h2>
                <h3>Technical Skills</h3>
                <table className="Content-table">
                    <tbody>
                        <tr>
                            <td>
                                React
                            </td>
                            <td>
                                Python
                            </td>
                            <td>
                                Java
                            </td>
                        </tr>
                        <tr>
                            <td>
                                MySQL
                            </td>
                            <td>
                                JavaScript
                            </td>
                            <td>
                                PHP
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3>Platforms</h3>
                <table className="Content-table">
                    <tbody>
                        <tr>
                            <td>
                                Google Cloud Platform
                            </td>
                            <td>
                                Firebase
                            </td>
                            <td>
                                Android Studio
                            </td>
                        </tr>
                        <tr>
                            <td>
                                VMware
                            </td>
                            <td>
                                Unix/Linux
                            </td>
                            <td>
                                Microsoft 365
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3>Art Techology</h3>
                <table className="Content-table">
                    <tbody>
                        <tr>
                            <td>
                                Adobe Photoshop
                            </td>
                            <td>
                                Adobe Lightroom CC
                            </td>
                            <td>
                                DaVinci Resolve
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}