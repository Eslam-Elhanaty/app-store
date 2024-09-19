import React from 'react'
import styles from './ProtectedRoute.module.css'
import { useContext } from 'react'
import { userContext } from '../../Context/UsersContext/UsersContext'
import { Navigate } from 'react-router-dom'
import Login from '../Login/Login'

export default function ProtectedRoute(props) {


  const {usertoken}= useContext(userContext)

  if (usertoken !== null) {
    return props.children;
  } else return <Login/>
  
  // } else {
  //   return <Navigate to="/login" />;
  // else{
  // //  return <Navigate to={"/home"} />

  // }
  

   
}
