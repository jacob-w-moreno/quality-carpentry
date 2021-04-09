import React, { useState } from 'react';
import Mascot from '../Styles/Assets/Mascot.png';

import basement from '../Styles/Assets/Services/Basements/5.jpg';
import flooring from '../Styles/Assets/Services/Flooring/5.jpg';
import roofing from '../Styles/Assets/Services/Roofing/5.jpg';
import remodels from '../Styles/Assets/Services/Remodels/2.jpg';
import tree from '../Styles/Assets/Services/TreeRemoval/1.jpg';

const Intro = props => {

  // ===== ===== DATA BEG ===== =====
  

  // ===== ===== DATA END ===== =====

  let cta;
  if (props.cta) {
    cta = <button className='button_cta'>GET A QUOTE</button>
  }

  return <div className='intro'>
    <h1>{props.primaryText.toUpperCase()}</h1>
    { cta }
    <img className="mascot" 
      src={ Mascot } 
      alt="Quality Carpentry mascot (a cartoon man with a large hammer, a drill, and a tool belt)"/>
  </div>
}

export default Intro;