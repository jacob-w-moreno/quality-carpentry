import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from './Components/About/About';
import Basements from './Components/Services/Basements';
import Flooring from './Components/Services/Flooring';
import Landing from './Components/Landing/Landing';
import Roofing from './Components/Services/Roofing';
import Remodels from './Components/Services/Remodels';
import TreeRemoval from './Components/Services/TreeRemoval';
import Other from './Components/Services/Other';

export default (
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route exact path='/basements' component={Basements}/>
    <Route exact path='/flooring' component={Flooring}/>
    <Route exact path='/roofing' component={Roofing}/>
    <Route exact path='/remodels' component={Remodels}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/tree-removal' component={TreeRemoval}/>
    <Route exact path='/other' component={Other}/>
  </Switch>
)