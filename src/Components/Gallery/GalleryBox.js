import React from 'react';

const GalleryBox = props => {
  let active;
  if(props.current) {
    active='gallery-box_active'
  }
  
  return <img className={'gallery-box ' + active}
    src={props.img}
    alt={props.alt}
    onClick={props.clicked}
  />
}

export default GalleryBox;