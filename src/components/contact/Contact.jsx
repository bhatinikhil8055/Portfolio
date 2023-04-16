import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nb615513@gmail.com</h5>
            <a href="mailto:nb615513@gmail.com" target='_blank'>Send a Message</a>
          </article>

          {/*<article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Telegram</h4>
            <a href="https://web.telegram.org/k/" target='_blank'>Send a Message</a>
          </article>*/}

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-8510008639</h5>
            <a href="https://api.whatsapp.com/send?phone=+918510008639" target='_blank'>Drop a Message</a>
          </article>
        </div>
{/*end of contact options */}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required /> 
          <input type="email" name='email' placeholder='Your Email' required /> 
          <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact