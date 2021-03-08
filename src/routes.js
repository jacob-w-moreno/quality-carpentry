import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from './Components/About/About';
import Landing from './Components/Landing/Landing';
import Other from './Components/Services/Service';

export default (
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/services/basements' component={Other}/>
    <Route exact path='/services/flooring' component={Other}/>
    <Route exact path='/services/junk-removal' component={Other}/>
    <Route exact path='/services/roofing' component={Other}/>
    <Route exact path='/services/remodels' component={Other}/>
    <Route exact path='/services/tree-removal' component={Other}/>
    <Route exact path='/services/other' component={Other}/>
  </Switch>
)