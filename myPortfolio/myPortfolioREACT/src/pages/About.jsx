import React from 'react';
import InfoCard from '../components/InfoCard'; // Import the new InfoCard component
import IntroCard from '../components/IntroCard'; // Import the new IntroCard component
import ExperienceCard from '../components/ExperienceCard'; // Import the new ExperienceCard component
import SkillList from '../components/SkillList'; // Import the new SkillList component
import CourseList from '../components/CourseList'; // Import the new CourseList component


function About() {
    return (
        <main>
            <IntroCard 
                imgSrc="./img/my.jpeg" 
                imgAlt="me-picture" 
                title="Vem är jag?" 
                subtitle="UX/UI-designerstudent med bred erfarenhet och starkt driv!" 
                description="Jag heter My Brindesjö, 20 år gammal och bor i Solna. 
                    Just nu studerar jag till UX/UI-designer med frontendkompetens 
                    på Chas Academy. Som person är jag glad, ansvarstagande och alltid 
                    villig att lära mig mer. Andra beskriver mig som hjälpsam, ordningsam 
                    och trevlig – egenskaper som jag strävar efter att ta med mig i allt jag gör."
            />
            <div className="info-container">
                <h2>Erfarenheter</h2>
                <div className="media-row">
                    <ExperienceCard 
                        title="Sportkörning på elitnivå" 
                        description="Under 2023 hade jag förmånen att vara lärling i sportkörningslandslaget. 
                            I rollen som hästskötare och groom deltog jag i internationella tävlingar 
                            och världsmästerskap. Denna tid lärde mig att arbeta under press, vara 
                            flexibel och samarbeta i högpresterande team."
                    />
                    <ExperienceCard 
                        title="Erfarenhet inom hästnäringen" 
                        description="Jag har praktiserat och arbetat i flera stall, alltid med goda resultat och höga 
                            krav på kvalitet. Dessa erfarenheter har stärkt min organisationsförmåga och arbetsmoral."
                    />
                    <ExperienceCard 
                        title="Ledarskap och engagemang" 
                        description="Mitt ledarskap har utvecklats genom min roll som hjälpledare för en scoutgrupp, 
                            där jag också genomgått flera ledarskapsutbildningar. Jag har dessutom varit 
                            engagerad i ungdomssektionen på Mariefreds Ridklubb, där jag fick ytterligare 
                            träning i att leda och inspirera andra."
                    />
                </div>
            </div>
            <div className="media-row">
                <div className="info-container">
                    <h2>Arbetslivserfarenhet</h2>
                    <InfoCard 
                        imgSrc="./img/skansen.jpeg" 
                        imgAlt="Skansen" 
                        title="Skansen" 
                        subtitle="Lokalvårdare" 
                        date="nov. 2023 – nu" 
                    />
                    <InfoCard 
                        imgSrc="./img/strangnaskommun.png" 
                        imgAlt="strangnaskommun_logo" 
                        title="Strängnäs kommun" 
                        subtitle="Vårdbiträde" 
                        date="apr. 2024 - aug. 2024" 
                    />
                    <InfoCard 
                        imgSrc="./img/bollerup.png" 
                        imgAlt="Bollerups naturbruksgymnasium" 
                        title="Bollerups naturbruksgymnasium" 
                        subtitle="Hästskötare" 
                        date="apr. 2022 - apr. 2023" 
                    />
                </div>
                <div className="info-container">
                    <h2>Utbildning</h2>
                    <InfoCard 
                        imgSrc="./img/chasacademy.jpeg" 
                        imgAlt="Chas Academy" 
                        title="Chas Academy" 
                        subtitle="UX/UI-designer med frontendkompetens" 
                        date="2024 - 2026" 
                        extraContent={
                            <>
                                <h4>Kurser:</h4>
                                <CourseList courses={[
                                    "01. IT Tech and Operations",
                                    "02. UI-design och grafisk formgivning",
                                    "03. Grundläggande frontendprogrammering",
                                    "04. React",
                                    "05. UX/UI, interaktionsdesign med agilt arbetssätt",
                                    "06. Fördjupad interaktionsdesign",
                                    "07. LIA",
                                    "08. Examensarbete"
                                ]} />
                            </>
                        }
                    />
                    <InfoCard 
                        imgSrc="./img/södra.png" 
                        imgAlt="High School" 
                        title="Södra Stockholms folkhögskola" 
                        subtitle="Gymnasieutbildning" 
                        date="2023 - 2024" 
                    />
                    <InfoCard 
                        imgSrc="./img/bollerup.png" 
                        imgAlt="Bollerups naturbruksgymnasium" 
                        title="Bollerups naturbruksgymnasium" 
                        subtitle="Samhällskunskap med inriktning häst" 
                        date="2020 - 2021" 
                    />
                </div>
            </div>
            <div className="info-container">
                <h2>Kompetenser</h2>
                <SkillList skills={[
                    "Figma", "HTML & CSS", "JavaScript", "React", "UX Research", "Wireframing", 
                    "Prototyping", "Usability Testing", "Responsive Design", "Design Systems", 
                    "VS Code", "GitHub", "Användartester", "Visuell design", 
                    "Web Content Accessibility Guidelines (WCAG)", "Logotypdesign", "Projektplanering", 
                    "Typografi", "Färgteori", "Dokumentation", "Designtänkande", "Designmönster", 
                    "Analytisk förmåga", "Grupparbete", "Användarorienterad design", "Slack", 
                    "Användbarhet", "Användarupplevelse", "UX-design", "UI-design", "Interaktionsdesign", 
                    "Programmering", "Frontend-utveckling", "Svenska", "Engelska", "Hästskötare", 
                    "Hästar", "B-körkort", "Jordbrukstraktor", "Svetsning", "Röjsåg", "Terränghjuling", 
                    "Scoutledare", "Vård och omsorg", "Städning"
                ]} />
            </div>
        </main>
    );
}

export default About;