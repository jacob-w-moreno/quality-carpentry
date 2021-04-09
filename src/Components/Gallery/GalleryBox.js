import React from 'react';

const GalleryBox = props => {

// ===== ===== DATA BEG ===== =====
  
  let active;
  if(props.current) {
    active='gallery-box_active'
  }
  
// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====
  
  
  
// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====
  
  
  
// ===== ===== 'COMPONENTS' END ===== =====
  
  return <img className={'gallery-box ' + active}
    src={props.img}
    alt={props.alt}
    onClick={props.clicked}
  />
}

export default GalleryBox;