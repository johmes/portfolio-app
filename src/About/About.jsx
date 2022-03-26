// About.jsx
import React, { useRef } from 'react'

const information = [
    {
        id: 0,
        header: "Who",
        emoji: "❔",
        emojiAriaLabel: "question mark emoji",
    },
    {
        id: 1,
        header: "Education",
        emoji: "🎓",
        emojiAriaLabel: "graduation emoji",
    },
    {
        id: 2,
        header: "Work Experience",
        emoji: "💻",
        emojiAriaLabel: "laptop emoji",
    },
    {
        id: 3,
        header: "Been There Done That",
        emoji: "🎻",
        emojiAriaLabel: "violin emoji",
    }

]

export default function About({ lightTheme }) {
    const theme = lightTheme ? "light" : "dark";
    const titleRef = useRef(null);

    return (
        <div id="about" className={"Content-area " + theme}>
            <div className='Inner'>
                <h2 ref={titleRef}>About</h2>
                <br />
                {information.map((section) => (
                    <Section
                        key={section.id}
                        header={section.header}
                        emoji={section.emoji}
                        emojiAriaLabel={section.emojiAriaLabel}
                    />
                ))}
            </div>
        </div>
    )
}

function Section({ ...props }) {
    const { header, emoji, emojiAriaLabel } = props;
    return (
        <>
            <span
                className='Emoji-header-icon'
                role="img"
                aria-label={emojiAriaLabel}
            >
                {emoji}
            </span>
            <h3>{header}</h3>

            {getContent(header)}
            <br />
            <br />
        </>
    );

}

const getContent = (id) => {
    if (id === "Who") {
        return (
            <p>
                My name is Johannes. I'm 20-years-old second year computer science 
                student from Turku. I've been coding web pages and computer programs 
                in Java and Python since I was 14 years old. I like to spend my 
                freetime coding and reading non-fiction books.
            </p>
        );
    } else if (id === "Education") {
        return (
            <ul>
                <li>08/2020 - Present | Bachelor of Science in Computer Science, University of Turku</li>
                <li>08/2017 - 06/2020 | Matriculation Examination, Puolalanmäki Upper Secondary School, Turku</li>
            </ul>
        );
    } else if (id === "Work Experience") {
        return (<ul>
            <li>03/2020 - 08/2020 | Field Sales Presentative, Sector Alarm Oy</li>
            <li>06/2019 - 07/2019 | Developing WordPress web site and 3D model view in Pimatic Oy</li>
        </ul>
        );
    } else if (id === "Been There Done That") {
        return (
            <p>
                In addition being crazy for coding, there are also many other things 
                I like to do. I've photographed nature, landscape, people and products 
                for over 6 years now. Shooting video has been around for two years now. 
                Music is close to my heart. I've played bass for 6 years and violin for 11 years. 
                You can check my <a href='https://www.instagram.com/johkuilmari'>Instagram</a> account here.
            </p>
        );
    }
    return;
}
