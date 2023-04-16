import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nikhil-bhati-4543b6239/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/bhatinikhil8055" target="_blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials