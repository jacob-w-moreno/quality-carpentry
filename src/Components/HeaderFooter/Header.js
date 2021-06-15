import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Aux from '../Aux';

import Logo from '../../Styles/Assets/Logos/Minimal.png';

import Phone from '../../Styles/Assets/Icons/Contact/Phone.png';

import Dropdown from '../../Styles/Assets/Icons/Navigation/Dropdown.png';
import Hamburger from '../../Styles/Assets/Icons/Navigation/Hamburger.png';
import X from '../../Styles/Assets/Icons/Navigation/X.png';

const Header = props => {
// ===== ===== DATA BEG ===== =====
  
  const [dropdown, setDropdown] = useState(false);

  const services = [
    "Roofing", "Flooring", "Remodels", "Basements", "Tree Removal", "Junk Removal", "Finish Carpentry"
  ];
  
// ===== ===== DATA END ===== =====

// ===== ===== FUNCTIONS BEG ===== =====



// ===== ===== FUNCTIONS END ===== =====

// ===== ===== 'COMPONENTS' BEG ===== =====

  const logo = <Link to='/'>
    <div className='header_logo'>
      <img className='header_logo-img' src={Logo} alt="Quality Carpentry Logo"/>
      <div className='header_logo-text'>QUALITY CARPENTRY</div>
    </div>
  </Link>

  const servicesDropdown = <div className='header_dropdown'>
    {services.map((element, index) => {
      return <Link
        to={'/services/' + element.split(' ').join('-').toLowerCase()}
        key={index+element}>
        <div className='header_dropdown-item'> 
          {element} 
        </div>
      </Link>
    })}
  </div>

  const hamburger = <img className='header_hamburger'
    src={dropdown ? X : Hamburger}
    alt='hamburger menu'
    onClick={()=>dropdown?setDropdown(false):setDropdown(true)}
  />

  const navigation = <div className='header_nav-container'>
    <nav>
      <ul>
        <Link to='/' className='header_link'>
          <li>HOME</li>
        </Link>

        <li className='header_link header_dropdown-container'>
          SERVICES
          <img className='header_dropdown-caret' src={Dropdown} alt={'Dropdown Caret'} />
          { servicesDropdown }
        </li>

        <Link to='/about' className='header_link'>
          <li>ABOUT</li>
        </Link>

        <li>
          <a className='header_link' href='tel:3852447957'>
            <img className='header_img' src={Phone} alt="Circular-icon-with-a-phone-inside"/>
            (385) 244-7957
          </a>
        </li>
      </ul>
    </nav>
    {hamburger}
  </div>

  const hamburgerDropdown = <div className='header_dropdown-2'>
    <ul>
      <li>
        <a className='header_link' href='tel:3852447957' style={{color:"white"}}>
          (385) 244-7957
        </a>
      </li>
      <Link to='/'>
        <li className='header_link' onClick={()=>setDropdown(false)}>HOME</li>
      </Link>
      <Link to='/about'>
        <li className='header_link' onClick={()=>setDropdown(false)}>ABOUT</li>
      </Link>
      <li className='header_link no-highlight'>SERVICES</li>
    </ul>
    {services.map((element, index) => {
      return <Link key={index+element} className='header_dropdown-item-2' to={'/services/' + element.split(' ').join('-').toLowerCase()}>
        <div onClick={()=>setDropdown(false)}>
          {element}
        </div>
      </Link>
    })}
    <button className='header_button-2 button_cta'>GET A QUOTE</button>
  </div>

// ===== ===== "COMPONENTS"" END ===== =====

  return <Aux>
  <div className='header'>
    { logo }
    { navigation }
  </div>
  { dropdown
    ? hamburgerDropdown
    : null
  }
  </Aux>
}

export default Header;