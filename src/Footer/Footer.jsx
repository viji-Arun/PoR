import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';
const Footer = () => {
  return (
    <footer >
        <a href='#home' className='footer-logo'>VIJI</a>
        <ul className='links'>
          <li><a href='#home'>HOME</a></li>
          <li><a href='#about'>ABOUT</a></li>
          <li><a href='#skill'>SKILL</a></li>
          <li><a href='#projects'></a></li>
          </ul>
          <div className='footer_social'>
            <a href=''><BsGithub/></a>
            <a href=''><BsLinkedin/></a>
            <a href=''><SiLeetcode/></a>
        </div>
        <div className='footer-copyright'>
            <small>&copy;vijayasree.All Rights Reserved</small>
        </div>

    </footer>
  )
}

export default Footer