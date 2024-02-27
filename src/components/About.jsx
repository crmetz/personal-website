import React from "react";
import Chip from "./Chip";
import { useTranslation} from 'react-i18next';
import { faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reveal from './Reveal';


function About() {
    const { t } = useTranslation();
    return ( 
        <div id="about" className="aboutContainer">
            <div className="about">
                
            <h2> <Reveal>{t('about.title')}<span className="dot">.</span></Reveal> </h2> <hr className="aboutHr" /> 
                
                <div className="aboutContent"> 
                    <div className="aboutText">
                        
                        <p>
                            <Reveal>
                            {t('about.text.part1')}<br /><br />
                            </Reveal>
                            <Reveal>
                            {t('about.text.part2')}<br /><br />
                            </Reveal>
                            <Reveal>
                            {t('about.text.part3')}<br /><br />
                            </Reveal>
                            <Reveal>
                            {t('about.text.part4')}<br />
                            </Reveal>
                        </p>
                        <Reveal>
                        <p className="myLinksText">{t('about.links')}<svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#F05454" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></p>
                        <a target="_blank" href="https://www.linkedin.com/in/cristian-rafael-metz-2b28931b3/"> <FontAwesomeIcon className="headerLinks aboutIcon" icon={faLinkedin} size="2x"/> </a>
                        <a target="_blank" href="https://github.com/crmetz"> <FontAwesomeIcon className="headerLinks aboutIcon" icon={faGithub} size="2x"/> </a>
                        <a target="_blank" href="https://www.instagram.com/cristianmetz_/"> <FontAwesomeIcon className="headerLinks aboutIcon" icon={faInstagram} size="2x"/> </a>
                        </Reveal>
                    </div>
                    <div className="aboutSkills">
                        <div className="skillsTitle"> 
                        <Reveal>
                            <p className="myLinksText">{t('about.technologies')}</p> <br />
                            </Reveal>
                        </div>
                        <Reveal>
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
                        </Reveal>
                        
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default About;
