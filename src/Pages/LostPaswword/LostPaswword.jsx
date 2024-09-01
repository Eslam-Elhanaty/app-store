import React from 'react'
import { useFormik } from 'formik'


export default function LostPaswword() {
    return (<>
        <div className='container'>
       
        <form className='my-3' >

{ <div className=' font-bold m-auto py-3 w-3/4'>

  <span className='ms-3 mt-10 text-3xl'>
  please enter your verification code
    
  </span>       
     </div>}

<div class="relative my-5  w-3/4 m-auto">
  <input type="email" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-green-700 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
    name='email'
   
  />

  <label htmlFor="email" class="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">email</label>

</div>



<div className='m-auto w-3/4 '>
  <button type="submit" className="focus:outline-none text-white bg-blue-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-4  me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
  verify
  </button>

</div>

</form>

        </div>
                            </>
    )
}
