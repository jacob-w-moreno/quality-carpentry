import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../Styles/Assets/QCLogo.png';

const Header = props => {
  return <div className='header'>
    <div className='header_logo'>
      <img className='header_logo-img' src={Logo} alt="Quality Carpentry Logo"/>
      <div>QUALITY CARPENTRY</div>
    </div>
    <nav>
      <ul>
        <li className='header_link'>
          <Link to='/'> HOME </Link>
        </li>
        <li className='header_link'>
          <Link to='/services'> SERVICES </Link>
        </li>
        <li className='header_link'>
          <Link to='/about'> ABOUT </Link>
        </li>
        <li className='button_cta'>GET A QUOTE</li>
      </ul>
    </nav>
  </div>
}

export default Header;