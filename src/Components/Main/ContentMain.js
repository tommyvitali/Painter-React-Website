import React from 'react';
import { Link } from 'react-router-dom';


import './ContentMain.css';
import './ContentMedia.css';

const contentmain = (props) => {
    return (
        <div className="content">
            
            <div className="row1">
                <div className="photo">
                <Link to="/deepblue">
                <img src={require('../../img/deepblue2.jpg')} />
                </Link>
                <figcaption>DEEP BLUE - <span>Available</span></figcaption>
                
                </div>
                <div className="photo">
                <Link to="/stargate">
                <img src={require('../../img/stargate.jpg')} />
                </Link>
                <figcaption>STARGATE - <em>Sold</em></figcaption>
                
                </div>
                <div className="photo">
                <Link to="/bushido">
                <img src={require('../../img/bushido1.jpg')} />
                </Link>
                <figcaption>BUSHIDO - <span>Available</span> </figcaption>
                
                
                </div>
                <div className="photo">
                <Link to="/sons">
                <img src={require('../../img/sons.jpg')} />
                </Link>
                <figcaption>SONS OF ODIN - <span>Available</span></figcaption>
                
                </div>
                
                
                
            </div>

            <div className="row2">
                <div className="photo">
                <Link to="/immaginazione">
                <img src={require('../../img/immaginazione2.jpg')} />
                </Link>
                <figcaption>IMMAGINAZIONE - <span>Available</span></figcaption>
                </div>
                <div className="photo">
                <Link to="/amadeus">
                <img src={require('../../img/amadeus.jpg')} />
                </Link>
                <figcaption>AMADEUS - <em>Sold</em></figcaption>
                </div>
                <div className="photo">
                <Link to="/blackgold">
                <img src={require('../../img/blackgold.jpg')} />
                </Link>
                <figcaption>BLACK GOLD - <span>Available</span></figcaption>
                </div>
                <div className="photo">
                <Link to="/empire">
                <img src={require('../../img/clouds2.jpg')} />
                </Link>
                <figcaption>EMPIRE OF THE CLOUDS - <span>Available</span></figcaption>
                </div>
                
                
                
            </div>

            <div className="row3">
                <div className="photo">
                <Link to="/mediceo">
                <img src={require('../../img/mediceo.jpg')} />
                </Link>
                <figcaption>MEDICEO - <em>Sold</em></figcaption>
                </div>
                <div className="photo">
                <Link to="/ra">
                <img src={require('../../img/ra.jpg')} />
                </Link>
                <figcaption>RA - <em>Sold</em></figcaption>
                </div>
                <div className="photo">
                <Link to="/reddeath">
                <img src={require('../../img/reddeath.jpg')} />
                </Link>
                <figcaption>RED DEATH - <em>Sold</em></figcaption>
                </div>
                
                
                
                
            </div>

            
            
        </div>
        
    )
}

export default contentmain;