import React from 'react';
import { Link } from 'react-router-dom';
import Column from './Column';
import Logo from '../../Styles/Assets/Logos/Full.png';
import Phone from '../../Styles/Assets/Icons/Contact/Phone.png';
import Email from '../../Styles/Assets/Icons/Contact/Email.png';

const Footer = props => {

// ===== ===== DATA BEG ===== =====



// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====



// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====

  let column1 = <Column title="CONNECT WITH US">
    <a className='footer_child'
      href='mailto:sales@qualityutah.com?subject=Quote Request'>
      <img className='footer_icon' src={Email} alt="A small circular icon with an envelope inside."/>
      <span>sales@qualityutah.com</span>
    </a>
    <a className='footer_child'
      href='tel:3852447957'>
      <img className='footer_icon' src={Phone} alt="A small circular icon with a telephone inside."/>
      <span>(385) 244-7957</span>
    </a>
  </Column>

  let column2 = <Column title="NAVIGATION">
    <Link to='/'>
      <div className='footer_child'> HOME </div>
    </Link>
    <Link to='/about'>
      <div className='footer_child'> ABOUT </div>
    </Link>
    <div className='footer_child footer_no-hover'>
      SERVICES
    </div>
      <Link to='/services/roofing'>
        <div className='footer_grandchild'> Roofing </div>
      </Link>
      <Link to='/services/flooring'>
        <div className='footer_grandchild'> Flooring </div>
      </Link>
      <Link to='/services/remodels'>
        <div className='footer_grandchild'> Remodels </div>
      </Link>
      <Link to='/services/basements'>
        <div className='footer_grandchild'> Basements </div>
      </Link>
      <Link to='/services/tree-removal'>
        <div className='footer_grandchild'> Tree Removal </div>
      </Link>
      <Link to='/services/junk-removal'>
        <div className='footer_grandchild'> Junk Removal </div>
      </Link>
      <Link to='/services/finish-carpentry'>
        <div className='footer_grandchild'> Finish Carpentry </div>
      </Link>
  </Column>

  let column3 = <Column title="&#169; 2021 QUALITY CARPENTRY">
    <div className='footer_child footer_no-hover'>
      <img className='footer_logo' src={Logo} alt="Quality Carpentry Logo"/>
    </div>
  </Column>

// ===== ===== 'COMPONENTS' END ===== =====

  return <div className='footer'>
    { column1 }
    { column2 }
    { column3 }
  </div>
}

export default Footer;