import React, { useState } from 'react'
import styles from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { FaSpinner } from 'react-icons/fa'
import { Helmet } from 'react-helmet'

export default function Register() {

  const [error, setError] = useState('')
  const [isLoding, setIsLoding] = useState(false)

  let Navigate = useNavigate()

  function handeleRegister(values) {
    setIsLoding(true)

    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
      .then((date) => {
        if (date.data.message === 'success') {
          setIsLoding(false)

          Navigate('/login')

        }
      }
      )
      .catch((Error) => {

        setError(Error.response.data.message);
        setIsLoding(false)
      }

      )



  }
  let validationSchema = Yup.object({
    name: Yup.string().required().min(3),
    email: Yup.string().required().email(),
    password: Yup.string()
      .required()
      .matches(/^[0-9a-z]{3,9}$/, 'password is not valid'),
    rePassword: Yup.string()
      .required()
      .oneOf([Yup.ref('password')], "rePassword does not match"),
    phone: Yup.string()
      .required()
    // .matches(/^01[0-25][0-9]{8}$/, 'phone is not valid' )
  })
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: handeleRegister
  })

  return (
    <div className=' container  '>
        <Helmet >
                <title>register</title>
            </Helmet>
            
      <div className='w-3/4 my-3  m-auto'>

        <h1 className='text-2xl font-bold ms-48  mb-5 text-green-700 '> register now </h1>
        <form className='my-3' onSubmit={formik.handleSubmit}>

          {error && <div className='bg-red-400 font-bold m-auto py-3 w-3/4'>

            <span className='ms-3'>
              {error}
            </span>          </div>}
          <div class="relative my-5 w-3/4 m-auto">
            <input type="text" id="name" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-green-700 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <label htmlFor="name" class="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>
            {formik.errors.name && formik.touched.name && (<span className='text-red-600'> {formik.errors.name} </span>)}

          </div>
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
          <div class="relative my-5  w-3/4 m-auto">
            <input type="password" id="rePassword" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-green-700 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
              name='rePassword'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
            />


            <label htmlFor="rePassword" class="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">rePassword</label>
            {formik.errors.rePassword && formik.touched.rePassword && (<span className='text-red-600'> {formik.errors.rePassword} </span>)}

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
        <p className=' mt-2 text-center text-gray-500 text-sm' >
          Already a member ?
          <Link to={'/login'} className='font-semibold leading-3 text-sky-900 hover:text-sky-500'> Login now </Link>
        </p>
      </div>
    </div>
  )
}
