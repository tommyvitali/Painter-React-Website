import React from 'react';
import '../PaintingPageSold.css';
import { FaCheck } from "react-icons/fa";
import ModalImage from "react-modal-image";
import { Link } from 'react-router-dom';


const amadeus = (props) => {
    return (
        <div className="container">
            <h1>AMADEUS</h1>
            <div className="paintingpage">
                    <div className="paintingphoto">
                        <div className="mainPhoto">
                            
                        <img  src={require('../../../img/amadeus.jpg')} />
                        </div>
                         
                            <div className="thumbnail">
                            <ModalImage
                                    className="small"
                                    imageBackgroundColor="none"
                                    small={require('../../../img/amadeussmall.jpg')}
                                    medium={require('../../../img/amadeus.jpg')}
                                    alt="Amadeus"
                                    />

                            <ModalImage
                                    className="small"
                                    imageBackgroundColor="none"
                                    small={require('../../../img/amadeus2small.jpg')}
                                    medium={require('../../../img/amadeus2.jpg')}
                                    alt="Amadeus"
                                    />
                            

                            
                                
                                
                            </div>
                    </div>
                    <div className="paintingdescription">
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Size: 70x90 cm </p>  
                        </div>
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Acrylic on canvas</p>  
                        </div>
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Gold Leaf</p>  
                        </div>
                        
                            <div className="button">
                            <p>Sold</p>
                            </div>

                            
                        <p><span> For info contact:</span>  <a href="mailto:tommyvitaly@gmail.com">tommyvitaly@gmail.com</a></p>
                        
                        

                        <div className="backnext">   
                                <div>
                                    <Link to="/immaginazione">
                                    <button>Prev</button>
                                    </Link>
                                </div>
                                <div>
                                <Link to="/blackgold">
                                    <button>Next</button>
                                    </Link>
                                </div>
                        

                        </div>

                        
                        
                        
                        
                    
                    </div>

            </div>
        </div>
    )
}

export default amadeus;