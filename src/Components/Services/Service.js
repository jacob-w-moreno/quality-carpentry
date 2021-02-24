import React, {useState, useEffect} from 'react';
import Intro from '../Intro';
import GalleryBox from './GalleryBox';
import Services from './ServicesList/Services';
import GetQuote from '../Contact/GetQuote';
import Reviews from '../Reviews';

import flooring1 from '../../Styles/Assets/Services/Flooring/1.jpg';
import flooring2 from '../../Styles/Assets/Services/Flooring/2.jpg';
import flooring3 from '../../Styles/Assets/Services/Flooring/3.jpg';
import flooring4 from '../../Styles/Assets/Services/Flooring/4.jpg';
import flooring5 from '../../Styles/Assets/Services/Flooring/5.jpg';
import flooring6 from '../../Styles/Assets/Services/Flooring/6.jpg';
import flooring7 from '../../Styles/Assets/Services/Flooring/7.jpg';
import flooring8 from '../../Styles/Assets/Services/Flooring/8.jpg';
import flooring9 from '../../Styles/Assets/Services/Flooring/9.jpg';
import flooring10 from '../../Styles/Assets/Services/Flooring/10.jpg';

import basement1 from '../../Styles/Assets/Services/Basements/1.jpg';
// import basement2 from '../../Styles/Assets/Services/Basements/2.jpg';
import basement3 from '../../Styles/Assets/Services/Basements/3.jpg';
import basement4 from '../../Styles/Assets/Services/Basements/4.jpg';
import basement5 from '../../Styles/Assets/Services/Basements/5.jpg';

import roofing1 from '../../Styles/Assets/Services/Roofing/1.jpg';
import roofing2 from '../../Styles/Assets/Services/Roofing/2.jpg';

const Service = props => {

  useEffect(()=>{
    setIndex(1);
  },[props.location.pathname])
// ===== ===== CONSTANTS BEG ===== =====

  const [index, setIndex] = useState(1);
  let images, title;

  switch (props.location.pathname) {
    case '/services/basements':
      images=[ basement1, basement3, basement4, basement5 ];
      title="Basements";
      break;
    case '/services/flooring':
      images=[ flooring2, flooring5, flooring4, flooring6, flooring3, flooring1, flooring7, flooring8, flooring9, flooring10 ];
      title="Flooring";
      break;
    case '/services/remodels':
      images=[
        'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/7/7/0/HFXUP111H_after-kitchen-2_h.jpg.rend.hgtvcom.966.644.suffix/1436278822871.jpeg',
        'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/10/27/2/Original_Designs-by-Human-L-Shaped-Kitchen-After-1.jpg.rend.hgtvcom.966.725.suffix/1445990176110.jpeg',
        'https://www.remodelingimage.com/wp-content/uploads/2019/11/beautiful-modern-kitchen.jpg',
        'https://coloradobuildermag.com/wp-content/uploads/2019/02/open-kitchen-modern-transitional-island-seating-Danny-Raustadt-dt-800x445.jpg',
        'https://www.seapointe.com/wp-content/uploads/2019/10/Remodel-VS-Relocate-MAIN.jpg'
      ];
      title="Remodels";
      break;
    case '/services/roofing':
      images=[ roofing1, roofing2 ];
      title="Roofing";
      break;
    case '/services/other':
      images=[
        'https://res.cloudinary.com/force/image/upload/v1520001725/mohawk/gallery/hardwood/WEM03_27_00.jpg',
        'https://thelastinventory.com/wp-content/uploads/2020/03/LawsonGates-2.png',
        'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-repair-laminate-flooring-step-5.jpg',
        'https://vantagevinyl.com/wp-content/uploads/2020/06/IN_GPL_TruTex_27012_1-scaled.jpg',
        'https://secure.img1-fg.wfcdn.com/im/11040301/compr-r85/1031/103192191/windworn-hickory-38-thick-x-5-wide-x-varying-length-engineered-hardwood-flooring.jpg'
      ];
      title="Other";
      break;
    case '/services/tree-removal':
      images=[
        'https://res.cloudinary.com/force/image/upload/v1520001725/mohawk/gallery/hardwood/WEM03_27_00.jpg',
        'https://thelastinventory.com/wp-content/uploads/2020/03/LawsonGates-2.png',
        'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-repair-laminate-flooring-step-5.jpg',
        'https://vantagevinyl.com/wp-content/uploads/2020/06/IN_GPL_TruTex_27012_1-scaled.jpg',
        'https://secure.img1-fg.wfcdn.com/im/11040301/compr-r85/1031/103192191/windworn-hickory-38-thick-x-5-wide-x-varying-length-engineered-hardwood-flooring.jpg'
      ];
      title="Tree Removal";
      break;
    default: images=null;
  }
  
// ===== ===== CONSTANTS END ===== =====
// ===== ===== "COMPONENTS" BEG ===== =====

  const serviceIntro = <div className='service_summary'>
    <h3 className='service_summary-h3'>SOMETHING ABOUT {title.toUpperCase()}</h3>
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

  const gallery = <div className='service_gallery' style={{background: '#e3e3e3'}}>
    <h3 className='service_summary-h3'>GALLERY</h3>
    <div className='service_main-picture'>
      <img className='service_main-img' src={images[index]} alt='Gallery'/>
    </div>
    <div className='service_gallery-preview'>
      {
        images.map((element, i) => {
          return <GalleryBox
            img={element}
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
      primaryText={'Quality ' + title}
      secondaryText={ "More details about quality " + title}
    />
    {serviceIntro}
    {gallery}
    <GetQuote title="GET A QUOTE"/>
    <Reviews background='#e3e3e3'/>
    <Services title="Our other services"/>
  </div>
}

export default Service;