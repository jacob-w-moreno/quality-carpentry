import React from 'react';
import Mascot from '../Styles/Assets/Mascot.png';

const Intro = props => {

  let gallery = null;

  if (props.class) {
    gallery = <div className='intro_gallery'>

    </div>
  }

  return <div className='intro'>
    <h1 className={props.class}>{props.primaryText.toUpperCase()}</h1>
    {/* <h2><i>{props.secondaryText}</i></h2> */}
    { gallery }
    <img className="mascot" 
      src={ Mascot } 
      alt="Quality Carpentry mascot (a cartoon man with a tool belt)"/>
  </div>
}

export default Intro;