import React from 'react';

const Column = props => {
  return <div className='footer_column'>
    <h4 className='footer_column-title'>{props.title.toUpperCase()}</h4>
    <div className='footer_children'>{props.children}</div>
  </div>
}

export default Column;