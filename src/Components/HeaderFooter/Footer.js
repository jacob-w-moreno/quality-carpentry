import React from 'react';

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
        <div className='footer_grandchild'> Roofing </div>
        <div className='footer_grandchild'> Flooring </div>
        <div className='footer_grandchild'> Remodels </div>
        <div className='footer_grandchild'> Basements </div>
        <div className='footer_grandchild'> Tree Removal </div>
        <div className='footer_grandchild'> Other </div>
    </Column>
    <Column title="&#169; 2021 QUALITY CARPENTRY">
      <div className='footer_child footer_no-hover'>
        <img className='footer_logo' src={Logo}/>
      </div>
    </Column>
  </div>
}

export default Footer;