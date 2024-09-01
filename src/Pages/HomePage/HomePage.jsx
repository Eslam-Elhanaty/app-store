import React from 'react'
import styles from './HomePage.module.css'
import MinSlider from '../../Components/MinSlider/MinSlider'
import CategorySlider from '../../Components/CategorySlider/CategorySlider'
import Products from '../../Components/Products/Products'
export default function HomePage() {
  return (<>
    <div className='container'> 
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
