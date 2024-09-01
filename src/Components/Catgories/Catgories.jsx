import React, { useEffect, useState } from 'react'
import styles from './Catgories.module.css'
import axios from 'axios'

export default function Catgories() {

  
  const [dataCategory, setDataCategory] = useState([])
  
  function getCategories() {
    console.log("hahahhj");

    axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    .then((data) => {
      setDataCategory(data.data.data);})
      .catch((error)=>console.log(error))
  }
 
  useEffect(() => {
    getCategories()
  }, [])
  

  return (
    <div className='container'>
      <div className="row mt-8">
       
       {/* <h1>category</h1> */}
       {dataCategory.map((x)=>(<>

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
