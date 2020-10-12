import React from 'react';
import '../PaintingPage.css';
import { FaCheck } from "react-icons/fa";
import ModalImage from "react-modal-image";
import { Link } from 'react-router-dom';


const reddeath = (props) => {
    return (
        <div className="container">
            <h1>RED DEATH</h1>
            <div className="paintingpage">
                    <div className="paintingphoto">
                        <div className="mainPhoto">
                            
                        <img  src={require('../../../img/reddeath.jpg')} />
                        </div>
                         
                            <div className="thumbnail">
                            <ModalImage
                                    className="small"
                                    imageBackgroundColor="none"
                                    small={require('../../../img/reddeath2small.jpg')}
                                    medium={require('../../../img/reddeath2.jpg')}
                                    alt="Red death details"
                                    />

                            <ModalImage
                                    className="small"
                                    imageBackgroundColor="none"
                                    small={require('../../../img/reddeath3small.jpg')}
                                    medium={require('../../../img/reddeath3.jpg')}
                                    alt="Red Death details"
                                    />
                            

                            
                                
                                
                            </div>
                    </div>
                    <div className="paintingdescription">
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Size: 60x70 cm </p>  
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
                                    <Link to="/ra">
                                    <button>Prev</button>
                                    </Link>
                                </div>
                                
                        

                        </div>

                        
                        
                        
                        
                    
                    </div>

            </div>
        </div>
    )
}

export default reddeath;