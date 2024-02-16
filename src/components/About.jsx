import React from "react";
import Chip from "./Chip";
import LinkIcon from "./LinkIcon";
import { faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return ( 
        <div id="about" className="aboutContainer">
            <div className="about">
                <h2>About <span className="dot">.</span></h2> <hr className="aboutHr" /> 
                <div className="aboutContent"> 
                    <div className="aboutText">
                        
                        <p>
                            Hello! My name is Cristian, a technology enthusiast and software 
                            developer.  I'm currently looking for an internship opportunity 
                            in the I.T. area.
                        <br/><br/>
                            I completed a technical course in I.T. integrated with 
                            high school at CETEC-UCS, where I acquired skills in algorithms, 
                            programming, databases and project management. 
                            I have experience in projects using a variety of technologies, 
                            including Python, JavaScript, C#, Django, ReactJS, NodeJS, 
                            PostgreSQL, HTML and CSS. 
                        <br/><br/>
                            I will soon be starting a bachelor's degree in Software Engineering 
                            at UCS, seeking to improve my knowledge even further. 
                        <br/><br/>
                            I believe in technology as a solution to challenges, 
                            and I'm excited to continue my journey 
                            of learning and continuous evolution.
                        </p>
                        <p className="myLinksText">My links <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#F05454" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></p>
                        <a target="_blank" href="https://www.linkedin.com/in/cristian-rafael-metz-2b28931b3/"> <FontAwesomeIcon className="headerLinks aboutIcon" icon={faLinkedin} size="2x"/> </a>
                        <a target="_blank" href="https://github.com/crmetz"> <FontAwesomeIcon className="headerLinks aboutIcon" icon={faGithub} size="2x"/> </a>
                        <a target="_blank" href="https://www.instagram.com/cristianmetz_/"> <FontAwesomeIcon className="headerLinks aboutIcon" icon={faInstagram} size="2x"/> </a>
                        
                    </div>
                    <div className="aboutSkills">
                        <div className="skillsTitle"> 
                            <p className="myLinksText">Technologies:</p> <br />
                        </div>
                        <div className="chipsContainer wrapper">
                            <Chip text="HTML"/>
                            <Chip text="CSS"/>
                            <Chip text="JavaScript"/>

                            <Chip text="ReactJS"/>
                            <Chip text="NodeJS"/>
                            <Chip text="Express"/>

                            <Chip text="Python"/>
                            <Chip text="Django"/>
                            <Chip text="PostgreSQL"/>
                            
                            <Chip text="C#"/>
                            <Chip text="APIs REST"/>
                            <Chip text="Git"/>
                        </div>
                        
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default About;
