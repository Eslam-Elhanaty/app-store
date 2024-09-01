import React, { useEffect, useState } from 'react'
import styles from './CategorySlider.module.css'
import axios from 'axios'
import Slider from "react-slick";
export default function CategorySlider() {

  const [categories, setCategories] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }



  function getCategory() {

    axios.get("https://ecommerce.routemisr.com/api/v1/categories")
      .then((data) => setCategories(data.data.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getCategory()
  }, [])


  return (
    <div className='mx-auto categoyy '>


      <Slider {...settings}>
        {categories.map((category) =>

          <div className=" " key={category._id}>
            <img className=" object-cover w-full h-[300px]" src={category.image} alt="" />
            <h1>{category.name}</h1>
          </div>
        )}
      </Slider>
    </div>

  )
}
