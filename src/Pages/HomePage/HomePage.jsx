import React from 'react'
import styles from './HomePage.module.css'
import MinSlider from '../../Components/MinSlider/MinSlider'
import CategorySlider from '../../Components/CategorySlider/CategorySlider'
import Products from '../../Components/Products/Products'
import { Helmet } from 'react-helmet'
export default function HomePage() {
  return (<>
    <div className='container'> 
    <Helmet>
                <title>Home </title>
            </Helmet>
            
    <MinSlider/>

    </div>
    <div>

    <CategorySlider/>
    </div>
    <div  className='container'>
    <Products/>
    </div>
  </>
  )
}
