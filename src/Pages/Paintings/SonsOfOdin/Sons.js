import React from 'react';
import '../PaintingPage.css';
import { FaCheck } from "react-icons/fa";
import ModalImage from "react-modal-image";
import { Link } from 'react-router-dom';


const sons = (props) => {
    return (
        <div className="container">
            <h1>SONS OF ODIN</h1>
            <div className="paintingpage">
                    <div className="paintingphoto">
                        <div className="mainPhoto">
                            
                        <img  src={require('../../../img/sonsofodin.jpg')} />
                        </div>
                         
                            <div className="thumbnail">
                            <ModalImage
                                    className="small"
                                    imageBackgroundColor="none"
                                    small={require('../../../img/sonssmall.jpg')}
                                    medium={require('../../../img/sons.jpg')}
                                    alt="Sons of Odin details"
                                    />
                            

                            <ModalImage
                                    className="small"
                                    imageBackgroundColor="none"
                                    small={require('../../../img/sonsofodinsmall.jpg')}
                                    medium={require('../../../img/sonsofodin.jpg')}
                                    alt="Bushido details"
                                    />
                                
                                
                            </div>
                    </div>
                    <div className="paintingdescription">
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Size: 70x50 cm </p>  
                        </div>
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Acrylic on canvas</p>  
                        </div>
                        <div className="descriptionrow">
                        <FaCheck size = "40px" color="green" /> <p>Copper leaf</p>  
                        </div>
                            <div className="button">
                            <p style={{backgroundColor:"green"}}>Available</p>
                            </div>

                            <p>€950 shipping included</p>
                        <p><span> For info contact:</span>  <a href="mailto:tommyvitaly@gmail.com">tommyvitaly@gmail.com</a></p>
                        
                        <div class="paypal">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="L46VPHKSP2QZG"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif" width="1" height="1"/>
                                            </form>
                                            
                                            
                                    </div>

                        <div className="backnext">   
                                <div>
                                    <Link to="/bushido">
                                    <button>Prev</button>
                                    </Link>
                                </div>
                                <div>
                                <Link to="/immaginazione">
                                    <button>Next</button>
                                    </Link>
                                </div>
                        

                        </div>

                        
                        
                        
                        
                    
                    </div>

            </div>
        </div>
    )
}

export default sons;