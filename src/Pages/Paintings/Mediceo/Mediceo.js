import React from 'react';
import '../PaintingPage.css';
import { FaCheck } from "react-icons/fa";
import ModalImage from "react-modal-image";
import { Link } from 'react-router-dom';


const mediceo = (props) => {
    return (
        <div className="container">
            <h1>MEDICEO</h1>
            <div className="paintingpage">
                    <div className="paintingphoto">
                        <div className="mainPhoto">
                            
                        <img  src={require('../../../img/mediceo.jpg')} />
                        </div>
                         
                            <div className="thumbnail">
                            <ModalImage
                                    className="small"
                                    imageBackgroundColor="none"
                                    small={require('../../../img/mediceosmall.jpg')}
                                    medium={require('../../../img/mediceo.jpg')}
                                    alt="Mediceo"
                                    />

                            <ModalImage
                                    className="small"
                                    imageBackgroundColor="none"
                                    small={require('../../../img/mediceo2small.jpg')}
                                    medium={require('../../../img/mediceo2.jpg')}
                                    alt="Mediceo details"
                                    />
                            

                            
                                
                                
                            </div>
                    </div>
                    <div className="paintingdescription">
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Size: 50x60 cm </p>  
                        </div>
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Acrylic on canvas</p>  
                        </div>
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Clay on canvas</p>  
                        </div>
                        
                            <div className="button">
                            <p>Sold</p>
                            </div>

                            
                        <p><span> For info contact:</span>  <a href="mailto:tommyvitaly@gmail.com">tommyvitaly@gmail.com</a></p>
                        
                        

                        <div className="backnext">   
                                <div>
                                    <Link to="/empire">
                                    <button>Prev</button>
                                    </Link>
                                </div>
                                <div>
                                <Link to="/ra">
                                    <button>Next</button>
                                    </Link>
                                </div>
                        

                        </div>

                        
                        
                        
                        
                    
                    </div>

            </div>
        </div>
    )
}

export default mediceo;