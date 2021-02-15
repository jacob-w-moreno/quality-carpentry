import React from 'react';

import Intro from './Intro';

const Landing = props => {
  return <div className='landing'>
    <Intro
      primaryText="PRIMARY INTRO TEXT"
      secondaryText="Secondary Intro Text"
      mascot={true}/>
    <div className='landing_services'>

    </div>
  </div>
}

export default Landing;