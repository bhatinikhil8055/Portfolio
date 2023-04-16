import React from 'react'
import './Footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaTelegram} from 'react-icons/fa'
import {ImSkype} from 'react-icons/im'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://intagram.com"><FiInstagram /></a>
        <a href="https://Telegram.com"><FaTelegram /></a>
        <a href="https://skype.com"><ImSkype /></a>
      </div>

      <div className="footer__copyright">
        <smal>&copy; EGATOR Tutorials. All rights reserved.</smal>
      </div>
    </footer>
  )
}

export default footer