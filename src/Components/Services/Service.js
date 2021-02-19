import React from 'react';
// import Arrow from '../../Styles/Assets/GoArrow.png';
import {Link} from 'react-router-dom';

const Service = props => {
  return <Link to={'/' + props.service.split(' ').join('-').toLowerCase()}>
    <div className='landing_service'>
      <div className='service_icon-placeholder'/>
      {/* <img className='service_icon' alt={props.service + ' icon'}/> */}
      <p>{props.service}</p>
      {/* <img className='service_arrow' src={Arrow} alt='Go arrow'/> */}
    </div>
  </Link>
}

export default Service;