import React, { useEffect, useState } from 'react'
import styles from './WishList.module.css'
import axios from 'axios'
import Cart from '../../Pages/cart/cart';

export default function WishList() {
  const [products, setProducts] = useState([]);

  function getProudects() {
    axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',
      {
        headers: { token: localStorage?.getItem("usertoken") }
      })
      .then((data) => {
        // console.log(data);
      })
      .catch(() => {
        console.log("errro");
      })
  }
  useEffect(() => {
    getProudects();
  }, []);
  


 return(<>
 
 <Cart/>
 
 
 </>




 ) 
}
