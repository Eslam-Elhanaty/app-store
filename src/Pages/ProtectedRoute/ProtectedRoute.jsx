import React from 'react'
import styles from './ProtectedRoute.module.css'
import { useContext } from 'react'
import { userContext } from '../../Context/UsersContext/UsersContext'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props) {


  const {usertoken}= useContext(userContext)

  if(usertoken){
     
    return props.children

  }else{
   return <Navigate to={"/login"} />

  }

   
}
