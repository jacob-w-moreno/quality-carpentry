import React from 'react';

import ContactMethod from './ContactMethod';

import Email from '../../Styles/Assets/Icons/Contact/Email.png';
import Phone from '../../Styles/Assets/Icons/Contact/Phone.png';

const GetQuote = props => {

// ===== ===== DATA BEG ===== =====



// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====



// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====

  let title = props.title
    ? <h3>{props.title.toUpperCase()}</h3>
    : <div style={{height: '24px'}}/>
  
  let contactMethods = <div className='contact_methods'>
    <ContactMethod
      contactInfo="(385) 244-7957"
      href='tel:3852447957'
      method="Call or text us"
    />
    <ContactMethod
      contactInfo="sales@qualityutah.com"
      href='mailto:sales@qualityutah.com?subject=Quote Request'
      method="Email us"
    />
  </div>

// ===== ===== 'COMPONENTS' END ===== =====

  return <div style={{'background': props.background}}>
    { title }
    { contactMethods }
  </div>
}

export default GetQuote;

/*
  email: sales@qualityutah.com
  phone: 
*/