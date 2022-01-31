// About.jsx
import React, { useRef } from 'react'

export default function About({ lightTheme }) {
    const theme = lightTheme ? "light" : "dark";
    const titleRef = useRef(null);

    return (
        <div id="about" className={"Content-area " + theme}>
            <div className='Inner'>
                <h2 ref={titleRef}>About</h2>
                <br />
                <span className='Emoji-header-icon' role="img" aria-label="question mark emoji">❔</span>
                <h3>Who</h3>
                <p>
                    My name is Johannes. I'm 20-years-old second year computer science student from Turku.
                    I've been coding web pages and computer programs in Java and Python since I was 14 years old.
                    I like to spend my freetime coding and reading non-fiction books.
                </p>
                <br />
                <br />

                <span className='Emoji-header-icon' role="img" aria-label="graduation emoji">🎓</span>
                <h3>Education</h3>
                <ul>
                    <li>09/2021 - 12/2021 | Non-commissioned Officer School, Pori Brigade Signal Company</li>
                    <li>08/2020 - Present | Bachelor of Science in Computer Science, University of Turku</li>
                    <li>08/2017 - 06/2020 | Matriculation Examination, Puolalanmäki Upper Secondary School, Turku</li>
                </ul>
                <br />
                <br />

                <span className='Emoji-header-icon' role="img" aria-label="laptop emoji">💻</span>
                <h3>Work Experience</h3>
                <ul>
                    <li>03/2020 - 08/2020 | Field Sales Presentative, Sector Alarm Oy</li>
                    <li>06/2019 - 07/2019 | Developing WordPress web site and 3D model view in Pimatic Oy</li>
                </ul>
                <br />
                <p>
                    My work experience in this area is limited but I'm determined to compensate that
                    with years of experience doing own projects.
                </p>
                <br />
                <br />

                <span className='Emoji-header-icon' role="img" aria-label="violin emoji">🎻</span>
                <h3>Been There Done That</h3>
                <p>
                    In addition being crazy for coding, there are also many other things
                    I like to do. I've photographed nature, landscape, people and products
                    for over 6 years now. Shooting video has been around for two years now. 
                    Music is close to my heart. I've played bass for 6 years and violin for 11 years.
                    You can check my <a href="https://www.instagram.com/johkuilmari">Instagram</a> account here.
                </p>
            </div>
        </div>
    )
}
