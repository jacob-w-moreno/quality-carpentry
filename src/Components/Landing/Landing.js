import React from 'react';

import Intro from '../Intro';
import Service from './Service';

const Landing = props => {
  const services = [
    "Roofing", "Flooring", "Remodels", "Basements", 
    "Tree Removal", "Other"
  ];

  return <div className='landing'>
    <Intro
      primaryText="PRIMARY INTRO TEXT"
      secondaryText="Secondary Intro Text"
      mascot={true}/>
    {/* <div className='landing_services'>
      <h3 className='landing_title'>WHAT WE DO BEST</h3>
      <div className='landing_services-container'>
        {services.map((element, index) => {
          return <Service 
            key={index}
            service={element}/>
        })}
      </div>
      <button className='button_cta'>VIEW ALL SERVICES</button>
    </div> */}
    <div className='landing_mission'>
      <h3 className='landing_title'>OUR MISSION</h3>
    </div>
  </div>
}

export default Landing;