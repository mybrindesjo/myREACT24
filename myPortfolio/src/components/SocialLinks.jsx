import React from 'react';

function SocialLinks() {
    return (
        <div className="social-links">
            <a href="mailto:my.brindesjo@gmail.com">
                <img src="./img/gmail.png" alt="Gmail" className="social-img" width="50" height="50" />
            </a>
            <a href="https://github.com/mybrindesjo/myUXF24" target="_blank">
                <img src="./img/github.png" alt="Github" className="social-img" width="50" height="50" />
            </a>
            <a href="https://www.linkedin.com/in/mybrindesjo/" target="_blank">
                <img src="./img/linkedin.png" alt="LinkedIn" className="social-img" width="50" height="50" />
            </a>
        </div>
    );
}

export default SocialLinks;
