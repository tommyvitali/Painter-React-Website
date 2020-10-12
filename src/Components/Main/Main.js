import React from 'react';
 import Header from './HeaderMain';
 import Nav from '../Nav/Nav';
import Content from './ContentMain';
import About from '../../Pages/About';
import Contacts from '../../Pages/Contacts';
import Deepblue from '../../Pages/Paintings/DeepBlue/DeepBlue';
import Stargate from '../../Pages/Paintings/Stargate/Stargate';
import Bushido from '../../Pages/Paintings/Bushido/Bushido';
import Sons from '../../Pages/Paintings/SonsOfOdin/Sons';
import Immaginazione from '../../Pages/Paintings/Immaginazione/Immaginazione';
import Amadeus from '../../Pages/Paintings/Amadeus/Amadeus';
import Blackgold from '../../Pages/Paintings/BlackGold/BlackGold';
import Empire from '../../Pages/Paintings/Empire/Empire';
import Mediceo from '../../Pages/Paintings/Mediceo/Mediceo';
import Ra from '../../Pages/Paintings/Ra/Ra';
import Reddeath from '../../Pages/Paintings/Reddeath/Reddeath';


import './Main.css';
import './MainMedia.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const main = (props) => {
    return (
        <Router>
        <div className="mainPage">
            
             <Header /> 
             <div className="navandmain"> 
            <Nav />
            <Switch>
                <Route path="/" exact component={Content} />
                <Route path="/about" component={About} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/paintings" component={Content} />
                <Route path="/deepblue" component={Deepblue} />
                <Route path="/stargate" component={Stargate} />
                <Route path="/bushido" component={Bushido} />
                <Route path="/sons" component={Sons} />
                <Route path="/immaginazione" component={Immaginazione} />
                <Route path="/amadeus" component={Amadeus} />
                <Route path="/blackgold" component={Blackgold} />
                <Route path="/empire" component={Empire} />
                <Route path="/mediceo" component={Mediceo} />
                <Route path="/ra" component={Ra} />
                <Route path="/reddeath" component={Reddeath} />

            </Switch>
            </div>
        </div>
        </Router>
    )
}

export default main;