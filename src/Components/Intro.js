import React, {useState, useEffect} from 'react';
import Mascot from '../Styles/Assets/Mascot.png';

import basement from '../Styles/Assets/Services/Basements/5.jpg';
import flooring from '../Styles/Assets/Services/Flooring/5.jpg';
import roofing from '../Styles/Assets/Services/Roofing/3.jpg';
import remodels from '../Styles/Assets/Services/Remodels/2.jpg';
import tree from '../Styles/Assets/Services/TreeRemoval/1.jpg';

const Intro = props => {

  // ===== ===== DATA BEG ===== =====
  
  const [index, setIndex] = useState(0);
  const images = [ basement, flooring, roofing, remodels, tree ];

  // ===== ===== DATA END ===== =====

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = index + 1;
      if (newIndex < images.length) {
        setIndex(newIndex);
      } else {
        setIndex(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [index, images.length]);

  let gallery = null;

  if (props.gallery) {
    gallery = <img className='intro_gallery'
      src={images[index]}
      alt={'gallery'}/>
  }

  return <div className='intro'>
    <h1>{props.primaryText.toUpperCase()}</h1>
    {/* <h2><i>{props.secondaryText}</i></h2> */}
    { gallery }
    <img className="mascot" 
      src={ Mascot } 
      alt="Quality Carpentry mascot (a cartoon man with a tool belt)"/>
  </div>
}

export default Intro;