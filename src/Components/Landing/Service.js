import React from 'react';

const Service = props => {
  return <div className='service'>
    <div className='service_icon-placeholder'/>
    {/* <img className='service_icon' alt={props.service + ' icon'}/> */}
    <span>{props.service}</span>
  </div>
}

export default Service;