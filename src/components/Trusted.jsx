import React from "react";
import './Trusted.css';

import logo1 from "../clients/partners1.png"
import logo2 from "../clients/partners2.png"
import logo3 from "../clients/partners3.png"
import logo4 from "../clients/partners4.jpg"
import logo5 from "../clients/partners5.png"
import logo6 from "../clients/partners6.png"
import logo7 from "../clients/partners7.jpg"
import logo8 from "../clients/partners8.jpg"
import logo9 from "../clients/partners9.png"
import logo10 from "../clients/partners10.png"
import logo11 from "../clients/partners11.png"
import logo12 from "../clients/partners12.png"

export default function TrustedClients(){
    const clients = [logo1, logo2, logo3, logo4, logo5 , logo6, logo7, logo8, logo9, logo10, logo11, logo12];

    return(
        <section className="clients-section">
            
            <div className="clients-slider">
                <div className="slider-track">
                    {clients.concat(clients).map((logo, index) => (
                        <img 
                            key={index}
                            src={logo}
                            alt={`client ${index + 1}`}
                            className="client-logo"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
