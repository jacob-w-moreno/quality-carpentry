import React, {useState} from 'react';
import BeforeAfterSlider from 'react-before-after-slider';
import Intro from '../Intro';
import GalleryBox from './GalleryBox';
import Aux from '../Aux';

const Services = props => {
// ===== ===== CONSTANTS BEG ===== =====

  const [index, setIndex] = useState(0)
  const images=[
    [
      'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2018/03/How-To-Make-Fruit-Salad-680x680.jpg'
    ],
    [
      'https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=6&m=1155240408&s=612x612&w=0&h=SEhOUzsexrBBtRrdaLWNB6Zub65Dnyjk7vVrTk1KQSU=',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636'
    ],
    [
      'https://www.helpguide.org/wp-content/uploads/fast-foods-candy-cookies-pastries-768.jpg',
      'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg'
    ],
    [
      'https://c.ndtvimg.com/k03tb2a_healthy-food_625x300_17_August_18.jpg',
      'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg'
    ],
    [
      'https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg',
      // 'https://blogs.uoregon.edu/natewoodburyaad250/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg'
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
    {/* <BeforeAfterSlider
      before={images[index][0]}
      after={images[index][1]}
      width={716}
      height={400}
    /> */}
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
      primaryText='Quality Roofing'
      secondaryText="More details about roofing"
    />
    {serviceIntro}
    {gallery}
  </div>
}

export default Services;