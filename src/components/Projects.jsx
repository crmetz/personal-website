import React from "react";
import ProjectCard from "./ProjectCard";
import trattoriaImg from '../assets/trattoria.png'
import pixelMafiaImg from '../assets/PixelMafia.png'
import invoiceIssueImg from '../assets/invoceIssue.png'
import adventureLandImg from '../assets/cetecAdventureLand.png'
import { useTranslation} from 'react-i18next';


function Projects() {
    const { t } = useTranslation();
    return ( 
        <div id="projects" className="projectsContainer">
            <div className="projects">
                <h2 >{t('projects.title')}<span className="dot">.</span> </h2> <hr className="projectsHr"  />
                <div className="projectCards">
                    <ProjectCard 
                    imgURL={trattoriaImg}
                    projectLink="https://github.com/crmetz/Controle-de-Ingressos-Trattoria"
                    name={t('projects.project.p1.title')}
                    stack="Python - Django - HTML - CSS - PostegreSQL - APIs REST"
                    desc={t('projects.project.p1.desc')}
                    />
                    <ProjectCard 
                    imgURL={invoiceIssueImg}
                    projectLink="https://github.com/crmetz/Invoices-Issue-Automation"
                    name={t('projects.project.p2.title')}
                    stack="Python - Selenium - Tkinter - win32print"
                    desc={t('projects.project.p2.desc')}
                    />
                    <ProjectCard 
                    imgURL={pixelMafiaImg}
                    projectLink="https://github.com/crmetz/Pixel-MafiaGame"
                    name={t('projects.project.p3.title')}
                    stack="C# - Unity"
                    desc={t('projects.project.p3.desc')}
                    />
                    <ProjectCard 
                    imgURL={adventureLandImg}
                    projectLink="https://github.com/crmetz/cetec-adventure-land"
                    name={t('projects.project.p4.title')}
                    stack="HTML - CSS - Javascript - Bootstrap"
                    desc={t('projects.project.p1.desc')}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Projects;