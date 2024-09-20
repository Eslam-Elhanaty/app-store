import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import MainLayOut from './Pages/MainLayOut/MainLayOut'
import HomePage from './Pages/HomePage/HomePage'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Notfound from './Pages/Notfound/Notfound'
import UserContextProvider from './Context/UsersContext/UsersContext'
import ProtectedRoute from './Pages/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import CartContextProvider from './Context/CartContext/CartContext'
import Brands from './Components/Brands/Brands'
import Product from  './Components/Product/Product'
import Catgories from './Components/Catgories/Catgories'
import  { Toaster } from 'react-hot-toast';
import CheckOut from './Pages/CheckOut/CheckOut'
import LostPaswword from './Pages/LostPaswword/LostPaswword'
import AllOrders from './Components/AllOrders/AllOrders'
import Wish from './Components/Wish/Wish'
import WishContextProvider from './Context/WishContext/WishContext'
import VerifyCode from './Pages/VerifyCode/VerifyCode'
import Cart from './Pages/Cart/Cart'

function App() {
  
  
  let routers = createBrowserRouter([{
    
    path: '/', element: <MainLayOut />,
    children: [
      { index: true, element:(  <ProtectedRoute> <HomePage /> </ProtectedRoute>) },
      
      { path: 'allorders', element: (<ProtectedRoute> <AllOrders/> </ProtectedRoute> ),},
      { path: 'home', element:(  <ProtectedRoute> <HomePage /> </ProtectedRoute>) },
      { path: 'cart', element: (<ProtectedRoute> <Cart/> </ProtectedRoute>) },
      { path: 'brands', element: (<ProtectedRoute> <Brands /> </ProtectedRoute>) },
      { path: 'product', element: (<ProtectedRoute> <Product /> </ProtectedRoute>) },
      { path: 'catrgories', element: (<ProtectedRoute> <Catgories /> </ProtectedRoute>) },
      { path: 'Wishlist', element: (<ProtectedRoute> <Wish   /> </ProtectedRoute>) },
      { path: 'ProductDetails/:id', element: (<ProtectedRoute> <ProductDetails/> </ProtectedRoute> ),},
      { path: 'checkout', element: (<ProtectedRoute> <CheckOut/> </ProtectedRoute> ),},
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'LostPaswword', element: <LostPaswword /> },
      { path: 'VerifyCode', element: <VerifyCode /> },



      { path: '*', element: <Notfound /> }

    ]
  }])
  return (
      


    <UserContextProvider>
    <CartContextProvider>
    <WishContextProvider>

    <Toaster />

<RouterProvider router={routers}> </RouterProvider>

    </WishContextProvider>
</CartContextProvider>

    </UserContextProvider>




  
    


      


  )
}

export default App
