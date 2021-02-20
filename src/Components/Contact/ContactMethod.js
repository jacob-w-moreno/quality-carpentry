import React from 'react';

const ContactMethod = props => {
  return <a className='contact_method' href={props.href}>
    <span>{props.method.toUpperCase()}</span>
    <div className='contact_method-details'>
      <img className='contact_icon' src={props.img} alt={props.alt}/>
      <span>{props.contactInfo}</span>
    </div>
  </a>
}

export default ContactMethod;