import React from 'react'
import { Link } from 'react-router-dom';

export default function Model({dataBrands , modelData ,setShowModel}) {
    console.log(modelData);

    function closeModal()
    {
      setShowModel(false);
    }
    
  return (
    
    <div>


<div className='model w-full h-full '>
  
  <div  className='w-1/3 mt-8 mx-auto h-72 relative top-20 left-20 bg-white rounded-2xl overflow-hidden' aria-hidden="true">
 <div className='flex justify-between mt-12 border-b-2 border-t-2'>
  <div className='ms-4 flex   w-1/4'>
  <h1 className='mt-14 text-4xl font-semibold text-green-500'> {modelData.name}</h1>
  <h1 className='mt-3 float-start'> {modelData.name}</h1>
  </div>
  <div className='w-2/4'>
    <img src={modelData.image} alt="" />
  </div>


</div>
<button className='float-end mx-auto my-auto mb-4 bg-slate-500' onClick={closeModal()}>close</button>

  </div>


</div>

    </div>
  )
}
