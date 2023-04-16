import React from 'react'
import'./Testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avt1,
    name: 'Aster Public School',
    edu:  'Highschool  (10th), CGPA - 8.6, Year - (2017)'
  },
  {
    avatar: Avt2,
    name: 'Aster Public School',
    edu: 'Inter  (12th), Percentage - 83.4, Year -  (2019)'
  },
  {
    avatar: Avt3,
    name: 'Gautam Buddha University',
    edu: 'B.Tech - (CSE), Percentage -  71, Year - (2019-23)'
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Education</h5>
      <h2>My Qualifications</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, edu}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='school__name'>{name}</h5>
              <small className='edu'>{edu}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials