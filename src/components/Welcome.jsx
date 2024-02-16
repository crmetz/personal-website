import React from "react";
import { Divider  } from 'antd';
import profilePic from "../assets/eu.png";


function Welcome() {
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
                            <h1 className="myName">Cristian Metz👋🏼</h1>
                            <p>
                                <Divider style={dividerStyle} className="custom-divider" orientation="left"> Software Developer</Divider>
                            </p>
                            <p className="welcomeText">
                                I'm skilled in web development. I completed an I.T. technician course at CETEC-UCS, and currently beginning a bachelor's degree in Software Engineering.
                            </p>
                            <a href="#contact"> <button className="button contactBtn">Contact Me</button> </a>
                            
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