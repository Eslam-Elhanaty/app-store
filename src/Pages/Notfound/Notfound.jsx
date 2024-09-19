import React from 'react'
import styles from './Notfound.module.css'
import { Helmet } from 'react-helmet'
import notfoun1 from '../../assets/not5.webp'

export default function Notfound() {
  return (<>
   <div className='    w-full'>
    <Helmet>
                <title>Not Found</title>
            </Helmet>
            
      

<img src={notfoun1} alt="" className='w-full  ' />


    </div>
  </>
  )
}
