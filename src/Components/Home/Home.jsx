import React from 'react'
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import ME from '/images/me.png'
import './Home.css';
const Home = () => {
  return (
    <header id="home">
        <div className='container home_container'>
        <h5>Hello i am</h5>
        <h1>Vijayasree...</h1>
        <h5 className='text-align'>Full stack developer</h5>
        <div className='cta'>
            <a href='' download className='btn'>
                Download cv
            </a>
            <a hreaf="#contact" className='btn btn-primary'>
                Contact Me
            </a>
            <div className='home_social'>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <BsLinkedin size={30} />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <BsGithub size={30} />
      </a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <BsWhatsapp size={30} />
      </a>
    </div>
<div className='me'>
    <img src={ME} alt='viji'></img>
</div>
<a href='/contact' className='scroll_down'>
   --------- Scroll down --------------
</a>
        </div>
        </div>
    </header>
  )
}

export default Home