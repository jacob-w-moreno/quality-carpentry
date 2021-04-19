import React from 'react';
import Service from './Service';

import Basements from '../../../Styles/Assets/Icons/Services/Basements.png';
import Flooring from '../../../Styles/Assets/Icons/Services/Flooring.png';
import Remodels from '../../../Styles/Assets/Icons/Services/Remodels.png';
import Roofing from '../../../Styles/Assets/Icons/Services/Roofing.png';
import TreeRemoval from '../../../Styles/Assets/Icons/Services/TreeRemoval.png';
import Other from '../../../Styles/Assets/Icons/Services/Other.png';
import JunkRemoval from '../../../Styles/Assets/Icons/Services/JunkRemoval.png';

const Services = props => {
  
// ===== ===== DATA BEG ===== =====

  const services = [
    {service: 'Roofing', image: Roofing},
    {service: 'Flooring', image: Flooring},
    {service: 'Remodels', image: Remodels},
    {service: 'Basements', image: Basements},
    {service: 'Tree Removal', image: TreeRemoval},
    {service: 'Junk Removal', image: JunkRemoval},
    {service: 'Other', image: Other}
  ];

// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====



// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====

  const title = <h3 className='landing_title'>{props.title.toUpperCase()}</h3>

  const servicesList = <div className='landing_services-container'>
    {services.map((element, index) => {
      return <Service
        key={index}
        service={element.service}
        img={element.image}
      />
    })}
  </div>

// ===== ===== 'COMPONENTS' END ===== =====

  return <div className='landing_services' style={{background: props.style}}>
  { title }
  { servicesList }
</div>
}

export default Services;