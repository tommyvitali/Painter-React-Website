import React from 'react';
import Tilt from 'react-tilt';

import { Link } from 'react-router-dom';
import './Nav.css';
import './NavMedia.css';

const nav = (props) => {

    
    

    return (

        
        <div className="navColumn">
            <Link to="/">
                <Tilt className="Tilt" options={{ max : 65, scale: 1.1 }}>
                <img src={require('../../img/Tv2.png')} />
                </Tilt>
            
            </Link>
            <nav>
            
                
                
                <ul>
                
                
                <Link className="link" to="/about">
                        <li>About</li>
                    </Link>
                    <Link className="link" to="/paintings">
                        <li>Paintings</li>
                    </Link>
                    <Link 
                        className="link" to="/contacts">
                        <li >Contacts</li>
                    </Link>

                

                    
                </ul>
            </nav>
        </div>
        
    )
}

export default nav;