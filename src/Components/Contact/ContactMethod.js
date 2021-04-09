import React from 'react';

const ContactMethod = props => {

// ===== ===== DATA BEG ===== =====



// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====



// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====
  
  let name = <span className='contact_method-name'>{props.method.toUpperCase()}</span>
  let details = <div className='contact_method-details'>
    <span>{props.contactInfo}</span>
  </div>
  
// ===== ===== 'COMPONENTS' END ===== =====
  
  return <a className='contact_method' href={props.href}>
    { name }
    { details }
  </a>
}

export default ContactMethod;