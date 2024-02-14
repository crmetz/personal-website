import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


function App() {
  const iconStyle = {
    color: '#DDDDDD', // Set color to #DDDDDD
  };

  return (
    <div>
      <header>
        <a href="https://www.linkedin.com/in/cristian-rafael-metz-2b28931b3/"> <FontAwesomeIcon style={iconStyle} icon={faLinkedin} /> </a>
        <a href="https://github.com/crmetz"> <FontAwesomeIcon style={iconStyle} icon={faGithub} /> </a>
        <a href="https://www.instagram.com/cristianmetz_/"> <FontAwesomeIcon style={iconStyle} icon={faInstagram} /></a>
        <button>My resume</button>
      </header>
      <div className="side-bar">
        <p>About</p>
        <p>Projects</p>
        <p>Exp.</p>
        <p>Contact</p>
      </div>
      <div>
        <h1> Cristian Metz👋🏼 </h1>
        <hr></hr>
        <h2> I'm a Software Developer</h2>
        <p> I've finished a I.T. technician course at CETEC-UCS and 
            starting a bachelor degree in Software Engineering. I'm most skilled
            in web development. 
        </p>
        <button> Contact Me</button>
      </div>
    </div>
  );
}

export default App;
