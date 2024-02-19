import React from "react";
import { Divider  } from 'antd';
import profilePic from "../assets/eu.png";
import { useTranslation} from 'react-i18next';


function Welcome() {
    const { t } = useTranslation();
    const dividerStyle = {
        color: "#DDDDDD",
        borderColor: "#F05454",
        fontSize: "19px"
    };

    return (
            <div id="home" className="welcomeContainer">
                <div className="welcome">
                    <div className="content">
                        <div className="textContainer">
                            <h1 className="myName">{t('welcome.name')}</h1>
                            <p>
                                <Divider style={dividerStyle} className="custom-divider" orientation="left"> {t('welcome.profession')}</Divider>
                            </p>
                            <p className="welcomeText">
                            {t('welcome.description')}
                            </p>
                            <a href="#contact"> <button className="button contactBtn">{t('welcome.contact')}</button> </a>
                            
                        </div>
                        <div className="imageContainer">
                            <img src={profilePic} alt="profile" className="profilePic" />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Welcome;