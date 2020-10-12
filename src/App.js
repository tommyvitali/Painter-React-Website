import React from 'react';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Footer from './Components/Footer';
import { BrowserRouter as Router} from 'react-router-dom';


import './App.css';
import './AppMedia.css';


function App() {
  return (
    <div className="layout">
      <Router>
      <div className="App">
        
        
        <Main />
        
        
        
      </div>
      </Router>
     <Footer /> 
    </div>
  );
}

export default App;
