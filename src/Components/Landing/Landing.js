import React from 'react';

import Intro from '../Intro';
import Services from '../Services/ServicesList/Services';
import GetQuote from '../Contact/GetQuote';
import Reviews from '../Reviews';
import Value from './Value';

const Landing = props => {
// ===== ===== DATA BEG ===== =====
  
  const valuesList = [
    { image: 'https://www.radiancetech.com/wp-content/uploads/2019/01/quality-icon-blue.png', value: 'Quality', description: "We believe in doing things right the first time. In our opinion, every job is worth doing perfectly, and we won't quit until the job is done." },
    { image: 'https://pics.freeicons.io/uploads/icons/png/20830632741582956833-512.png', value: 'Communication', description: "Our job is to make you happy. Before, during, and after every project, we will communicate with you to ensure that everything we do exceeds your expectations." },
    { image: 'https://cdn0.iconfinder.com/data/icons/time-39/32/Time_Outline_Time_Fast_Watch_Clock_Hour-512.png', value: 'Speed', description: "We want to make sure you're living your best life as quickly as possible." },
    { image: 'https://img.pngio.com/price-tag-svg-png-icon-free-download-568452-onlinewebfontscom-price-icon-png-980_981.png', value: 'Price' },
  ]
  
// ===== ===== DATA END ===== =====
// ===== ===== COMPONENTS BEG ===== =====

  const values = <div className='landing_values-container'>
      <h3 className='landing_title'>OUR CORE VALUES</h3>
      <div className='landing_values'>
        {valuesList.map(element => <Value 
          img={element.image} 
          value={element.value}
          description={element.description}
          key={element.value}
          />)}
      </div>
    </div>

// ===== ===== COMPONENTS END ===== =====
// ===== ===== RETURN BEG ===== =====

  return <div className='landing'>
    <Intro
      primaryText="QUALITY CARPENTRY"
      secondaryText="For when you need it done right the first time"
      mascot={true}/>
    <Services title="What we do best"/>
    <Reviews background='#e3e3e3'/>
    {values}
    <GetQuote title="let's work together" background="#e3e3e3"/>
  </div>

// ===== ===== RETURN END ===== =====
}

export default Landing;