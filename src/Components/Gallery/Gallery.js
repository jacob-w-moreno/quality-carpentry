import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import GalleryBox from './GalleryBox';

const Gallery = props => {

  
  
// ===== ===== DATA BEG ===== =====
  
  let [index, setIndex] = useState(0);
  
// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====
  
  useEffect (() => {
    setIndex(0);
  }, [props.location.pathname])
  
// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====
  
  let galleryTitle = <h3 className='service_summary-h3'>{ props.introTitle?props.introTitle.toUpperCase():null} GALLERY</h3>;

  let mainPicture = <div className='service_main-picture'>
    <img className='service_main-img' src={props.images[index]} alt='Gallery'/>
  </div>

  let galleryPreview = <div className='gallery-preview'>
    {
      props.images.map((element, i) => {
        return <GalleryBox
          img={ element }
          alt='gallery'
          clicked={ ()=>setIndex(i) }
          current={ i===index }
          key={ i + element }
        />
      })
    }
  </div>
  
// ===== ===== 'COMPONENTS' END ===== =====
  
  return <div className='gallery' style={{background: '#e3e3e3'}}>
    { galleryTitle }
    { mainPicture }
    { galleryPreview }
  </div>
}
export default withRouter(Gallery);