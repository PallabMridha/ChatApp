import React from 'react'
import Hader from './Hader'
import { Outlet } from 'react-router-dom'
import Fouter from './Fouter'

const Routlayouts = () => {
  return (
    <div>
      <Hader/>
      <Outlet/>
      <Fouter/>
      
    </div>
  )
}

export default Routlayouts
