import React from 'react';

const GalleryBox = props => {
  let active;
  if(props.current) {
    active='service_gallery-box_active'
  }
  
  return <img className={'service_gallery-box ' + active}
    src={props.img}
    alt={props.alt}
    onClick={props.clicked}
  />
}

export default GalleryBox;