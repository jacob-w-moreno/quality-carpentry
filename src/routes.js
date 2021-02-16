import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from './Components/About/About';
import Landing from './Components/Landing/Landing';
import Services from './Components/Services/Services';

export default (
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route exact path='/services' component={Services}/>
    <Route exact path='/about' component={About}/>
  </Switch>
)