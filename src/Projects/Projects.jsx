// Projects.jsx
import React, { useRef } from 'react'
import ProjectContainer from './ProjectContainer';

const projects = [
    {
        id: 0,
        header: "Portfolio",
        desc: "I created this website using React and Firebase for hosting. The website contains concepts such as SPA also known as single- page application and PWA, progressive web application. This means you can save this site on your home screen on your mobile device as well. There is a contact form at the end of this page witch communicates with the Cloud functions in Firebase.",
        link: "https://github.com/johmes/portfolio-app",
    },
    {
        id: 1,
        header: "Löytö App",
        desc: "We created this app for coffee lovers and others who like to spend time in coffee shops. With Löytö you can find coffee shops you like the most near you. My role in this project is to develop the native app and backend.",
        link: "https://loytoapp.fi"
    }
]
export default function Projects({ lightTheme }) {
    const theme = lightTheme ? "light" : "dark";
    const titleRef = useRef(null);

    return (
        <div id="projects" className={"Content-area " + theme}>
            <div className='Inner'>
                <h2 ref={titleRef}>
                    <span role="img" aria-label="emoji">
                        🚧
                    </span> Projects
                    <span role="img" aria-label="emoji">
                        🚧
                    </span>
                </h2>
                {projects.map((project, index) => (
                    <ProjectContainer
                        key={index}
                        header={project.header}
                        desc={project.desc}
                        link={project.link}
                    />
                ))}
                <br />
                <br />
                <p>
                    See more projects in &nbsp;
                    <a href="https://www.github.com/johmes">
                        GitHub
                    </a>
                </p>
            </div>
        </div>
    )
}