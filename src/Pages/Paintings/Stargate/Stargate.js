import React from 'react';
import '../PaintingPageSold.css';
import { FaCheck } from "react-icons/fa";
import ModalImage from "react-modal-image";
import { Link } from 'react-router-dom';


const stargate = (props) => {
    return (
        <div className="container">
            <h1>STARGATE</h1>
            <div className="paintingpage">
                    <div className="paintingphoto">
                        <div className="mainPhoto">
                            
                        <img  src={require('../../../img/stargate.jpg')} />
                        </div>
                         
                            <div className="thumbnail">
                            <ModalImage
                                    className="small"
                                    imageBackgroundColor="none"
                                    small={require('../../../img/stargatesmall1.jpg')}
                                    medium={require('../../../img/stargatewall.jpg')}
                                    alt="Stargate"
                                    />
                            <ModalImage
                                    className="small"
                                    imageBackgroundColor="none"
                                    small={require('../../../img/stargatesmall2.jpg')}
                                    medium={require('../../../img/stargatebig.jpg')}
                                    alt="Stargate details"
                                    />
                                
                                
                            </div>
                    </div>
                    <div className="paintingdescription">
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Size: 70x90 cm</p>  
                        </div>
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Acrylic on canvas</p>  
                        </div>
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Gold Leaf and Clay</p>  
                        </div>
                            <div className="button">
                            <p>SOLD</p>
                            </div>

                            
                        <p><span> For info contact:</span>  <a href="mailto:tommyvitaly@gmail.com">tommyvitaly@gmail.com</a></p>
                        
                        

                        <div className="backnext">   
                                <div>
                                    <Link to="/deepblue">
                                    <button>Prev</button>
                                    </Link>
                                </div>
                                <div>
                                <Link to="/bushido">
                                    <button>Next</button>
                                    </Link>
                                </div>
                        

                        </div>
                        
                        
                    
                    </div>

            </div>
        </div>
    )
}

export default stargate;