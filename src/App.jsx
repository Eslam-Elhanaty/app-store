import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import MainLayOut from './Pages/MainLayOut/MainLayOut'
import HomePage from './Pages/HomePage/HomePage'
import Cart from './Pages/cart/cart'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Notfound from './Pages/Notfound/Notfound'
import UserContextProvider from './Context/UsersContext/UsersContext'
import ProtectedRoute from './Pages/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import CartContextProvider from './Context/CartContext/CartContext'
import Brands from './Components/Brands/Brands'
import Product from './Components/Product/Product'
import Catgories from './Components/Catgories/Catgories'
import WishList from './Components/WishList/WishList'
import  { Toaster } from 'react-hot-toast';
import CheckOut from './Pages/CheckOut/CheckOut'
import LostPaswword from './Pages/LostPaswword/LostPaswword'
import AllOrders from './Components/AllOrders/AllOrders'
// import ForgetPassword from './Pages/ForgetPassword/ForgetPassword'

function App() {
  let routers = createBrowserRouter([{
    path: '', element: <MainLayOut />,
    children: [
      { index: " ", element:(  <ProtectedRoute> <HomePage /> </ProtectedRoute>) },
      
      { path: 'allorders', element: (<ProtectedRoute> <AllOrders/> </ProtectedRoute> ),},
      { path: 'home', element:(  <ProtectedRoute> <HomePage /> </ProtectedRoute>) },
      { path: 'cart', element: (<ProtectedRoute> <Cart /> </ProtectedRoute>) },
      { path: 'wishlist', element: (<ProtectedRoute> <WishList /> </ProtectedRoute>) },
      { path: 'brands', element: (<ProtectedRoute> <Brands /> </ProtectedRoute>) },
      { path: 'product', element: (<ProtectedRoute> <Product /> </ProtectedRoute>) },
      { path: 'catrgories', element: (<ProtectedRoute> <Catgories /> </ProtectedRoute>) },
      { path: 'ProductDetails/:id', element: (<ProtectedRoute> <ProductDetails/> </ProtectedRoute> ),},
      { path: 'checkout', element: (<ProtectedRoute> <CheckOut/> </ProtectedRoute> ),},
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'LostPaswword', element: <LostPaswword /> },



      { path: '*', element: <Notfound /> }

    ]
  }])
  return (
      


    <UserContextProvider>
    <CartContextProvider>
    <Toaster />

<RouterProvider router={routers}> </RouterProvider>

</CartContextProvider>

    </UserContextProvider>




  
    


      


  )
}

export default App
