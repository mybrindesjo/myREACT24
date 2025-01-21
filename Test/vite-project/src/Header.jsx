import React from "react";
import './app.css';

const Header = () => {
  return ( 
   <>
    <header>
        <section className="container">
                <div className="profile-picture">
                    <img src="./img/profilePicture.png" alt="Profile Picture" width="150" height="150"/>
                </div>
                
                <div className="column">
                    <div className="about-intro">
                        <h1 className="name">My Brindesjö</h1>
                        <h3 className="username">@mybrindesjo</h3>
                        <p>💡 ⎸ UX-designer</p>
                        <p>🎨 ⎸ UI-designer</p>
                        <p>👩🏼‍💻 ⎸ Frontendutvecklare</p>
                        <p>🛠️ ⎸ Figma och VS code</p>
                        <p>🎓 ⎸ Chas Academy</p>
                        <p>📍 ⎸ Stockholm, Sverige</p>
                    </div>
                    <div className="social-links">
                        <a href="mailto:my.brindesjo@gmail.com">
                            <img src="./icon/gmail.png" alt="Figma" className="social-img" width="50" height="50"/>
                        </a>
                        <a href="https://github.com/mybrindesjo/myUXF24" target="_blank">
                            <img src="./img/github.png" alt="Github" className="social-img" width="50" height="50"/>
                        </a>
                        <a href="https://www.linkedin.com/in/mybrindesjo/" target="_blank">
                            <img src="./img/linkedin.png" alt="LinkedIn" className="social-img" width="50" height="50"/>
                        </a>
                    </div>
                </div>
            </section>

            <nav className="navbar">
                <div className="menu-toggle" id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="nav-links">
                    <li><a className="nav-link" href="/">Home</a></li>
                    <li><a className="nav-link" href="/about">About</a></li>
                    <li><a className="nav-link" href="/projects">Projects</a></li>
                    <li><a className="nav-link" href="/contact">Contact</a></li>
                </ul>
            </nav>
    </header>
    
    </>
  )

}

export default Header;