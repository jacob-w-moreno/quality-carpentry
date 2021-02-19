import React, {useState} from 'react';
import BeforeAfterSlider from 'react-before-after-slider';
import Intro from '../Intro';
import GalleryBox from './GalleryBox';
import Aux from '../Aux';
import Services from './Services';

const Basements = props => {
// ===== ===== CONSTANTS BEG ===== =====

  const [index, setIndex] = useState(0)
  const images=[
    [
      'https://metrobuildingandremodeling.com/wp-content/uploads/2018/10/prg_MR_devost_basement_remodel_ashburn_va_18_after.jpg',
      'https://i2.wp.com/www.basementproutah.com/wp-content/uploads/2013/04/highland-basement-exercise.jpg?fit=710%2C575'
    ],
    [
      'https://i2.wp.com/www.basementproutah.com/wp-content/uploads/2013/04/highland-basement-exercise.jpg?fit=710%2C575'
    ],
    [
      'https://metrobuildingandremodeling.com/wp-content/uploads/2018/10/prg_MR_devost_basement_remodel_ashburn_va_18_after.jpg'
    ],
    [
      'https://www.finishedbasementsplus.com/wp-content/uploads/2020/01/highland-mi-open-basement-design-fireplace.jpg'
    ],
    [
      'https://cdn.treehouseinternetgroup.com/uploads/photo_gallery/medium/169469-5a6f47b2c181f_img8515.jpg?v=1517241959'
    ]
  ]
  
// ===== ===== CONSTANTS END ===== =====
// ===== ===== "COMPONENTS" BEG ===== =====

  const serviceIntro = <div className='service_summary'>
    <h3 className='service_summary-h3'>SOMETHING ABOUT BASEMENTS</h3>
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
      primaryText='Quality Basements'
      secondaryText="More details about basements"
    />
    {serviceIntro}
    {gallery}
    <Services title="Our other services"/>
  </div>
}

export default Basements;