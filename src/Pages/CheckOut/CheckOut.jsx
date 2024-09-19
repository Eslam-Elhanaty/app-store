import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

import { FaSpinner } from 'react-icons/fa'
import { CartContext } from '../../Context/CartContext/CartContext'
import { Helmet } from 'react-helmet'
export default function CheckOut() {


    const [error, setError] = useState('')
    const [isLoding, setIsLoding] = useState(false)

    let Navigate = useNavigate()
    const{onlinePayment}= useContext(CartContext)


   async function handePayment(values) {

      const{data}=  await onlinePayment(null, values)
      console.log(data.session.url);
      window.location.href=data.session.url
      
        
        // setIsLoding(true)

        // axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
        //     .then((date) => {
        //         if (date.data.message === 'success') {
        //             setIsLoding(false)

        //             Navigate('/login')

        //         }
        //     }
        //     )
        //     .catch((Error) => {

        //         setError(Error.response.data.message);
        //         setIsLoding(false)
        //     }

        //     )
             }


    let validationSchema = Yup.object({
        details: Yup.string().required().min(3),
        city: Yup.string().required(),
    
            phone: Yup.string()
            .required()
    })
    const formik = useFormik({
        initialValues: {
            details: "",
            city: "",
            phone: "",
        },
        validationSchema: validationSchema,
        onSubmit: handePayment
    })

    return (
        <div className=' container  '>
             <Helmet>
                <title>CheckOut </title>
            </Helmet>
            
            <div className='w-3/4 my-3  m-auto'>

                <h1 className='text-2xl font-bold ms-48  mb-5 text-green-700 '> check now </h1>
                <form className='my-3' onSubmit={formik.handleSubmit}>

                    {error && <div className='bg-red-400 font-bold m-auto py-3 w-3/4'>

                        <span className='ms-3'>
                            {error}
                        </span>          </div>}
                    <div class="relative my-5 w-3/4 m-auto">
                        <input type="text" id="details" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-green-700 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            name='details'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.details}
                        />
                        <label htmlFor="details " class="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">details</label>
                        {formik.errors.details && formik.touched.details && (<span className='text-red-600'> {formik.errors.details} </span>)}

                    </div>
                    <div class="relative my-5  w-3/4 m-auto">
                        <input type="city" id="city" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-green-700 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            name='city'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.city}
                        />

                        <label htmlFor="city" class="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">city</label>
                        {formik.errors.city && formik.touched.city && (<span className='text-red-600'> {formik.errors.city} </span>)}

                    </div>
                   
                   
                    <div class="relative my-5  w-3/4 m-auto">
                        <input type="number" id="phone" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-green-700 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            name='phone'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                        />

                        <label htmlFor="phone" class="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"> phone</label>
                        {formik.errors.phone && formik.touched.phone && (<span className='text-red-600'> {formik.errors.phone} </span>)}

                    </div>
                    <div className='m-auto w-3/4 '>
                        <button
                            disabled={!(formik.isValid && formik.dirty)}
                            type="submit" className=" disabled:opacity-65  text-white bg-blue-600 font-medium rounded-lg text-sm px-10 py-4  me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            {isLoding ? <FaSpinner className='text-xl icon-spin text-white ' />
                                : 'submit'}

                        </button>

                    </div>
                </form>

            </div>
        </div>
    )
}
