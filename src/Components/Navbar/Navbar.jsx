import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../../Pages/Login/Login'
import { userContext } from '../../Context/UsersContext/UsersContext'
import { CartContext } from '../../Context/CartContext/CartContext'


export default function Navbar() {

  const {numOfCartItems}=useContext(CartContext)
  const { usertoken, setUserToken } = useContext(userContext)
  let navigate = useNavigate()

  function Logout() {


    localStorage.removeItem('usertoken')
    setUserToken(null)
    navigate('/login')
  }

  return (


    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={'home'} class="flex items-center space-x-3 rtl:space-x-reverse">
          <i className="fa-solid fa-cart-shopping nav-icon text-green-700 text-2xl"></i>
          <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white text-green-800">FreshCart</span>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto " id="navbar-default">
          <ul className="font-medium flex   p-4 md:p-0 mt-6 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-3 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


            {usertoken   !==null? (
              <>
                <li>
                  <Link to="home" class="text-xl block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Home  </Link>
                </li>
                <li>
                  <Link to="cart" class="text-xl block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Cart  </Link>
                </li>
                <li>
                  <Link to="wishlist" className="text-xl block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">wish-List </Link>
                </li>
                <li>
                  <Link to="product" className="text-xl block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Product</Link>
                </li>
                <li>
                  <Link to="catrgories" className="text-xl block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    catrgories </Link>
                </li>
                <li>
                  <Link to="brands" class="text-xl block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">brands</Link>
                </li>
                <span className='relative '>
                <Link to="cart" ><i className='fa-solid fa-cart-shopping ms-10 text-green-500 text-3xl'></i> </Link>
<span className='absolute -top-2 right-1 w-5 h-5 bg-black rounded-full flex justify-center items-center text-white'>
  {numOfCartItems}
</span>
                </span>
                <li>
                  <span onClick={Logout} class="cursor-pointer  block py-2 me-10 px-1  lg:ms-72  rounded ms-8 text-gray-900  hover:bg-red-400 generate-react-cli component   md:border-0 md:hover:text-white md:p-2 dark:text-white md:dark:hover:text-blue-500 ">        
                  Log out </span>
                </li>
              </>) : (
              <>
                <li>
                  <Link to='login' class="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">login </Link>
                </li>
                <li>
                  <Link to="register" class="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Register  </Link>
                </li>
              </>)}
          </ul>
        </div>
      </div>
    </nav>

  )
}
