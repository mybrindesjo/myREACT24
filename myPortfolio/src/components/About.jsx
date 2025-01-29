import React from 'react';
import InfoCard from './InfoCard'; // Import the new InfoCard component
import IntroCard from './IntroCard'; // Import the new IntroCard component
import ExperienceCard from './ExperienceCard'; // Import the new ExperienceCard component
import SkillList from './SkillList'; // Import the new SkillList component
import CourseList from './CourseList'; // Import the new CourseList component

function About() {
    return (
        <main>
            <IntroCard />
            <section className="info-container">
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
            </section>
            <div className="media-row">
                <section className="info-container">
                    <h2>Arbetslivserfarenhet</h2>
                    <InfoCard 
                        imgSrc="./img/skansen_logo.jpeg" 
                        imgAlt="skansen_logo" 
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
                        imgAlt="bollerups_logo" 
                        title="Bollerups naturbruksgymnasium" 
                        subtitle="Hästskötare" 
                        date="apr. 2022 - apr. 2023" 
                    />
                </section>
                <section className="info-container">
                    <h2>Utbildning</h2>
                    <InfoCard 
                        imgSrc="./img/nedladdning.jpeg" 
                        imgAlt="Chas Academy" 
                        title="Chas Academy" 
                        subtitle="UX/UI-designer med frontendkompetens" 
                        date="2024 - 2026" 
                        extraContent={
                            <>
                                <h4>Kurser:</h4>
                                <CourseList />
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
                        imgAlt="Strängnäs kommun" 
                        title="Bollerups naturbruksgymnasium" 
                        subtitle="Samhällskunskap med inriktning häst" 
                        date="2020 - 2021" 
                    />
                </section>
            </div>
            <section className="info-container">
                <h2>Kompetenser</h2>
                <SkillList />
            </section>
        </main>
    );
}

export default About;