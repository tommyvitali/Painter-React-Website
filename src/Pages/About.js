import React from 'react';
import './About.css';
import './AboutMedia.css';



function About() {
  return (
    <div className="aboutpage">
      <h1>ABOUT THE ARTIST</h1>
      
        <div className="about-text">
        
        <p>TOMMASO VITALI WAS BORN IN FLORENCE (ITALY) IN 1974.
          HE DEVELOPED INTEREST IN ART SINCE VERY YOUNG AGE.
          HE STARTED WITH THE STUDY OF CLASSICAL MUSIC, 
          AND ONLY LATER HE GOT CLOSE TO VISUAL ARTS.</p>
          <img className="divider" src={require('../img/dividersmall2.png')} />
          <p>HE CONSIDERS HIS PAINTINGS "EMOTIONAL ABSTRACTS".FOCUSING HIS ART ON THE MIX OF COLORS AND TEXTURES, 
            HE CREATES ABSTRACT PAINTINGS AND ORIGINAL "SCULPTURED" PAINTINGS,
             INSPIRED BY THE MASTER WORKS OF HIS FATHER CARLO VITALI, 
             A WELL KNOWN PAINTER IN THE ITALIAN AND INTERNATIONAL ART SCENE.</p>
        </div>
        <div className="aboutphoto">
        <img src={require('../img/tommyjpg.jpg')} />
        
        </div>
        
       
        
    
    </div>
  );
}

export default About;