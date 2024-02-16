import React from "react";

function Footer(props){
    
    return (
        <div className="footer">
            <p>© Copyright {props.year} Cristian Metz </p>
        </div>

    )
}

export default Footer;