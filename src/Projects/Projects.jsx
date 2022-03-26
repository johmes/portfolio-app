// Projects.jsx
import React, { useRef } from 'react'

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
                <p>Piip Peep! Under construction...</p>
            </div>
        </div>
    )
}