import React from 'react';
import {Link} from 'react-router-dom';

const Service = props => {
  return <Link to={'/services/' + props.service.split(' ').join('-').toLowerCase()}>
    <div className='landing_service'>
      {/* <div className='service_icon-placeholder'/> */}
      <img className='service_icon' src={props.img} alt={props.service + ' icon'}/>
      <p>{props.service}</p>
    </div>
  </Link>
}

export default Service;