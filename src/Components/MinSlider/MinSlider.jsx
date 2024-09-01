import React from 'react'
import styles from './MinSlider.module.css'
import img1 from './../../assets/bag.jpg'
import img2 from './../../assets/guitar.jpg'
import img3 from './../../assets/gold.jpg'
import img4 from './../../assets/smalbag.jpg'
import img5 from './../../assets/img5.jpg'

import Slider from "react-slick";

export default function MinSlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
    <div className='flex justify-center mt-20 mb-8'>
      <div className='w-1/5 ' > 

  <Slider {...settings}>
  <img className='w-full' src={img4} alt="" />
<img className='w-full'  src={img5} alt="" />
<img className='w-full'  src={img3} alt="" />

  </Slider>
      </div>
      <div className='w-1/5  bg-slate-800'> 
      <div> <img src={img1} alt="" /></div>
      <div> <img src={img2} alt="" /></div>
      </div>
    </div>
  )
}
