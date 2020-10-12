import React from 'react';
import './Contacts.css';
import './ContactsMedia.css';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';



function contacts() {
  return (
    <div className="contacts">
      <h1>CONTACT ME</h1>
        <div className="contact-card">
        <p>For any info or question please send me an email at  <a href="mailto:tommyvitaly@gmail.com">tommyvitaly@gmail.com</a></p>
        <img className="divider" src={require('../img/dividersmall2.png')} />
        <p>Or connect with my social media</p>
        <div className="icon">
            <div>
            <a href="https://www.tommyvitaly.com" target="blank"> <FaInstagram  /></a>
            </div>
            <div>
            <a href="https://www.tommyvitaly.com" target="blank"> <FaFacebookSquare  /></a>
            
            </div>
            
        </div>
        <div className="socialmedia">
            
                            
                            <a href="https://www.tommyvitaly.com" target="blank"> <img className="divider" src={require('../img/Instagram.jpg')} /> </a> 
                

                
                            <a href="https://www.tommyvitaly.com" target="blank"> <img className="divider" src={require('../img/Facebook2.jpg')} /> </a> 

                
        
       
            
        </div>
            <Link to="/"> 
            <button>
            HOME
            </button>
            </Link>
        
        </div>

      
      
      
       
        
    
    </div>
  );
}

export default contacts;