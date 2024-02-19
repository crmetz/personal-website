import React from "react";
import { useTranslation} from 'react-i18next';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode } from '@fortawesome/free-brands-svg-icons';

function SideBar() {
    const { t } = useTranslation();

    return (
        <div className="sidebar">
            <svg id="logo" mlns="http://www.w3.org/2000/svg" height="20" width="25" viewBox="0 0 640 512"><path fill="#f05454" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
            <div className="SB-Container"><a href="#about">{t('sidebar.about')}</a></div>
            <div className="SB-Container"><a href="#projects">{t('sidebar.projects')}</a></div>
            <div className="SB-Container"> <a href="#exp">{t('sidebar.exp')}</a></div>
            <div className="SB-Container"> <a href="#contact">{t('sidebar.contact')}</a> </div>
            
            
        </div>
    )
}

export default SideBar;