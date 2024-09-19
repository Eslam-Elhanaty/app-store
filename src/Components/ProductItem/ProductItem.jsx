import React, { useContext, useState } from 'react'
import styles from './ProductItem.module.css'
import { CartContext } from '../../Context/CartContext/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';
import { WishContext } from '../../Context/WishContext/WishContext';


export default function ProductItem({ product }) {
  const [isWished, setIsWished] = useState(false);

  let { addProductToCWish } = useContext(WishContext)

  const productId = product._id;
  // const [dataWish, setDataWish] = useState([]);
  // const wishIds = dataWish?.map((item) => item?.id)





  

  let { addProductToCart, setNumOfCartItems } = useContext(CartContext)

  async function addProduct(productId) {


    let x = await addProductToCart(productId)

    toast.success(x.data.message + ('❤️'),
      {
        duration: 3000,
        position: 'top-right',

        style: {
          backgroundColor: 'green', padding: '16px', color: 'white', fontSize: "20px", border: '1px solid white',
          padding: '16px',

        }


      })



    setNumOfCartItems(data.data.numOfCartItems)


  }

    function handelWish(){
    addProductToCWish(productId)
    setIsWished(true);
    toast.success(  ( ' like it ❤️'),
    {
      duration: 3000,
      position: 'top-right',

      style: {
        backgroundColor: 'green', padding: '16px', color: 'white', fontSize: "20px", border: '1px solid white',
        padding: '16px',

      }


    }) 

  }

  function handleAddToCart(productId) {
    addProductToCart(productId);

    toast.success(  ( ' Product added successfully to your cart ❤️'),
      {
        duration: 3000,
        position: 'top-right',

        style: {
          backgroundColor: 'green', padding: '16px', color: 'white', fontSize: "20px", border: '1px solid white',
          padding: '16px',

        }


      })  }





  return (
    <div className='  product relative  md:w-1/2 lg:w-1/4 rounded text-center mx-auto p-5 mt-10  '>

      <Link to={`/ProductDetails/${product._id}`} className=" ">
        <img src={product.imageCover} alt="" />
        <p className='text-green-500'> {product.category.name} </p>
        <h5 className='font-bold my-2'> {product.title.split(" ").slice(0, 2).join(' ')} </h5>
        <div className='row justify-between'>
          <p className='ms-5 '>{product.price} EGP</p>
          <div >
            <i className='fa-solid fa-star text-yellow-300'></i>
            <span> {product.ratingsAverage} </span>
            <div onClick={() => wishData()}>

            </div>
          </div>

          
        </div>
      </Link>
      <i 
        className={`fa-solid fa-heart text-2xl ${isWished ? 'text-red-600' : 'text-black'}`} 
        onClick={() => handelWish(productId)}
      ></i>

      <div className='p-1 mx-auto w-3/5'>
        {/* <button className='bg-yellow-400' onClick={()=>{ ToggleWishlist(product.id) }}>AADD TOOO WISH</button> */}
        <button onClick={() => addProduct(product.id)} className='bg-green-500    rounded btnProduct text-white  bottom-1.5  '> + Add </button>

      </div>
    </div>




  )
}
