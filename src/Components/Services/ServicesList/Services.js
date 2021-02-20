import React from 'react';
import Service from './Service';

const Services = props => {

  const services = [
    "Roofing", "Flooring", "Remodels", "Basements", 
    "Tree Removal", "Other"
  ];

  return <div className='landing_services'>
  <h3 className='landing_title'>{props.title.toUpperCase()}</h3>
  <div className='landing_services-container'>
    {services.map((element, index) => {
      return <Service
        key={index}
        service={element}/>
    })}
  </div>
</div>
}

export default Services;