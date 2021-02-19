import React, {useState} from 'react';
import BeforeAfterSlider from 'react-before-after-slider';
import Intro from '../Intro';
import GalleryBox from './GalleryBox';
import Aux from '../Aux';
import Services from './Services';

const Roofing = props => {
// ===== ===== CONSTANTS BEG ===== =====

  const [index, setIndex] = useState(0)
  const images=[
    [
      'https://s3.amazonaws.com/greenbuildingadvisor.s3.tauntoncloud.com/app/uploads/2019/08/22170730/Metal-roof-lede-700x438.jpg',
      'https://www.barthroofing.com/wp-content/uploads/2019/12/file-1.jpg'
    ],
    [
      'https://www.metalroofing.com/media/images/about-dark-red-shingle-750.original_VNYNA3w.jpg',
    ],
    [
      'https://www.evorooftechnologies.com/wp-content/uploads/2019/05/3-in-1-Roof-tiles-installed.jpg'
    ],
    [
      'https://www.bluebarrelsystems.com/wp-content/uploads/2018/10/standing-seam-metal-roof-e1596918130324.jpg'
    ],
    [
      'https://modernize.com/wp-content/themes/modernize/dist/images/bg/roof-hero-desktop.jpg'
    ]
  ]
  
// ===== ===== CONSTANTS END ===== =====
// ===== ===== "COMPONENTS" BEG ===== =====

  const serviceIntro = <div className='service_summary'>
    <h3 className='service_summary-h3'>SOMETHING ABOUT ROOVES</h3>
    <p className='service_summary-p'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.
    </p>
  </div>

  const gallery = <div className='service_gallery'>
    <h3 className='service_summary-h3'>GALLERY</h3>
    <img className='service_main-picture' src={images[index][0]} alt='Gallery'/>
    <div className='service_gallery-preview'>
      {
        images.map((element, i) => {
          return <GalleryBox
            img={element[0]}
            alt='Gallery'
            clicked={()=>setIndex(i)}
            current={i===index}
            key={i + element}/>
        })
      }
    </div>
  </div>

// ===== ===== "COMPONENTS" END ===== =====

  return <div>
    <Intro
      primaryText='Quality Roofing'
      secondaryText="More details about roofing"
    />
    {serviceIntro}
    {gallery}
    <Services title="Our other services"/>
  </div>
}

export default Roofing;