import React from 'react';

const Value = props => {
  return <div className='value'>
    <img className='value_icon' src={props.img} alt='value icon'/>
    <h4 className='value_value'>{props.value}</h4>
    <p className='value_description'>{props.description}</p>
  </div>
}

export default Value;