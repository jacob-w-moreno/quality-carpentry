import React from 'react';

import ContactMethod from './ContactMethod';

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
      img='http://simpleicon.com/wp-content/uploads/phone-symbol-2.png'
      alt="phone icon"
      method="Call or text us"
      href='tel:3852447957'
      contactInfo="(385) 244-7957"
    />
    <ContactMethod
      img='https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png'
      alt="email icon"
      method="Email us"
      href='mailto:sales@qualityutah.com?subject=Quote Request'
      contactInfo="sales@qualityutah.com"
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