
import React from 'react'
import { Outlet } from 'react-router-dom'
import LogNavbar from '../pages/shear/LogNavbar/LogNavbar'

function LogLayout() {
  return (
    <div className='container'>
        <LogNavbar></LogNavbar>
      <Outlet></Outlet>
    </div>
  )
}

export default LogLayout
