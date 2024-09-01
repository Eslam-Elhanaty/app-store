import React, { useContext, useState } from 'react'
import styles from './ProductItem.module.css'
import { CartContext } from '../../Context/CartContext/CartContext'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';


export default function ProductItem({product}) {


  // const productId = product._id;
  // const [dataWish, setDataWish] = useState([]);
  // const wishIds = dataWish?.map((item) => item?.id)




  // function wishData() {
  //   axios
  //     .get("https://ecommerce.routemisr.com/api/v1/wishlist", {
  //       headers: { token: localStorage.getItem("userToken") },
  //     })
  //     .then((data) => {
        
  //       setDataWish(data);
  //     });
  // }
  

// function ToggleWishlist(productId) {

//   axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
//     productId,
//   }, {
//     headers: { token: localStorage.getItem('userToken'), }
//   }
//   ).then(() => {
//     wishData()

//     toast.success("It has been successfully added", {
//       position: 'top-right',
//       className: 'p-2 text-2xl ',
//       icon: '❤️'
//     })

//   })
    
//   }



   let {addProductToCart,setNumOfCartItems} =useContext(CartContext)

   async function addProduct(productId){


    let x = await addProductToCart(productId)

    toast.success(x.data.message,
      {
      duration: 3000,
      position:'top-right',
      style:{backgroundColor:'green', padding:'16px',color:'white', fontSize:"18px",    border: '1px solid white',
        padding: '16px',} 
      
    })
    setNumOfCartItems(data.data.numOfCartItems)

    
   }
  
  return (
    <div className='  product relative  md:w-1/2 lg:w-1/4 rounded text-center mx-auto p-5 mt-10 '>
      
    <Link to={`/ProductDetails/${product._id}`}  className=" ">
<img src={product.imageCover} alt="" />
<p className='text-green-500'> {product.category.name} </p>
<h5 className='font-bold my-2'> {product.title.split(" ").slice(0,2).join(' ')} </h5>
<div className='row justify-between'>
  <p className='ms-5 '>{product.price} EGP</p>
  <div >
    <i className='fa-solid fa-star text-yellow-300'></i>
    <span> {product.ratingsAverage} </span>
  </div>

</div>
</Link>
<div className='p-1 mx-auto w-full'>
  {/* <button className='bg-yellow-400' onClick={()=>{ ToggleWishlist(product.id) }}>AADD TOOO WISH</button> */}
<button onClick={()=>addProduct(product.id)} className='bg-green-500    rounded btnProduct text-white  bottom-1.5  '> + Add </button>

</div>
    </div>
    

    

  )
}
