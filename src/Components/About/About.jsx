import React from 'react'
import myImage from '/images/aboutme.jpg';
import { GiGraduateCap } from 'react-icons/gi';
import { BsTelephoneForward } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import './About.css';
const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h1>About Me</h1>
        <div className='container about_container'>
            <div className="about">
                <div className="about_me_image">
                    <img src={myImage} alt=''></img>
                </div>
            </div>
            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                      <GiGraduateCap className='about_icon'/>
                      <h5>Graduate</h5>
                      <small>
                       Msc.computer sceince<br/>
                       <i>VLBJCAS college,coimbatore</i>
                      </small>
                     </article>
                     <article className="about_card">
                      <TfiWorld className='about_icon'/>
                      <h5>Location</h5>
                      <small>
                       Sankar Nivas,Malamal,Alathur,Palakkad<br/>
                      </small>
                    </article>
                    <article className="about_card">
                      <BsTelephoneForward className='about_icon'/>
                      <h5>Contact</h5>
                      <small>
                       <ul>
                        <li>Phone:</li>
                        <li>Email:</li>
                       </ul>
                      </small>
                    </article>
                </div>
                <p>
                Hi, I'm Vijayasree, a skilled Full Stack Developer specializing 
                in the MERN stack (MongoDB, Express.js, React.js, Node.js). 
                create dynamic, responsive web applications using
                 React and robust server-side logic with Node.js and
                 Express.I am committed to writing clean, maintainable code 
                 and following best practices in development. My skills in 
                 version control with Git and collaboration tools make me an 
                 effective team player. I am always eager to learn new
                 technologies and stay updated with the latest industry trends
                 to deliver cutting-edge solutions.


                </p>
            </div>
        </div>
    </section>
  )
}

export default About