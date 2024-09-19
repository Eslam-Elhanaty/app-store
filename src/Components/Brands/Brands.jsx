import React, { useEffect, useState } from 'react'
import styles from './Brands.module.css'
import axios from 'axios'
import Model from '../Model/Model'
import Loader from '../Loader/Loader'
import { Helmet } from 'react-helmet'

export default function Brands() {
  const [isLoding, setIsLoding] = useState(true)

  const [showModel, setShowModel] = useState(false)

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
      setIsLoding(false)

    })
  }
  useEffect(() => {
    getBrands()
  }, [])


  return (<>

    <div >

      <div className='container mt-10 '>
      <Helmet>
                <title>
                Brands
                 </title>
            </Helmet>
            

        <div className='row'>


          {isLoding ?

            <Loader />

            :

            dataBrands.map((bb) => (

              <div  key={bb._id}  onClick={() => (handelModel(), getModelData(bb._id))} className='w-1/4  p-4 product text-center'>


                <img src={bb.image} alt="" />
                <h1>{bb.name}</h1>
              </div>
            ))}

        </div>

      </div>



      {showModel && <Model isVisible={true} setShowModel={setShowModel} modelData={modelData} />}


    </div>
  </>
  )
}









