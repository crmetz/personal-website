import React from "react";
import LinkIcon from "./LinkIcon";
import { faGithub} from '@fortawesome/free-brands-svg-icons';




function ProjectCard(props) {
    return ( 
        <div className="ProjectsContainer">
            
            <div className="descriptionContainer">
                <div className="imageContainer"> 
                    <img className="projectImg" src={props.imgURL} alt="project" />
                </div>
                <h3>{props.name}</h3>
                <hr />
                <LinkIcon link="https://github.com/crmetz" icon={faGithub} />
                <p>{props.stack}</p>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default ProjectCard;