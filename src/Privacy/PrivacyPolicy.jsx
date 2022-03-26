// PrivacyPolicy.jsx
import React, { useRef } from 'react'

export default function PrivacyPolicy({ lightTheme }) {
    const theme = lightTheme ? "light" : "dark";
    const titleRef = useRef(null);

    return (
        <div id="privacyPolicy" className={"Content-area " + theme}>
            <div className='Inner'>            
                <h1 ref={titleRef}>
                    Privacy Policy
                </h1>
                <p>
                    This web page uses JavaScript and cookies to run. 
                    Cookies are stored locally only.
                    <br />
                    <br />
                    <h2>Analytics</h2>
                    Anonymous data of user activity is gathered with Firebase Analytics. 
                    It is only used by me to track the usage of my portfolio.
                    This data is not sold to third parties or used commercially.
                    You may customise privacy settings on the privacy policy popup.
                    
                    <br />
                    <br />
                    <h2>Contact messages</h2>
                    Contact messages sent by users are stored by GDPR in 
                    servers that are located in EU/ETA area.
                </p>
            </div>
        </div>
    )
}