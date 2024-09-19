import React from 'react'
import { Link } from 'react-router-dom';

export default function Model({ isVisible,modelData, setShowModel , Brands}) {

  function handelCloseModel() {
    setShowModel(false)

  }

    

    if(isVisible) {
      return (
    
        <div className='  relative  parent'>
    
    
    <div className='   model  mx-auto my-auto h-full w-full    '>
      

<div className='w-1/3 mx-auto mt-20 bg-white'>
<i class="fa-solid fa-x float-end text-lg p-3"  onClick={()=>handelCloseModel()} ></i>

<div className='flex justify-between w-full mx-auto model-bg  border-b-2 border-t-2 p-7 bg-green-500 '>
      <h1 className='mt-14 text-4xl font-semibold text-green-500'> {modelData.name}</h1>
      <h4 className='float-start'> {modelData.name}</h4>
      <div className='w-2/3'>
        <img src={modelData.image} alt="" />
      </div>
    </div>
    <button  type='submit' className=' mt-2 float-end mx-auto my-auto mb-4 bg-green-400' onClick={()=>handelCloseModel()} >close</button>


</div>

  


    
    
    
    </div>
    
        </div>
      )
    


    }else{

      return(
      <>
      </>
    )
    }
}
