import React from 'react';

import Intro from '../Intro';
import Service from './Service';

const Landing = props => {
// ===== ===== DATA BEG ===== =====

const services = [
  "Roofing", "Flooring", "Remodels", "Basements", 
  "Tree Removal", "Other"
];

// ===== ===== DATA END ===== =====
// ===== ===== COMPONENTS BEG ===== =====

  const landingServices = <div className='landing_services'>
    <h3 className='landing_title'>WHAT WE DO BEST</h3>
    <div className='landing_services-container'>
      {services.map((element, index) => {
        return <Service 
          key={index}
          service={element}/>
      })}
    </div>
  </div>

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
    {landingServices}
    {landingMission}
  </div>
// ===== ===== RETURN END ===== =====
}

export default Landing;