import React from "react";
import Reveal from './Reveal';

function Footer(props){
    
    return (
        <div className="footer">
        <Reveal>
            <p>© Copyright {props.year} Cristian Metz </p>
        </Reveal>
        </div>

    )
}

export default Footer;