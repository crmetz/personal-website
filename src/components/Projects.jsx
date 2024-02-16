import React from "react";
import ProjectCard from "./ProjectCard";
import trattoriaImg from '../assets/trattoria.png'
import pixelMafiaImg from '../assets/PixelMafia.png'
import invoiceIssueImg from '../assets/invoceIssue.png'
import adventureLandImg from '../assets/cetecAdventureLand.png'


function Projects() {
    return ( 
        <div id="projects" className="projectsContainer">
            <div className="projects">
                <h2 >Projects<span className="dot">.</span> </h2> <hr className="projectsHr"  />
                <div className="projectCards">
                    <ProjectCard 
                    imgURL={trattoriaImg}
                    projectLink="https://github.com/crmetz/Controle-de-Ingressos-Trattoria"
                    name="Trattoria Arte Italiana"
                    stack="Python - Django - HTML - CSS - PostegreSQL - APIs REST"
                    desc=" A ticket control system integrated with an API for automatically sending personalized messages via WhatsApp. This final project of my technical IT course resulted in a reduction in the time taken to send more than 300 messages, as well as providing a clear view of tickets and buyers. "
                    />
                    <ProjectCard 
                    imgURL={invoiceIssueImg}
                    projectLink="https://github.com/crmetz/Invoices-Issue-Automation"
                    name="Invoices-Issue-Automation"
                    stack="Python - Selenium - Tkinter - win32print"
                    desc=" A straightforward automation tool designed for effortlessly issuing and printing invoices. The program extracts order numbers and their respective pages from the VHSYS ERP system, enabling the swift issuance and printing of a series of invoices with a single click. "
                    />
                    <ProjectCard 
                    imgURL={pixelMafiaImg}
                    projectLink="https://github.com/crmetz/Pixel-MafiaGame"
                    name="Pixel Mafia Game"
                    stack="C# - Unity"
                    desc="This is a dynamic Beat 'em up game created using C# within the Unity game engine. Developed in groups during classes at CETEC UCS, the game is designed to challenge players with exciting combat mechanics and immersive levels. Your objective is to eliminate waves of enemies strategically to progress through each level.
                    
                    "
                    />
                    <ProjectCard 
                    imgURL={adventureLandImg}
                    projectLink="https://github.com/crmetz/cetec-adventure-land"
                    name="CETEC Adventure Land "
                    stack="HTML - CSS - Javascript - Bootstrap"
                    desc="Landing page for and amusement park. It's full responsiveness, using Bootstrap,  it seamlessly adjusts to any screen size, ensuring an optimal experience for all visitors."
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Projects;