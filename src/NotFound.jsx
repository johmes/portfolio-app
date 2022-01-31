import React from 'react';

export default function NoFound() {
    return (
        <div className="Content-area">
            <h2>404</h2>
            <h1>Page Not Found <span role="img" aria-label="gear emoji">⚙️</span></h1>
            <p>The specified file was not found on this website. Please check the URL for mistakes and try again.</p>
        </div>
    )
}
