import React from "react";
import LinkIcon from "./LinkIcon";
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import Reveal from './Reveal';



function ProjectCard(props) {
    return ( 
        <div className="cardContainer">
            
            <div className="cardText">
                <div className="projectImageContainer">
                    <Reveal> 
                    <img className="projectImg" src={props.imgURL} alt="project" />
                    </Reveal>
                </div>
                <Reveal> 
                <h3>{props.name}</h3>
                </Reveal>
                <Reveal>
                <p className="stackP">{props.stack}</p>
                </Reveal>
                <Reveal>
                <p>{props.desc}</p>
                </Reveal>
                <Reveal>
                <LinkIcon link={props.projectLink} icon={faGithub} />
                </Reveal>
            </div>
        </div>
    )
}

export default ProjectCard;