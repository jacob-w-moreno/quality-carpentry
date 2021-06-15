import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from './Components/About/About';
import Home from './Components/Home/Home';
import Other from './Components/Services/Service';

export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/services/basements' component={Other}/>
    <Route exact path='/services/flooring' component={Other}/>
    <Route exact path='/services/junk-removal' component={Other}/>
    <Route exact path='/services/roofing' component={Other}/>
    <Route exact path='/services/remodels' component={Other}/>
    <Route exact path='/services/tree-removal' component={Other}/>
    <Route exact path='/services/finish-carpentry' component={Other}/>
  </Switch>
)