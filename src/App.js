import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Story from './Story';
import Marzipan from './Marzipan';
import Water from './Water';
import Santa from './Santa';
import Skinwars from './Skinwars';
import NotFound from './NotFound';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <h1>Trending News</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/marzipan" component={Marzipan} />
        <Route path="/water" component={Water} />
        <Route exact path="/santa" component={Santa} />
        <Route path="/skinwars" component={Skinwars} />
        <Route component={NotFound} />
      </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
