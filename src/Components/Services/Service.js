import React, {useState, useEffect} from 'react';
import Intro from '../Intro';
import GalleryBox from './GalleryBox';
import Services from './ServicesList/Services';
import GetQuote from '../Contact/GetQuote';
import Reviews from '../Reviews';

import basement1 from '../../Styles/Assets/Services/Basements/1.jpg';
import basement3 from '../../Styles/Assets/Services/Basements/3.jpg';
import basement4 from '../../Styles/Assets/Services/Basements/4.jpg';
import basement5 from '../../Styles/Assets/Services/Basements/5.jpg';

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

import roofing1 from '../../Styles/Assets/Services/Roofing/1.jpg';
import roofing2 from '../../Styles/Assets/Services/Roofing/2.jpg';
import roofing3 from '../../Styles/Assets/Services/Roofing/3.jpg';

import remodels1 from '../../Styles/Assets/Services/Remodels/1.jpg';
import remodels2 from '../../Styles/Assets/Services/Remodels/2.jpg';

import tree1 from '../../Styles/Assets/Services/TreeRemoval/1.jpg';
import tree2 from '../../Styles/Assets/Services/TreeRemoval/2.jpg';
import tree3 from '../../Styles/Assets/Services/TreeRemoval/3.jpg';

const Service = props => {

  useEffect(()=>{
    setIndex(1);
  },[props.location.pathname])
// ===== ===== CONSTANTS BEG ===== =====

  const [index, setIndex] = useState(1);
  let images, introTitle, secondaryText;
  let description = <p className='service_summary-p'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

  switch (props.location.pathname) {
    case '/services/roofing':
      introTitle="Roofing";
      secondaryText="we'll put a roof over your head";
      description = <p className='service_summary-p'>
        Our roofing experts have experience protecting Utah's homes by installing and repairing high-quality roofs. We understand that the roof is one of the most important features of any home — both structurally and aesthetically — which is why we use premium materials, never cut corners, and do every job the right way.
      </p>;
      images=[ roofing1, roofing2, roofing3 ];
      break;

    case '/services/flooring':
      introTitle="Flooring";
      secondaryText="we stand by the work you'll stand on"
      description=<p className='service_summary-p'>
        All of the floors we repair and install are beautiful and long-lasting, so you'll be able to enjoy them for years to come. Like everything else we do, we stand by the quality of every flooring job we take on.
      </p>
      images=[ flooring2, flooring5, flooring4, flooring6, flooring3, flooring1, flooring7, flooring8, flooring9, flooring10 ];
      break;

    case '/services/remodels':
      introTitle="Remodels";
      secondaryText="your home—but better"
      description=<p className='service_summary-p'>
        Our team of experienced professionals are waiting to make the dream you have for your house a reality. We'll work with you to determine goals for your house, then we'll bring them to life. With our help, you'll be living in your dream home before you know it!
      </p>
      images=[ remodels1, remodels2 ];
      break;

    case '/services/basements':
      introTitle="Basements";
      secondaryText="invest in your basement";
      description=<p className='service_summary-p'>
        With our help, finally finishing your basement is a realistic goal. At Quality Carpentry, we're known for our fast, beautiful, and high-quality basements that increase the value of houses. Whether you're building a basement apartment or creating more space for your growing family, we can get the job done.
      </p>
      images=[ basement1, basement3, basement4, basement5 ];
      break;

    case '/services/other':
      introTitle="General Carpentry";
      secondaryText="we've done it all before";
      description=<p className='service_summary-p'>
        Our team has over 30 years of experience in contract work, flipping houses, finish carpentry, construction, and general woodworking. If you're working on a project that isn't listed here, please let us know! We'll be happy to help however we can.
      </p>
      images = [];
      break;

    case '/services/tree-removal':
      introTitle="Tree Removal";
      secondaryText="we remove poorly placed trees";
      description=<p className='service_summary-p'>
        Trees are the perfect addition to any home—when they're in the right condition and the right spot. If you have a tree that's posing a threat to your house (or a tree that you don't like), we'd be happy to trim it or remove it. We'll be sure to do it quicky and in the right way so your home stays safe and beautiful.
      </p>
      images = [ tree1, tree2, tree3 ];
      break;
      
    default: images=null;
  }
  
// ===== ===== CONSTANTS END ===== =====
// ===== ===== "COMPONENTS" BEG ===== =====

  const serviceIntro = <div className='service_summary'>
    <h3 className='service_summary-h3'> { 'MORE ABOUT ' + introTitle.toUpperCase() } </h3>
    {description}
  </div>

  let gallery = null;
  if (images.length > 0) {
    gallery = <div className='service_gallery' style={{background: '#e3e3e3'}}>
      <h3 className='service_summary-h3'>{ introTitle.toUpperCase() } GALLERY</h3>
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
  }

  

// ===== ===== "COMPONENTS" END ===== =====

  return <div>
    <Intro
      primaryText={'Quality ' + introTitle}
      secondaryText={secondaryText}
    />
    {serviceIntro}
    {gallery}
    <GetQuote title="GET A QUOTE"/>
    <Reviews background='#e3e3e3'/>
    <Services title="Our other services"/>
  </div>
}

export default Service;