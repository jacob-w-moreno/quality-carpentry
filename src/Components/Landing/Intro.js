import React from 'react';

import Mascot from '../../Styles/Assets/Mascot.png';

const Intro = props => {
  return <div className='intro'>
    <h1>{props.primaryText}</h1>
    <h3>{props.secondaryText}</h3>
    {props.mascot
      ? <img className="mascot" src={Mascot} alt="Quality Carpentry mascot (a cartoon man with a tool belt)"/>
      : null
    }
  </div>
}

export default Intro;