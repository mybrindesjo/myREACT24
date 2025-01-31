import React, { useEffect } from 'react';

const Stalltid = () => {
    useEffect(() => {
        const handleToggle = (event) => {
            const button = event.target;
            const details = button.parentElement.nextElementSibling;
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                button.textContent = '-';
            } else {
                details.style.display = 'none';
                button.textContent = '+';
            }
        };

        const buttons = document.querySelectorAll('.toggle-btn');
        buttons.forEach((button) => {
            button.addEventListener('click', handleToggle);
        });

        return () => {
            buttons.forEach((button) => {
                button.removeEventListener('click', handleToggle);
            });
        };
    }, []);

    return (
        <>
            <main>
                <section className="intro-card">
                    <div className="media-column">
                        <h1>Stalltid</h1>
                        <p>En fiktiv app för bokning av hästupplevelser. Vem har inte velat fly vardagen och uppleva en mysig turridning med våra fyrbenta vänner? Perfekt möjlighet att varva ner, tanka energi och återhämtning. Vårt mål var att förmedla den där naturliga, glada och avslappnade känslan genom vår visuella identitet. Vi valde mjuka, naturnära färger och lättlästa typsnitt för att skapa ett inbjudande och harmoniskt intryck.</p>
                    </div>
                </section>
                    
                <section className="project-container-row">
                    <article className="project-card">
                        <div className="project-header">
                            <h2>Skiss och planering</h2>
                            <p>Planeringen började med skisser i Figma för att få en överblick över hur appen skulle se ut. Därefter skapades wireframe för att planera layout och funktionalitet. En enkel och tydlig navigering för att underlätta för användaren.</p>
                        </div>
                        <img className="project-img" src="./img/skissmobile.png" alt="mobile"/>
                        <img className="project-img" src="./img/skissdesktop.png" alt="desktop"/>
                    </article>
        
                    <article className="project-card">
                        <div className="project-header">
                            <h2>Design</h2>
                            <p>Ett färg- och typografi-moodboard för att hitta rätt känsla för appen. Mjuka, naturnära färger och lättlästa typsnitt för att skapa en inbjudande och harmonisk känsla. Logotyp för att förstärka appens identitet.</p>
                        </div>
                        <img className="project-img" src="./img/color.png" alt="color"/>
                        <img className="project-img" src="./img/typescript.png" alt="typography"/>
                    </article>
                </section>
        
                <section className="project-section">
                    <div className="project-header">
                        <h2>Prototyp</h2>
                    </div>
                    <div className='projects'>
                    <div className="project">
                        <div className="row">
                            <h3>Vit/Blå</h3>
                            <button className="toggle-btn">+</button>
                        </div>
                        <div className="project-details" style={{ display: 'none' }}>
                            <div className="media-wrap">
                                <p>En ren och modern design där vitt och blått ger ett intryck av stabilitet, harmoni och enkelhet. Den blå färgen förstärker känslan av trygghet, medan den vita bakgrunden ger tydlighet och professionalitet.</p>
                                <button className="project-btn">
                                    <a href="https://www.figma.com/proto/1mlhuHdmKI0ZTOGpLe5vM3/Stalltid-app-v.1.1-(Copy)?page-id=18%3A2&node-id=18-272&p=f&viewport=-125%2C323%2C0.1&t=4hB8mE7c9jlzo7tB-1&scaling=scale-down&content-scaling=fixed" target="_blank">Se prototypen här</a>
                                </button>
                                <img className="project-img" src="./img/projects/project1/1.png" alt=""/>
                                <img className="project-img" src="./img/projects/project1/2.png" alt=""/>
                                <img className="project-img" src="./img/projects/project1/3.png" alt=""/>
                                <img className="project-img" src="./img/projects/project1/4.png" alt=""/>
                            </div>
                        </div>
                    </div>
        
                    <div className="project">
                        <div className="row" >
                            <h3>Grön/Gul/Beige</h3>
                            <button className="toggle-btn">+</button>
                        </div>
                        <div className="project-details" style={{ display: 'none' }}>
                            <div className="media-wrap">
                                <p>Detta färgtema skapades för att återspegla energi och jordnära lugn. Kombinationen av dessa färger framhäver kopplingen till naturen och förmedlar en varm och välkomnande känsla.</p>
                                <button className="project-btn">
                                    <a href="https://www.figma.com/proto/1mlhuHdmKI0ZTOGpLe5vM3/Stalltid-app-v.1.1-(Copy)?page-id=150%3A674&node-id=150-1273&p=f&viewport=57%2C433%2C0.11&t=cKarFlHvktzSlXmk-1&scaling=scale-down&content-scaling=fixed" target="_blank">Se prototypen här</a>
                                </button>
                                <img className="project-img" src="./img/projects/project1/5.png" alt=""/>
                                <img className="project-img" src="./img/projects/project1/6.png" alt=""/>
                                <img className="project-img" src="./img/projects/project1/7.png" alt=""/>
                                <img className="project-img" src="./img/projects/project1/8.png" alt=""/>
                            </div>
                        </div>
                    </div>
        
                    <div className="project">
                        <div className="row">
                            <h3>Grön/Gul</h3>
                            <button className="toggle-btn">+</button>
                        </div>
                        <div className="project-details" style={{ display: 'none' }}>
                            <div className="media-wrap">
                                <p>Med fokus på naturliga toner av grönt och gult ville vi spegla lugnet och harmonin som förknippas med hästupplevelser. Designen är lekfull och lättnavigerad, vilket gör det enkelt för användare att boka sin upplevelse.</p>
                                <button className="project-btn">
                                    <a href="https://www.figma.com/proto/1mlhuHdmKI0ZTOGpLe5vM3/Stalltid-app-v.1.1-(Copy)?page-id=126%3A674&node-id=110-795&p=f&viewport=209%2C395%2C0.05&t=g46MHDKNV7TOknhH-1&scaling=scale-down&content-scaling=fixed" target="_blank">Se prototypen här</a>
                                </button>
                                <img className="project-img" src="./img/projects/project1/9.png" alt=""/>
                                <img className="project-img" src="./img/projects/project1/10.png" alt=""/>
                                <img className="project-img" src="./img/projects/project1/11.png" alt=""/>
                                <img className="project-img" src="./img/projects/project1/12.png" alt=""/>
                            </div>
                        </div>
                    </div>
        
                    <div className="project">
                        <div className="row">
                            <h3>Slutgiltlig design</h3>
                            <button className="toggle-btn">+</button>
                        </div>
                        <div className="project-details" style={{ display: 'none' }}>
                            <button className="project-btn">
                                <a href="https://www.figma.com/proto/8mIqncMmlUloP5YrlgQa56/Projekt%3A-Stalltid?page-id=0%3A1&node-id=1-664&p=f&viewport=170%2C188%2C0.07&t=rppXdEwoDp5jpRkq-1&scaling=scale-down&content-scaling=fixed" target="_blank">Prototyp desktop</a>
                            </button>
                            <button className="project-btn">
                                <a href="https://www.figma.com/proto/8mIqncMmlUloP5YrlgQa56/Projekt%3A-Stalltid?page-id=1%3A1285&node-id=1-1877&p=f&viewport=393%2C327%2C0.06&t=McdOXKUVNnSI5I1t-1&scaling=scale-down&content-scaling=fixed" target="_blank">Prototyp mobile</a>
                            </button>
                            <img className="project-img" src="./img/projects/project1/13.png" alt=""/>
                            <img className="project-img" src="./img/projects/project1/14.png" alt=""/>
                            <img className="project-img" src="./img/projects/project1/15.png" alt=""/>
                            <img className="project-img" src="./img/projects/project1/16.png" alt=""/>
                            <img className="project-img" src="./img/projects/project1/17.png" alt=""/>
                            <img className="project-img" src="./img/projects/project1/18.png" alt=""/>
                        </div>
                    </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Stalltid;