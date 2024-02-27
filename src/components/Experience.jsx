import React from "react";
import Chip from "./Chip";
import { useTranslation} from 'react-i18next';
import Reveal from './Reveal';

function Experience() {
    const { t } = useTranslation();
    return ( 
        <div id="exp" className="experienceContainer">
            <div className="experience">
                <h2> <Reveal> {t('experience.title')}<span className="dot">.</span></Reveal> </h2> <hr className="expHr" />
                <div className="wrapper">
                <div>
                <Reveal>
                    <h3> Siame Biscoitos </h3>
                </Reveal>
                <Reveal>
                    <p> 2021 - 2023 </p>
                </Reveal>
                <Reveal>
                    <p> {t('experience.profession')} </p>
                </Reveal>
                <Reveal>
                    <div className="experienceChips">
                    <Chip text="Python"/>
                    <Chip text="Tkinter"/>
                    <Chip text="Selenium"/>
                    <Chip text="Photoshop"/>
                    </div>
                </Reveal>
                </div>
                <div>                        
                    <ul>
                        <Reveal>
                        <li>
                            {t('experience.description.item1')}
                         </li>
                         </Reveal>
                        
                
                         <br />
                        <Reveal>
                        <li>
                        {t('experience.description.item2')}
                        </li>
                        </Reveal>
                        <br />
                        <Reveal>
                        <li> 
                            {t('experience.description.item3')}
                        </li>
                        </Reveal>
                    
                    </ul>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Experience;