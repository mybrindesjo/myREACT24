import React from 'react';

const aboutInfo = {
  intro: {
    imgSrc: "./img/my.jpeg",
    title: "Vem är jag?",
    subtitle: "UX/UI-designerstudent med bred erfarenhet och starkt driv!",
    description: `Jag heter My Brindesjö, 20 år gammal och bor i Solna. 
      Just nu studerar jag till UX/UI-designer med frontendkompetens 
      på Chas Academy. Som person är jag glad, ansvarstagande och alltid 
      villig att lära mig mer. Andra beskriver mig som hjälpsam, ordningsam 
      och trevlig – egenskaper som jag strävar efter att ta med mig i allt jag gör.`
  },
  experiences: [
    {
      title: "Sportkörning på elitnivå",
      description: `Under 2023 hade jag förmånen att vara lärling i sportkörningslandslaget. 
        I rollen som hästskötare och groom deltog jag i internationella tävlingar 
        och världsmästerskap. Denna tid lärde mig att arbeta under press, vara 
        flexibel och samarbeta i högpresterande team.`
    },
    {
      title: "Erfarenhet inom hästnäringen",
      description: `Jag har praktiserat och arbetat i flera stall, alltid med goda resultat och höga 
        krav på kvalitet. Dessa erfarenheter har stärkt min organisationsförmåga och arbetsmoral.`
    },
    {
      title: "Ledarskap och engagemang",
      description: `Mitt ledarskap har utvecklats genom min roll som hjälpledare för en scoutgrupp, 
        där jag också genomgått flera ledarskapsutbildningar. Jag har dessutom varit 
        engagerad i ungdomssektionen på Mariefreds Ridklubb, där jag fick ytterligare 
        träning i att leda och inspirera andra.`
    }
  ],
  workExperience: [
    {
      imgSrc: "./img/skansen_logo.jpeg",
      title: "Skansen",
      role: "Lokalvårdare",
      period: "nov. 2023 – nu"
    },
    {
      imgSrc: "./img/strangnaskommun.png",
      title: "Strängnäs kommun",
      role: "Vårdbiträde",
      period: "apr. 2024 - aug. 2024"
    },
    {
      imgSrc: "./img/bollerup.png",
      title: "Bollerups naturbruksgymnasium",
      role: "Hästskötare",
      period: "apr. 2022 - apr. 2023"
    }
  ],
  education: [
    {
      imgSrc: "./img/nedladdning.jpeg",
      title: "Chas Academy",
      program: "UX/UI-designer med frontendkompetens",
      period: "2024 - 2026",
      courses: [
        "01. IT Tech and Operations",
        "02. UI-design och grafisk formgivning",
        "03. Grundläggande frontendprogrammering",
        "04. React",
        "05. UX/UI, interaktionsdesign med agilt arbetssätt",
        "06. Fördjupad interaktionsdesign",
        "07. LIA",
        "08. Examensarbete"
      ]
    },
    {
      imgSrc: "./img/södra.png",
      title: "Södra Stockholms folkhögskola",
      program: "Gymnasieutbildning",
      period: "2023 - 2024"
    },
    {
      imgSrc: "./img/bollerup.png",
      title: "Bollerups naturbruksgymnasium",
      program: "Samhällskunskap med inriktning häst",
      period: "2020 - 2021"
    }
  ],
  skills: [
    "Figma", "HTML & CSS", "JavaScript", "React", "UX Research", "Wireframing", "Prototyping",
    "Usability Testing", "Responsive Design", "Design Systems", "VS Code", "GitHub", "Användartester",
    "Visuell design", "Web Content Accessibility Guidelines (WCAG)", "Logotypdesign", "Projektplanering",
    "Typografi", "Färgteori", "Dokumentation", "Designtänkande", "Designmönster", "Analytisk förmåga",
    "Grupparbete", "Användarorienterad design", "Slack", "Användbarhet", "Användarupplevelse", "UX-design",
    "UI-design", "Interaktionsdesign", "Programmering", "Frontend-utveckling", "Svenska", "Engelska",
    "Hästskötare", "Hästar", "B-körkort", "Jordbrukstraktor", "Svetsning", "Röjsåg", "Terränghjuling",
    "Scoutledare", "Vård och omsorg", "Städning"
  ]
};

const About = () => {
  return (
    <main>
      <section className="intro-card">
        <img className="me-picture" src={aboutInfo.intro.imgSrc} alt="me-picture" width="600" height="400" />
        <div className="media-column">
          <h1>{aboutInfo.intro.title}</h1>
          <h2>{aboutInfo.intro.subtitle}</h2>
          <p>{aboutInfo.intro.description}</p>
        </div>
      </section>

      <section className="info-container">
        <h2>Erfarenheter</h2>
        <div className="media-row">
          {aboutInfo.experiences.map((experience, index) => (
            <article key={index} className="experience-card">
              <h3>{experience.title}</h3>
              <div className="description">
                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="media-row">
        <section className="info-container">
          <h2>Arbetslivserfarenhet</h2>
          {aboutInfo.workExperience.map((work, index) => (
            <article key={index} className="info-card">
              <img src={work.imgSrc} alt={`${work.title}_logo`} width="100" height="100" />
              <div className="info-text">
                <h3>{work.title}</h3>
                <p>{work.role}</p>
                <p>{work.period}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="info-container">
          <h2>Utbildning</h2>
          {aboutInfo.education.map((edu, index) => (
            <article key={index} className="info-card">
              <img src={edu.imgSrc} alt={`${edu.title}_logo`} width="100" height="100" />
              <div className="info-text">
                <h3>{edu.title}</h3>
                <p>{edu.program}</p>
                <p>{edu.period}</p>
                {edu.courses && (
                  <>
                    <h4>Kurser:</h4>
                    <ul>
                      {edu.courses.map((course, courseIndex) => (
                        <li key={courseIndex}>{course}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>

      <section className="info-container">
        <h2>Kompetenser</h2>
        <ul className="skills">
          {aboutInfo.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default About;