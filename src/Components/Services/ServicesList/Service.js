import React from 'react';
import {Link} from 'react-router-dom';

const Service = props => {

// ===== ===== DATA BEG ===== =====



// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====



// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====

  const service = <div className='landing_service'>
    <img className='service_icon' src={props.img} alt={props.service + ' icon'}/>
    <p>{props.service}</p>
  </div>

// ===== ===== 'COMPONENTS' END ===== =====

  return <Link to={'/services/' + props.service.split(' ').join('-').toLowerCase()}>
    { service }
  </Link>
}

export default Service;