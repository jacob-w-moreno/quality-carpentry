import React from 'react';
import { Link } from 'react-router-dom';
import Column from './Column';
import Logo from '../../Styles/Assets/Logo Full.png';

const Footer = props => {
  return <div className='footer'>
    <Column title="CONNECT WITH US">
      <div className='footer_child'>
        <div className='footer_icon'/>
        <span>@qualitycarpentry</span>
      </div>
      <div className='footer_child'>
        <div className='footer_icon'/>
        <span>sales@qualityutah.com</span>
      </div>
      <div className='footer_child'>
        <div className='footer_icon'/>
        <span>(801) 830-1084</span>
      </div>
    </Column>
    <Column title="SITE MAP">
      <div className='footer_child'>
        HOME
      </div>
      <div className='footer_child'>
        ABOUT
      </div>
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
        <Link to='/services/other'>
          <div className='footer_grandchild'> Other </div>
        </Link>
    </Column>
    <Column title="&#169; 2021 QUALITY CARPENTRY">
      <div className='footer_child footer_no-hover'>
        <img className='footer_logo' src={Logo}/>
      </div>
    </Column>
  </div>
}

export default Footer;