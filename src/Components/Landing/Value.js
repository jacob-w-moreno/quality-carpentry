import React from 'react';

const Value = props => {

// ===== ===== DATA BEG ===== =====



// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====



// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====

  let value = <div className='value'>
    <img className='value_icon' src={props.img} alt='value icon'/>
    <h4 className='value_value'>{props.value}</h4>
    <p className='value_description'>{props.description}</p>
  </div>

// ===== ===== 'COMPONENTS' END ===== =====

  return value;
}

export default Value;