import React from 'react';

const ContactMethod = props => {
  return <a className='contact_method' href={props.href}>
    <span className='contact_method-name'>{props.method.toUpperCase()}</span>
    <div className='contact_method-details'>
      <span>{props.contactInfo}</span>
    </div>
  </a>
}

export default ContactMethod;