import React from 'react';

import Logo from '../Styles/Assets/Logo.png';

const Header = props => {
  return <div className='header'>
    <img className='header_logo' src={Logo} alt="Quality Carpentry"/>
    <nav>
      <ul>
        <li className='header_link'>HOME</li>
        <li className='header_link'>SERVICES</li>
        <li className='header_link'>ABOUT</li>
        <li className='header_cta'>GET A QUOTE</li>
      </ul>
    </nav>
  </div>
}

export default Header;