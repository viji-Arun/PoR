import React from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contact'>
    <h5>Get in Touch</h5>
    <h5>CONTACT ME</h5>
    <div className='container contact-container'>
        <div className="contact-options">
            <article className='contact-option'>
                <MdOutlineEmail className='contact_option_icons'/>
                <h4>Email</h4>
                <h3>vijayasreearu22@gmail.com</h3>
                <a href=''>Send messages</a>
            </article>
            <article className='contact-option'>
                <BsGithub className='contact_option_icons'/>
                <h4>Github</h4>
                <h5></h5>
                <a href=''>Just Open</a>
            </article>
        </div>
        <form>
            <input type='text' name='name' placeholder='Your Name' required/>
            <input type='email' name='email' placeholder='Your Emailid' required/>
            <textarea name='message' id='message' cols="30" rows="7" placeholder='Your message' />
            <button type='submit' className='btn btn-secondary'>Send Message</button>
        </form>
    </div>
    </section>
  )
}

export default Contact