import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const data = [
  {
    avatar: Avt1,
    name: 'Tina Snow',
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quae vero aut excepturi quaerat sapiente eligendi est reprehenderit officiis dicta. Enim consectetur unde, placeat nemo modi sequi sed itaque architecto?"  
  },
  {
    avatar: Avt2,
    name: 'Peter pene',
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quae vero aut excepturi quaerat sapiente eligendi est reprehenderit officiis dicta. Enim consectetur unde, placeat nemo modi sequi sed itaque architecto?"  
  },
  {
    avatar: Avt3,
    name: 'Tom ahawk',
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quae vero aut excepturi quaerat sapiente eligendi est reprehenderit officiis dicta. Enim consectetur unde, placeat nemo modi sequi sed itaque architecto?"  
  },
  {
    avatar: Avt4,
    name: 'kira seven',
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quae vero aut excepturi quaerat sapiente eligendi est reprehenderit officiis dicta. Enim consectetur unde, placeat nemo modi sequi sed itaque architecto?"  
  },
  
]

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                   {review}
                  </small>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials