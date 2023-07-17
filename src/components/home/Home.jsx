import React from 'react'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/image3.jpg'
import './home.css'
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    image:IMG1,
    heading:'Handmade Kitchen stools'
  },
  {
    image:IMG2,
    heading:'Kids sleeper bed'
  },
  {
    image:IMG3,
    heading:'Large dining table '
  }
]
const Home = () => {
  return (
      <div id='home' className='h-container'>
   <Swiper 
   modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{clickable:true}}

>
    {
      data.map(({image,heading},index) =>{
        return(
          <SwiperSlide key={index} className='home-container'>
            <div className='modify1'>
              <h1 >{heading}</h1>
              </div>
              <div>
              <img src={image}/>
              </div>
          </SwiperSlide>
        )
      })
    }
   </Swiper>
   </div>
  )
}

export default Home