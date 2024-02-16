import React from "react";
import LinkIcon from "./LinkIcon";
import { faGithub} from '@fortawesome/free-brands-svg-icons';




function ProjectCard(props) {
    return ( 
        <div className="cardContainer">
            
            <div className="cardText">
                <div className="projectImageContainer"> 
                    <img className="projectImg" src={props.imgURL} alt="project" />
                </div>
                <h3>{props.name}</h3>
                
                <p className="stackP">{props.stack}</p>
                <p>{props.desc}</p>
                <LinkIcon link={props.projectLink} icon={faGithub} />
            </div>
        </div>
    )
}

export default ProjectCard;