import React from 'react';

const Bio = props => {

// ===== ===== DATA BEG ===== =====

  let image = <img 
    className='bio_img' 
    src={props.pic} 
    alt={'Picture of ' + props.name}
  />

  let bioInfo = <div className='bio_info'>
    <h3 className='bio_name'>{props.name.toUpperCase()}</h3>
    <h5 className='bio_title'>{props.title.toUpperCase()}</h5>
    <p className='bio_bio'>{props.bio}</p>
  </div>

// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====



// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====



// ===== ===== 'COMPONENTS' END ===== =====

  return <div className='bio'>
    { image }
    { bioInfo }
  </div>
}

export default Bio;