import React from 'react';
import { Link } from 'react-router-dom';
import Column from './Column';
import Logo from '../../Styles/Assets/Logo Full.png';

const Footer = props => {
  return <div className='footer'>
    <Column title="CONNECT WITH US">
      <a className='footer_child'
        href='http://www.instagram.com/'
        target='_blank'
        rel="noopener noreferrer">
        <div className='footer_icon'/>
        <span>@qualitycarpentry</span>
      </a>
      <a className='footer_child'
        href='mailto:sales@qualityutah.com?subject=Quote Request'>
        <div className='footer_icon'/>
        <span>sales@qualityutah.com</span>
      </a>
      <a className='footer_child'
        href='tel:8018301084'>
        <div className='footer_icon'/>
        <span>(801) 830-1084</span>
      </a>
    </Column>
    <Column title="SITE MAP">
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