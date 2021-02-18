import React from 'react';

import Intro from '../Intro';
import Services from '../Services/Services';
import Service from '../Services/Service';

const Landing = props => {
// ===== ===== COMPONENTS BEG ===== =====

  const landingMission = <div className='landing_mission'>
      <h3 className='landing_title'>OUR MISSION</h3>
    </div>

// ===== ===== COMPONENTS END ===== =====
// ===== ===== RETURN BEG ===== =====
  return <div className='landing'>
    <Intro
      primaryText="PRIMARY INTRO TEXT"
      secondaryText="Secondary Intro Text"
      mascot={true}/>
    <Services title="What we do best"/>
    {landingMission}
  </div>
// ===== ===== RETURN END ===== =====
}

export default Landing;