import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Aux from './Aux';
import Logo from '../Styles/Assets/Logo Smallest.png';
import Dropdown from '../Styles/Assets/Icon Dropdown.png';
import Hamburger from '../Styles/Assets/Icon Hamburger.png';

const Header = props => {
  const [dropdown, setDropdown] = useState(false);
  const services = [
    "Roofing", "Flooring", "Remodels", "Basements",
    "Tree Removal", "Other"
  ];

  const servicesDropdown = <div className='header_dropdown'>
    {services.map((element, index) => {
      return <div className='header_dropdown-item' key={index+element}>
        {element}
      </div>
    })}
  </div>

  const hamburgerDropdown = <div className='header_dropdown-2'>
    {services.map((element, index) => {
      return <div className='header_dropdown-item-2' key={index+element}>
        {element}
      </div>
    })}
    <button className='header_button-2 button_cta'>GET A QUOTE</button>
  </div>

  return <Aux>
  <div className='header'>
    <Link to='/'>
      <div className='header_logo'>
        <img className='header_logo-img' src={Logo} alt="Quality Carpentry Logo"/>
        <div className='header_logo-text'>QUALITY CARPENTRY</div>
      </div>
    </Link>
    <div className='header_nav-container'>
      <nav>
        <ul>
          <li className='header_link'>
            <Link to='/'> HOME </Link>
          </li>
          <li className='header_link header_dropdown-container'>
              SERVICES 
              <img 
                className='header_dropdown-caret'
                src={Dropdown}
                alt={'Dropdown Caret'}
                />
          { servicesDropdown }
          </li>
          <li className='header_link'>
            <Link to='/about'> ABOUT </Link>
          </li>
        </ul>
      </nav>
      <img className='header_hamburger' 
        src={Hamburger} 
        alt='hamburger menu'
        onClick={()=>dropdown?setDropdown(false):setDropdown(true)}
      />
      <button className='header_button button_cta'>GET A QUOTE</button>
    </div>
  </div>
  {dropdown
    ? hamburgerDropdown
    : null
  }
  </Aux>
}

export default Header;