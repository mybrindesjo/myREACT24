import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const project1Info = {
  intro: {
    title: "Stalltid",
    description: `En fiktiv app för bokning av hästupplevelser. Vem har inte velat fly vardagen och uppleva en mysig turridning med våra fyrbenta vänner? Perfekt möjlighet att varva ner, tanka energi och återhämtning. Vårt mål var att förmedla den där naturliga, glada och avslappnade känslan genom vår visuella identitet. Vi valde mjuka, naturnära färger och lättlästa typsnitt för att skapa ett inbjudande och harmoniskt intryck.`
  },
  sections: [
    {
      title: "Skiss och planering",
      description: `Planeringen började med skisser i Figma för att få en överblick över hur appen skulle se ut. Därefter skapades wireframe för att planera layout och funktionalitet. En enkel och tydlig navigering för att underlätta för användaren.`,
      images: ["./img/skissmobile.png", "./img/skissdesktop.png"]
    },
    {
      title: "Design",
      description: `Ett färg- och typografi-moodboard för att hitta rätt känsla för appen. Mjuka, naturnära färger och lättlästa typsnitt för att skapa en inbjudande och harmonisk känsla. Logotyp för att förstärka appens identitet.`,
      images: ["./img/färg.png", "./img/typography.png"]
    }
  ],
  prototypes: [
    {
      title: "Vit/Blå",
      description: `En ren och modern design där vitt och blått ger ett intryck av stabilitet, harmoni och enkelhet. Den blå färgen förstärker känslan av trygghet, medan den vita bakgrunden ger tydlighet och professionalitet.`,
      link: "https://www.figma.com/proto/1mlhuHdmKI0ZTOGpLe5vM3/Stalltid-app-v.1.1-(Copy)?page-id=18%3A2&node-id=18-272&p=f&viewport=-125%2C323%2C0.1&t=4hB8mE7c9jlzo7tB-1&scaling=scale-down&content-scaling=fixed",
      images: ["./img/projects/project1/1.png", "./img/projects/project1/2.png", "./img/projects/project1/3.png", "./img/projects/project1/4.png"]
    },
    {
      title: "Grön/Gul/Beige",
      description: `Detta färgtema skapades för att återspegla energi och jordnära lugn. Kombinationen av dessa färger framhäver kopplingen till naturen och förmedlar en varm och välkomnande känsla.`,
      link: "https://www.figma.com/proto/1mlhuHdmKI0ZTOGpLe5vM3/Stalltid-app-v.1.1-(Copy)?page-id=150%3A674&node-id=150-1273&p=f&viewport=57%2C433%2C0.11&t=cKarFlHvktzSlXmk-1&scaling=scale-down&content-scaling=fixed",
      images: ["./img/projects/project1/5.png", "./img/projects/project1/6.png", "./img/projects/project1/7.png", "./img/projects/project1/8.png"]
    },
    {
      title: "Grön/Gul",
      description: `Med fokus på naturliga toner av grönt och gult ville vi spegla lugnet och harmonin som förknippas med hästupplevelser. Designen är lekfull och lättnavigerad, vilket gör det enkelt för användare att boka sin upplevelse.`,
      link: "https://www.figma.com/proto/1mlhuHdmKI0ZTOGpLe5vM3/Stalltid-app-v.1.1-(Copy)?page-id=126%3A674&node-id=110-795&p=f&viewport=209%2C395%2C0.05&t=g46MHDKNV7TOknhH-1&scaling=scale-down&content-scaling=fixed",
      images: ["./img/projects/project1/9.png", "./img/projects/project1/10.png", "./img/projects/project1/11.png", "./img/projects/project1/12.png"]
    },
    {
      title: "Slutgiltlig design",
      links: [
        {
          text: "Prototyp desktop",
          url: "https://www.figma.com/proto/8mIqncMmlUloP5YrlgQa56/Projekt%3A-Stalltid?page-id=0%3A1&node-id=1-664&p=f&viewport=170%2C188%2C0.07&t=rppXdEwoDp5jpRkq-1&scaling=scale-down&content-scaling=fixed"
        },
        {
          text: "Prototyp mobile",
          url: "https://www.figma.com/proto/8mIqncMmlUloP5YrlgQa56/Projekt%3A-Stalltid?page-id=1%3A1285&node-id=1-1877&p=f&viewport=393%2C327%2C0.06&t=McdOXKUVNnSI5I1t-1&scaling=scale-down&content-scaling=fixed"
        }
      ],
      images: ["./img/projects/project1/13.png", "./img/projects/project1/14.png", "./img/projects/project1/15.png", "./img/projects/project1/16.png", "./img/projects/project1/17.png", "./img/projects/project1/18.png"]
    }
  ],
  skills: [
    "Figma", "UI-design", "Användbarhet", "Logotypdesign", "Designtänkande", "Användarvänlig", "Wireframing", "Grupparbete", "Dokumentation", "Visuell design", "Analytisk förmåga", "Designmönster", "Projektplanering", "Typografi", "Färgteori", "Användarorienterad design", "Web Content Accessibility Guidelines (WCAG)", "Prototyping"
  ]
};

const Section = ({ title, description, images }) => (
  <article className="project-card">
    <div className="project-header">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    {images && images.map((src, index) => (
      <img key={index} className="project-img" src={src} alt="" />
    ))}
  </article>
);

const Prototype = ({ title, description, link, images, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="project">
      <div className="row">
        <h3>{title}</h3>
        <button className="toggle-btn" onClick={() => setOpen(!open)}>{open ? '-' : '+'}</button>
      </div>
      <div className="project-details" style={{ display: open ? 'block' : 'none' }}>
        {description && <p>{description}</p>}
        {link && (
          <button className="project-btn">
            <a href={link} target="_blank">Se prototypen här</a>
          </button>
        )}
        {links && links.map((link, index) => (
          <button key={index} className="project-btn">
            <a href={link.url} target="_blank">{link.text}</a>
          </button>
        ))}
        {images && images.map((src, index) => (
          <img key={index} className="project-img" src={src} alt="" />
        ))}
      </div>
    </div>
  );
};

const Project1 = () => {
  return (
    <>
      <main>
        <section className="intro-card">
          <div className="media-column">
            <h1>{project1Info.intro.title}</h1>
            <p>{project1Info.intro.description}</p>
          </div>
        </section>

        <section className="project-container-row">
          {project1Info.sections.map((section, index) => (
            <Section key={index} {...section} />
          ))}
        </section>

        <section className="project-card">
          {project1Info.prototypes.map((prototype, index) => (
            <Prototype key={index} {...prototype} />
          ))}
        </section>

        <section className="info-container">
          <h2>Kompetenser</h2>
          <ul className="skills">
            {project1Info.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Project1;
