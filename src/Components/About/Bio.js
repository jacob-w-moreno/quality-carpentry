import React from 'react';

const Bio = props => {
  return <div className='bio'>
    <img 
      className='bio_img' 
      src={props.pic} 
      alt={'Picture of ' + props.name}
    />
    <div className='bio_info'>
      <h3 className='bio_name'>{props.name.toUpperCase()}</h3>
      <h5 className='bio_title'>{props.title.toUpperCase()}</h5>
      <p className='bio_bio'>{props.bio}</p>
    </div>
  </div>
}

export default Bio;