// Skills.jsx
import React, { useRef } from 'react'

const skills = [
    {
        id: 0,
        name: "Technical Skills",
        list: [
            "React",
            "React Native",
            "Python",
            "Java",
            "JavaScript",
            "PHP",
            "MySQL",
            "MongoDB",
            "NodeJs",
        ]
    },
    {
        id: 1,
        name: "Platforms",
        list: [
            "GCP",
            "Firebase",
            "Android Studio",
            "Xcode",
            "VMware",
            "Unix/Linux",
        ]
    },
    {
        id: 2,
        name: "Art technology",
        list: [
            "Adobe Photoshop",
            "Adobe Lightroom CC",
            "Adobe XD",
            "DaVinci Resolve",
        ]
    },
]

export default function Skills({ lightTheme }) {
    const theme = lightTheme ? "light" : "dark";
    const titleRef = useRef(null);

    return (
        <div id="skills" className={"Content-area " + theme}>
            <div className='Inner'>
                <h2 ref={titleRef}>
                    Skills Under
                    &nbsp;
                    <span className="Header-highlight">
                        The Belt
                    </span>
                </h2>

                {skills.map((category) => (
                    <Table
                        key={category.id}
                        header={category.name}
                        list={category.list}
                    />
                ))}
            </div>
        </div>
    )
}

const Table = ({ ...props }) => {
    const { header, list } = props;

    return (
        <>
            <h3>{header}</h3>
            <table className="Content-table">
                <tbody>
                    <tr>
                        {list.map((item) => <td key={item}>{item}</td>)}
                    </tr>
                </tbody>
            </table>
        </>
    );

}