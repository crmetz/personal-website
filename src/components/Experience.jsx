import React from "react";
import Chip from "./Chip";
import { useTranslation} from 'react-i18next';

function Experience() {
    const { t } = useTranslation();
    return ( 
        <div id="exp" className="experienceContainer">
            <div className="experience">
                <h2> {t('experience.title')}<span className="dot">.</span> </h2> <hr className="expHr" />
                <div className="wrapper">
                <div>
                    <h3> Siame Biscoitos </h3>
                    <p> 2021 - 2023 </p>
                    <p> {t('experience.profession')} </p>
                    <div className="experienceChips">
                    <Chip text="Python"/>
                    <Chip text="Tkinter"/>
                    <Chip text="Selenium"/>
                    <Chip text="Photoshop"/>
                    </div>
                </div>
                <div>                        
                    <ul>
                        <li>
                            {t('experience.description.item1')}
                         </li>
                         <br />

                        <li>
                        {t('experience.description.item2')}
                        </li>
                        <br />
                        <li> 
                            {t('experience.description.item3')}
                        </li>
                    
                    </ul>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Experience;