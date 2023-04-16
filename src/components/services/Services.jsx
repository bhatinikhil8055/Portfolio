import React from 'react'
import './Services.css'
import{BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <artcle className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>
          </ul>
        </artcle>
        {/*end of ui ux*/}

        <artcle className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>
          </ul>
        </artcle>
        {/* end*/}

        <artcle className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>elint.</p>
            </li>
          </ul>
        </artcle>
      </div>
    </section>
  )
}

export default services