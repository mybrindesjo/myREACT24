import React from 'react';

function About() {
    return (
        <main>
            <section className="intro-card">
                <img className="me-picture" src="./img/my.jpeg" alt="me-picture" width="600" height="400" />
                <div className="media-column">
                    <h1>Vem är jag?</h1>
                    <h2>UX/UI-designerstudent med bred erfarenhet och starkt driv!</h2>       
                    <p>Jag heter My Brindesjö, 20 år gammal och bor i Solna. 
                        Just nu studerar jag till UX/UI-designer med frontendkompetens 
                        på Chas Academy. Som person är jag glad, ansvarstagande och alltid 
                        villig att lära mig mer. Andra beskriver mig som hjälpsam, ordningsam 
                        och trevlig – egenskaper som jag strävar efter att ta med mig i allt jag gör.</p>
                </div>
            </section>
            <section className="info-container">
                <h2>Erfarenheter</h2>
                <div className="media-row">
                    <article className="experience-card">
                        <h3>Sportkörning på elitnivå</h3>
                        <div className="description">
                            <p>Under 2023 hade jag förmånen att vara lärling i sportkörningslandslaget. 
                            I rollen som hästskötare och groom deltog jag i internationella tävlingar 
                            och världsmästerskap. Denna tid lärde mig att arbeta under press, vara 
                            flexibel och samarbeta i högpresterande team.</p>
                        </div>
                    </article>
                    <article className="experience-card">
                        <h3>Erfarenhet inom hästnäringen</h3>
                        <div className="description">
                            <p>Jag har praktiserat och arbetat i flera stall, alltid med goda resultat och höga 
                            krav på kvalitet. Dessa erfarenheter har stärkt min organisationsförmåga och arbetsmoral.</p>
                        </div>
                    </article>
                    <article className="experience-card">
                        <h3>Ledarskap och engagemang</h3>
                        <div className="description">
                            <p>Mitt ledarskap har utvecklats genom min roll som hjälpledare för en scoutgrupp, 
                            där jag också genomgått flera ledarskapsutbildningar. Jag har dessutom varit 
                            engagerad i ungdomssektionen på Mariefreds Ridklubb, där jag fick ytterligare 
                            träning i att leda och inspirera andra.</p>
                        </div>
                    </article>
                </div>
            </section>
            <div className="media-row">
                <section className="info-container">
                    <h2>Arbetslivserfarenhet</h2>
                    <article className="info-card">
                        <img src="./img/skansen_logo.jpeg" alt="skansen_logo" width="100" height="100" />
                        <div className="info-text">
                            <h3>Skansen</h3>
                            <p>Lokalvårdare</p>
                            <p>nov. 2023 – nu</p>
                        </div>
                    </article>
                    <article className="info-card">
                        <img src="./img/strangnaskommun.png" alt="strangnaskommun_logo" />
                        <div className="info-text">
                            <h3>Strängnäs kommun</h3>
                            <p>Vårdbiträde</p>
                            <p>apr. 2024 - aug. 2024</p>
                        </div>
                    </article>
                    <article className="info-card">
                        <img src="./img/bollerup.png" alt="bollerups_logo" />
                        <div className="info-text">                
                            <h3>Bollerups naturbruksgymnasium</h3>
                            <p>Hästskötare</p>
                            <p>apr. 2022 - apr. 2023</p>
                        </div>
                    </article>
                </section>
                <section className="info-container">
                    <h2>Utbildning</h2>
                    <article className="info-card">
                        <img src="./img/nedladdning.jpeg" alt="Chas Academy" /> 
                        <div className="info-text">
                            <h3>Chas Academy</h3>
                            <p>UX/UI-designer med frontendkompetens</p>
                            <p>2024 - 2026</p>
                            <h4>Kurser:</h4>
                            <ul>
                                <li>01. IT Tech and Operations</li>
                                <li>02. UI-design och grafisk formgivning</li>
                                <li>03. Grundläggande frontendprogrammering</li>
                                <li>04. React</li>
                                <li>05. UX/UI, interaktionsdesign med agilt arbetssätt</li>
                                <li>06. Fördjupad interaktionsdesign</li>
                                <li>07. LIA</li>
                                <li>08. Examensarbete</li>
                            </ul>
                        </div>
                    </article>
                    <article className="info-card">
                        <img src="./img/södra.png" alt="High School" /> 
                        <div className="info-text">
                            <h3>Södra Stockholms folkhögskola</h3>
                            <p>Gymnasieutbildning</p>
                            <p>2023 - 2024</p>
                        </div>
                    </article>
                    <article className="info-card">
                        <img src="./img/bollerup.png" alt="Strängnäs kommun" /> 
                        <div className="info-text">                
                            <h3>Bollerups naturbruksgymnasium</h3>
                            <p>Samhällskunskap med inriktning häst</p>
                            <p>2020 - 2021</p>
                        </div>
                    </article>
                </section>
            </div>
            <section className="info-container">
                <h2>Kompetenser</h2>
                <ul className="skills">
                    <li>Figma</li>
                    <li>HTML & CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>UX Research</li>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>Usability Testing</li>
                    <li>Responsive Design</li>
                    <li>Design Systems</li>
                    <li>VS Code</li>
                    <li>GitHub</li>
                    <li>Användartester</li>
                    <li>Visuell design</li>
                    <li>Web Content Accessibility Guidelines (WCAG)</li>
                    <li>Logotypdesign</li>
                    <li>Projektplanering</li>
                    <li>Typografi</li>
                    <li>Färgteori</li>
                    <li>Dokumentation</li>
                    <li>Designtänkande</li>
                    <li>Designmönster</li>
                    <li>Analytisk förmåga</li>
                    <li>Grupparbete</li>
                    <li>Användarorienterad design</li>
                    <li>Slack</li>
                    <li>Användbarhet</li>
                    <li>Användarupplevelse</li>
                    <li>UX-design</li>
                    <li>UI-design</li>
                    <li>Interaktionsdesign</li>
                    <li>Programmering</li>
                    <li>Frontend-utveckling</li>
                    <li>Svenska</li>
                    <li>Engelska</li>
                    <li>Hästskötare</li>
                    <li>Hästar</li>
                    <li>B-körkort</li>
                    <li>Jordbrukstraktor</li>
                    <li>Svetsning</li>
                    <li>Röjsåg</li>
                    <li>Terränghjuling</li>
                    <li>Scoutledare</li>
                    <li>Vård och omsorg</li>
                    <li>Städning</li>
                </ul>
            </section>
        </main>
    );
}

export default About;