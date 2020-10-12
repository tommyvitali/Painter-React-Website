import React from 'react';
import { FaFacebookSquare, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

import './HeaderMain.css';
import './HeaderMedia.css';

const headermain = (props) => {
    return (
        <div className="header">
              
               

            <h1>Tommaso Vitali Artist</h1>
            <ul>
                <li><a href="https://www.tommyvitaly.com" target="blank"> <FaFacebookSquare size = "40px" /></a></li>
                <li> <a href="https://www.tommyvitaly.com" target="blank"> <FaInstagram size = "40px" /></a>  </li>
            </ul>
        </div>
        
    )
}

export default headermain;