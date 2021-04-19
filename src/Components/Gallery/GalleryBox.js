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
  
  return <div className={'gallery-box ' + active}>
    <img 
      src={props.img}
      alt={props.alt}
      onClick={props.clicked}
    />
  </div>
}

export default GalleryBox;