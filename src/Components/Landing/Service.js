import React from 'react';

const Service = props => {
  return <div className='service'>
    <img className='service_icon' alt={props.service + ' icon'}/>
  </div>
}

export default Service;