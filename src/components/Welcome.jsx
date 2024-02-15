import React from "react";
import { Divider  } from 'antd';
import profilePic from "../assets/eu.png";


function Welcome() {
    const dividerStyle = {
        color: "#DDDDDD",
        borderColor: "#DDDDDD",
        fontSize: "19px"
    };

    return (
            <div className="welcomeContainer">
                <div className="welcome">
                    <div className="content">
                        <div className="textContainer">
                            <h1 className="myName">Cristian Metz👋🏼</h1>
                            <p>
                                <Divider style={dividerStyle} className="custom-divider" orientation="left"> Software Developer<span className="dot">.</span></Divider>
                            </p>
                            <p className="welcomeText">
                                I've finished an I.T. technician course at CETEC-UCS and starting a bachelor degree in Software Engineering. I'm most skilled in web development.
                            </p>
                            <button className="button contactBtn">Contact Me</button>
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