import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="menu-toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="nav-links">
                <li><a className="nav-link" href="/home">Home</a></li>
                <li><a className="nav-link" href="/about">About</a></li>
                <li><a className="nav-link" href="/projects">Projects</a></li>
                <li><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;