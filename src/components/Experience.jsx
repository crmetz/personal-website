import React from "react";
import Chip from "./Chip";

function Experience() {
    return ( 
        <div id="exp" className="experienceContainer">
            <div className="experience">
                <h2> Experience<span className="dot">.</span> </h2> <hr className="expHr" />
                <div className="wrapper">
                <div>
                    <h3> Siame Biscoitos </h3>
                    <p> 2021 - 2023 </p>
                    <p> Software Developer and Designer </p>
                    <div className="experienceChips">
                    <Chip text="Python"/>
                    <Chip text="Tkinter"/>
                    <Chip text="Selenium"/>
                    <Chip text="Photoshop"/>
                    </div>
                </div>
                <div>                        
                    <ul>
                        <li>
                            Developed an automation in Python, using the 
                            Selenium and Tkinter libraries, to optimize the issuing
                            and printing of invoices and orders in an ERP system, 
                            saving several hours of repetitive work and reducing 
                            the margin for error.
                         </li>
                         <br />

                        <li>
                            Catalog design using Photoshop.
                        </li>
                        <br />
                        <li> 
                            Registration of products and customers in the 
                            ERP system, also ensuring that tax data was 
                            correct (ICMS, IPI, PIS, COFINS).
                        </li>
                    
                    </ul>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Experience;