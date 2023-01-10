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
                A 21-years-old second year computer science
                student and an entrepreneur from Turku. Co-founder and CTO of Löytö Software Oy. Coding web pages and computer programs
                since secondary school. Likes to spend freetime by coding and
                reading non-fiction books.
            </p>
        );
    } else if (id === "Education") {
        return (
            <ul>
                <li>08/2020 - Present | Bachelor of Science, Computer Science, University of Turku</li>
                <li>08/2017 - 06/2020 | Matriculation Examination, Puolalanmäki Upper Secondary School, Turku</li>
            </ul>
        );
    } else if (id === "Work Experience") {
        return (
            <ul>
                <li>01/2022 - Present | CTO and Chairman of the board, Löytö Software Oy</li>
                <li>03/2020 - 08/2020 | Field Sales Presentative, Sector Alarm Oy</li>
                <li>06/2019 - 07/2019 | WordPress developer summer job, Pimatic Oy</li>
            </ul>
        );
    } else if (id === "Been There Done That") {
        return (
            <p>
                In addition being crazy for coding, there are also many other things
                I like to do. I have been taking photos and videos of nature, landscape, people and products
                for over 6 years now. Feel free to check my <a href='https://www.instagram.com/johkuilmari'>Instagram</a> account here.
            </p>
        );
    }
    return;
}
