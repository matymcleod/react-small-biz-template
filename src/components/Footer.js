import React from 'react';
import InstaLogo from '../images/Instagram.png';
import '../Footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <p>T: 555-555-5555</p>
        <p>E: email@email.com</p>
        <p>Privacy Policy</p>
        <img className='insta-logo' src={InstaLogo} alt="Social Logo"/>
      </div>
      <p> &copy; 2022 Company Name</p>
    </div>
  )
}