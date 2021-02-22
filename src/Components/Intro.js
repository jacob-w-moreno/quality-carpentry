import React from 'react';

import Mascot from '../Styles/Assets/Mascot.png';

const Intro = props => {
  return <div className='intro'>
    <h1>{props.primaryText.toUpperCase()}</h1>
    <h2><i>{props.secondaryText}</i></h2>
    <img className="mascot" 
      src={Mascot} 
      alt="Quality Carpentry mascot (a cartoon man with a tool belt)"/>
  </div>
}

export default Intro;