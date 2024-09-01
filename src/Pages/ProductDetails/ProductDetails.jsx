import React, { useContext, useEffect, useState } from 'react'
import styles from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import { CartContext } from '../../Context/CartContext/CartContext';
import toast from 'react-hot-toast';


export default function ProductDetails() {
  let { id } = useParams();
const {addProductToCart}= useContext(CartContext)

async function addProduct(id) {

let x =await addProductToCart(id)

toast.success(x.data.message,
  {
  duration: 3000,
  position:'top-right',
  style:{backgroundColor:'green', padding:'16px',color:'white', fontSize:"18px",    border: '1px solid white',
    padding: '16px',} 
  
})
  
}


  const [details, setDetails] = useState({})

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  function getDetails() {

    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((data) => setDetails(data.data.data))
      .catch((err) => console.log(err));

  };
  useEffect(() => {

    getDetails()
  }, []);



  return (
    <div className='container'>

      <div className='row items-center mt-8 '>
        <div className='w-1/4 mx-10  ' >


          <Slider {...settings}   >

            {details?.images?.map(image =>
              <img src={image} />)}





          </Slider>


        </div >
        <div className='w-2/4 px-4 mt-8 p-5 '>
          <div className="inner  ">

            <h1 className='text-3xl p-2'> {details.title} </h1>
            <small className='text-slate-600 p-2 '> {details.description} </small>
            <h5 className='text-lg'> {details?.category?.name} </h5>

            <div className="flex justify-between  mt-3 ms-1 text-xl">
              <p>{details.price} EGP </p>
              <div>
                {details.ratingsAverage}
                <i className='fa-solid fa-star text-yellow-300 me-22'></i>

              </div>
            </div>
            <div className="flex">

              <button onClick={()=>{addProduct(id)}} className='bg-lime-600 w-full p-2 rounded mt-5'> + Add </button>

              <i className='fa-solid fa-heart text-black ms-20 text-3xl mt-4' ></i>

            </div>
          </div>
        </div>

      </div>


    </div>

  )
}
