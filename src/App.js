import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Marzipan from './components/Marzipan';
import Water from './components/Water';
import Santa from './components/Santa';
import Skinwars from './components/Skinwars';
import NotFound from './NotFound';
import MichaelScott from './components/MichaelScott';
import PamelaBeesly from './components/PamelaBeesly';
import KellyKapoor from './components/KellyKapoor';
import JimHalpert from './components/JimHalpert';

import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <nav className="nav">
        <Link
          to='/' >
        <h1 className="main-title">Trending News</h1>
      </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/marzipan" component={Marzipan} />
        <Route path="/water" component={Water} />
        <Route path="/santa" component={Santa} />
        <Route path="/skinwars" component={Skinwars} />
        <Route path="/michaelscott" component={MichaelScott} />
        <Route path="/pamelabeesly" component={PamelaBeesly} />
        <Route path="/kellykapoor" component={KellyKapoor} />
        <Route path="/jimhalpert" component={JimHalpert} />
        <Route component={NotFound} />
      </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
