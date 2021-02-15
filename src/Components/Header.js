import React from 'react';

import Logo from '../Styles/Assets/QCLogo.png';

const Header = props => {
  return <div className='header'>
    <div className='header_logo'>
      <img className='header_logo-img' src={Logo} alt="Quality Carpentry Logo"/>
      <div>QUALITY CARPENTRY</div>
    </div>
    <nav>
      <ul>
        <li className='header_link'>HOME</li>
        <li className='header_link'>SERVICES</li>
        <li className='header_link'>ABOUT</li>
        <li className='button_cta'>GET A QUOTE</li>
      </ul>
    </nav>
  </div>
}

export default Header;