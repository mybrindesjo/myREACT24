import React from 'react';
import ProfilePicture from './ProfilePicture';
import SocialLinks from './SocialLinks';
import Navbar from './Navbar';
import AboutIntro from './AboutIntro';

function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <ProfilePicture />
                    <div className="column">
                        <AboutIntro />
                        <SocialLinks />
                    </div>
                </div>
                <Navbar />
            </header>
        </>
    );
}

export default Header;