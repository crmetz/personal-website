import React from "react";
import ProjectCard from "./ProjectCard";
import trattoriaImg from '../assets/trattoria.png'



function Projects() {
    return ( 
        <div className="projectsContainer">
            <div className="projects">
                <h2 >Projects <span className="dot">.</span> </h2> <hr />
                <div className="projectCards">
                    <ProjectCard 
                    imgURL={trattoriaImg}
                    name="Trattoria Arte Italiana"
                    stack="Python - Django - HTML - CSS - PostegreSQL - APIs REST"
                    desc=" A ticket control system integrated with an API for automatically sending personalized messages via WhatsApp. This final project of my technical IT course resulted in a reduction in the time taken to send more than 300 messages, as well as providing a clear view of tickets and buyers. "
                    />
                    <ProjectCard 
                    imgURL={trattoriaImg}
                    name="Trattoria Arte Italiana"
                    stack="Python - Django - HTML - CSS - PostegreSQL - APIs REST"
                    desc=" A ticket control system integrated with an API for automatically sending personalized messages via WhatsApp. This final project of my technical IT course resulted in a reduction in the time taken to send more than 300 messages, as well as providing a clear view of tickets and buyers. "
                    />
                    <ProjectCard 
                    imgURL={trattoriaImg}
                    name="Trattoria Arte Italiana"
                    stack="Python - Django - HTML - CSS - PostegreSQL - APIs REST"
                    desc=" A ticket control system integrated with an API for automatically sending personalized messages via WhatsApp. This final project of my technical IT course resulted in a reduction in the time taken to send more than 300 messages, as well as providing a clear view of tickets and buyers. "
                    />
                    <ProjectCard 
                    imgURL={trattoriaImg}
                    name="Trattoria Arte Italiana"
                    stack="Python - Django - HTML - CSS - PostegreSQL - APIs REST"
                    desc=" A ticket control system integrated with an API for automatically sending personalized messages via WhatsApp. This final project of my technical IT course resulted in a reduction in the time taken to send more than 300 messages, as well as providing a clear view of tickets and buyers. "
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Projects;