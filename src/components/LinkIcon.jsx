import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LinkIcon(props) {
   return (
      <a
       target="_blank" 
        href={props.link}> 
          <FontAwesomeIcon 
          className="headerLinks" 
          icon={props.icon} 
          size="2x"    
          /> 
      </a>
   )
  
}

export default LinkIcon;