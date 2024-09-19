import React, { useContext, useState } from 'react'
import styles from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {  userContext } from '../../Context/UsersContext/UsersContext'
import { FaSpinner } from 'react-icons/fa'
import { Helmet } from 'react-helmet'




export default function Login() {

  const [error, setError] = useState(null)
  const [isLoding, setIsLoding] = useState(false)

   const {setUserToken}=useContext(userContext)

  let Navigate = useNavigate()

  function handeleLogin(values) {
    setIsLoding(true)

    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
      .then((date) => {
        if (date.data.message === 'success') {


          setUserToken(date.data.token);

          localStorage.setItem('usertoken', date.data.token)

          setIsLoding(false)
          Navigate('/home')

        }
      }
      )
      .catch((Error) => {

        // setError(Error.response.data.message);
        setIsLoding(false)
      }

      )



  }
  let validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string()
      .required()
      .matches(/^[0-9a-z]{3,9}$/, 'password is not valid'),

    // .matches(/^01[0-25][0-9]{8}$/, 'phone is not valid' )
  })
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",

    },
    validationSchema: validationSchema,
    onSubmit: handeleLogin
  })

  return (

    <>
    
    <div className=' container  '>
    <Helmet>
                <title>login</title>
            </Helmet>
            
      <div className=' my-3  m-auto mt-40'>

        <h1 className='text-2xl font-bold ms-48  mb-5 text-black '> Login now </h1>
        <form className='my-3' onSubmit={formik.handleSubmit}>

          {error && <div className='bg-red-400 font-bold m-auto py-3 w-3/4'>

            <span className='ms-3'>
              {error}
            </span>          </div>}

          <div class="relative my-5  w-3/4 m-auto">
            <input type="email" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-green-700 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            <label htmlFor="email" class="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">email</label>
            {formik.errors.email && formik.touched.email && (<span className='text-red-600'> {formik.errors.email} </span>)}

          </div>
          <div class="relative my-5  w-3/4 m-auto">
            <input type="password" id="password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-green-700 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
              name='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />

            <label htmlFor="password" class="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">password</label>
            {formik.errors.password && formik.touched.password && (<span className='text-red-600'> {formik.errors.password} </span>)}

          </div>


          <div className='m-auto w-3/4 '>
            <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-4  me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              {isLoding ? <FaSpinner className='text-xl icon-spin text-white '/> : 'submit'}
            </button>

          </div>
          <Link to='/LostPaswword'>
          <span className='text-center flex justify-end w-full'>
          forget Password ? 
            </span>
            </Link>
        </form>
        <p className=' mt-2 text-center text-gray-500 text-xl' >
        Create a New Account
        ?
          <Link to={'/register'} className='font-semibold leading-3 text-teal-900 text-xl hover:text-green-500'> register now </Link>
        </p>
      </div>
    </div>
    </>
  )
}

