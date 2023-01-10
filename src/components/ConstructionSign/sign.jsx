import React from 'react'

function sign({ titleRef, headerName }) {
    return (
        <>
            <h2 ref={titleRef}>
                <span role="img" aria-label="emoji">
                    🚧
                </span> {headerName}
                <span role="img" aria-label="emoji">
                    🚧
                </span>
            </h2>
            <p>Piip Peep! Under construction...</p></>
    )
}

export default sign;