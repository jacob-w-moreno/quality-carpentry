import React, {useState} from 'react';
import BeforeAfterSlider from 'react-before-after-slider';
import Intro from '../Intro';
import GalleryBox from './GalleryBox';
import Aux from '../Aux';
import Services from './Services';

const Remodels = props => {
// ===== ===== CONSTANTS BEG ===== =====

  const [index, setIndex] = useState(0)
  const images=[
    [
      'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/7/7/0/HFXUP111H_after-kitchen-2_h.jpg.rend.hgtvcom.966.644.suffix/1436278822871.jpeg',
      'https://www.seapointe.com/wp-content/uploads/2019/10/Remodel-VS-Relocate-MAIN.jpg'
    ],
    [
      'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/10/27/2/Original_Designs-by-Human-L-Shaped-Kitchen-After-1.jpg.rend.hgtvcom.966.725.suffix/1445990176110.jpeg'
    ],
    [
      'https://www.remodelingimage.com/wp-content/uploads/2019/11/beautiful-modern-kitchen.jpg'
    ],
    [
      'https://coloradobuildermag.com/wp-content/uploads/2019/02/open-kitchen-modern-transitional-island-seating-Danny-Raustadt-dt-800x445.jpg'
    ],
    [
      'https://www.seapointe.com/wp-content/uploads/2019/10/Remodel-VS-Relocate-MAIN.jpg'
    ]
  ]
  
// ===== ===== CONSTANTS END ===== =====
// ===== ===== "COMPONENTS" BEG ===== =====

  const serviceIntro = <div className='service_summary'>
    <h3 className='service_summary-h3'>SOMETHING ABOUT REMODELS</h3>
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

  const imageDisplay = <Aux>
    {images[index].length===1
      ? <img className='service_main-picture' src={images[index][0]} alt='Gallery'/>
      : <BeforeAfterSlider
          className='before-after-slider'
          before={images[index][0]}
          after={images[index][1]}
          height={400}
          width={716}
        />
    }
  </Aux>

  const gallery = <div className='service_gallery'>
    <h3 className='service_summary-h3'>GALLERY</h3>
    {imageDisplay}
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
      primaryText='Quality Remodels'
      secondaryText="More details about remodels"
    />
    {serviceIntro}
    {gallery}
    <Services title="Our other services"/>
  </div>
}

export default Remodels;