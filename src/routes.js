import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from './Components/About/About';
import Landing from './Components/Landing/Landing';
import Roofing from './Components/Services/Roofing';

export default (
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route exact path='/roofing' component={Roofing}/>
    <Route exact path='/about' component={About}/>
  </Switch>
)