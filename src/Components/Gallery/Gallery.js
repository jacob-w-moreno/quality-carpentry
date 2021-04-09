import React, { useState, useEffect } from 'react';
import GalleryBox from './GalleryBox';

const Gallery = props => {

  let [index, setIndex] = useState(0);

  // useEffect(() => {
  //   setIndex(0);
  //   if (props.images.length > 0) {
  //     const interval = setInterval(() => {
  //       let newIndex = index + 1;
  //       if (newIndex < props.images.length) {
  //         setIndex(newIndex);
  //       } else {
  //         setIndex(0);
  //       }
  //     }, 4000);
  //     return () => clearInterval(interval);
  //   }
  // }, [index, props.images.length]);

return <div className='gallery' style={{background: '#e3e3e3'}}>
  <h3 className='service_summary-h3'>{ props.introTitle?props.introTitle.toUpperCase():null} GALLERY</h3>
  <div className='service_main-picture'>
    <img className='service_main-img' src={props.images[index]} alt='Gallery'/>
  </div>
  <div className='gallery-preview'>
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
</div>
}
export default Gallery;