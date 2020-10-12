import React from 'react';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import './Footer.css';
import './FooterMedia.css';

const footer = (props) => {
    return (
        
        <div className="footer">
            <div className="first">
            <p>Tommaso Vitali Artist Official Page</p>
            <p>&copy;2020</p>
            </div>
             <div className="second">
             <a href="https://www.tommyvitaly.com" target="blank"> <FaFacebookSquare size = "40px" /></a>
             <a href="https://www.tommyvitaly.com" target="blank"> <FaInstagram size = "40px" /></a>  
             </div>
             
             <div className="third">
             <p><em>Developed in 2020 by Tommaso Vitali</em></p>
             <p><em>with REACT JS</em></p>
             </div>
             
            
        </div>
        
    )
}

export default footer;