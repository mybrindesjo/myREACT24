import React from 'react';

const profileInfo = {
  name: "My Brindesjö",
  username: "@mybrindesjo",
  details: [
    "💡 ⎸ UX-designer",
    "🎨 ⎸ UI-designer",
    "👩🏼‍💻 ⎸ Frontendutvecklare",
    "🛠️ ⎸ Figma och VS code",
    "🎓 ⎸ Chas Academy",
    "📍 ⎸ Stockholm, Sverige"
  ],
  socialLinks: [
    { href: "mailto:my.brindesjo@gmail.com", src: "./icon/gmail.png", alt: "Gmail" },
    { href: "https://github.com/mybrindesjo/myUXF24", src: "./img/github.png", alt: "Github" },
    { href: "https://www.linkedin.com/in/mybrindesjo/", src: "./img/linkedin.png", alt: "LinkedIn" }
  ]
};

const Header = () => {
  return (
    <header>
      <section className="container">
        <div className="profile-picture">
          <img src="./img/profilePicture.png" alt="Profile Picture" width="150" height="150" />
        </div>
        <div className="column">
          <div className="about-intro">
            <h1 className="name">{profileInfo.name}</h1>
            <h3 className="username">{profileInfo.username}</h3>
            {profileInfo.details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
          <div className="social-links">
            {profileInfo.socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                <img src={link.src} alt={link.alt} className="social-img" width="50" height="50" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;