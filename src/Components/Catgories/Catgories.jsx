import React, { useEffect, useState } from 'react'
import styles from './Catgories.module.css'
import axios from 'axios'
import Loader from '../Loader/Loader'
import { Helmet } from 'react-helmet'

export default function Catgories() {

  const [isLoding, setIsLoding] = useState(true)

  
  const [dataCategory, setDataCategory] = useState([])
  
  function getCategories() {
    console.log("hahahhj");

    axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    .then((data) => {
      setDataCategory(data.data.data);})
      
      .catch((error)=>console.log(error))
      setIsLoding(false)
  }
 
  useEffect(() => {
    getCategories()
  }, [])
  

  return (
    <div className='container'>
       <Helmet>
                <title>
                catrgories
                 </title>
            </Helmet>
            
      <div className="row mt-8">
       
       {isLoding ? <Loader/> :

       dataCategory.map((x)=>(<>

       <div className='w-1/3  p-4 product text-center'>

       <img className=' w-full h-72 object-cover' src={x.image} alt="" />
       <h1 className='text-lg text-black font-bold'>{x.name} </h1>
       </div>
       {/* <p>{x.name}</p> */}
       </>))}
      </div>
    </div>
  )
}
