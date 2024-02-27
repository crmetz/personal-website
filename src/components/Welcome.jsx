import React from "react";
import { Divider  } from 'antd';
import profilePic from "../assets/eu.png";
import { useTranslation} from 'react-i18next';
import Reveal from './Reveal';
import { motion } from "framer-motion";

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
                            <Reveal>
                            <h1 className="myName">{t('welcome.name')}</h1>
                            </Reveal>
                            
                            <p>
                            
                                <Divider style={dividerStyle} className="custom-divider" orientation="left"> <Reveal>{t('welcome.profession')}</Reveal></Divider>
                            
                            </p>
                            
                            <Reveal>
                            <p className="welcomeText">
                            {t('welcome.description')}
                            </p>
                            </Reveal>
                            <Reveal>
                            <a href="#contact"> 
                            
                            {/* <button className="button contactBtn">{t('welcome.contact')}</button>  */}
                            <motion.button
                                className="button contactBtn"
                                whileHover={{ scale: 1.05}}
                                whileTap={{ scale: 0.95 }}
                            >
                            {t('welcome.contact')}
                            </motion.button>
                            
                            </a>
                            </Reveal>
                        </div>
                        <Reveal>
                        <div className="imageContainer">
                            <img src={profilePic} alt="profile" className="profilePic" />
                        </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        )
}

export default Welcome;