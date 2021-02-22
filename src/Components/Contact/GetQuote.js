import React from 'react';

import ContactMethod from './ContactMethod';

const GetQuote = props => {
  return <div style={{'background': props.style}}>
    <h3>GET A QUOTE</h3>
    <div className='contact_methods'>
      <ContactMethod
        img='http://simpleicon.com/wp-content/uploads/phone-symbol-2.png'
        alt="phone icon"
        method="phone call"
        href={'tel:8018301084'}
        contactInfo="(801) 830-1084"
      />
      <ContactMethod
        img='http://simpleicon.com/wp-content/uploads/phone-symbol-2.png'
        alt="text message icon"
        method="text message"
        contactInfo="(801) 830-1084"
      />
      <ContactMethod
        img='https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png'
        alt="email icon"
        method="email"
        contactInfo="sales@qualityutah.com"
      />
    </div>
  </div>
}

export default GetQuote;

/*
  email: sales@qualityutah.com
  phone: 
*/