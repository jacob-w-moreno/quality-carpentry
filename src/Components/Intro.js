import React from 'react';

import Mascot from '../Styles/Assets/Mascot.png';

const Intro = props => {

// ===== ===== DATA BEG ===== =====


// ===== ===== DATA END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====

  let cta;
  if (props.cta) {
    cta = <a className='button_cta' href='tel:3852447957' style={{color:'black'}}>GET A QUOTE</a>
  }

// ===== ===== 'COMPONENTS' END ===== =====

  return <div className='intro'>
    <h1>{props.primaryText.toUpperCase()}</h1>
    { cta }
    <img className="mascot" 
      src={ Mascot } 
      alt="Quality Carpentry mascot (a cartoon man with a large hammer, a drill, and a tool belt)"/>
  </div>
}

export default Intro;