import React, {useState} from 'react';
import Intro from '../Intro';
import GalleryBox from './GalleryBox';
import Services from './ServicesList/Services';
import GetQuote from '../Contact/GetQuote';

const Service = props => {
// ===== ===== CONSTANTS BEG ===== =====

  console.log('route:', props.location.pathname.slice(1));

  const [index, setIndex] = useState(0);
  let images, title;

  switch (props.location.pathname) {
    case '/services/basements':
      images=[
        'https://metrobuildingandremodeling.com/wp-content/uploads/2018/10/prg_MR_devost_basement_remodel_ashburn_va_18_after.jpg',
        'https://i2.wp.com/www.basementproutah.com/wp-content/uploads/2013/04/highland-basement-exercise.jpg?fit=710%2C575',
        'https://metrobuildingandremodeling.com/wp-content/uploads/2018/10/prg_MR_devost_basement_remodel_ashburn_va_18_after.jpg',
        'https://www.finishedbasementsplus.com/wp-content/uploads/2020/01/highland-mi-open-basement-design-fireplace.jpg',
        'https://cdn.treehouseinternetgroup.com/uploads/photo_gallery/medium/169469-5a6f47b2c181f_img8515.jpg?v=1517241959'
      ];
      title="Basements";
      break;
    case '/services/flooring':
      images=[
        'https://res.cloudinary.com/force/image/upload/v1520001725/mohawk/gallery/hardwood/WEM03_27_00.jpg',
        'https://thelastinventory.com/wp-content/uploads/2020/03/LawsonGates-2.png',
        'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-repair-laminate-flooring-step-5.jpg',
        'https://vantagevinyl.com/wp-content/uploads/2020/06/IN_GPL_TruTex_27012_1-scaled.jpg',
        'https://secure.img1-fg.wfcdn.com/im/11040301/compr-r85/1031/103192191/windworn-hickory-38-thick-x-5-wide-x-varying-length-engineered-hardwood-flooring.jpg'
      ];
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
      images=[
        'https://s3.amazonaws.com/greenbuildingadvisor.s3.tauntoncloud.com/app/uploads/2019/08/22170730/Metal-roof-lede-700x438.jpg',
        'https://www.metalroofing.com/media/images/about-dark-red-shingle-750.original_VNYNA3w.jpg',
        'https://www.evorooftechnologies.com/wp-content/uploads/2019/05/3-in-1-Roof-tiles-installed.jpg',
        'https://www.bluebarrelsystems.com/wp-content/uploads/2018/10/standing-seam-metal-roof-e1596918130324.jpg',
        'https://modernize.com/wp-content/themes/modernize/dist/images/bg/roof-hero-desktop.jpg'
      ];
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

  const gallery = <div className='service_gallery'>
    <h3 className='service_summary-h3'>GALLERY</h3>
    <img className='service_main-picture' src={images[index]} alt='Gallery'/>
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
    <GetQuote/>
    <Services title="Our other services"/>
  </div>
}

export default Service;