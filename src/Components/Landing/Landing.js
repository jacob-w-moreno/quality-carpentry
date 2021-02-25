import React from 'react';

import Intro from '../Intro';
import Services from '../Services/ServicesList/Services';
import GetQuote from '../Contact/GetQuote';
import Reviews from '../Reviews';
import Value from './Value';

import Communication from '../../Styles/Assets/Icons/Communication2.png';
import Price from '../../Styles/Assets/Icons/Price2.png';
import Quality from '../../Styles/Assets/Icons/Quality2.png';
import Speed from '../../Styles/Assets/Icons/Speed2.png';

const Landing = props => {
// ===== ===== DATA BEG ===== =====
  
  const valuesList = [
    {
      image: Quality,
      value: 'Quality',
      description: "We do things right because every job is worth doing well. We are proud of the work that we do and will gladly attest to its quality."
    },
    {
      image: Communication,
      value: 'Communication',
      description: "We communicate with our customers before, during, and after every project to ensure that our work exceeds all expectations."
    },
    {
      image: Speed, 
      value: 'Speed', 
      description: "We work hard and efficiently to make sure every job is finished quickly — without cutting any corners, guaranteed."
    },
    {
      image: Price,
      value: 'Affordability',
      description: "We quote honest and reasonable prices, and work with our custmers to help them build their dream home within their budget."
    }
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
      secondaryText="We do it right the first time"
      mascot={true}/>
    <Services title="What we do best"/>
    <Reviews background='#e3e3e3'/>
    {values}
    <GetQuote title="" background="#e3e3e3"/>
  </div>

// ===== ===== RETURN END ===== =====
}

export default Landing;