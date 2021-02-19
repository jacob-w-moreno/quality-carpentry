import React, {useState} from 'react';
import BeforeAfterSlider from 'react-before-after-slider';
import Intro from '../Intro';
import GalleryBox from './GalleryBox';
import Aux from '../Aux';
import Services from './Services';

const TreeRemoval = props => {
// ===== ===== CONSTANTS BEG ===== =====

  const [index, setIndex] = useState(0)
  const images=[
    [
      'https://res.cloudinary.com/force/image/upload/v1520001725/mohawk/gallery/hardwood/WEM03_27_00.jpg'
    ],
    [
      'https://thelastinventory.com/wp-content/uploads/2020/03/LawsonGates-2.png'
    ],
    [
      'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-repair-laminate-flooring-step-5.jpg'
    ],
    [
      'https://vantagevinyl.com/wp-content/uploads/2020/06/IN_GPL_TruTex_27012_1-scaled.jpg'
    ],
    [
      'https://secure.img1-fg.wfcdn.com/im/11040301/compr-r85/1031/103192191/windworn-hickory-38-thick-x-5-wide-x-varying-length-engineered-hardwood-flooring.jpg'
    ]
  ]
  
// ===== ===== CONSTANTS END ===== =====
// ===== ===== "COMPONENTS" BEG ===== =====

  const serviceIntro = <div className='service_summary'>
    <h3 className='service_summary-h3'>SOMETHING ABOUT TREE REMOVAL</h3>
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
      ? <img className='service_main-picture' src={images[index][0]} alt=''/>
      : <BeforeAfterSlider
        before={images[index][0]}
        after={images[index][1]}
        width={716}
        height={400}
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
            alt='Gallery image'
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
      primaryText='Quality Tree Removal'
      secondaryText="More details about tree removal"
    />
    {serviceIntro}
    {gallery}
    <Services title="Our other services"/>
  </div>
}

export default TreeRemoval;