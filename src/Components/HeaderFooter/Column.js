import React from 'react';

const Column = props => {


// ===== ===== DATA BEG ===== =====



// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====



// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====

  let title = <h4 className='footer_column-title'>{props.title.toUpperCase()}</h4>
  
  let children = <div className='footer_children'>{props.children}</div>

// ===== ===== 'COMPONENTS' END ===== =====

  return <div className='footer_column'>
    { title }
    { children }
  </div>
}

export default Column;