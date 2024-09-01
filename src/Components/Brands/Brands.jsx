import React, { useEffect, useState } from 'react'
import styles from './Brands.module.css'
import axios from 'axios'
import Model from '../Model/Model'

export default function Brands() {

  const [showModel , setShowModel] = useState(false)

  function handelModel() {

    setShowModel(true)
  }


   
  const [modelData, setModelData] = useState([])

  function getModelData(id) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)


      .then((data) => (setModelData(data.data.data)))
  }
















  const [dataBrands, setDataBrands] = useState([])

  function getBrands() {


    axios.get('https://ecommerce.routemisr.com/api/v1/brands').then((response) => {
      setDataBrands(response.data.data);

    })
  }
  useEffect(() => {
    getBrands()
  }, [])


  return (<>

    <div className='container mt-10'>

      <div className='row'>

        { dataBrands.length >0  }

        {dataBrands.map((bb) => (
          
          <div  className='w-1/4  p-4 product text-center'>


          <img src={bb.image} alt="" />
          <h1>{bb.name}</h1>
        </div>
        ))}

      </div>

    </div>



    <Model  setShowModel={setShowModel} dataBrands={dataBrands} modelData={modelData}/>
 
  </>
  )
}









