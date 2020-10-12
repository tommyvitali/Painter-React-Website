import React from 'react';
import '../PaintingPage.css';
import { FaCheck, FaBackward,FaForward } from "react-icons/fa";
import ModalImage from "react-modal-image";
import { Link } from 'react-router-dom';


const ra = (props) => {
    return (
        <div className="container">
            <h1>RA</h1>
            <div className="paintingpage">
                    <div className="paintingphoto">
                        <div className="mainPhoto">
                            
                        <img  src={require('../../../img/ra.jpg')} />
                        </div>
                         
                            <div className="thumbnail">
                            <ModalImage
                                    className="small"
                                    imageBackgroundColor="none"
                                    small={require('../../../img/ra3small.jpg')}
                                    medium={require('../../../img/ra3.jpg')}
                                    alt="Ra"
                                    />

                            <ModalImage
                                    className="small"
                                    imageBackgroundColor="none"
                                    small={require('../../../img/ra2small.jpg')}
                                    medium={require('../../../img/ra2.jpg')}
                                    alt="Ra details"
                                    />
                            

                            
                                
                                
                            </div>
                    </div>
                    <div className="paintingdescription">
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Size: 80x60 cm </p>  
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
                                    <Link to="/mediceo">
                                    
                                    <button>
                                    <FaBackward size = "10px" color="white" /><p>Prev</p></button>
                                    </Link>
                                </div>
                                <div>
                                <Link to="/reddeath">
                                    <button>
                                    <p>Next</p>
                                    <FaForward size = "10px" color="white" />
                                    </button>
                                    </Link>
                                </div>
                        

                        </div>

                        
                        
                        
                        
                    
                    </div>

            </div>
        </div>
    )
}

export default ra;