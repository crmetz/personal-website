import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode } from '@fortawesome/free-brands-svg-icons';

function SideBar() {
    return (
        <div className="sidebar">
            <i class="fa-solid fa-code"></i>
            {/* <FontAwesomeIcon icon="fa-solid fa-code" /> */}
            {/* <FontAwesomeIcon icon={faCode} size="2x" style={{color: '#F05454'}}/> */}
            <div className="SB-Container"><a href="">About</a></div>
            <div className="SB-Container"><a href="">Projects</a></div>
            <div className="SB-Container"> <a href="">Exp.</a></div>
            <div className="SB-Container"> <a href="">Contact</a> </div>
            
           
            
        </div>
    )
}

export default SideBar;