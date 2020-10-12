import React from 'react';


import '../Components/Main/ContentMain.css';

const paintings = (props) => {
    return (
        <div className="content">
            
            <div className="row1">
                <div className="photo">
                <img src={require('../img/deepblue2.jpg')} />
                <figcaption>DEEP BLUE - <span>Available</span></figcaption>
                
                </div>
                <div className="photo">
                <img src={require('../img/stargate.jpg')} />
                <figcaption>STARGATE - <em>Sold</em></figcaption>
                
                </div>
                <div className="photo">
                <img src={require('../img/bushido1.jpg')} />
                <figcaption>BUSHIDO - <span>Available</span> </figcaption>
                
                
                </div>
                <div className="photo">
                <img src={require('../img/sons.jpg')} />
                <figcaption>SONS OF ODIN - <span>Available</span></figcaption>
                
                </div>
                
                
                
            </div>

            <div className="row2">
                <div className="photo">
                <img src={require('../img/immaginazione2.jpg')} />
                <figcaption>IMMAGINAZIONE - <span>Available</span></figcaption>
                </div>
                <div className="photo">
                <img src={require('../img/amadeus.jpg')} />
                <figcaption>AMADEUS - <em>Sold</em></figcaption>
                </div>
                <div className="photo">
                <img src={require('../img/blackgold.jpg')} />
                <figcaption>BLACK GOLD - <span>Available</span></figcaption>
                </div>
                <div className="photo">
                <img src={require('../img/clouds2.jpg')} />
                <figcaption>EMPIRE OF THE CLOUDS - <span>Available</span></figcaption>
                </div>
                
                
                
            </div>

            <div className="row3">
                <div className="photo">
                <img src={require('../img/mediceo.jpg')} />
                <figcaption>MEDICEO - <em>Sold</em></figcaption>
                </div>
                <div className="photo">
                <img src={require('../img/ra.jpg')} />
                <figcaption>RA - <em>Sold</em></figcaption>
                </div>
                <div className="photo">
                <img src={require('../img/reddeath.jpg')} />
                <figcaption>RED DEATH - <em>Sold</em></figcaption>
                </div>
                
                
                
                
            </div>

            
            
        </div>
        
    )
}

export default paintings;