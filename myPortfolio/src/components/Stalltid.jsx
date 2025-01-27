import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';

function Stalltid() {
    const projectCards = [
        {
            title: "Skiss och planering",
            description: "Planeringen började med skisser i Figma för att få en överblick över hur appen skulle se ut. Därefter skapades wireframe för att planera layout och funktionalitet. En enkel och tydlig navigering för att underlätta för användaren.",
            images: [
                { src: "./img/skissmobile.png", alt: "mobile" },
                { src: "./img/skissdesktop.png", alt: "desktop" }
            ]
        },
        {
            title: "Design",
            description: "Ett färg- och typografi-moodboard för att hitta rätt känsla för appen. Mjuka, naturnära färger och lättlästa typsnitt för att skapa en inbjudande och harmonisk känsla. Logotyp för att förstärka appens identitet.",
            images: [
                { src: "./img/färg.png", alt: "color" },
                { src: "./img/Skärmavbild 2025-01-16 kl. 09.45.05.png", alt: "typography" }
            ]
        }
    ];

    const projectSections = [
        {
            title: "Prototyp",
            projects: [
                {
                    title: "Vit/Blå",
                    description: "En ren och modern design där vitt och blått ger ett intryck av stabilitet, harmoni och enkelhet. Den blå färgen förstärker känslan av trygghet, medan den vita bakgrunden ger tydlighet och professionalitet.",
                    link: "https://www.figma.com/proto/1mlhuHdmKI0ZTOGpLe5vM3/Stalltid-app-v.1.1-(Copy)?page-id=18%3A2&node-id=18-272&p=f&viewport=-125%2C323%2C0.1&t=4hB8mE7c9jlzo7tB-1&scaling=scale-down&content-scaling=fixed",
                    images: [
                        { src: "./img/projects/project1/1.png", alt: "project image 1" },
                        { src: "./img/projects/project1/2.png", alt: "project image 2" },
                        { src: "./img/projects/project1/3.png", alt: "project image 3" },
                        { src: "./img/projects/project1/4.png", alt: "project image 4" }
                    ]
                },
                {
                    title: "Grön/Gul/Beige",
                    description: "Detta färgtema skapades för att återspegla energi och jordnära lugn. Kombinationen av dessa färger framhäver kopplingen till naturen och förmedlar en varm och välkomnande känsla.",
                    link: "https://www.figma.com/proto/1mlhuHdmKI0ZTOGpLe5vM3/Stalltid-app-v.1.1-(Copy)?page-id=150%3A674&node-id=150-1273&p=f&viewport=57%2C433%2C0.11&t=cKarFlHvktzSlXmk-1&scaling=scale-down&content-scaling=fixed",
                    images: [
                        { src: "./img/projects/project1/5.png", alt: "project image 5" },
                        { src: "./img/projects/project1/6.png", alt: "project image 6" },
                        { src: "./img/projects/project1/7.png", alt: "project image 7" },
                        { src: "./img/projects/project1/8.png", alt: "project image 8" }
                    ]
                },
                {
                    title: "Grön/Gul",
                    description: "Med fokus på naturliga toner av grönt och gult ville vi spegla lugnet och harmonin som förknippas med hästupplevelser. Designen är lekfull och lättnavigerad, vilket gör det enkelt för användare att boka sin upplevelse.",
                    link: "https://www.figma.com/proto/1mlhuHdmKI0ZTOGpLe5vM3/Stalltid-app-v.1.1-(Copy)?page-id=126%3A674&node-id=110-795&p=f&viewport=209%2C395%2C0.05&t=g46MHDKNV7TOknhH-1&scaling=scale-down&content-scaling=fixed",
                    images: [
                        { src: "./img/projects/project1/9.png", alt: "project image 9" },
                        { src: "./img/projects/project1/10.png", alt: "project image 10" },
                        { src: "./img/projects/project1/11.png", alt: "project image 11" },
                        { src: "./img/projects/project1/12.png", alt: "project image 12" }
                    ]
                },
                {
                    title: "Slutgiltlig design",
                    link: "https://www.figma.com/proto/8mIqncMmlUloP5YrlgQa56/Projekt%3A-Stalltid?page-id=0%3A1&node-id=1-664&p=f&viewport=170%2C188%2C0.07&t=rppXdEwoDp5jpRkq-1&scaling=scale-down&content-scaling=fixed",
                    images: [
                        { src: "./img/projects/project1/13.png", alt: "project image 13" },
                        { src: "./img/projects/project1/14.png", alt: "project image 14" },
                        { src: "./img/projects/project1/15.png", alt: "project image 15" },
                        { src: "./img/projects/project1/16.png", alt: "project image 16" },
                        { src: "./img/projects/project1/17.png", alt: "project image 17" },
                        { src: "./img/projects/project1/18.png", alt: "project image 18" }
                    ]
                }
            ]
        }
    ];

    const skills = [
        "Figma", "UI-design", "Användbarhet", "Logotypdesign", "Designtänkande", "Användarvänlig", "Wireframing", "Grupparbete", "Dokumentation", "Visuell design", "Analytisk förmåga", "Designmönster", "Projektplanering", "Typografi", "Färgteori", "Användarorienterad design", "Web Content Accessibility Guidelines (WCAG)", "Prototyping"
    ];

    return (
        <main>
            <section className="intro-card">
                <h1>Stalltid</h1>
                <p>En fiktiv app för bokning av hästupplevelser. Vem har inte velat fly vardagen och uppleva en mysig turridning med våra fyrbenta vänner? Perfekt möjlighet att varva ner, tanka energi och återhämtning. Vårt mål var att förmedla den där naturliga, glada och avslappnade känslan genom vår visuella identitet. Vi valde mjuka, naturnära färger och lättlästa typsnitt för att skapa ett inbjudande och harmoniskt intryck.</p>
            </section>
            
            <section className="project-container-row">
                {projectCards.map((card, index) => (
                    <ProjectCard key={index} title={card.title} description={card.description} images={card.images} />
                ))}
            </section>

            {projectSections.map((section, index) => (
                <ProjectSection key={index} title={section.title} projects={section.projects} />
            ))}

            <SkillsSection skills={skills} />

            <div className="fullscreen-overlay">
                <button className="close-btn">Stäng</button>
                <img src="" alt="Fullscreen Image"/>
            </div>
        </main>
    );
}

export default Stalltid;