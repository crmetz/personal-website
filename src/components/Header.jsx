import React from "react";
import Button from "./Button";
import LinkIcon from "./LinkIcon";
import { faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';

function Header(props) {
    return (
        <header>
            <LinkIcon link="https://www.linkedin.com/in/cristian-rafael-metz-2b28931b3/" icon={faLinkedin} />
            <LinkIcon link="https://github.com/crmetz" icon={faGithub} />
            <LinkIcon link="https://www.instagram.com/cristianmetz_/" icon={faInstagram} />
            <Button text="My resume" />
        </header>
    )
   
}

export default Header;

