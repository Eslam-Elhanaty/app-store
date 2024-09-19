import React from 'react'
import styles from './Product.module.css'
import Products from '../Products/Products'
import { Helmet } from 'react-helmet'

export default function Product() {
  return (
    <div className='container'>
        <Helmet>
                <title>
                Product
                 </title>
            </Helmet>
            

      <Products/>
    </div>
  )
}
